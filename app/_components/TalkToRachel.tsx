'use client'

import { CALENDLY_URL } from './site-links'

export { CALENDLY_URL }

const BOOKING_URL = 'https://app.planbforpans.com/book-case-review?source=website-details'

export function TalkToRachel({ variant = 'outline' }: { variant?: 'outline' | 'quiet' }) {
  if (variant === 'quiet') {
    return (
      <a
        href={BOOKING_URL}
        rel="noopener"
        style={{
          color: 'var(--teal)',
          fontSize: 15,
          fontWeight: 500,
          textDecoration: 'underline',
          textUnderlineOffset: 4,
        }}
      >
        Book a Case Review · $200
      </a>
    )
  }

  return (
    <a
      href={BOOKING_URL}
      rel="noopener"
      style={{
        display: 'inline-block',
        padding: '16px 30px',
        background: 'transparent',
        color: 'var(--teal)',
        border: '1px solid var(--teal)',
        borderRadius: 6,
        textDecoration: 'none',
        fontSize: 15,
        fontWeight: 500,
      }}
    >
      Book a Case Review · $200
    </a>
  )
}
