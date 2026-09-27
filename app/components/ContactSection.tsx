import { useFetcher } from 'react-router'
import { config } from '~/lib/config'
import { HOMEPAGE_CONTACT_LEAD, SITE_LEAD_SERVER_ERROR_MESSAGE } from '~/lib/site-lead'

type LeadActionData = {
  success?: boolean
  message?: string
  serverError?: boolean
  errors?: Record<string, string>
}

export function ContactSection() {
  const fetcher = useFetcher<LeadActionData>()
  const actionData = fetcher.data
  const isSubmitting = fetcher.state !== 'idle'

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you&apos;re looking at buying, selling, or relocating to Las
            Vegas or Summerlin, I&apos;m here to help. Let&apos;s start with a
            conversation to understand your real estate goals.
          </p>
        </div>

        {actionData && (
          <div
            className={`mb-8 rounded-lg border p-4 ${
              actionData.success
                ? 'bg-green-900/40 border-green-300 text-green-50'
                : 'bg-red-900/40 border-red-300 text-red-50'
            }`}
            role="alert"
          >
            <p className="font-semibold">
              {actionData.success
                ? 'Message sent'
                : actionData.serverError
                  ? 'Unable to send your message'
                  : 'Please correct the errors below'}
            </p>
            <p className="mt-1">
              {actionData.message ??
                (actionData.serverError
                  ? SITE_LEAD_SERVER_ERROR_MESSAGE
                  : 'Please review the form fields.')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">✉</span>
                <span>{config.contact.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">☎</span>
                <span>{config.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">📍</span>
                <span>{config.agent.office.fullAddress}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
              <p className="text-primary-100 mb-4">
                Prefer to schedule a call? Use the calendar below to book a
                convenient time.
              </p>
              <a
                href={config.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule on Calendly
              </a>
            </div>
          </div>

          <div>
            <fetcher.Form method="post" action="/api/lead" className="space-y-6">
              <input
                type="hidden"
                name="formName"
                value={HOMEPAGE_CONTACT_LEAD.formName}
              />
              <input
                type="hidden"
                name="pageDescription"
                value={HOMEPAGE_CONTACT_LEAD.pageDescription}
              />
              <input
                type="hidden"
                name="sourceUrl"
                value={`${config.seo.siteUrl}${HOMEPAGE_CONTACT_LEAD.defaultSourcePath}`}
              />

              <div>
                <label htmlFor="home-contact-name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="home-contact-name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary ${
                    actionData?.errors?.name ? 'border-2 border-red-400' : ''
                  }`}
                  placeholder="Your full name"
                  aria-invalid={actionData?.errors?.name ? 'true' : 'false'}
                />
                {actionData?.errors?.name && (
                  <p className="text-sm text-red-200 mt-1">{actionData.errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="home-contact-email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="home-contact-email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary ${
                    actionData?.errors?.email ? 'border-2 border-red-400' : ''
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={actionData?.errors?.email ? 'true' : 'false'}
                />
                {actionData?.errors?.email && (
                  <p className="text-sm text-red-200 mt-1">{actionData.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="home-contact-phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="home-contact-phone"
                  name="phone"
                  className={`w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary ${
                    actionData?.errors?.phone ? 'border-2 border-red-400' : ''
                  }`}
                  placeholder="(702) 930-8222"
                />
                {actionData?.errors?.phone && (
                  <p className="text-sm text-red-200 mt-1">{actionData.errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="home-contact-help" className="block text-sm font-medium mb-2">
                  How Can I Help?
                </label>
                <select
                  id="home-contact-help"
                  name="helpType"
                  className="w-full px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  <option value="">Select...</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="relocating">Relocating</option>
                  <option value="valuation">Property Valuation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="home-contact-message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="home-contact-message"
                  name="message"
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary ${
                    actionData?.errors?.message ? 'border-2 border-red-400' : ''
                  }`}
                  placeholder="Tell me about your real estate goals..."
                  aria-invalid={actionData?.errors?.message ? 'true' : 'false'}
                />
                {actionData?.errors?.message && (
                  <p className="text-sm text-red-200 mt-1">{actionData.errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </section>
  )
}
