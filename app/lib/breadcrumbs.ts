import { config } from '~/lib/config'

const SEGMENT_LABELS: Record<string, string> = {
  buying: 'Buying',
  selling: 'Selling',
  relocate: 'Relocate',
  communities: 'Communities',
  resources: 'Resources',
  about: 'About',
  contact: 'Contact',
  valuation: 'Home Valuation',
  properties: 'Properties',
  'neighborhood-comparison': 'Neighborhood Comparison',
  'market-trends': 'Market Trends',
  'new-home': 'New Home',
  'military-veterans': 'Military & Veterans',
  'mortgage-calculator': 'Mortgage Calculator',
  financing: 'Financing',
  'foreclosure-avoidance': 'Foreclosure Avoidance',
  'short-sales': 'Short Sales',
  marketing: 'Marketing',
  summerlin: 'Summerlin',
  california: 'California',
  'los-angeles': 'Los Angeles',
  'san-francisco': 'San Francisco',
  'new-york': 'New York',
  seattle: 'Seattle',
  phoenix: 'Phoenix',
  chicago: 'Chicago',
  'ascension-summerlin': 'Ascension Summerlin',
  'astra-la-madre-peaks': 'Astra La Madre Peaks',
  'summerlin-west': 'Summerlin West',
  'luxury-homes': 'Luxury Homes',
  'the-ridges': 'The Ridges',
  'red-rock-country-club': 'Red Rock Country Club',
  'new-construction': 'New Construction',
  'mesa-ridge': 'Mesa Ridge',
  'the-peaks': 'The Peaks',
  'downtown-summerlin': 'Downtown Summerlin',
  'reverence-summerlin': 'Reverence Summerlin',
  'monument-at-reverence': 'Monument at Reverence',
  kestrel: 'Kestrel',
  'skye-canyon': 'Skye Canyon',
  'silverstone-ranch': 'Silverstone Ranch',
  henderson: 'Henderson',
  'boulder-city': 'Boulder City',
  blog: 'Blog',
  youtube: 'YouTube',
  'golf-courses': 'Golf Courses',
  schools: 'Schools',
  trails: 'Trails',
  'tennis-pickleball': 'Tennis & Pickleball',
  pools: 'Pools',
  media: 'Media',
  reviews: 'Reviews',
  'zillow-premier': 'Zillow Premier',
}

function labelForSegment(segment: string): string {
  return (
    SEGMENT_LABELS[segment] ??
    segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

export type BreadcrumbItem = { name: string; path: string }

/** Build breadcrumb trail for inner pages (excludes homepage). */
export function buildBreadcrumbs(pathname: string): BreadcrumbItem[] | null {
  const normalized = pathname.replace(/\/$/, '') || '/'
  if (normalized === '/') {
    return null
  }

  const segments = normalized.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = [{ name: 'Home', path: '/' }]

  let accumulated = ''
  for (const segment of segments) {
    accumulated += `/${segment}`
    items.push({
      name: labelForSegment(segment),
      path: accumulated,
    })
  }

  return items
}

export function breadcrumbListJsonLd(pathname: string) {
  const items = buildBreadcrumbs(pathname)
  if (!items) {
    return null
  }

  const baseUrl = config.seo.siteUrl

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path === '/' ? '' : item.path}`,
    })),
  }
}
