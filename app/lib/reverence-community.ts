/**
 * Hyperlocal center and identity for Reverence Summerlin (reverencesummerlinhomes.com).
 * Map center: MLS/geocoded coordinates within the guard-gated Reverence village
 * (Compass listing geocode for Reverence Heights Ln, 89138). NAP for the agent
 * office remains 10800 Reverence Pkwy per config.ts / monument-data.ts.
 */
export const REVERENCE = {
  name: 'Reverence Summerlin',
  shortName: 'Reverence',
  village: 'Summerlin West',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89134',
  salesOfficeAddress: '10800 Reverence Pkwy',
  salesOfficeFullAddress: '10800 Reverence Pkwy, Las Vegas, NV 89134',
  /** Representative center of the residential village for nearby search */
  center: {
    lat: 36.214617,
    lng: -115.345375,
  },
  centerSource:
    'Compass MLS geocode for 2960 Reverence Heights Ln, Las Vegas, NV 89138 (guard-gated Reverence village)',
  defaultMapZoom: 14,
  nearbySearchRadiusMeters: 8000,
  amenitiesPath: '/amenities',
  amenitiesPathAlias: '/nearby-amenities',
} as const

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools'

/** Default chip order for family master-planned communities */
export const AMENITY_CATEGORY_ORDER: AmenityCategoryId[] = [
  'restaurants',
  'cafes',
  'grocery',
  'parks',
  'golf',
  'healthcare',
  'pharmacies',
  'shopping',
  'parking',
  'fitness',
  'schools',
]

export const AMENITY_CATEGORY_LABELS: Record<AmenityCategoryId, string> = {
  restaurants: 'Restaurants',
  cafes: 'Cafes',
  grocery: 'Grocery',
  parks: 'Parks',
  golf: 'Golf',
  healthcare: 'Healthcare',
  pharmacies: 'Pharmacies',
  shopping: 'Shopping',
  parking: 'Parking',
  fitness: 'Fitness',
  schools: 'Schools',
}

export function getGoogleMapsEmbedUrl(
  lat: number = REVERENCE.center.lat,
  lng: number = REVERENCE.center.lng,
  zoom: number = REVERENCE.defaultMapZoom
): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
}

export function getGoogleMapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}
