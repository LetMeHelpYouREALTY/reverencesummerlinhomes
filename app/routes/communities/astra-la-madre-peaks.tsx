import type { Route } from './+types/communities'
import { silverstonePageMeta } from '~/lib/silverstone-seo'

export function meta() {
  return silverstonePageMeta('communities-astra-la-madre-peaks')
}

export default function AstraLaMadrePeaks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Astra La Madre Peaks
        </h1>
        <p className="text-xl text-gray-600">
          Exclusive homes in Astra La Madre Peaks.
        </p>
      </div>
    </div>
  )
}
