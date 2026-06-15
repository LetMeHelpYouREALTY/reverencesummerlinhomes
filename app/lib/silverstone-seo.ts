import { config } from '~/lib/config'

/** Hyperlocal Silverstone Ranch facts for sitewide SEO */
export const SILVERSTONE = {
  name: 'Silverstone Ranch',
  zip: '89131',
  area: 'Centennial Hills, Northwest Las Vegas',
  medianPrice: '$685,000',
  daysOnMarket: '13',
  homes: '1,526',
  builder: 'Pulte Homes',
  phone: config.contact.phone,
  agent: config.agent.name,
  communityUrl: '/communities/silverstone-ranch',
  keywords: [
    'Silverstone Ranch Las Vegas homes for sale',
    'guard-gated Northwest Las Vegas',
    'Silverstone Ranch real estate agent',
    '89131 homes for sale',
    'Centennial Hills gated community',
    'Silverstone Ranch The Palms',
    'Arbor View High School homes',
    'Pulte Homes Silverstone Ranch',
    'Dr. Jan Duffy Silverstone Ranch',
  ],
} as const

export type SilverstonePageKey =
  | 'home'
  | 'buying'
  | 'buying-new-home'
  | 'buying-military-veterans'
  | 'buying-mortgage-calculator'
  | 'buying-financing'
  | 'selling'
  | 'selling-foreclosure-avoidance'
  | 'selling-short-sales'
  | 'selling-marketing'
  | 'relocate'
  | 'relocate-summerlin'
  | 'relocate-california'
  | 'relocate-los-angeles'
  | 'relocate-san-francisco'
  | 'relocate-new-york'
  | 'relocate-seattle'
  | 'relocate-phoenix'
  | 'relocate-chicago'
  | 'communities'
  | 'communities-silverstone-ranch'
  | 'communities-monument-at-reverence'
  | 'communities-reverence-summerlin'
  | 'communities-summerlin-west'
  | 'communities-downtown-summerlin'
  | 'communities-the-ridges'
  | 'communities-luxury-homes'
  | 'communities-new-construction'
  | 'communities-red-rock-country-club'
  | 'communities-mesa-ridge'
  | 'communities-the-peaks'
  | 'communities-kestrel'
  | 'communities-skye-canyon'
  | 'communities-henderson'
  | 'communities-ascension-summerlin'
  | 'communities-astra-la-madre-peaks'
  | 'communities-boulder-city'
  | 'resources'
  | 'resources-blog'
  | 'resources-youtube'
  | 'resources-schools'
  | 'resources-golf-courses'
  | 'resources-trails'
  | 'resources-tennis-pickleball'
  | 'resources-pools'
  | 'contact'
  | 'valuation'
  | 'properties'
  | 'neighborhood-comparison'
  | 'market-trends'
  | 'about'
  | 'about-media'
  | 'about-reviews'
  | 'about-zillow-premier'
  | 'layout'

type PageSeo = {
  title: string
  description: string
  path: string
  extraKeywords?: string[]
}

const PAGE_SEO: Record<SilverstonePageKey, PageSeo> = {
  home: {
    title: `Silverstone Ranch Real Estate | Guard-Gated Homes 89131 | ${SILVERSTONE.agent}`,
    description: `Buy or sell in Silverstone Ranch, Centennial Hills' guard-gated Pulte community (ZIP 89131). Median $685K, 13 days on market. Expert realtor services from ${SILVERSTONE.agent}. Call ${SILVERSTONE.phone}.`,
    path: '/',
  },
  layout: {
    title: `Silverstone Ranch Realtor | ${SILVERSTONE.agent} | Las Vegas 89131`,
    description: `Hyperlocal realtor services for Silverstone Ranch and Northwest Las Vegas. Guard-gated homes, expert buyer & seller representation by ${SILVERSTONE.agent}.`,
    path: '/',
  },
  buying: {
    title: `Buy a Home in Silverstone Ranch | Guard-Gated 89131 | ${SILVERSTONE.agent}`,
    description: `Expert buyer representation in Silverstone Ranch & Centennial Hills. Navigate guard-gated HOA, 9 sub-neighborhoods & competitive offers. ${SILVERSTONE.agent} — call ${SILVERSTONE.phone}.`,
    path: '/buying',
    extraKeywords: [
      'buy Silverstone Ranch home',
      'Silverstone Ranch buyer agent',
    ],
  },
  'buying-new-home': {
    title: `New & Resale Homes Silverstone Ranch | Pulte Built 89131 | ${SILVERSTONE.agent}`,
    description: `Find resale and move-in ready homes in Silverstone Ranch — Pulte-built guard-gated community near Floyd Lamb Park. Buyer guidance from ${SILVERSTONE.agent}.`,
    path: '/buying/new-home',
  },
  'buying-military-veterans': {
    title: `VA Home Loans Silverstone Ranch Las Vegas | Military Buyers | ${SILVERSTONE.agent}`,
    description: `VA loan guidance for military buyers purchasing in Silverstone Ranch, Centennial Hills (89131). ${SILVERSTONE.agent} helps veterans secure guard-gated Northwest Las Vegas homes.`,
    path: '/buying/military-veterans',
  },
  'buying-mortgage-calculator': {
    title: `Silverstone Ranch Mortgage Calculator | 89131 Home Payments | ${SILVERSTONE.agent}`,
    description: `Estimate monthly payments for Silverstone Ranch homes (median $685K). HOA $200–$286/mo included in buyer planning. ${SILVERSTONE.agent} — ${SILVERSTONE.phone}.`,
    path: '/buying/mortgage-calculator',
  },
  'buying-financing': {
    title: `Home Financing Silverstone Ranch | 89131 Buyers | ${SILVERSTONE.agent}`,
    description: `Mortgage and financing options for Silverstone Ranch buyers in Centennial Hills. Conventional, VA, and jumbo loans for guard-gated Northwest Las Vegas homes.`,
    path: '/buying/financing',
  },
  selling: {
    title: `Sell Your Silverstone Ranch Home | 101.8% List-to-Sale | ${SILVERSTONE.agent}`,
    description: `List and sell in Silverstone Ranch with a hyperlocal expert. Median $685K, 13 days on market, sellers often above asking. ${SILVERSTONE.agent} — call ${SILVERSTONE.phone}.`,
    path: '/selling',
    extraKeywords: [
      'sell Silverstone Ranch home',
      'Silverstone Ranch listing agent',
    ],
  },
  'selling-foreclosure-avoidance': {
    title: `Foreclosure Help Silverstone Ranch | 89131 Homeowners | ${SILVERSTONE.agent}`,
    description: `Confidential foreclosure avoidance for Silverstone Ranch homeowners in Centennial Hills. Short sale and workout options from ${SILVERSTONE.agent}.`,
    path: '/selling/foreclosure-avoidance',
  },
  'selling-short-sales': {
    title: `Short Sales Silverstone Ranch Las Vegas | 89131 | ${SILVERSTONE.agent}`,
    description: `Short sale expertise for Silverstone Ranch homeowners. Navigate HOA, lender approval & guard-gated community standards with ${SILVERSTONE.agent}.`,
    path: '/selling/short-sales',
  },
  'selling-marketing': {
    title: `Silverstone Ranch Home Marketing | Luxury Listing Strategy | ${SILVERSTONE.agent}`,
    description: `Premium marketing for Silverstone Ranch listings — professional photography, MLS exposure & hyperlocal Centennial Hills targeting. ${SILVERSTONE.agent}.`,
    path: '/selling/marketing',
  },
  relocate: {
    title: `Relocate to Silverstone Ranch Las Vegas | 89131 Guide | ${SILVERSTONE.agent}`,
    description: `Relocating to Silverstone Ranch? Guard-gated Pulte community in Centennial Hills with Floyd Lamb Park next door. ${SILVERSTONE.agent} guides out-of-state buyers.`,
    path: '/relocate',
  },
  'relocate-summerlin': {
    title: `Summerlin to Silverstone Ranch | Compare NW Las Vegas | ${SILVERSTONE.agent}`,
    description: `Considering Silverstone Ranch vs Summerlin? More guard-gated value at $685K median vs $745K+. ${SILVERSTONE.agent} compares Centennial Hills & Summerlin options.`,
    path: '/relocate/summerlin',
  },
  'relocate-california': {
    title: `California to Silverstone Ranch Las Vegas | 89131 Relocation | ${SILVERSTONE.agent}`,
    description: `California buyers relocating to Silverstone Ranch — guard-gated Northwest Las Vegas with lower taxes & larger lots. ${SILVERSTONE.agent} relocation specialist.`,
    path: '/relocate/california',
  },
  'relocate-los-angeles': {
    title: `Los Angeles to Silverstone Ranch | LA Buyers 89131 | ${SILVERSTONE.agent}`,
    description: `LA transplants discover Silverstone Ranch — guard-gated Centennial Hills living minutes from Floyd Lamb Park. ${SILVERSTONE.agent} handles remote relocation.`,
    path: '/relocate/los-angeles',
  },
  'relocate-san-francisco': {
    title: `San Francisco to Silverstone Ranch | Bay Area Relocation | ${SILVERSTONE.agent}`,
    description: `Bay Area buyers: Silverstone Ranch offers guard-gated security & value in Northwest Las Vegas (89131). ${SILVERSTONE.agent} — ${SILVERSTONE.phone}.`,
    path: '/relocate/san-francisco',
  },
  'relocate-new-york': {
    title: `New York to Silverstone Ranch Las Vegas | 89131 Relocation | ${SILVERSTONE.agent}`,
    description: `NYC buyers relocating to Silverstone Ranch — spacious guard-gated homes in Centennial Hills with mountain views. ${SILVERSTONE.agent} guides every step.`,
    path: '/relocate/new-york',
  },
  'relocate-seattle': {
    title: `Seattle to Silverstone Ranch | Pacific NW Relocation | ${SILVERSTONE.agent}`,
    description: `Seattle transplants find Silverstone Ranch — desert living, guard-gated security & Floyd Lamb Park access in ZIP 89131. ${SILVERSTONE.agent}.`,
    path: '/relocate/seattle',
  },
  'relocate-phoenix': {
    title: `Phoenix to Silverstone Ranch Las Vegas | Compare Markets | ${SILVERSTONE.agent}`,
    description: `Phoenix buyers comparing Silverstone Ranch — guard-gated Pulte community in Centennial Hills with strong appreciation. ${SILVERSTONE.agent}.`,
    path: '/relocate/phoenix',
  },
  'relocate-chicago': {
    title: `Chicago to Silverstone Ranch | Midwest Relocation 89131 | ${SILVERSTONE.agent}`,
    description: `Chicago families relocating to Silverstone Ranch — guard-gated Northwest Las Vegas near top-rated Arbor View High School. ${SILVERSTONE.agent}.`,
    path: '/relocate/chicago',
  },
  communities: {
    title: `Las Vegas Communities | Silverstone Ranch Featured | ${SILVERSTONE.agent}`,
    description: `Explore Las Vegas communities with focus on Silverstone Ranch — guard-gated Centennial Hills enclave, median $685K. ${SILVERSTONE.agent} hyperlocal expertise.`,
    path: '/communities',
  },
  'communities-silverstone-ranch': {
    title: `Silverstone Ranch Homes for Sale | Guard-Gated 89131 | ${SILVERSTONE.agent}`,
    description: `Silverstone Ranch — guard-gated Pulte master-planned community in Centennial Hills. 1,526 homes, 9 villages, Floyd Lamb Park next door. ${SILVERSTONE.agent}.`,
    path: '/communities/silverstone-ranch',
  },
  'communities-monument-at-reverence': {
    title: `Monument at Reverence vs Silverstone Ranch | Compare | ${SILVERSTONE.agent}`,
    description: `Compare Monument at Reverence Summerlin with Silverstone Ranch Centennial Hills. ${SILVERSTONE.agent} expert in both guard-gated Las Vegas communities.`,
    path: '/communities/monument-at-reverence',
  },
  'communities-reverence-summerlin': {
    title: `Reverence Summerlin & Silverstone Ranch | ${SILVERSTONE.agent}`,
    description: `Reverence Summerlin and Silverstone Ranch — two premier guard-gated Las Vegas communities. ${SILVERSTONE.agent} helps you choose the right fit.`,
    path: '/communities/reverence-summerlin',
  },
  'communities-summerlin-west': {
    title: `Summerlin West vs Silverstone Ranch Homes | ${SILVERSTONE.agent}`,
    description: `Compare Summerlin West and Silverstone Ranch for your next Las Vegas home. Value, amenities & lifestyle analysis from ${SILVERSTONE.agent}.`,
    path: '/communities/summerlin-west',
  },
  'communities-downtown-summerlin': {
    title: `Downtown Summerlin vs Silverstone Ranch | ${SILVERSTONE.agent}`,
    description: `Urban Summerlin vs guard-gated Silverstone Ranch in Centennial Hills. ${SILVERSTONE.agent} compares walkability, price & lifestyle.`,
    path: '/communities/downtown-summerlin',
  },
  'communities-the-ridges': {
    title: `The Ridges vs Silverstone Ranch Luxury Homes | ${SILVERSTONE.agent}`,
    description: `Luxury comparison: The Ridges Summerlin and Silverstone Ranch The Palms estates. ${SILVERSTONE.agent} — ${SILVERSTONE.phone}.`,
    path: '/communities/the-ridges',
  },
  'communities-luxury-homes': {
    title: `Luxury Homes Silverstone Ranch The Palms | $700K+ | ${SILVERSTONE.agent}`,
    description: `Luxury estates in Silverstone Ranch The Palms — guard-gated 24/7 staffing, $700K–$1.1M+. ${SILVERSTONE.agent} luxury listing specialist.`,
    path: '/communities/luxury-homes',
  },
  'communities-new-construction': {
    title: `Resale Homes Silverstone Ranch | Pulte Built 89131 | ${SILVERSTONE.agent}`,
    description: `Quality Pulte-built resale homes in Silverstone Ranch Centennial Hills. Mature landscaping, guard-gated security. ${SILVERSTONE.agent}.`,
    path: '/communities/new-construction',
  },
  'communities-red-rock-country-club': {
    title: `Red Rock Country Club vs Silverstone Ranch | ${SILVERSTONE.agent}`,
    description: `Golf community comparison: Red Rock Country Club and Silverstone Ranch near Floyd Lamb Park. ${SILVERSTONE.agent}.`,
    path: '/communities/red-rock-country-club',
  },
  'communities-mesa-ridge': {
    title: `Mesa Ridge vs Silverstone Ranch NW Las Vegas | ${SILVERSTONE.agent}`,
    description: `Compare Mesa Ridge and Silverstone Ranch for Northwest Las Vegas homebuyers. ${SILVERSTONE.agent} local market expert.`,
    path: '/communities/mesa-ridge',
  },
  'communities-the-peaks': {
    title: `The Peaks vs Silverstone Ranch | Las Vegas Communities | ${SILVERSTONE.agent}`,
    description: `The Peaks and Silverstone Ranch community comparison for Las Vegas buyers. ${SILVERSTONE.agent} — ${SILVERSTONE.phone}.`,
    path: '/communities/the-peaks',
  },
  'communities-kestrel': {
    title: `Kestrel vs Silverstone Ranch Homes | ${SILVERSTONE.agent}`,
    description: `Compare Kestrel and Silverstone Ranch guard-gated options in Las Vegas. ${SILVERSTONE.agent} buyer representation.`,
    path: '/communities/kestrel',
  },
  'communities-skye-canyon': {
    title: `Skye Canyon vs Silverstone Ranch | NW Las Vegas | ${SILVERSTONE.agent}`,
    description: `Skye Canyon ($612K median) vs Silverstone Ranch ($685K) — lifestyle and value comparison from ${SILVERSTONE.agent}.`,
    path: '/communities/skye-canyon',
  },
  'communities-henderson': {
    title: `Henderson vs Silverstone Ranch | Las Vegas Area | ${SILVERSTONE.agent}`,
    description: `Henderson and Silverstone Ranch comparison for Las Vegas area homebuyers. ${SILVERSTONE.agent} relocation expert.`,
    path: '/communities/henderson',
  },
  'communities-ascension-summerlin': {
    title: `Ascension Summerlin vs Silverstone Ranch | ${SILVERSTONE.agent}`,
    description: `New construction vs established guard-gated: Ascension Summerlin and Silverstone Ranch compared by ${SILVERSTONE.agent}.`,
    path: '/communities/ascension-summerlin',
  },
  'communities-astra-la-madre-peaks': {
    title: `Astra La Madre Peaks vs Silverstone Ranch | ${SILVERSTONE.agent}`,
    description: `Compare Astra La Madre Peaks and Silverstone Ranch for Las Vegas luxury buyers. ${SILVERSTONE.agent}.`,
    path: '/communities/astra-la-madre-peaks',
  },
  'communities-boulder-city': {
    title: `Boulder City vs Silverstone Ranch | Las Vegas Area | ${SILVERSTONE.agent}`,
    description: `Boulder City small-town charm vs Silverstone Ranch guard-gated Centennial Hills. ${SILVERSTONE.agent} helps you decide.`,
    path: '/communities/boulder-city',
  },
  resources: {
    title: `Silverstone Ranch Resources | Schools, Golf & Trails 89131 | ${SILVERSTONE.agent}`,
    description: `Local resources for Silverstone Ranch residents — Arbor View HS, Floyd Lamb Park, Paiute Golf & Centennial Hills shopping. ${SILVERSTONE.agent}.`,
    path: '/resources',
  },
  'resources-blog': {
    title: `Silverstone Ranch Real Estate Blog | Market Insights | ${SILVERSTONE.agent}`,
    description: `Blog and market insights for Silverstone Ranch and Centennial Hills homeowners and buyers. ${SILVERSTONE.agent}.`,
    path: '/resources/blog',
  },
  'resources-youtube': {
    title: `Silverstone Ranch Video Tours | ${SILVERSTONE.agent} YouTube`,
    description: `Video tours and community guides for Silverstone Ranch, Centennial Hills & Northwest Las Vegas. ${SILVERSTONE.agent} channel.`,
    path: '/resources/youtube',
  },
  'resources-schools': {
    title: `Silverstone Ranch Schools | Arbor View HS & 89131 | ${SILVERSTONE.agent}`,
    description: `Schools near Silverstone Ranch: Thomas O'Roarke Elementary, Cadwallader Middle, Arbor View HS (96% grad rate). ${SILVERSTONE.agent}.`,
    path: '/resources/schools',
  },
  'resources-golf-courses': {
    title: `Golf Near Silverstone Ranch | Paiute Resort & 89131 | ${SILVERSTONE.agent}`,
    description: `Golf near Silverstone Ranch — Las Vegas Paiute Resort (3 Pete Dye courses) 5 miles north. Silverstone course status & alternatives. ${SILVERSTONE.agent}.`,
    path: '/resources/golf-courses',
  },
  'resources-trails': {
    title: `Trails Near Silverstone Ranch | Floyd Lamb Park | ${SILVERSTONE.agent}`,
    description: `Walking and biking trails at Silverstone Ranch and adjacent Floyd Lamb Park (680 acres). ${SILVERSTONE.agent} — Centennial Hills lifestyle.`,
    path: '/resources/trails',
  },
  'resources-tennis-pickleball': {
    title: `Tennis & Pickleball Silverstone Ranch | 89131 Amenities | ${SILVERSTONE.agent}`,
    description: `Lighted tennis, pickleball & basketball courts in Silverstone Ranch HOA amenities. ${SILVERSTONE.agent} community expert.`,
    path: '/resources/tennis-pickleball',
  },
  'resources-pools': {
    title: `Pools & Recreation Silverstone Ranch | 89131 | ${SILVERSTONE.agent}`,
    description: `Community recreation at Silverstone Ranch — 6-acre family park, playgrounds & seasonal events in Centennial Hills. ${SILVERSTONE.agent}.`,
    path: '/resources/pools',
  },
  contact: {
    title: `Contact ${SILVERSTONE.agent} | Silverstone Ranch Realtor | ${SILVERSTONE.phone}`,
    description: `Schedule a Silverstone Ranch home tour or listing consultation. ${SILVERSTONE.agent}, hyperlocal Centennial Hills expert. Call ${SILVERSTONE.phone}.`,
    path: '/contact',
  },
  valuation: {
    title: `Silverstone Ranch Home Value | Free 89131 CMA | ${SILVERSTONE.agent}`,
    description: `What's your Silverstone Ranch home worth? Free valuation with hyperlocal Centennial Hills comps. Median $685K, 13 DOM. ${SILVERSTONE.agent}.`,
    path: '/valuation',
  },
  properties: {
    title: `Silverstone Ranch Homes for Sale | 89131 Listings | ${SILVERSTONE.agent}`,
    description: `Browse Silverstone Ranch homes for sale — guard-gated Centennial Hills listings updated daily. ${SILVERSTONE.agent} — ${SILVERSTONE.phone}.`,
    path: '/properties',
  },
  'neighborhood-comparison': {
    title: `Silverstone Ranch vs Summerlin | Neighborhood Comparison | ${SILVERSTONE.agent}`,
    description: `Compare Silverstone Ranch to Summerlin, Skye Canyon & Providence. Guard-gated value, schools & amenities. ${SILVERSTONE.agent}.`,
    path: '/neighborhood-comparison',
  },
  'market-trends': {
    title: `Silverstone Ranch Market Trends | 89131 Real Estate | ${SILVERSTONE.agent}`,
    description: `Silverstone Ranch market data: median $685K (+5.2% YoY), 13 days on market, 101.8% list-to-sale. ${SILVERSTONE.agent} market analyst.`,
    path: '/market-trends',
  },
  about: {
    title: `About ${SILVERSTONE.agent} | Silverstone Ranch Realtor`,
    description: `${SILVERSTONE.agent} — hyperlocal realtor for Silverstone Ranch, Centennial Hills & Northwest Las Vegas. License ${config.agent.license}.`,
    path: '/about',
  },
  'about-media': {
    title: `${SILVERSTONE.agent} Media | Silverstone Ranch Expert`,
    description: `Media appearances and press featuring ${SILVERSTONE.agent}, Silverstone Ranch and Las Vegas real estate expert.`,
    path: '/about/media',
  },
  'about-reviews': {
    title: `Reviews for ${SILVERSTONE.agent} | Silverstone Ranch Clients`,
    description: `Client reviews for ${SILVERSTONE.agent} — Silverstone Ranch, Centennial Hills & Las Vegas real estate transactions.`,
    path: '/about/reviews',
  },
  'about-zillow-premier': {
    title: `${SILVERSTONE.agent} Zillow Premier | Silverstone Ranch Agent`,
    description: `${SILVERSTONE.agent}, Zillow Premier Agent serving Silverstone Ranch and Northwest Las Vegas homebuyers & sellers.`,
    path: '/about/zillow-premier',
  },
}

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: 'link'; rel: string; href: string }

/** Generate hyperlocal Silverstone-focused meta tags for any page */
export function silverstonePageMeta(pageKey: SilverstonePageKey): MetaTag[] {
  const page = PAGE_SEO[pageKey]
  const keywords = [
    ...SILVERSTONE.keywords,
    ...(page.extraKeywords ?? []),
  ].join(', ')
  const url = `${config.seo.siteUrl}${page.path}`

  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
  ]
}

/** Canonical link for a page path */
export function silverstoneCanonical(path: string) {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}${path}` }]
}

/** FAQ schema for Silverstone Ranch — use on community & key pages */
export function silverstoneFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the median home price in Silverstone Ranch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The median sale price in Silverstone Ranch is approximately $685,000 with homes typically selling in about 13 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Silverstone Ranch guard-gated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Palms sub-neighborhood has 24/7 staffed guard gates. Silverlake and Windermere are gated with card/fob access. Other villages are non-gated within the master-planned community.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ZIP code is Silverstone Ranch in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Silverstone Ranch is primarily in ZIP code 89131 in Centennial Hills, Northwest Las Vegas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the best realtor for Silverstone Ranch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${SILVERSTONE.agent} provides hyperlocal buyer and seller representation for Silverstone Ranch. Call ${SILVERSTONE.phone} for a consultation.`,
        },
      },
    ],
  }
}
