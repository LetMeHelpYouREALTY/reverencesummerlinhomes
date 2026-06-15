import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { config } from '~/lib/config'
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Mountain,
  ShoppingBag,
  GraduationCap,
  Calendar,
  ArrowRight,
  Users,
  Award,
  Shield,
  TreePine,
  Car,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Info,
  Flag,
} from 'lucide-react'
import { silverstonePageMeta } from '~/lib/silverstone-seo'

export function meta() {
  return silverstonePageMeta('communities-silverstone-ranch')
}

export function links() {
  return [
    {
      rel: 'canonical',
      href: `${config.seo.siteUrl}/communities/silverstone-ranch`,
    },
  ]
}

export default function SilverstoneRanch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Guard-Gated Centennial Hills
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Silverstone Ranch
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              Northwest Las Vegas&rsquo; Premier Guard-Gated Enclave
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
              1,526 homes &bull; 9 distinct neighborhoods &bull; Floyd Lamb Park
              next door &bull; ZIP 89131
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e85d04] hover:bg-[#d54d00] text-white shadow-lg shadow-orange-500/30"
                asChild
              >
                <a href={`tel:${config.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Tour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">$685K</div>
              <div className="text-sm text-gray-500">Median Sale Price</div>
              <div className="text-xs text-green-600 font-medium">
                +5.2% YoY
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">13</div>
              <div className="text-sm text-gray-500">Avg. Days on Market</div>
              <div className="text-xs text-green-600 font-medium">
                9 days faster than metro
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">101.8%</div>
              <div className="text-sm text-gray-500">List-to-Sale Ratio</div>
              <div className="text-xs text-green-600 font-medium">
                Sellers get above asking
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">$284</div>
              <div className="text-sm text-gray-500">Price per Sq Ft</div>
              <div className="text-xs text-gray-400 font-medium">
                Nov 2025 data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life in Silverstone Ranch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developed by Pulte Homes between 2003 and 2009, Silverstone Ranch
              transformed 270 acres of championship golf fairways into
              Centennial Hills&rsquo; most coveted guard-gated community — where
              desert mountain views meet resort-caliber living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <CardTitle>Guard-Gated Security</CardTitle>
                <CardDescription>
                  24/7 staffed entrance at The Palms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Palms sub-neighborhood features a professionally staffed
                  guardhouse, providing the highest level of residential
                  security in the Centennial Hills area. Additional gated access
                  in Silverlake and Windermere villages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>Floyd Lamb Park Next Door</CardTitle>
                <CardDescription>
                  680-acre state park on your border
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Silverstone Ranch shares its northern boundary with the
                  680-acre Floyd Lamb Park — Las Vegas&rsquo; hidden gem with
                  four fishing ponds, hiking trails, and the historic Tule
                  Springs Ranch. No other Las Vegas community offers this
                  natural asset as a literal backyard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle>Protected Mountain Views</CardTitle>
                <CardDescription>
                  Spring Mountains & Sheep Range panoramas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Positioned at the northern edge of the Las Vegas Valley,
                  Silverstone Ranch captures panoramic views of the Spring
                  Mountains to the west and the Sheep Range to the north — with
                  open land ensuring these vistas are preserved.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle>Top Feeder Schools</CardTitle>
                <CardDescription>
                  O&rsquo;Roarke, Cadwallader, Arbor View
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Families benefit from the highly sought northwest CCSD
                  pathway: Thomas O&rsquo;Roarke Elementary (1.3 mi), Ralph
                  Cadwallader Middle School (1.6 mi), and Arbor View High School
                  (0.8 mi, 96% graduation rate).
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-orange-700" />
                </div>
                <CardTitle>Everything Within 10 Minutes</CardTitle>
                <CardDescription>
                  Costco, Whole Foods, Centennial Center
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Centennial Center (104 stores), Skye Canyon Marketplace, Whole
                  Foods, Costco, and Trader Joe&rsquo;s are all within a
                  10-minute drive. The 215 Beltway puts the Las Vegas Strip 30
                  minutes away.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Flag className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>World-Class Golf Nearby</CardTitle>
                <CardDescription>
                  Las Vegas Paiute Resort just 5 miles north
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Las Vegas Paiute Golf Resort — three Pete Dye-designed
                  championship courses owned by the Las Vegas Paiute Tribe —
                  sits just 5 miles north. TPC Las Vegas and Angel Park are 20
                  minutes away in Summerlin.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nine Neighborhoods */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nine Neighborhoods, One Community
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              From lock-and-leave townhomes to guard-gated estates — Silverstone
              Ranch has a home for every life stage and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guard-Gated */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-[#e85d04] text-white border-0">
                    Guard-Gated
                  </Badge>
                </div>
                <CardTitle className="text-white">The Palms</CardTitle>
                <CardDescription className="text-blue-200">
                  Estate single-family homes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-2">
                <p className="text-sm">
                  Size: 1,900–4,050+ sq ft &bull; Built: 2004–2009
                </p>
                <p className="text-sm">
                  3–5 beds &bull; 2–3 car garages &bull; Lots to 1/3 acre
                </p>
                <p className="text-sm">
                  Casitas, courtyards, mountain &amp; golf views available
                </p>
                <p className="font-semibold text-[#fbbf24] mt-3">
                  Price range: $700K–$1.1M+
                </p>
              </CardContent>
            </Card>

            {/* Gated */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-500 text-white border-0">
                    Gated
                  </Badge>
                </div>
                <CardTitle className="text-white">Silverlake</CardTitle>
                <CardDescription className="text-blue-200">
                  Single-story living
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-2">
                <p className="text-sm">
                  Size: 2,025–2,825 sq ft &bull; Built: 2004–2006
                </p>
                <p className="text-sm">
                  3–4 beds &bull; 2–3 car garages &bull; ~7,000–10,800 sq ft
                  lots
                </p>
                <p className="text-sm">
                  Popular with active adults &amp; retirees
                </p>
                <p className="font-semibold text-[#fbbf24] mt-3">
                  Price range: $550K–$750K
                </p>
              </CardContent>
            </Card>

            {/* Gated */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-500 text-white border-0">
                    Gated
                  </Badge>
                </div>
                <CardTitle className="text-white">
                  Windermere &amp; Tuscany
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Front-yard maintenance included
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-2">
                <p className="text-sm">
                  Flexible floor plans &bull; HOA-managed exterior
                </p>
                <p className="text-sm">Professional landscaping provided</p>
                <p className="text-sm">Club access included</p>
                <p className="font-semibold text-[#fbbf24] mt-3">
                  Price range: $550K–$750K
                </p>
              </CardContent>
            </Card>

            {/* Townhomes */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-green-600 text-white border-0">
                    Gated Townhomes
                  </Badge>
                </div>
                <CardTitle className="text-white">Pinehurst</CardTitle>
                <CardDescription className="text-blue-200">
                  Lock-and-leave villas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-2">
                <p className="text-sm">
                  Size: 1,345–2,015 sq ft &bull; Built: 2004–2006
                </p>
                <p className="text-sm">2–4 beds &bull; Attached 2-car garage</p>
                <p className="text-sm">
                  Covered patios, sunrise/sunset views, HOA exterior care
                </p>
                <p className="font-semibold text-[#fbbf24] mt-3">
                  Price range: $450K–$600K
                </p>
              </CardContent>
            </Card>

            {/* Non-Gated */}
            <Card className="bg-white/10 border-white/20 text-white md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-gray-500 text-white border-0">
                    Non-Gated
                  </Badge>
                </div>
                <CardTitle className="text-white">
                  Amberly, Clairbrook, Eastpoint, Greenfield, Parkfield &amp;
                  Somerset
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Entry-point access to the Silverstone Ranch lifestyle
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-2">
                <p className="text-sm">
                  Size: 1,348–2,800 sq ft &bull; Efficient floor plans,
                  open-concept designs
                </p>
                <p className="text-sm">
                  Closest proximity to Arbor View High School &amp; Cadwallader
                  Middle School
                </p>
                <p className="text-sm">
                  Access to all master community amenities: 6-acre park, tennis,
                  basketball, walking trails
                </p>
                <p className="font-semibold text-[#fbbf24] mt-3">
                  Price range: $480K–$700K
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <p className="text-blue-200 text-sm mb-4">
              All floor plans feature Mediterranean or contemporary desert
              architecture: stucco exteriors, clay tile roofs, open-concept
              great rooms, and soaring ceilings.
            </p>
            <Button
              size="lg"
              className="bg-[#e85d04] hover:bg-[#d54d00] text-white"
              asChild
            >
              <a href={`tel:${config.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Find Your Neighborhood — {config.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Silverstone Ranch Market Report
            </h2>
            <p className="text-gray-500 text-sm">
              Data: November 2025 (GLVAR / Dr. Jan Duffy proprietary analytics)
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Stats */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Metrics
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: 'Median Sale Price',
                    value: '$685,000',
                    note: '+5.2% year-over-year',
                    positive: true,
                  },
                  {
                    label: 'Price per Sq Ft',
                    value: '$284',
                    note: 'Premium vs. metro avg of $252–$265',
                    positive: true,
                  },
                  {
                    label: 'Average Days on Market',
                    value: '13 days',
                    note: '9 days faster than Las Vegas metro',
                    positive: true,
                  },
                  {
                    label: 'List-to-Sale Ratio',
                    value: '101.8%',
                    note: 'Buyers routinely cover appraisal gaps',
                    positive: true,
                  },
                  {
                    label: 'Active Listings (Nov 2025)',
                    value: '~18 homes',
                    note: 'Inventory down 12% QoQ',
                    positive: false,
                  },
                  {
                    label: 'Price Range',
                    value: '$450K–$1.1M+',
                    note: 'Townhomes to guard-gated estates',
                    positive: true,
                  },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">
                        {stat.label}
                      </div>
                      <div
                        className={`text-sm ${stat.positive ? 'text-green-600' : 'text-amber-600'}`}
                      >
                        {stat.note}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#1e3a5f]">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Comparison */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Silverstone Compares
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1e3a5f] text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">
                        Community
                      </th>
                      <th className="px-4 py-3 text-right">Median Price</th>
                      <th className="px-4 py-3 text-right">DOM</th>
                      <th className="px-4 py-3 text-right rounded-tr-lg">
                        $/Sq Ft
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-amber-50 font-semibold">
                      <td className="px-4 py-3 text-[#1e3a5f]">
                        Silverstone Ranch ★
                      </td>
                      <td className="px-4 py-3 text-right text-[#1e3a5f]">
                        $685K
                      </td>
                      <td className="px-4 py-3 text-right text-[#1e3a5f]">
                        13
                      </td>
                      <td className="px-4 py-3 text-right text-[#1e3a5f]">
                        $284
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Providence (89166)
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $555K
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">18</td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $252
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">
                        Skye Canyon (89166)
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $612K
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">21</td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $265
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">
                        Summerlin North (89134)
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $745K
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">16</td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $301
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">
                        Las Vegas Metro SFH
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        ~$470K
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        39–50
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        $308
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Source: GLVAR, Dr. Jan Duffy market analytics, November 2025
              </p>

              <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">
                      The Guard-Gated Premium Is Real
                    </h4>
                    <p className="text-green-800 text-sm">
                      Silverstone Ranch commands $19–$32/sq ft more than
                      non-gated Centennial Hills neighbors, and sells at 101.8%
                      of list price vs. 98–99% for the broader metro. This
                      premium is well-documented and appraisal-supported.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golf Course Update */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-3">
                Golf Course Status — What Buyers Need to Know
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-amber-900">
                  <p>
                    Silverstone Ranch was built around a{' '}
                    <strong>27-hole championship golf course</strong> (270 acres
                    at Grand Teton Dr &amp; Rainbow Blvd). The course closed in
                    2015 and the 34,000 sq ft clubhouse burned in November 2021.
                  </p>
                  <p>
                    In <strong>May 2025</strong>, the property sold at Clark
                    County auction for $2.8M to investor Khusrow &ldquo;K&rdquo;
                    Roohani (Avalon Springs LLC). As of late 2025,{' '}
                    <strong>no redevelopment plans have been filed</strong>.
                  </p>
                </div>
                <div className="space-y-3 text-amber-900">
                  <p>
                    A <strong>deed restriction</strong> requires 75% of
                    Silverstone Ranch homeowners to approve any change from golf
                    course use — giving residents meaningful control over the
                    land&rsquo;s future.
                  </p>
                  <p>
                    Former fairways now provide open desert views and informal
                    walking/biking paths. For golf-adjacent lots, buyers should
                    review title easements and budget for any desired
                    landscaping privacy upgrades.
                  </p>
                  <p>
                    <strong>
                      Dr. Jan Duffy can walk you through golf course due
                      diligence
                    </strong>{' '}
                    — HOA disclosure review, CC&amp;R voting rights, and
                    adjacent lot considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schools Serving Silverstone Ranch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zoned to the northwest&rsquo;s most convenient CCSD pathway — all
              three schools are within 1.6 miles of the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <CardTitle>Thomas O&rsquo;Roarke Elementary</CardTitle>
                <CardDescription>
                  PreK–5 &bull; Clark County School District
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    1.3 miles from community
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Primary zoned school for most parcels
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    STEM and arts programming
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <CardTitle>Ralph Cadwallader Middle</CardTitle>
                <CardDescription>
                  Grades 6–8 &bull; Clark County School District
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    1.6 miles from community
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    GreatSchools 7/10
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Strong academic and athletic programs
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <CardTitle>Arbor View High School</CardTitle>
                <CardDescription>
                  Grades 9–12 &bull; Clark County School District
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    0.8 miles from community
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    96% graduation rate (top 5% in Nevada)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    #36 Best College Prep HS in NV (Niche)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    3,177 students &bull; AP courses available
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-sm text-blue-900">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Verify Attendance Boundaries:</strong> CCSD zoning can
                change annually. Confirm your specific parcel at the CCSD Zoning
                Office: <strong>(702) 799-6430</strong>. Charter options nearby
                include Somerset Academy Sky Pointe and Doral Academy Red Rock.
                Private options include The Meadows School and Faith Lutheran
                (~20 min in Summerlin).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Location &amp; Nearby Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Centennial Hills, Northwest Las Vegas — ZIP 89131 — with the 215
              Beltway as your express lane to everything Las Vegas offers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                category: 'Commute',
                items: [
                  'Las Vegas Strip: ~30 min via 215',
                  'Downtown Summerlin: ~18–20 min',
                  'Downtown Las Vegas: ~25 min',
                  'Harry Reid Airport: ~35–40 min',
                  'Centennial Hills Hospital: ~8 min',
                ],
              },
              {
                category: 'Grocery & Retail',
                items: [
                  "Smith's Marketplace — closest",
                  'Costco — ~10 min',
                  'Whole Foods — ~10 min',
                  "Trader Joe's — ~10 min",
                  'Centennial Center (104 stores)',
                ],
              },
              {
                category: 'Parks & Outdoors',
                items: [
                  'Floyd Lamb Park — next door (680 ac)',
                  'Tule Springs Fossil Beds — 5 min',
                  'Centennial Hills Park — ~10 min',
                  'Spring Mountains / Mt. Charleston',
                  'Red Rock Canyon — ~20–25 min',
                ],
              },
              {
                category: 'Golf & Recreation',
                items: [
                  'Las Vegas Paiute Resort — 5 mi (3 courses)',
                  'TPC Las Vegas — ~20 min',
                  'Angel Park Golf Club — ~20 min',
                  'Centennial Hills YMCA',
                  'Clark County Rifle-Pistol Center',
                ],
              },
            ].map(col => (
              <div key={col.category}>
                <h3 className="font-bold text-[#1e3a5f] mb-4 text-lg">
                  {col.category}
                </h3>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Dining Highlights (15 min or less)
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Firefly Tapas',
                'Tenaya Creek Brewery',
                "Rachel's Kitchen",
                "Capriotti's",
                "BJ's Restaurant & Brewhouse",
                'FireRock Steakhouse',
                'Olive Garden',
                'Cafe Rio',
                'Panera Bread',
                'IHOP',
                'Farmer Boys',
                'Skye Canyon food hall',
              ].map(restaurant => (
                <Badge key={restaurant} variant="secondary" className="text-sm">
                  {restaurant}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Silverstone vs. Summerlin Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Silverstone Ranch vs. Summerlin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Both offer master-planned living in Northwest Las Vegas — but they
              serve very different buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#1e3a5f] shadow-lg">
              <CardHeader className="bg-[#1e3a5f] text-white rounded-t-lg">
                <CardTitle className="text-white text-2xl">
                  Silverstone Ranch
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Guard-Gated Centennial Hills
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                {[
                  'Guard-gated security (The Palms) + gated sub-neighborhoods',
                  'Median $685K — strong value for security tier',
                  'Floyd Lamb Park as your literal backyard',
                  'Quieter, more suburban, nature-adjacent lifestyle',
                  'Larger lots available vs. many Summerlin villages',
                  'Las Vegas Paiute Golf Resort 5 miles north',
                  'Less regulated — more freedom for RVs, parking',
                  'Diverse price range: townhomes to estates',
                  'Mature 20-year tree canopy and established landscaping',
                ].map(point => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gray-700 text-white rounded-t-lg">
                <CardTitle className="text-white text-2xl">
                  Summerlin (North)
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Howard Hughes Corp Master Plan
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                {[
                  'Prestigious brand recognition, established since 1990s',
                  'Median $745K+ — highest prices in the NW valley',
                  'Red Rock Canyon ~20 min; hiking access',
                  'Downtown Summerlin: 125+ stores, restaurants, walkable',
                  'Las Vegas Ballpark and Red Rock Casino nearby',
                  '300+ parks, 200+ miles of interconnected trails',
                  'More strictly regulated appearance standards',
                  'Multiple villages for varied price points',
                  'Direct Strip access via Summerlin Pkwy (~20–25 min)',
                ].map(point => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg text-center">
            <p className="text-amber-900 font-semibold mb-2">The Bottom Line</p>
            <p className="text-amber-800 max-w-3xl mx-auto">
              Choose Silverstone Ranch if you want guard-gated security, a
              nature-adjacent lifestyle, and the best value in Northwest Las
              Vegas. Choose Summerlin if walkable retail and brand prestige are
              your top priorities. Dr. Jan Duffy is a specialist in both — and
              can help you make the right call for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Why Buy/Sell With Dr. Jan Duffy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Silverstone Ranch Expert: Dr. Jan Duffy
            </h2>
            <p className="text-xl text-gray-600">
              Berkshire Hathaway HomeServices &bull; License #
              {config.agent.license}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {config.agent.name}
                  </h3>
                  <p className="text-lg text-gray-600">{config.agent.title}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Golf Course Due Diligence
                    </h4>
                    <p className="text-gray-600">
                      Expert guidance on golf-adjacent lot disclosures, CC&amp;R
                      voting rights, and the Silverstone Golf Club deed
                      restriction — protecting buyers before they close.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Relocation Specialist
                    </h4>
                    <p className="text-gray-600">
                      Guides California, Seattle, and New York relocators
                      through the Silverstone Ranch process — school tours,
                      neighborhood walkthroughs, and HOA document reviews
                      included.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Seller Pricing Precision
                    </h4>
                    <p className="text-gray-600">
                      Proprietary market model layering Silverstone-specific
                      comps by sub-neighborhood, golf adjacency, story count,
                      and finish level. Renovated single-story homes command 8%
                      premium — Dr. Duffy knows how to capture it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Northwest Las Vegas Authority
                    </h4>
                    <p className="text-gray-600">
                      Deep expertise across Centennial Hills, Skye Canyon,
                      Providence, and Summerlin — with the data to show buyers
                      why Silverstone Ranch delivers the best guard-gated value
                      in the valley.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#e85d04] hover:bg-[#d54d00] text-white"
                  asChild
                >
                  <a href={`tel:${config.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {config.contact.phone}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`mailto:${config.contact.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Email Dr. Duffy
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buyer &amp; Seller Benefits
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: DollarSign,
                    label: 'For Buyers',
                    text: "101.8% list-to-sale ratio means competition — Dr. Duffy's offer strategy protects you",
                  },
                  {
                    icon: TrendingUp,
                    label: 'For Sellers',
                    text: '13-day average DOM with proper staging and pricing. Above-asking results documented.',
                  },
                  {
                    icon: Shield,
                    label: 'Golf Disclosure',
                    text: 'Full golf course status briefing: deed restriction, auction history, future scenarios explained',
                  },
                  {
                    icon: Users,
                    label: 'Relocators',
                    text: 'School tour coordination, parent network introductions, HOA onboarding checklist',
                  },
                  {
                    icon: Star,
                    label: 'Off-Market Access',
                    text: "Private sales and pre-market opportunities in Silverstone Ranch's tight inventory market",
                  },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {label}
                      </div>
                      <div className="text-gray-600 text-sm">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Make Silverstone Ranch Home?
          </h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Whether you&rsquo;re buying, selling, or just exploring the
            Northwest Las Vegas market — Dr. Jan Duffy delivers the data, the
            access, and the guidance to get it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#e85d04] hover:bg-[#d54d00] text-white shadow-lg shadow-orange-500/30"
              asChild
            >
              <a href={`tel:${config.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {config.contact.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/communities">
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore All Communities
              </Link>
            </Button>
          </div>
          <div className="text-blue-300 text-sm">
            {config.agent.name} &bull; License #{config.agent.license} &bull;{' '}
            <a
              href={`mailto:${config.contact.email}`}
              className="underline hover:text-white"
            >
              {config.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
