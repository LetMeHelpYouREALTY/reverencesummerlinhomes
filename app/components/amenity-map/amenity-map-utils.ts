import {
  REVERENCE,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
} from '~/lib/reverence-community'

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

export type MapPlaceResult = {
  name: string
  address: string
  lat: number
  lng: number
  directionsQuery: string
  mapsUri?: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildInfoWindowContent(place: MapPlaceResult): string {
  const directionsUrl = getGoogleMapsDirectionsUrl(place.directionsQuery)
  return `<div class="p-1 max-w-[240px]">
    <p class="font-semibold text-gray-900">${escapeHtml(place.name)}</p>
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

export function placeToMapResult(
  place: google.maps.places.Place
): MapPlaceResult | null {
  const location = place.location
  if (!location) return null
  const lat = location.lat()
  const lng = location.lng()
  const name = place.displayName ?? 'Place'
  const address = place.formattedAddress ?? name
  return {
    name,
    address,
    lat,
    lng,
    directionsQuery: address || name,
    mapsUri: place.googleMapsURI,
  }
}

export { getGoogleMapsEmbedUrl, REVERENCE }
