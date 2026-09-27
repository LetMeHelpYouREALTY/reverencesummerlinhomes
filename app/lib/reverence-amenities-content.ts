import { config } from '~/lib/config'
import {
  AMENITY_CATEGORY_LABELS,
  REVERENCE,
  type AmenityCategoryId,
} from '~/lib/reverence-community'

export type VerifiedPlace = {
  name: string
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  category: AmenityCategoryId
  schemaType:
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Park'
    | 'GolfCourse'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'School'
    | 'ExerciseGym'
  description: string
  sourceUrl: string
}

export const VERIFIED_NEARBY_PLACES: VerifiedPlace[] = [
  {
    name: 'Whole Foods Market',
    streetAddress: '2475 S Town Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    category: 'grocery',
    schemaType: 'GroceryStore',
    description:
      'Natural and organic grocery at Downtown Summerlin, a common shopping stop for Summerlin West households.',
    sourceUrl: 'https://www.wholefoodsmarket.com/stores/summerlin',
  },
  {
    name: "Smith's Food and Drug",
    streetAddress: '9851 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    category: 'grocery',
    schemaType: 'GroceryStore',
    description:
      'Full-service Smith\'s grocery on Charleston Boulevard serving west Las Vegas and Summerlin corridors.',
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston-and-rampart/70600134',
  },
  {
    name: 'Downtown Summerlin',
    streetAddress: '1980 Festival Plaza Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    description:
      'Open-air shopping, dining, and entertainment district serving Summerlin West.',
    sourceUrl: 'https://summerlin.com/downtown-summerlin/',
  },
  {
    name: 'Dignity Health Summerlin Hospital Medical Center',
    streetAddress: '657 Town Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    category: 'healthcare',
    schemaType: 'Hospital',
    description:
      'Full-service hospital and emergency care serving Summerlin and northwest Las Vegas.',
    sourceUrl:
      'https://www.dignityhealth.org/las-vegas/locations/summerlin-hospital-medical-center',
  },
  {
    name: 'TPC Las Vegas',
    streetAddress: '9851 Canyon Run Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    category: 'golf',
    schemaType: 'GolfCourse',
    description:
      'Public championship golf course in the Summerlin West area near Reverence.',
    sourceUrl: 'https://www.tpclv.com/',
  },
  {
    name: "Bear's Best Las Vegas",
    streetAddress: '11111 W Flamingo Rd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    category: 'golf',
    schemaType: 'GolfCourse',
    description:
      'Jack Nicklaus-designed public course with multiple nine-hole tracks in west Las Vegas.',
    sourceUrl: 'https://www.bearsbestlv.com/',
  },
  {
    name: 'Angel Park Golf Club',
    streetAddress: '100 S Rampart Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89145',
    category: 'golf',
    schemaType: 'GolfCourse',
    description:
      'City of Las Vegas public golf facility with multiple courses along Rampart Boulevard.',
    sourceUrl: 'https://www.angelpark.com/',
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    streetAddress: '1000 Scenic Loop Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89161',
    category: 'parks',
    schemaType: 'Park',
    description:
      'Scenic loop, hiking, and climbing west of Summerlin West and Reverence.',
    sourceUrl: 'https://www.redrockcanyonlv.org/',
  },
  {
    name: 'Costco Wholesale',
    streetAddress: '801 S Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    category: 'grocery',
    schemaType: 'GroceryStore',
    description:
      'Warehouse club with grocery, household goods, and fuel near Pavilion Center.',
    sourceUrl:
      'https://www.costco.com/warehouse-locations/las-vegas-nv-689.html',
  },
]

export type AmenityFaqItem = {
  question: string
  answer: string
}

export const AMENITY_FAQ: AmenityFaqItem[] = [
  {
    question: `What grocery stores are near ${REVERENCE.name}?`,
    answer: `Whole Foods at 2475 S Town Center Dr, Smith's at 9851 W Charleston Blvd, and Costco at 801 S Pavilion Center Dr are established grocery options serving Summerlin West buyers near ${REVERENCE.shortName}.`,
  },
  {
    question: `How far is ${REVERENCE.name} from the Las Vegas Strip?`,
    answer: `From ${REVERENCE.name} in Summerlin West, the Las Vegas Strip is roughly a 25–35 minute drive depending on traffic and your starting point within Reverence (approximate).`,
  },
  {
    question: `Are there hospitals near ${REVERENCE.name}?`,
    answer: `Yes. Dignity Health Summerlin Hospital Medical Center at 657 Town Center Dr provides emergency and inpatient care a short drive from ${REVERENCE.shortName}.`,
  },
  {
    question: `Where do residents shop and dine near ${REVERENCE.name}?`,
    answer: `Downtown Summerlin at 1980 Festival Plaza Dr is the primary open-air retail and restaurant hub for Summerlin West, including options convenient to ${REVERENCE.shortName}.`,
  },
  {
    question: `Is golf available near ${REVERENCE.name}?`,
    answer: `TPC Las Vegas (9851 Canyon Run Dr), Bear's Best (11111 W Flamingo Rd), and Angel Park Golf Club (100 S Rampart Blvd) are public courses within a few miles of ${REVERENCE.shortName}.`,
  },
  {
    question: `How close is ${REVERENCE.name} to Red Rock Canyon?`,
    answer: `Red Rock Canyon National Conservation Area begins west of Summerlin; the visitor center at 1000 Scenic Loop Dr is roughly a 15–25 minute drive from ${REVERENCE.shortName} (approximate).`,
  },
  {
    question: `Which CCSD schools are assigned to Reverence addresses?`,
    answer: `School assignments depend on the exact Reverence, Monument at Reverence, or Summerlin West address. Verify with the CCSD Zoning Search before you write an offer.`,
  },
  {
    question: `Who helps buyers find homes in ${REVERENCE.name}?`,
    answer: `${config.agent.name}, featured Pulte agent for Monument at Reverence, provides buyer and seller representation in ${REVERENCE.name}. Call ${config.contact.phone}.`,
  },
]

export type WrittenAmenitySection = {
  id: AmenityCategoryId | 'commute' | 'gating'
  title: string
  paragraphs: string[]
}

export const WRITTEN_AMENITY_SECTIONS: WrittenAmenitySection[] = [
  {
    id: 'gating',
    title: 'Gated neighborhoods in Reverence',
    paragraphs: [
      `Reverence's gated neighborhoods include The Heights, a guard-gated enclave within the Pulte master plan. Monument at Reverence, Hillcrest, and Keystone sit outside the gate with their own community access points.`,
      `Buyers comparing floor plans should confirm gate access, HOA structure, and amenity packages for each Reverence collection with your agent and Pulte sales.`,
    ],
  },
  {
    id: 'restaurants',
    title: `Dining near ${REVERENCE.name}`,
    paragraphs: [
      `Summerlin West dining clusters at Downtown Summerlin (1980 Festival Plaza Dr), where national and local restaurants sit alongside patios and walkable streets. From ${REVERENCE.shortName}, that hub is typically about a 10–15 minute drive (approximate).`,
      `Monument at Reverence and other ${REVERENCE.shortName} neighborhoods also sit close to Lake Mead Boulevard and Rampart Boulevard corridors, where additional casual dining and takeout options serve everyday meals without crossing town.`,
    ],
  },
  {
    id: 'parks',
    title: 'Parks and outdoor recreation',
    paragraphs: [
      `${REVERENCE.name} includes on-site parks, trails, pools, and fitness amenities within the Pulte master plan, including Reverence Park along Reverence Parkway.`,
      `Red Rock Canyon National Conservation Area (visitor center at 1000 Scenic Loop Dr) adds hiking and scenic drives minutes west of Summerlin West.`,
    ],
  },
  {
    id: 'golf',
    title: 'Golf courses',
    paragraphs: [
      `TPC Las Vegas (9851 Canyon Run Dr), Bear's Best (11111 W Flamingo Rd), and Angel Park Golf Club (100 S Rampart Blvd) place public tee times within a short drive of ${REVERENCE.shortName}.`,
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare and pharmacies',
    paragraphs: [
      `Dignity Health Summerlin Hospital Medical Center at 657 Town Center Dr provides emergency, surgical, and specialty care for ${REVERENCE.name} residents.`,
      `Retail pharmacies and urgent-care clinics throughout Summerlin West and along Rampart Boulevard supplement hospital care for routine prescriptions and minor illnesses.`,
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping',
    paragraphs: [
      `Downtown Summerlin combines department stores, specialty retail, and services in one master-planned district.`,
      `Whole Foods at 2475 S Town Center Dr and Costco at 801 S Pavilion Center Dr cover organic grocery and bulk shopping runs for ${REVERENCE.shortName} households.`,
    ],
  },
  {
    id: 'schools',
    title: 'Schools serving Reverence Summerlin',
    paragraphs: [
      `Buyers with school-age children should verify Clark County School District assignments for each Reverence or Monument at Reverence address using the CCSD Zoning Search.`,
      `Assigned schools can change by street and collection; confirm zoning before you write an offer.`,
    ],
  },
  {
    id: 'commute',
    title: 'Commute and regional access',
    paragraphs: [
      `${REVERENCE.name} connects to the 215 Beltway for access to Downtown Summerlin, the Las Vegas Strip, and Harry Reid International Airport. Typical drives: Downtown Summerlin about 10–15 minutes, the Strip about 25–35 minutes, and the airport about 25–35 minutes — all approximate and traffic-dependent.`,
      `Lake Mead Boulevard and the 215 provide the main commuter paths for ${REVERENCE.shortName} residents heading to employment centers across the valley.`,
    ],
  },
]

export function placesForCategory(
  category: AmenityCategoryId
): VerifiedPlace[] {
  return VERIFIED_NEARBY_PLACES.filter(p => p.category === category)
}

export function formatPlaceAddress(place: VerifiedPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`
}

export function amenitiesFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AMENITY_FAQ.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function amenitiesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${REVERENCE.name}`,
    itemListElement: VERIFIED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        url: place.sourceUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
      },
    })),
  }
}

export function reverenceCommunityPlaceSchema() {
  return {
    '@type': 'Place',
    name: REVERENCE.name,
    description: `Pulte master-planned village in ${REVERENCE.village}, Las Vegas.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REVERENCE.center.lat,
      longitude: REVERENCE.center.lng,
    },
  }
}

export function amenitiesBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: config.seo.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Nearby Amenities in ${REVERENCE.name}`,
        item: `${config.seo.siteUrl}${REVERENCE.amenitiesPath}`,
      },
    ],
  }
}

export function categorySectionTitle(category: AmenityCategoryId): string {
  return AMENITY_CATEGORY_LABELS[category]
}

export function amenitiesPageMeta() {
  const page = config.seo.pages.amenities
  const url = `${config.seo.siteUrl}${REVERENCE.amenitiesPath}`

  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'keywords', content: page.keywords },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
  ]
}
