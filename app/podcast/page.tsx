'use client'

import { useReveal } from '../_components/hooks'

export default function PodcastPage() {
  const ref = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      <section
        style={{
          padding: '140px 24px 160px',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
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
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={ref}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            The Plan B Podcast
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 9vw, 104px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            Coming <em style={{ color: 'var(--teal)' }}>soon.</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 560,
              margin: '28px auto 0',
            }}
          >
            The conversations are on the way. For now, everything they&rsquo;ll cover is already
            here &mdash; the whole journey, every modality, deconstructed. Start with the map.
          </p>
          <div
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/tree"
              style={{
                display: 'inline-block',
                background: 'var(--teal)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 30px',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              Open the Map &rarr;
            </a>
            <a
              href="/learn"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'var(--teal)',
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 30px',
                borderRadius: 10,
                textDecoration: 'none',
                border: '1px solid var(--teal)',
              }}
            >
              The Field Guide
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
