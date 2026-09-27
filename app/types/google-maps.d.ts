/** Minimal Google Maps typings for the amenity map (full @types/google.maps not required). */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions)
    fitBounds(bounds: LatLngBounds): void
    setCenter(latLng: LatLngLiteral | LatLng): void
  }
  class Marker {
    constructor(opts?: MarkerOptions)
    setMap(map: Map | null): void
    addListener(event: string, handler: () => void): void
  }
  class InfoWindow {
    constructor(opts?: InfoWindowOptions)
    setContent(content: string | HTMLElement): void
    open(map?: Map, anchor?: Marker): void
    close(): void
  }
  class LatLngBounds {
    constructor()
    extend(point: LatLngLiteral | LatLng): void
  }
  class LatLng {
    constructor(lat: number, lng: number)
  }
  class Circle {
    constructor(opts?: CircleOptions)
  }
  class Size {
    constructor(width: number, height: number)
  }
  class Point {
    constructor(x: number, y: number)
  }
  interface MapOptions {
    center?: LatLngLiteral
    zoom?: number
    mapId?: string
    disableDefaultUI?: boolean
    zoomControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }
  interface MarkerOptions {
    map?: Map
    position?: LatLngLiteral
    title?: string
    icon?: string | Icon
  }
  interface Icon {
    url?: string
    scaledSize?: Size
    anchor?: Point
  }
  interface InfoWindowOptions {
    content?: string | HTMLElement
  }
  interface CircleOptions {
    map?: Map
    center?: LatLngLiteral
    radius?: number
    fillColor?: string
    fillOpacity?: number
    strokeOpacity?: number
    strokeWeight?: number
  }
  interface LatLngLiteral {
    lat: number
    lng: number
  }
  interface PlacesLibrary {
    Place: PlaceClass
  }
  interface PlaceClass {
    searchNearby(request: PlaceSearchNearbyRequest): Promise<{
      places: PlaceResult[]
    }>
  }
  interface PlaceSearchNearbyRequest {
    fields: string[]
    locationRestriction: {
      center: LatLngLiteral
      radius: number
    }
    includedPrimaryTypes?: string[]
    maxResultCount?: number
  }
  interface PlaceResult {
    displayName?: string
    formattedAddress?: string
    rating?: number
    location?: LatLngLiteral
    googleMapsURI?: string
  }
  interface PlacesServiceStatus {
    OK: string
  }
  namespace places {
    class PlacesService {
      constructor(map: Map)
      nearbySearch(
        request: PlacesNearbySearchRequest,
        callback: (results: PlaceResultLegacy[] | null, status: string) => void
      ): void
    }
    interface PlacesNearbySearchRequest {
      location: LatLng | LatLngLiteral
      radius: number
      type?: string
    }
    interface PlaceResultLegacy {
      name?: string
      vicinity?: string
      formatted_address?: string
      rating?: number
      geometry?: { location?: LatLng }
      place_id?: string
    }
  }
  function importLibrary(name: 'places'): Promise<PlacesLibrary>
}

interface Window {
  google?: typeof google
  __reverenceMapsLoader?: Promise<typeof google>
}
