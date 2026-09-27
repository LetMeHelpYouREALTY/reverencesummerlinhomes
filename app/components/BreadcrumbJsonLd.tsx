import { useLocation } from 'react-router'
import { breadcrumbListJsonLd } from '~/lib/breadcrumbs'

export function BreadcrumbJsonLd() {
  const { pathname } = useLocation()
  const schema = breadcrumbListJsonLd(pathname)

  if (!schema) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
