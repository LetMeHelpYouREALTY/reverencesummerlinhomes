import type { Route } from './+types/resources'
import { config } from '~/lib/config'
import { silverstonePageMeta } from '~/lib/silverstone-seo'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/resources/pools` }]
}

export function meta() {
  return silverstonePageMeta('resources-pools')
}

export default function Pools() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Las Vegas Pools
        </h1>
        <p className="text-xl text-gray-600">
          Find the best pools and aquatic centers in Las Vegas.
        </p>
      </div>
    </div>
  )
}
