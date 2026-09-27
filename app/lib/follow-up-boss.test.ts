import { describe, expect, it, vi } from 'vitest'
import {
  buildFollowUpBossEventPayload,
  getFollowUpBossAuthHeader,
  sendFollowUpBossEvent,
} from './follow-up-boss'

describe('follow-up-boss', () => {
  it('builds Basic auth header from API key', () => {
    const header = getFollowUpBossAuthHeader('test-key')
    expect(header).toBe(
      `Basic ${Buffer.from('test-key:').toString('base64')}`
    )
  })

  it('posts event payload to Follow Up Boss', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      status: 201,
      ok: true,
    })

    const payload = buildFollowUpBossEventPayload({
      name: 'Jane Buyer',
      email: 'jane@example.com',
      phone: '(702) 930-8222',
      message: 'Interested in Monument at Reverence',
      service: 'buying',
      formName: 'Contact Form',
      pageDescription: 'Contact Page Form',
      sourceUrl: 'https://reverencesummerlinhomes.com/contact',
    })

    const result = await sendFollowUpBossEvent(payload, {
      apiKey: 'test-key',
      fetchImpl,
    })

    expect(result).toEqual({ ok: true })
    expect(fetchImpl).toHaveBeenCalledOnce()
    const [url, init] = fetchImpl.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.followupboss.com/v1/events')
    expect(init.method).toBe('POST')
    expect(init.headers).toMatchObject({
      Authorization: getFollowUpBossAuthHeader('test-key'),
      'Content-Type': 'application/json',
      'X-System': 'reverencesummerlinhomes.com',
    })
    expect(JSON.parse(String(init.body))).toMatchObject({
      type: 'General Inquiry',
      source: 'reverencesummerlinhomes.com',
      person: {
        firstName: 'Jane',
        lastName: 'Buyer',
        emails: [{ value: 'jane@example.com' }],
      },
    })
  })
})
