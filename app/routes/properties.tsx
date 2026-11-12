import { Card, CardContent } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { Search, Phone, Mail } from 'lucide-react'
import { config } from '~/lib/config'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/properties` }]
}

export function meta() {
  return [
    { title: 'Las Vegas Properties for Sale | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        'Browse Las Vegas and Summerlin properties for sale. Dr. Jan Duffy helps you find the perfect home with expert guidance and local market knowledge.',
    },
    {
      name: 'keywords',
      content:
        'Las Vegas homes for sale, Summerlin properties, Las Vegas real estate listings',
    },
    {
      property: 'og:title',
      content: 'Las Vegas Properties for Sale | Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Browse Las Vegas and Summerlin properties for sale. Dr. Jan Duffy helps you find the perfect home with expert guidance and local market knowledge.',
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/properties` },
  ]
}

export default function Properties() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Las Vegas Properties for Sale
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes in Las Vegas and Summerlin. Dr. Jan Duffy
            provides expert guidance to help you find the perfect property that
            meets your needs and budget.
          </p>
        </div>

        {/* Advanced Search Widget - Main Search Interface */}
        <div className="mb-12">
          <Card className="shadow-xl border-4 border-accent-500">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Search Properties"
                subtitle="Filter by neighborhood, city, school, beds, baths, and price range"
              />
            </CardContent>
          </Card>
        </div>

        {/* RealScout Listings Widget - Main Property Listings */}
        <div className="mb-12">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR,,TOWNHOUSE,,CONDO"
            title="Available Las Vegas Properties"
            subtitle="Browse our active listings below. Use the search above to refine your results."
          />
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Finding Your Dream Home?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Dr. Jan Duffy provides personalized property search services and
              expert guidance throughout your home buying journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {config.contact.phone}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We&apos;re sorry, but there was an error loading this page.
        </p>
        <a
          href="/properties"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Try Again
        </a>
      </div>
    </div>
  )
}
