/** Shared FAQ copy for Reverence Summerlin — used in UI and FAQPage JSON-LD. */
export const REVERENCE_FAQ_ITEMS = [
  {
    question: 'Where is Reverence Summerlin?',
    answer:
      "Reverence Summerlin is a master-planned community in Summerlin West, Las Vegas, Nevada. Dr. Jan Duffy's office is at 10800 Reverence Pkwy, Las Vegas, NV 89134.",
  },
  {
    question: 'Who builds homes in Reverence Summerlin?',
    answer:
      'Reverence Summerlin is developed by Pulte Homes, including townhomes at Monument at Reverence and multiple single-family collections within the community.',
  },
  {
    question: 'How do I tour homes or get buyer advice in Reverence?',
    answer:
      'Call (702) 930-8222 or schedule a consultation through the contact options on this site. Dr. Jan Duffy helps buyers compare new construction and resale options in Reverence and nearby Summerlin neighborhoods.',
  },
  {
    question: 'Can Dr. Jan Duffy help me sell a home in Reverence Summerlin?',
    answer:
      'Yes. Dr. Jan Duffy provides listing guidance, pricing strategy, and marketing for sellers in Reverence Summerlin and surrounding Summerlin West areas. Start with a call or the home valuation page.',
  },
  {
    question: 'What is Monument at Reverence?',
    answer:
      'Monument at Reverence is a Pulte townhome neighborhood within Reverence Summerlin. It is a focal new-construction option for buyers who want lock-and-leave living close to Summerlin amenities.',
  },
] as const

export function reverenceFaqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: REVERENCE_FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
