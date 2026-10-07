/**
 * Hyperlocal center and identity for Reverence Summerlin (reverencesummerlinhomes.com).
 * Gated neighborhoods include The Heights; Monument, Hillcrest, and Keystone sit outside the gate
 * (Pulte Reverence community map). Map center: representative coordinates within the Reverence village.
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
  center: {
    lat: 36.214617,
    lng: -115.345375,
  },
  centerSource:
    'Representative coordinates within the Reverence master plan (Summerlin West, Las Vegas)',
  defaultMapZoom: 14,
  nearbySearchRadiusMeters: 5000,
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

/** Chip order for family-oriented Reverence / Monument buyers */
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

export const AMENITY_CATEGORY_PRIMARY_TYPES: Record<
  AmenityCategoryId,
  string[]
> = {
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
