import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { REVERENCE } from '~/lib/reverence-community'
import { AmenityMap } from '~/components/amenity-map/AmenityMap'

type AmenityMapSectionProps = {
  heading?: string
  subheading?: string
  variant?: 'section' | 'page'
  showViewAllLink?: boolean
  className?: string
}

export function AmenityMapSection({
  heading = `Life Near ${REVERENCE.name}`,
  subheading = `Explore restaurants, parks, golf, healthcare, shopping, and schools around Reverence's gated neighborhoods and Monument at Reverence in Summerlin West.`,
  variant = 'section',
  showViewAllLink = true,
  className = '',
}: AmenityMapSectionProps) {
  const sectionId = 'whats-nearby-reverence'

  return (
    <section
      className={`py-16 bg-gray-50 ${className}`}
      aria-labelledby={sectionId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <p className="text-[#e85d04] font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden />
              What&apos;s Nearby
            </p>
            <h2
              id={sectionId}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            >
              {heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {subheading}
            </p>
          </div>
          {showViewAllLink && variant === 'section' && (
            <Button
              asChild
              className="bg-[#e85d04] hover:bg-[#d54d00] text-white font-bold shrink-0"
            >
              <Link to={REVERENCE.amenitiesPath}>
                Full amenities guide
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
              </Link>
            </Button>
          )}
        </div>

        <AmenityMap variant={variant === 'page' ? 'page' : 'section'} />

        {showViewAllLink && variant === 'section' && (
          <p className="mt-6 text-center text-sm text-gray-600">
            <Link
              to={REVERENCE.amenitiesPath}
              className="font-semibold text-[#1e3a5f] hover:text-[#e85d04]"
            >
              See all nearby amenities in {REVERENCE.name}
            </Link>
          </p>
        )}
      </div>
    </section>
  )
}
