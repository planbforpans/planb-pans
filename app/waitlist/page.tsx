'use client'

import { useState } from 'react'
import { useReveal } from '../_components/hooks'

const APP = 'https://app.planbforpans.com'

export default function WaitlistPage() {
  const head = useReveal()

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <section
        style={{
          padding: '120px 24px 72px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div ref={head} className="pb-container reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>The free spot · Non-profit</p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(44px, 8.5vw, 100px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.97,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1080,
            }}
          >
            The Synthesis is free.{' '}
            <em style={{ color: 'var(--teal)' }}>Done in the open.</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Plan B is a non-profit, and the Synthesis is free for every family. This list is for the
            families who let their Synthesis be <strong style={{ color: 'var(--ink)' }}>done in the open</strong> —
            each week Rachel takes one and builds the full Synthesis with the work published (your child stays
            anonymous), so we all learn together. And if even the metered Minta tokens are out of reach, get on the
            list for <strong style={{ color: 'var(--ink)' }}>free Minta usage</strong>, funded by donors. We&apos;d
            rather help now than make you wait.
          </p>
          <div style={{ marginTop: 36 }}>
            <a
              href="#join"
              style={{
                display: 'inline-block',
                padding: '16px 34px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Join the waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* The deal */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 24px 48px' }}>
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>How it works</p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--ink)',
              margin: '0 0 40px',
              maxWidth: 720,
            }}
          >
            Open to anyone. <em style={{ color: 'var(--teal)' }}>Done in public.</em>
          </h2>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 22 }}>
            {[
              ['Join the waitlist', 'It&apos;s open — no application, no proof of hardship. Willing to have your Synthesis done in the open is reason enough.'],
              ['Each week, one family is chosen', 'The waitlist is public and transparent. No favourites, no fine print.'],
              ['You get the full Synthesis — free', 'Every lab read together, what&apos;s been missed, what hasn&apos;t been tried, the tests to order next, and a month-by-month calendar. The Synthesis is free for every family; this is the cohort whose work is published.'],
              ['Your Synthesis goes public — your child stays anonymous', 'That&apos;s the trade, and it&apos;s the whole point. Your child&apos;s name is removed, but the synthesis and symptoms are published in our <a href="/stories" style="color:var(--teal)">stories</a> as &ldquo;what Minta found&rdquo; — so we all learn together. Your hardest season makes the next family&apos;s read sharper.'],
            ].map(([title, body], i) => (
              <li key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span className="serif" style={{ fontSize: 34, fontWeight: 300, color: 'var(--teal)', lineHeight: 1, minWidth: 34 }}>{i + 1}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, color: 'var(--ink)', margin: '0 0 6px' }}>{title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </li>
            ))}
          </ol>

          <div
            style={{
              marginTop: 36,
              background: 'var(--cream-light)',
              border: '1px solid var(--rule)',
              borderLeft: '3px solid var(--teal)',
              borderRadius: 8,
              padding: 'clamp(22px, 3vw, 30px)',
            }}
          >
            <p className="serif" style={{ fontSize: 'clamp(18px, 2.2vw, 23px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.4, fontWeight: 400, margin: '0 0 12px' }}>
              One thing we need from you: be willing to test.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>
              <strong style={{ color: 'var(--teal)' }}>Plan B doesn&apos;t guess.</strong> If your
              child&apos;s current labs aren&apos;t enough to see the whole picture, Minta won&apos;t
              make something up — she&apos;ll tell you exactly which tests to run first, and you go get
              them. This works best for families who are ready to chase the data.
            </p>
          </div>
        </div>
      </section>

      {/* The form */}
      <section id="join" style={{ padding: '8px 24px clamp(72px, 9vw, 112px)', scrollMarginTop: 24 }}>
        <div className="pb-container" style={{ maxWidth: 640 }}>
          <WaitlistForm />
        </div>
      </section>
    </main>
  )
}

function WaitlistForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')
  const [consent, setConsent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const f = new FormData(e.currentTarget)
    if (!consent) {
      setError('Please agree to the public-learning consent to take a free spot.')
      return
    }
    setState('sending')
    try {
      const res = await fetch(`${APP}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          caregiver_name: f.get('caregiver_name'),
          caregiver_email: f.get('caregiver_email'),
          child_initials: f.get('child_initials'),
          child_age: f.get('child_age'),
          situation: f.get('situation'),
          consent_public: true,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setState('error')
        return
      }
      setState('done')
    } catch {
      setError('Could not reach the server. Email rachel@planbforpans.com and we’ll add you.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div
        style={{
          background: 'var(--paper)',
          border: '1px solid var(--teal)',
          borderRadius: 10,
          padding: 'clamp(32px, 5vw, 48px)',
          textAlign: 'center',
        }}
      >
        <p className="serif" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, color: 'var(--ink)', margin: '0 0 12px' }}>
          You&apos;re on the list. 💛
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>
          One family is chosen each week. We&apos;ll email you — and either way, every published
          synthesis is yours to learn from at{' '}
          <a href="/stories" style={{ color: 'var(--teal)' }}>/stories</a>.
        </p>
      </div>
    )
  }

  const label: React.CSSProperties = { fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600, marginBottom: 6, display: 'block' }
  const input: React.CSSProperties = {
    width: '100%', padding: '12px 14px', fontSize: 15, borderRadius: 6, border: '1px solid var(--rule)',
    background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'inherit',
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--rule)',
        borderRadius: 10,
        padding: 'clamp(26px, 4vw, 40px)',
        display: 'grid',
        gap: 18,
      }}
    >
      <p className="serif" style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
        Join the waitlist
      </p>

      <div>
        <label style={label}>Your name</label>
        <input name="caregiver_name" type="text" autoComplete="name" style={input} />
      </div>
      <div>
        <label style={label}>Email <span style={{ color: 'var(--teal)' }}>*</span></label>
        <input name="caregiver_email" type="email" required autoComplete="email" style={input} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <div>
          <label style={label}>Child&apos;s initials</label>
          <input name="child_initials" type="text" maxLength={12} placeholder="e.g. D.M." style={input} />
        </div>
        <div>
          <label style={label}>Age</label>
          <input name="child_age" type="number" min={0} max={25} style={input} />
        </div>
      </div>
      <div>
        <label style={label}>What&apos;s going on? (a few lines)</label>
        <textarea name="situation" rows={4} style={{ ...input, resize: 'vertical' }} />
      </div>

      {/* Consent — required */}
      <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', background: 'var(--cream-light)', border: '1px solid var(--rule)', borderRadius: 8, padding: '14px 16px' }}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, width: 18, height: 18, accentColor: 'var(--teal)', flexShrink: 0 }}
        />
        <span style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          I understand that in exchange for a free Synthesis, my child&apos;s information — their
          symptoms and lab findings, with <strong>their name removed</strong> — will be published in
          Plan B&apos;s case studies so other families can learn. <strong>The name stays private; the
          findings become public.</strong>
        </span>
      </label>

      {error && (
        <p style={{ fontSize: 14, color: 'var(--rust, #a64523)', margin: 0 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        style={{
          padding: '15px 28px',
          background: 'var(--teal)',
          color: 'var(--cream)',
          border: 'none',
          borderRadius: 6,
          fontSize: 15,
          fontWeight: 600,
          cursor: state === 'sending' ? 'default' : 'pointer',
          opacity: state === 'sending' ? 0.7 : 1,
        }}
      >
        {state === 'sending' ? 'Adding you…' : 'Join the waitlist →'}
      </button>
    </form>
  )
}
