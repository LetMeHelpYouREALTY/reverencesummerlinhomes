import { Link } from 'react-router'
import { Phone, MapPin, Shield, TrendingUp, Home } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { SILVERSTONE } from '~/lib/silverstone-seo'
import { config } from '~/lib/config'

/**
 * Sitewide hyperlocal Silverstone Ranch CTA — rendered on every page via _layout.tsx
 * Reinforces community-focused realtor services for SEO and conversions.
 */
export function HyperlocalSilverstoneSection() {
  const phoneHref = `tel:+1${config.contact.phone.replace(/\D/g, '')}`

  return (
    <section
      className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-12"
      aria-labelledby="silverstone-local-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-amber-300 font-semibold text-sm uppercase tracking-wide mb-2">
              Hyperlocal Realtor Services
            </p>
            <h2
              id="silverstone-local-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Silverstone Ranch Real Estate Expert — ZIP {SILVERSTONE.zip}
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              {config.agent.name} specializes in buying and selling in{' '}
              <strong>Silverstone Ranch</strong>, Centennial Hills&apos;
              signature guard-gated Pulte community. Median{' '}
              {SILVERSTONE.medianPrice} · {SILVERSTONE.daysOnMarket} days on
              market · {SILVERSTONE.homes} homes across 9 sub-neighborhoods
              adjacent to Floyd Lamb Park.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#e85d04] hover:bg-[#d54d00] text-white font-bold"
              >
                <Link to={SILVERSTONE.communityUrl}>
                  <Home className="w-4 h-4 mr-2" />
                  Explore Silverstone Ranch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/valuation">Free Home Valuation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href={phoneHref} aria-label={`Call ${config.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {config.contact.phone}
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="font-semibold mb-1">Guard-Gated Living</h3>
              <p className="text-sm text-blue-100">
                The Palms: 24/7 staffed gates. Silverlake &amp; Windermere:
                gated access.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="font-semibold mb-1">Strong Market</h3>
              <p className="text-sm text-blue-100">
                Median {SILVERSTONE.medianPrice} · 101.8% list-to-sale ·{' '}
                {SILVERSTONE.daysOnMarket} DOM
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="font-semibold mb-1">Centennial Hills</h3>
              <p className="text-sm text-blue-100">
                Floyd Lamb Park next door · Arbor View HS 0.8 mi · Costco 10 min
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Home className="w-8 h-8 text-amber-300 mb-2" />
              <h3 className="font-semibold mb-1">Pulte Built</h3>
              <p className="text-sm text-blue-100">
                1,345–4,050 sq ft · $450K–$1.1M+ · Mature landscaping
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-blue-200">
          {config.agent.name} · License {config.agent.license} ·{' '}
          {config.agent.office.fullAddress} · Serving Silverstone Ranch buyers
          &amp; sellers in {SILVERSTONE.area}
        </p>
      </div>
    </section>
  )
}
