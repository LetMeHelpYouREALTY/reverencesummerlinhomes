import { Link } from 'react-router'
import type { Route } from './+types/property-detail'
import { config } from '~/lib/config'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Home,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Award,
  Shield,
  Search,
} from 'lucide-react'

export function meta({ data, params }: Route.MetaArgs) {
  if (!data?.property) {
    return [
      { title: 'Property Not Found | Reverence Summerlin Homes | Dr. Jan Duffy' },
      { name: 'robots', content: 'noindex' },
    ]
  }
  const { id } = params
  const propertyTitle = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return [
    { title: `${propertyTitle} | Reverence Summerlin Property | Dr. Jan Duffy` },
    {
      name: 'description',
      content: `View detailed information about this Reverence Summerlin property. Dr. Jan Duffy provides expert guidance for your real estate needs in Reverence Summerlin and Monument at Reverence.`,
    },
    { tagName: 'link', rel: 'canonical', href: `${config.seo.siteUrl}/properties/${id}` },
  ]
}

export async function loader({ params }: Route.LoaderArgs) {
  try {
    // In a real application, you would fetch property data from MLS or database based on slug
    // For now, we'll return mock data based on the property ID/slug

    const { id } = await params

    if (!id || typeof id !== 'string') {
      throw new Response('Invalid property ID', { status: 400 })
    }

    // Mock property data - matches the sitemap property IDs
    // In a real app, this would be a database query using the slug
    const mockProperties: Record<
      string,
      {
        id: string
        slug: string
        address: string
        city: string
        state: string
        zip: string
        neighborhood: string
        price: number
        bedrooms: number
        bathrooms: number
        squareFeet: number
        lotSize: number
        yearBuilt: number
        propertyType: string
        description: string
        features: string[]
        images: string[]
        status: string
        mlsNumber: string
        community?: string
      }
    > = {
      // Placeholder sample listings (made-up addresses and MLS numbers) were removed:
      // individual listings are shown through the RealScout widgets instead, so every
      // /properties/:id URL now returns a real 404 rather than fabricated data.
    }

    const property = mockProperties[id]

    if (!property) {
      throw new Response('Property not found', { status: 404 })
    }

    return { property }
  } catch (error) {
    // If it's already a Response (like 404), re-throw it
    if (error instanceof Response) {
      throw error
    }

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    const errorStack =
      error instanceof Error && process.env['NODE_ENV'] === 'development'
        ? error.stack
        : undefined

    console.error('Property detail loader error:', {
      message: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString(),
    })

    // Return 500 error response
    throw new Response('Failed to load property', { status: 500 })
  }
}

export default function PropertyDetail({ loaderData }: Route.ComponentProps) {
  const { property } = loaderData

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            to="/properties"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2"
          >
            ← Back to Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.address}
                  className="w-full h-96 object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="800"
                  height="400"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary-600 text-white">
                    {property.status}
                  </Badge>
                </div>
                {property.community && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-700"
                    >
                      {property.community}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="mb-4">
                  {property.neighborhood &&
                    property.neighborhood.includes('Reverence Summerlin') && (
                      <Badge variant="secondary" className="mb-2">
                        Reverence Summerlin
                      </Badge>
                    )}
                  {property.community === 'Monument at Reverence' && (
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-primary-100 text-primary-800"
                    >
                      Monument at Reverence
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {property.address}
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  {property.neighborhood}, {property.city}, {property.state}{' '}
                  {property.zip}
                </p>
                {property.community && (
                  <p className="text-lg text-gray-700 mb-6">
                    Located in {property.community}
                    {property.community === 'Monument at Reverence' &&
                      ' in Reverence Summerlin'}
                  </p>
                )}

                <div className="text-4xl font-bold text-primary-600 mb-6">
                  ${property.price.toLocaleString()}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bed className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bedrooms}
                    </div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bath className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bathrooms}
                    </div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Square className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.squareFeet.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Home className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.lotSize}
                    </div>
                    <div className="text-gray-600">Acres</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Property Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {property.description}
                  </p>
                  {(property.community === 'Monument at Reverence' ||
                    property.neighborhood?.includes('Reverence Summerlin')) && (
                    <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-700">
                        This property is located in the Reverence Summerlin
                        area, one of Las Vegas's most desirable master-planned
                        communities. Reverence Summerlin offers exceptional
                        amenities, nearby public schools, and convenient access to
                        shopping, dining, and recreation. Whether you're seeking
                        Monument at Reverence new construction or established
                        Reverence Summerlin neighborhoods, this property
                        represents the quality and lifestyle that defines
                        Reverence Summerlin living.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Property Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Additional Images
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${property.address} - Image ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="200"
                        onClick={() => {
                          // In a real app, this would open a lightbox
                          window.open(image, '_blank')
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why Choose Dr. Jan Duffy for Your Reverence Summerlin
                    Property?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    As your Reverence Summerlin real estate expert, I bring
                    specialized knowledge of Monument at Reverence, established
                    Reverence Summerlin neighborhoods, and the greater Las Vegas
                    market to every property transaction. Whether you're buying
                    this Reverence Summerlin property or exploring other
                    opportunities, my expertise ensures you make informed
                    decisions.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>
                      Deep Reverence Summerlin market knowledge including
                      Monument at Reverence
                    </li>
                    <li>
                      Expert negotiation protecting your interests in Reverence
                      Summerlin transactions
                    </li>
                    <li>
                      Comprehensive Reverence Summerlin market analysis and
                      property valuation
                    </li>
                    <li>
                      Personalized service tailored to your Reverence Summerlin
                      real estate goals
                    </li>
                  </ul>
                  <Button asChild className="mt-4">
                    <Link to="/contact">
                      Contact About This Reverence Summerlin Property
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Number:</span>
                  <span className="font-medium">{property.mlsNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built:</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lot Size:</span>
                  <span className="font-medium">{property.lotSize} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-medium">
                    {property.squareFeet.toLocaleString()} sq ft
                  </span>
                </div>
                {property.community && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Community:</span>
                    <span className="font-medium">{property.community}</span>
                  </div>
                )}
                {(property.community === 'Monument at Reverence' ||
                  property.neighborhood?.includes('Reverence Summerlin')) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Badge className="mb-2">Reverence Summerlin Property</Badge>
                    <p className="text-sm text-gray-600">
                      This property is located in the Reverence Summerlin area,
                      one of Las Vegas's premier master-planned communities.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule a Showing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-100 mb-4">
                  Interested in this Reverence Summerlin property? Contact me to
                  schedule a private showing or get more information about this
                  property and other Reverence Summerlin opportunities.
                </p>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-white text-primary-700 hover:bg-primary-50"
                  >
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Dr. Jan Duffy
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    <a
                      href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
                      aria-label={`Call ${config.contact.phone}`}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call {config.contact.phone}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get Pre-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ready to make an offer on this Reverence Summerlin property?
                  Get pre-approved for financing to strengthen your position and
                  move forward with confidence.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/buying/financing">
                    <Award className="w-4 h-4 mr-2" />
                    Get Pre-Approved
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {(property.community === 'Monument at Reverence' ||
              property.neighborhood?.includes('Monument at Reverence')) && (
              <Card className="border-l-4 border-primary-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary-600" />
                    Monument at Reverence Specialist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    As the featured on-site agent for Monument at Reverence in
                    Reverence Summerlin, I have exclusive access and insights
                    into this premier Pulte Homes community. I can provide
                    detailed information about Monument at Reverence floor
                    plans, availability, and builder incentives.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/communities/monument-at-reverence">
                      Learn More About Monument at Reverence
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>
                  Explore More Reverence Summerlin Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link to="/properties">
                    <Search className="w-4 h-4 mr-2" />
                    View All Properties
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link to="/communities/monument-at-reverence">
                    <Home className="w-4 h-4 mr-2" />
                    Monument at Reverence
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link to="/buying">
                    <Home className="w-4 h-4 mr-2" />
                    Buying in Reverence Summerlin
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Property Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but the property you're looking for could not be found.
          The property may have been sold or the link may be incorrect.
        </p>
        <div className="space-y-3">
          <Button asChild>
            <Link to="/properties">View Available Properties</Link>
          </Button>
          <Button asChild variant="outline" className="ml-3">
            <Link to="/contact">Contact Dr. Jan Duffy</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
