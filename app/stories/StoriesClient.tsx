'use client'

import { useReveal } from '../_components/hooks'
import { FAMILY_STORIES, FamilyStoryFull } from '../_components/FamilyStories'

const APP = 'https://app.planbforpans.com'

export default function StoriesPage() {
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
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Stories · Where they were · What the synthesis found
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(46px, 8.5vw, 100px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.97,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1080,
            }}
          >
            Stuck for years.{' '}
            <em style={{ color: 'var(--teal)' }}>Then the whole picture.</em>
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
            Two families who&apos;d done everything — specialists, labs, protocols — and still
            couldn&apos;t see the whole picture. Here&apos;s where they were, and what the synthesis
            surfaced once every lab was read together. Names anonymized; clinical details shared
            with permission.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section style={{ padding: '72px 24px 96px' }}>
        <div className="pb-container" style={{ maxWidth: 820 }}>
          {FAMILY_STORIES.map((s, i) => (
            <div key={s.id} id={s.id} style={{ scrollMarginTop: 100 }}>
              {i > 0 && <div style={{ width: 60, height: 1, background: 'var(--ink)', opacity: 0.2, margin: '64px auto' }} />}
              <FamilyStoryFull s={s} />
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 72 }}>
            <p className="serif" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontStyle: 'italic', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.4, maxWidth: 560, margin: '0 auto 28px' }}>
              Your kid&apos;s picture is already in the data you have. Minta + the Synthesis connect it.
            </p>
            <a
              href="/pricing"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              See how it works — free Synthesis →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
