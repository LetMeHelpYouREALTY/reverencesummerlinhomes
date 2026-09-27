import {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  REVERENCE,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  type AmenityCategoryId,
} from '~/lib/reverence-community'
import {
  VERIFIED_NEARBY_PLACES,
  formatPlaceAddress,
} from '~/lib/reverence-amenities-content'

export function getMapsApiKey(): string | undefined {
  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  if (typeof key === 'string' && key.trim().length > 0) {
    return key.trim()
  }
  return undefined
}

export function getMapsMapId(): string | undefined {
  const id = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
  if (typeof id === 'string' && id.trim().length > 0) {
    return id.trim()
  }
  return undefined
}

export function loadGoogleMapsScript(apiKey: string): Promise<typeof google> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Maps unavailable during SSR'))
  }
  if (window.google?.maps) {
    return Promise.resolve(window.google)
  }
  if (!window.__reverenceMapsLoader) {
    window.__reverenceMapsLoader = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&loading=async`
      script.async = true
      script.defer = true
      script.onerror = () => {
        window.__reverenceMapsLoader = undefined
        reject(new Error('Google Maps script failed to load'))
      }
      script.onload = () => {
        if (window.google?.maps) {
          resolve(window.google)
        } else {
          window.__reverenceMapsLoader = undefined
          reject(new Error('Google Maps unavailable after load'))
        }
      }
      document.head.appendChild(script)
    })
  }
  return window.__reverenceMapsLoader
}

const PRIMARY_TYPES: Partial<Record<AmenityCategoryId, string[]>> = {
  restaurants: ['restaurant'],
  cafes: ['cafe', 'coffee_shop'],
  grocery: ['supermarket', 'grocery_store'],
  parks: ['park'],
  golf: ['golf_course'],
  healthcare: ['hospital', 'doctor'],
  pharmacies: ['pharmacy'],
  shopping: ['shopping_mall', 'department_store'],
  parking: ['parking'],
  fitness: ['gym'],
  schools: ['school', 'primary_school', 'secondary_school'],
}

const LEGACY_TYPES: Partial<Record<AmenityCategoryId, string>> = {
  restaurants: 'restaurant',
  cafes: 'cafe',
  grocery: 'supermarket',
  parks: 'park',
  golf: 'golf_course',
  healthcare: 'hospital',
  pharmacies: 'pharmacy',
  shopping: 'shopping_mall',
  parking: 'parking',
  fitness: 'gym',
  schools: 'school',
}

export type MapPlaceResult = {
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
  directionsQuery: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildInfoWindowContent(place: MapPlaceResult): string {
  const ratingLine =
    place.rating !== undefined
      ? `<p class="text-sm text-gray-600 mb-2">Rating: ${place.rating.toFixed(1)}</p>`
      : ''
  const directionsUrl = getGoogleMapsDirectionsUrl(place.directionsQuery)
  return `<div class="p-1 max-w-[240px]">
    <p class="font-semibold text-gray-900">${escapeHtml(place.name)}</p>
    ${ratingLine}
    <p class="text-sm text-gray-700 mb-2">${escapeHtml(place.address)}</p>
    <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-[#e85d04]">Directions</a>
  </div>`
}

export function buildCommunityInfoContent(): string {
  return `<div class="p-1 max-w-[240px]">
    <p class="font-semibold text-[#1e3a5f]">${escapeHtml(REVERENCE.name)}</p>
    <p class="text-sm text-gray-700 mb-2">${escapeHtml(REVERENCE.salesOfficeFullAddress)}</p>
    <a href="${getGoogleMapsDirectionsUrl(REVERENCE.salesOfficeFullAddress)}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-[#e85d04]">Directions</a>
  </div>`
}

export async function searchNearbyPlaces(
  googleMaps: typeof google,
  map: google.maps.Map,
  category: AmenityCategoryId
): Promise<MapPlaceResult[]> {
  const center = REVERENCE.center
  const primaryTypes = PRIMARY_TYPES[category]

  try {
    const placesLib = await googleMaps.maps.importLibrary('places')
    const { places } = await placesLib.Place.searchNearby({
      fields: [
        'displayName',
        'formattedAddress',
        'rating',
        'location',
        'googleMapsURI',
      ],
      locationRestriction: {
        center,
        radius: REVERENCE.nearbySearchRadiusMeters,
      },
      includedPrimaryTypes: primaryTypes,
      maxResultCount: 12,
    })

    return places
      .map(place => {
        const lat = place.location?.lat
        const lng = place.location?.lng
        if (lat === undefined || lng === undefined) return null
        const name = place.displayName ?? 'Place'
        const address = place.formattedAddress ?? ''
        return {
          name,
          address,
          rating: place.rating,
          lat,
          lng,
          directionsQuery: address || name,
        } satisfies MapPlaceResult
      })
      .filter((p): p is MapPlaceResult => p !== null)
  } catch {
    return legacyNearbySearch(googleMaps, map, category)
  }
}

function legacyNearbySearch(
  googleMaps: typeof google,
  map: google.maps.Map,
  category: AmenityCategoryId
): Promise<MapPlaceResult[]> {
  const legacyType = LEGACY_TYPES[category]
  if (!legacyType) return Promise.resolve([])

  return new Promise(resolve => {
    const service = new googleMaps.maps.places.PlacesService(map)
    service.nearbySearch(
      {
        location: new googleMaps.maps.LatLng(
          REVERENCE.center.lat,
          REVERENCE.center.lng
        ),
        radius: REVERENCE.nearbySearchRadiusMeters,
        type: legacyType,
      },
      (results, status) => {
        if (status !== 'OK' || !results) {
          resolve([])
          return
        }
        resolve(
          results
            .map(result => {
              const location = result.geometry?.location
              if (!location) return null
              const lat =
                typeof location.lat === 'function'
                  ? location.lat()
                  : (location as google.maps.LatLngLiteral).lat
              const lng =
                typeof location.lng === 'function'
                  ? location.lng()
                  : (location as google.maps.LatLngLiteral).lng
              const name = result.name ?? 'Place'
              const address =
                result.vicinity ?? result.formatted_address ?? name
              return {
                name,
                address,
                rating: result.rating,
                lat,
                lng,
                directionsQuery: address,
              } satisfies MapPlaceResult
            })
            .filter((p): p is MapPlaceResult => p !== null)
        )
      }
    )
  })
}

export {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  REVERENCE,
  getGoogleMapsEmbedUrl,
  VERIFIED_NEARBY_PLACES,
  formatPlaceAddress,
}
