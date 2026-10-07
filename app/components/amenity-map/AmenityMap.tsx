import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { cn } from '~/lib/utils'
import {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  AMENITY_CATEGORY_PRIMARY_TYPES,
  REVERENCE,
  type AmenityCategoryId,
} from '~/lib/reverence-community'
import {
  VERIFIED_NEARBY_PLACES,
  formatPlaceAddress,
} from '~/lib/reverence-amenities-content'
import { loadGoogleMaps, mapsAuthFailed } from '~/lib/google-maps-loader'
import { searchCategory } from '~/lib/places-search'
import {
  buildCommunityInfoContent,
  buildInfoWindowContent,
  getGoogleMapsEmbedUrl,
  getMapsApiKey,
  getMapsMapId,
  placeToMapResult,
  type MapPlaceResult,
} from '~/components/amenity-map/amenity-map-utils'

type AmenityMapProps = {
  className?: string
  variant?: 'section' | 'page'
}

export function AmenityMap({
  className,
  variant = 'section',
}: AmenityMapProps) {
  const mapRegionId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>('restaurants')
  const [isVisible, setIsVisible] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [useFallback, setUseFallback] = useState(
    () => mapsAuthFailed || !getMapsApiKey()
  )
  const [isLoadingPlaces, setIsLoadingPlaces] = useState(false)
  const [placesLoadFailed, setPlacesLoadFailed] = useState(false)

  const mapHeightClass =
    variant === 'page'
      ? 'min-h-[420px] h-[min(70vh,560px)]'
      : 'min-h-[360px] h-[min(60vh,480px)]'

  const clearMarkersAndMap = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    infoWindowRef.current?.close()
    mapInstanceRef.current = null
  }, [])

  const enterFallback = useCallback(() => {
    clearMarkersAndMap()
    setMapReady(false)
    setUseFallback(true)
  }, [clearMarkersAndMap])

  useEffect(() => {
    const onAuthFail = () => enterFallback()
    window.addEventListener('gmaps:auth-failure', onAuthFail)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFail)
  }, [enterFallback])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    observerRef.current = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observerRef.current?.disconnect()
        }
      },
      { rootMargin: '120px', threshold: 0.1 }
    )
    observerRef.current.observe(node)
    return () => observerRef.current?.disconnect()
  }, [])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []
  }, [])

  const renderPlaces = useCallback(
    async (category: AmenityCategoryId) => {
      const map = mapInstanceRef.current
      if (!map || useFallback) return
      setIsLoadingPlaces(true)
      setPlacesLoadFailed(false)
      clearMarkers()

      const types = AMENITY_CATEGORY_PRIMARY_TYPES[category]

      try {
        const places = await searchCategory(
          REVERENCE.center,
          category,
          types
        )
        const results: MapPlaceResult[] = places
          .map(placeToMapResult)
          .filter((p): p is MapPlaceResult => p !== null)

        const bounds = new google.maps.LatLngBounds()
        bounds.extend(REVERENCE.center)

        if (!infoWindowRef.current) {
          infoWindowRef.current = new google.maps.InfoWindow()
        }

        results.forEach((place: MapPlaceResult) => {
          const marker = new google.maps.Marker({
            map,
            position: { lat: place.lat, lng: place.lng },
            title: place.name,
          })
          marker.addListener('click', () => {
            infoWindowRef.current?.setContent(buildInfoWindowContent(place))
            infoWindowRef.current?.open(map, marker)
          })
          markersRef.current.push(marker)
          bounds.extend({ lat: place.lat, lng: place.lng })
        })

        if (communityMarkerRef.current) {
          bounds.extend(REVERENCE.center)
        }

        if (results.length > 0) {
          map.fitBounds(bounds)
        } else {
          map.setCenter(REVERENCE.center)
        }
      } catch {
        setPlacesLoadFailed(true)
        map.setCenter(REVERENCE.center)
      } finally {
        setIsLoadingPlaces(false)
      }
    },
    [clearMarkers, useFallback]
  )

  useEffect(() => {
    if (!isVisible || useFallback) return
    if (mapsAuthFailed) {
      enterFallback()
      return
    }
    const apiKey = getMapsApiKey()
    if (!apiKey) {
      enterFallback()
      return
    }

    let cancelled = false

    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled || mapsAuthFailed) {
          if (mapsAuthFailed) enterFallback()
          return
        }
        if (!mapRef.current) return

        const mapId = getMapsMapId()
        const mapOptions: google.maps.MapOptions = {
          center: REVERENCE.center,
          zoom: REVERENCE.defaultMapZoom,
          zoomControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        }
        if (mapId) {
          mapOptions.mapId = mapId
        }

        const map = new google.maps.Map(mapRef.current, mapOptions)
        mapInstanceRef.current = map

        new google.maps.Circle({
          map,
          center: REVERENCE.center,
          radius: 1200,
          fillColor: '#1e3a5f',
          fillOpacity: 0.08,
          strokeOpacity: 0.25,
          strokeWeight: 1,
        })

        const communityMarker = new google.maps.Marker({
          map,
          position: REVERENCE.center,
          title: REVERENCE.name,
          icon: {
            url:
              'data:image/svg+xml,' +
              encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#1e3a5f"/><circle cx="18" cy="18" r="8" fill="#e85d04"/></svg>'
              ),
            scaledSize: new google.maps.Size(36, 36),
            anchor: new google.maps.Point(18, 18),
          },
        })
        communityMarkerRef.current = communityMarker
        communityMarker.addListener('click', () => {
          if (!infoWindowRef.current) {
            infoWindowRef.current = new google.maps.InfoWindow()
          }
          infoWindowRef.current.setContent(buildCommunityInfoContent())
          infoWindowRef.current.open(map, communityMarker)
        })

        setMapReady(true)
      })
      .catch(() => {
        if (!cancelled) enterFallback()
      })

    return () => {
      cancelled = true
    }
  }, [isVisible, useFallback, enterFallback])

  useEffect(() => {
    if (!mapReady || useFallback) return
    void renderPlaces(activeCategory)
  }, [activeCategory, mapReady, useFallback, renderPlaces])

  const embedUrl = getGoogleMapsEmbedUrl()

  return (
    <div ref={containerRef} className={cn('space-y-4', className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORY_ORDER.map(category => {
          const selected = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${mapRegionId}-panel`}
              id={`${mapRegionId}-${category}`}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d04] focus-visible:ring-offset-2',
                selected
                  ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-[#1e3a5f]/40'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {AMENITY_CATEGORY_LABELS[category]}
            </button>
          )
        })}
      </div>

      <div
        id={`${mapRegionId}-panel`}
        role="tabpanel"
        aria-labelledby={`${mapRegionId}-${activeCategory}`}
        className={cn(
          'relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm',
          mapHeightClass
        )}
      >
        {useFallback ? (
          <>
            <iframe
              title={`Map of ${REVERENCE.name}, Las Vegas`}
              src={embedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="sr-only">
              Map fallback showing {REVERENCE.name} centered at{' '}
              {REVERENCE.center.lat}, {REVERENCE.center.lng}
            </p>
          </>
        ) : (
          <div
            ref={mapRef}
            className="absolute inset-0 h-full w-full"
            aria-label={`Interactive map of ${AMENITY_CATEGORY_LABELS[activeCategory]} near ${REVERENCE.name}`}
          />
        )}
        {isLoadingPlaces && !useFallback && (
          <div className="absolute top-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">
            Loading places…
          </div>
        )}
      </div>

      {placesLoadFailed && !useFallback && (
        <p className="text-sm text-gray-600" role="status">
          Live place results are unavailable right now. Verified nearby spots for{' '}
          {AMENITY_CATEGORY_LABELS[activeCategory]} are listed below.
        </p>
      )}

      <StaticAmenityList
        category={activeCategory}
        compact={variant === 'section'}
      />
    </div>
  )
}

type StaticAmenityListProps = {
  category: AmenityCategoryId
  compact?: boolean
}

export function StaticAmenityList({
  category,
  compact = false,
}: StaticAmenityListProps) {
  const curated = VERIFIED_NEARBY_PLACES.filter(p => p.category === category)
  const display = compact ? curated.slice(0, 4) : curated

  if (display.length === 0 && compact) {
    return (
      <p className="text-sm text-gray-600">
        Explore {AMENITY_CATEGORY_LABELS[category]} near {REVERENCE.name} using
        the map filters above or view the full amenities guide.
      </p>
    )
  }

  if (display.length === 0) return null

  return (
    <ul
      className="grid gap-3 sm:grid-cols-2"
      aria-label="Verified nearby places"
    >
      {display.map(place => (
        <li
          key={`${place.name}-${place.streetAddress}`}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start gap-2">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-[#e85d04]"
              aria-hidden
            />
            <div>
              <p className="font-semibold text-gray-900">
                <a
                  href={place.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e85d04]"
                >
                  {place.name}
                </a>
              </p>
              <p className="text-sm text-gray-600">
                {formatPlaceAddress(place)}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatPlaceAddress(place))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#e85d04] hover:text-[#d54d00]"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden />
                Directions
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
