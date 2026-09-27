import { Link } from 'react-router'
import { Phone } from 'lucide-react'
import { config } from '~/lib/config'
import { monumentData } from '~/lib/monument-data'
import { REVERENCE } from '~/lib/reverence-community'
import { Button } from '~/components/ui/button'
import { AmenityMapSection } from '~/components/amenity-map/AmenityMapSection'
import { silverstonePageMeta } from '~/lib/silverstone-seo'

export function meta() {
  return silverstonePageMeta('communities-reverence-summerlin')
}

export function links() {
  return [
    {
      rel: 'canonical',
      href: `${config.seo.siteUrl}/communities/reverence-summerlin`,
    },
  ]
}

export default function ReverenceSummerlin() {
  const phoneHref = `tel:+1${config.contact.phone.replace(/\D/g, '')}`

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reverence Summerlin Homes
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
            {monumentData.description.long.split('\n\n')[1]?.slice(0, 320) ??
              monumentData.description.short}{' '}
            Explore guard-gated Pulte living in Summerlin West with Red Rock
            Canyon views and resort-style community amenities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[#e85d04] hover:bg-[#d54d00] text-white font-bold"
            >
              <a href={phoneHref} aria-label={`Call ${config.contact.phone}`}>
                <Phone className="w-4 h-4 mr-2" aria-hidden />
                {config.contact.phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/communities/monument-at-reverence">
                Monument at Reverence
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why buyers choose {REVERENCE.name}
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-5">
          {monumentData.features.slice(0, 6).map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <AmenityMapSection
        heading={`Explore Life Near ${REVERENCE.name}`}
        subheading="Use the interactive map to review dining, grocery, parks, golf, healthcare, and schools around Summerlin West's northern guard-gated village."
      />
    </div>
  )
}
