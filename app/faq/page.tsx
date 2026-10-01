import type { Metadata } from 'next'
import FaqClient from './FaqClient'
import { faqs } from './faqs'

export const metadata: Metadata = {
  title: 'FAQ — Plan B for PANS',
  description:
    'Answers for parents: is it free, how Minta differs from ChatGPT, your child\'s privacy, whether it replaces your doctor, and what to do if you\'ve already tried everything.',
}

// FAQPage schema built from the real on-page Q&A — makes the answers eligible
// for rich results in Google. Kept in sync automatically via the shared array.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  )
}
