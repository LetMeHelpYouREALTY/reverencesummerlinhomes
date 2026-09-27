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
}

/** Verified public addresses only — used for static HTML, fallback list, and ItemList schema */
export const VERIFIED_NEARBY_PLACES: VerifiedPlace[] = [
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
  },
  {
    name: 'TPC Summerlin',
    streetAddress: '1700 Village Center Cir',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89134',
    category: 'golf',
    schemaType: 'GolfCourse',
    description:
      'Private championship golf club in the Summerlin West area near Reverence.',
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
  },
  {
    name: 'Red Rock Canyon National Conservation Area Visitor Center',
    streetAddress: '1000 Scenic Loop Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89161',
    category: 'parks',
    schemaType: 'Park',
    description:
      'Gateway to Red Rock Canyon scenic loop, hiking, and climbing west of Reverence.',
  },
  {
    name: "Smith's Food and Drug",
    streetAddress: '2211 N Rampart Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89128',
    category: 'grocery',
    schemaType: 'GroceryStore',
    description:
      'Full-service grocery store on Rampart Boulevard, a common Summerlin shopping corridor.',
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
  },
  {
    name: 'Palo Verde High School',
    streetAddress: '333 S Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    category: 'schools',
    schemaType: 'School',
    description:
      'Clark County School District high school serving portions of Summerlin West.',
  },
]

export type AmenityFaqItem = {
  question: string
  answer: string
}

export const AMENITY_FAQ: AmenityFaqItem[] = [
  {
    question: `What grocery stores are near ${REVERENCE.name}?`,
    answer: `Smith's Food and Drug on 2211 N Rampart Blvd and Costco at 801 S Pavilion Center Dr are established grocery options serving Summerlin West buyers near ${REVERENCE.shortName}.`,
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
    answer: `TPC Summerlin at 1700 Village Center Cir and additional Summerlin West courses place championship golf within a few miles of ${REVERENCE.shortName}.`,
  },
  {
    question: `How close is ${REVERENCE.name} to Red Rock Canyon?`,
    answer: `Red Rock Canyon National Conservation Area begins west of Summerlin; the visitor center at 1000 Scenic Loop Dr is roughly a 15–25 minute drive from ${REVERENCE.shortName} (approximate).`,
  },
  {
    question: `How far is Harry Reid International Airport from ${REVERENCE.name}?`,
    answer: `Harry Reid International Airport is typically about 25–35 minutes from ${REVERENCE.name} via the 215 Beltway and I-15, depending on traffic (approximate).`,
  },
  {
    question: `Who helps buyers find homes in ${REVERENCE.name}?`,
    answer: `${config.agent.name}, featured Pulte agent for Monument at Reverence, provides buyer and seller representation in ${REVERENCE.name}. Call ${config.contact.phone}.`,
  },
]

export type WrittenAmenitySection = {
  id: AmenityCategoryId | 'commute'
  title: string
  paragraphs: string[]
}

export const WRITTEN_AMENITY_SECTIONS: WrittenAmenitySection[] = [
  {
    id: 'restaurants',
    title: `Dining near ${REVERENCE.name}`,
    paragraphs: [
      `Summerlin West dining clusters at Downtown Summerlin (1980 Festival Plaza Dr), where national and local restaurants sit alongside patios and walkable streets. From guard-gated ${REVERENCE.shortName}, that hub is typically about a 10–15 minute drive (approximate).`,
      `Monument at Reverence and other ${REVERENCE.shortName} neighborhoods also sit close to Lake Mead Boulevard and Rampart Boulevard corridors, where additional casual dining and takeout options serve everyday meals without crossing town.`,
    ],
  },
  {
    id: 'parks',
    title: 'Parks and outdoor recreation',
    paragraphs: [
      `${REVERENCE.name} includes on-site parks, trails, pools, and fitness amenities within the Pulte master plan, including Reverence Park along Reverence Parkway.`,
      `Red Rock Canyon National Conservation Area (visitor center at 1000 Scenic Loop Dr) adds world-class hiking and scenic drives minutes west of Summerlin West.`,
    ],
  },
  {
    id: 'golf',
    title: 'Golf courses',
    paragraphs: [
      `TPC Summerlin (1700 Village Center Cir) anchors private championship golf in the area immediately surrounding ${REVERENCE.shortName}. Additional Summerlin West and Red Rock Country Club courses extend options for members and public tee times.`,
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
      `Costco at 801 S Pavilion Center Dr and Smith's on 2211 N Rampart Blvd cover bulk grocery and weekly shopping runs for ${REVERENCE.shortName} households.`,
    ],
  },
  {
    id: 'schools',
    title: 'Schools serving Reverence Summerlin',
    paragraphs: [
      `${REVERENCE.name} families attend Clark County School District schools based on home address. Palo Verde High School (333 S Pavilion Center Dr) is among the established high schools serving portions of Summerlin West.`,
      `Confirm assigned schools for a specific Monument at Reverence or ${REVERENCE.shortName} address with CCSD zoning before you write an offer.`,
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
    description: `Guard-gated Pulte village in ${REVERENCE.village}, Las Vegas.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: REVERENCE.salesOfficeAddress,
      addressLocality: REVERENCE.city,
      addressRegion: REVERENCE.state,
      postalCode: REVERENCE.zip,
      addressCountry: 'US',
    },
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
