import { Outlet } from 'react-router'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { StickyPhoneBar } from '~/components/StickyPhoneBar'
import { HyperlocalSilverstoneSection } from '~/components/HyperlocalSilverstoneSection'
import { silverstonePageMeta } from '~/lib/silverstone-seo'

export function meta() {
  return silverstonePageMeta('layout')
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <HyperlocalSilverstoneSection />
      <Footer />
      <StickyPhoneBar />
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
          We're sorry, but there was an error loading this page.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}
