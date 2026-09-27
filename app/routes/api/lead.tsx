import type { Route } from './+types/lead'
import { processSiteLeadRequest } from '~/lib/site-lead'

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const contentType = request.headers.get('content-type') ?? ''
  const jsonOnly = contentType.includes('application/json')

  return processSiteLeadRequest(
    request,
    {
      formName: 'Website Lead Form',
      pageDescription: 'Website Lead API',
      defaultSourcePath: '/',
    },
    { jsonOnly }
  )
}
