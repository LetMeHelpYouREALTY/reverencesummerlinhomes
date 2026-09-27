import { data } from 'react-router'
import { config } from '~/lib/config'
import {
  buildFollowUpBossEventPayload,
  hasRequiredLeadFields,
  sendFollowUpBossEvent,
} from '~/lib/follow-up-boss'

export const SITE_LEAD_SERVER_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${config.contact.phone}.`

export const CONTACT_PAGE_LEAD = {
  formName: 'Contact Form',
  pageDescription: 'Contact Page Form',
  defaultSourcePath: '/contact',
} as const

export const HOMEPAGE_CONTACT_LEAD = {
  formName: 'Homepage Contact Form',
  pageDescription: 'Homepage Contact Section',
  defaultSourcePath: '/',
} as const

export type SiteLeadContext = {
  formName: string
  pageDescription: string
  defaultSourcePath: string
}

export function resolveLeadSourceUrl(
  request: Request,
  explicit?: string | null,
  defaultSourcePath = '/contact'
): string {
  const trimmed = explicit?.trim()
  if (trimmed) {
    return trimmed
  }
  const referer = request.headers.get('Referer')
  if (referer) {
    return referer
  }
  const path = defaultSourcePath.startsWith('/')
    ? defaultSourcePath
    : `/${defaultSourcePath}`
  return `${config.seo.siteUrl}${path}`
}

type LeadFieldBag = {
  name: string
  email: string
  phone: string
  message: string
  service: string
  timeline: string
  budget: string
  sourceUrl: string
  formName: string
  pageDescription: string
}

function readFormName(
  fields: Partial<LeadFieldBag>,
  fallback: SiteLeadContext
): SiteLeadContext {
  const formName = fields.formName?.trim() || fallback.formName
  const pageDescription =
    fields.pageDescription?.trim() || fallback.pageDescription
  return { formName, pageDescription, defaultSourcePath: fallback.defaultSourcePath }
}

function validateLeadFormFields(fields: LeadFieldBag): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = 'Please enter your full name'
  }

  const emailStr = fields.email.trim()
  const phoneStr = fields.phone.trim()

  if (!emailStr && !phoneStr) {
    errors.email = 'Please enter an email address or phone number'
  } else if (emailStr && !emailStr.includes('@')) {
    errors.email = 'Please enter a valid email address'
  }

  if (phoneStr) {
    const phoneRegex = /^[\d\s\-()]+$/
    if (!phoneRegex.test(phoneStr)) {
      errors.phone = 'Please enter a valid phone number'
    }
  }

  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters'
  }

  return errors
}

async function submitLeadToFub(
  fields: LeadFieldBag,
  leadContext: SiteLeadContext,
  request: Request
) {
  const fubPayload = buildFollowUpBossEventPayload({
    name: fields.name,
    email: fields.email,
    phone: fields.phone,
    message: fields.message,
    service: fields.service,
    timeline: fields.timeline,
    budget: fields.budget,
    formName: leadContext.formName,
    pageDescription: leadContext.pageDescription,
    sourceUrl: resolveLeadSourceUrl(
      request,
      fields.sourceUrl,
      leadContext.defaultSourcePath
    ),
  })

  const fubResult = await sendFollowUpBossEvent(fubPayload)

  if (fubResult.reason === 'missing_key') {
    return data(
      {
        success: false,
        serverError: true,
        error: 'Lead capture is temporarily unavailable',
        message: SITE_LEAD_SERVER_ERROR_MESSAGE,
      },
      { status: 503 }
    )
  }

  if (!fubResult.ok) {
    return data(
      {
        success: false,
        serverError: true,
        error: 'Failed to submit lead',
        message: SITE_LEAD_SERVER_ERROR_MESSAGE,
      },
      { status: 502 }
    )
  }

  return data({
    success: true,
    message:
      "Thank you for your message! I'll get back to you within 24 hours.",
  })
}

export async function processSiteLeadRequest(
  request: Request,
  leadContext: SiteLeadContext,
  options?: { jsonOnly?: boolean }
) {
  const contentType = request.headers.get('content-type') ?? ''

  if (contentType.includes('application/json') || options?.jsonOnly) {
    let body: Record<string, unknown> = {}
    try {
      const raw = await request.text()
      if (raw.trim()) {
        body = JSON.parse(raw) as Record<string, unknown>
      }
    } catch {
      return data({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const context = readFormName(
      {
        formName: String(body.formName ?? ''),
        pageDescription: String(body.pageDescription ?? ''),
      },
      leadContext
    )

    if (
      !hasRequiredLeadFields({
        name: String(body.name ?? ''),
        email: String(body.email ?? ''),
        phone: String(body.phone ?? ''),
      })
    ) {
      return data(
        {
          error: 'Validation failed',
          message: 'Name and a valid email or phone are required',
        },
        { status: 400 }
      )
    }

    const fields: LeadFieldBag = {
      name: String(body.name ?? ''),
      email: String(body.email ?? ''),
      phone: String(body.phone ?? ''),
      message: String(body.message ?? 'Website inquiry'),
      service: String(body.service ?? body.helpType ?? ''),
      timeline: String(body.timeline ?? ''),
      budget: String(body.budget ?? ''),
      sourceUrl: String(body.sourceUrl ?? ''),
      formName: context.formName,
      pageDescription: context.pageDescription,
    }

    const errors = validateLeadFormFields(fields)
    if (Object.keys(errors).length > 0) {
      return data(
        { error: 'Validation failed', message: 'Invalid lead payload', errors },
        { status: 400 }
      )
    }

    return submitLeadToFub(fields, context, request)
  }

  const formData = await request.formData()

  const context = readFormName(
    {
      formName: String(formData.get('formName') ?? ''),
      pageDescription: String(formData.get('pageDescription') ?? ''),
    },
    leadContext
  )

  const fields: LeadFieldBag = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    message: String(formData.get('message') ?? ''),
    service: String(formData.get('service') ?? formData.get('helpType') ?? ''),
    timeline: String(formData.get('timeline') ?? ''),
    budget: String(formData.get('budget') ?? ''),
    sourceUrl: String(formData.get('sourceUrl') ?? ''),
    formName: context.formName,
    pageDescription: context.pageDescription,
  }

  const errors = validateLeadFormFields(fields)
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please correct the errors below',
      errors,
    }
  }

  const result = await submitLeadToFub(fields, context, request)
  return result
}
