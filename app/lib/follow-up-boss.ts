const FUB_EVENTS_URL = 'https://api.followupboss.com/v1/events'
export const FUB_SITE_SOURCE = 'reverencesummerlinhomes.com'

export type FubEventType =
  | 'General Inquiry'
  | 'Seller Inquiry'
  | 'Property Inquiry'
  | 'Registration'

export type FollowUpBossEventPayload = {
  source: string
  system: string
  type: FubEventType
  message: string
  description: string
  sourceUrl: string
  person: {
    firstName: string
    lastName: string
    emails: Array<{ value: string }>
    phones: Array<{ value: string }>
    tags: string[]
  }
}

export type SendFollowUpBossEventResult =
  | { ok: true }
  | {
      ok: false
      reason: 'missing_key' | 'fub_error' | 'network_error'
      status?: number
    }

export function getFollowUpBossAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
}

export function splitFullName(fullName: string): {
  firstName: string
  lastName: string
} {
  const trimmed = fullName.trim()
  if (!trimmed) {
    return { firstName: 'Website', lastName: 'Visitor' }
  }
  const parts = trimmed.split(/\s+/)
  const firstName = parts[0] ?? trimmed
  const lastName = parts.length > 1 ? parts.slice(1).join(' ') : firstName
  return { firstName, lastName }
}

export function resolveFubEventType(service: string): FubEventType {
  const normalized = service.trim().toLowerCase()
  if (normalized === 'selling' || normalized === 'valuation') {
    return 'Seller Inquiry'
  }
  return 'General Inquiry'
}

export function buildFollowUpBossEventPayload(input: {
  name: string
  email?: string
  phone?: string
  message: string
  service?: string
  timeline?: string
  budget?: string
  formName: string
  pageDescription: string
  sourceUrl: string
  type?: FubEventType
}): FollowUpBossEventPayload {
  const { firstName, lastName } = splitFullName(input.name)
  const email = input.email?.trim()
  const phone = input.phone?.trim()

  const fieldSummary = [
    input.service ? `Service: ${input.service}` : null,
    input.timeline ? `Timeline: ${input.timeline}` : null,
    input.budget ? `Budget: ${input.budget}` : null,
  ]
    .filter(Boolean)
    .join(' | ')

  const messageParts = [input.message.trim()]
  if (fieldSummary) {
    messageParts.push(fieldSummary)
  }

  return {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: input.type ?? resolveFubEventType(input.service ?? ''),
    message: messageParts.filter(Boolean).join('\n\n'),
    description: `${input.pageDescription} — ${input.formName}`,
    sourceUrl: input.sourceUrl,
    person: {
      firstName,
      lastName,
      emails: email ? [{ value: email }] : [],
      phones: phone ? [{ value: phone }] : [],
      tags: [FUB_SITE_SOURCE, input.formName],
    },
  }
}

export async function sendFollowUpBossEvent(
  payload: FollowUpBossEventPayload,
  options?: {
    apiKey?: string
    fetchImpl?: typeof fetch
  }
): Promise<SendFollowUpBossEventResult> {
  const apiKey = options?.apiKey ?? process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not set; cannot send Follow Up Boss event'
    )
    return { ok: false, reason: 'missing_key' }
  }

  const fetchImpl = options?.fetchImpl ?? fetch

  try {
    const response = await fetchImpl(FUB_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: getFollowUpBossAuthHeader(apiKey),
        'Content-Type': 'application/json',
        'X-System': FUB_SITE_SOURCE,
      },
      body: JSON.stringify(payload),
    })

    if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
      console.error(
        `Follow Up Boss events API error: HTTP ${response.status}`
      )
      return { ok: false, reason: 'fub_error', status: response.status }
    }

    return { ok: true }
  } catch {
    console.error('Follow Up Boss events API request failed')
    return { ok: false, reason: 'network_error' }
  }
}

export function hasRequiredLeadFields(fields: {
  name?: string
  email?: string
  phone?: string
}): boolean {
  const name = fields.name?.trim() ?? ''
  const email = fields.email?.trim() ?? ''
  const phone = fields.phone?.trim() ?? ''
  return name.length >= 2 && (email.length > 0 || phone.length > 0)
}
