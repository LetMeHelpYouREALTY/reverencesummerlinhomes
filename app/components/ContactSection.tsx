import { config } from '~/lib/config'
import { CalendlyInlineWidget } from '~/components/CalendlyInlineWidget'

export function ContactSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you&apos;re looking at buying, selling, or relocating to Las
            Vegas or Summerlin, I&apos;m here to help. Pick a time below and
            let&apos;s start with a conversation about your real estate goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">✉</span>
                <a href={`mailto:${config.contact.email}`} className="hover:underline">
                  {config.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">☎</span>
                <a
                  href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
                  className="hover:underline"
                >
                  {config.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3" aria-hidden="true">📍</span>
                <span>{config.agent.office.fullAddress}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
              <p className="text-primary-100 mb-4">
                Use the calendar to book a time that works for you. Prefer to
                open it in a new tab?
              </p>
              <a
                href={config.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Open Calendly
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <CalendlyInlineWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
