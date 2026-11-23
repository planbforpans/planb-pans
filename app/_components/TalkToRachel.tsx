'use client'

import { CALENDLY_URL } from './site-links'

// "Start your free Synthesis" CTA. Plan B doesn't advertise a pre-sale consult —
// the founder isn't a consultant — so this points families straight at the free
// Synthesis signup. (CALENDLY_URL is re-exported for any remaining importers.)
export { CALENDLY_URL }

const SIGNUP_URL = 'https://app.planbforpans.com/signup'

export function TalkToRachel({ variant = 'outline' }: { variant?: 'outline' | 'quiet' }) {
  if (variant === 'quiet') {
    return (
      <a
        href={SIGNUP_URL}
        rel="noopener"
        style={{
          color: 'var(--teal)',
          fontSize: 15,
          fontWeight: 500,
          textDecoration: 'underline',
          textUnderlineOffset: 4,
        }}
      >
        Start your free Synthesis →
      </a>
    )
  }

  return (
    <a
      href={SIGNUP_URL}
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
      Start your free Synthesis →
    </a>
  )
}
