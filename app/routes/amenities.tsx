import { Link } from 'react-router'
import { Phone, Mail, Shield } from 'lucide-react'
import { config } from '~/lib/config'
import { REVERENCE } from '~/lib/reverence-community'
import {
  AMENITY_FAQ,
  WRITTEN_AMENITY_SECTIONS,
  amenitiesBreadcrumbSchema,
  amenitiesFaqSchema,
  amenitiesItemListSchema,
  amenitiesPageMeta,
  reverenceCommunityPlaceSchema,
} from '~/lib/reverence-amenities-content'
import { AmenityMap } from '~/components/amenity-map/AmenityMap'
import { Button } from '~/components/ui/button'

export function meta() {
  return amenitiesPageMeta()
}

export function links() {
  return [
    {
      rel: 'canonical',
      href: `${config.seo.siteUrl}${REVERENCE.amenitiesPath}`,
    },
  ]
}

export default function AmenitiesPage() {
  const phoneHref = `tel:+1${config.contact.phone.replace(/\D/g, '')}`

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a87] to-[#152a45] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-100 mb-4">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Nearby Amenities</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nearby Amenities in Reverence, Summerlin, Las Vegas
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Hyperlocal guide to dining, recreation, golf, healthcare, shopping,
            and schools around Reverence&apos;s gated neighborhoods (The Heights)
            and Monument at Reverence — with an interactive map and verified
            addresses for Summerlin West buyers.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interactive amenity map
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Filter by category to explore places near {REVERENCE.centerSource}.
            Map center: {REVERENCE.center.lat.toFixed(4)},{' '}
            {REVERENCE.center.lng.toFixed(4)}.
          </p>
          <AmenityMap variant="page" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {WRITTEN_AMENITY_SECTIONS.map(section => (
            <article key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              {section.paragraphs.map(paragraph => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="amenities-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="amenities-faq"
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {AMENITY_FAQ.map(item => (
              <div
                key={item.question}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield
            className="w-12 h-12 text-[#fbbf24] mx-auto mb-4"
            aria-hidden
          />
          <h2 className="text-3xl font-bold mb-4">
            Your {REVERENCE.name} real estate expert
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            {config.agent.name} is the featured on-site agent for Monument at
            Reverence and helps buyers and sellers throughout {REVERENCE.name}.
            Berkshire Hathaway HomeServices Nevada Properties · License{' '}
            {config.agent.license} · {config.agent.office.fullAddress}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#e85d04] hover:bg-[#d54d00] text-white font-bold"
            >
              <a href={phoneHref} aria-label={`Call ${config.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" aria-hidden />
                {config.contact.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Schedule a consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a
                href={`mailto:${config.contact.email}`}
                aria-label={`Email ${config.contact.email}`}
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenitiesFaqSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenitiesItemListSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenitiesBreadcrumbSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...reverenceCommunityPlaceSchema(),
          }),
        }}
      />
    </div>
  )
}
