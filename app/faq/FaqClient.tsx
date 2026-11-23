'use client'

import { useReveal } from '../_components/hooks'
import { faqs } from './faqs'

export default function FAQPage() {
  const ref = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 60px',
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
            width: 460,
            height: 460,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={ref}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            FAQ · What parents want to know
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(44px, 7vw, 80px)',
              fontWeight: 300,
              letterSpacing: '-0.024em',
              lineHeight: 1,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 860,
            }}
          >
            Questions you asked. <em style={{ color: 'var(--teal)' }}>Plainly answered.</em>
          </h1>
        </div>
      </section>

      {/* Q&A */}
      <section style={{ padding: '60px 24px 100px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 860 }}>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderTop: '1px solid var(--ink)',
            }}
          >
            {faqs.map((item, i) => (
              <li
                key={item.q}
                style={{
                  borderBottom: '1px solid var(--sand)',
                  padding: '36px 0',
                  display: 'grid',
                  gridTemplateColumns: '44px 1fr',
                  gap: 18,
                  alignItems: 'baseline',
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color: 'var(--teal)',
                    fontWeight: 700,
                    textAlign: 'right',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div>
                  <h2
                    className="serif"
                    style={{
                      fontSize: 'clamp(22px, 3.2vw, 30px)',
                      fontWeight: 400,
                      letterSpacing: '-0.012em',
                      lineHeight: 1.2,
                      margin: 0,
                      marginBottom: 14,
                      color: 'var(--ink)',
                    }}
                  >
                    {item.q}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.85,
                      color: 'var(--ink-soft)',
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(20px, 2.6vw, 26px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.4,
              fontWeight: 400,
              margin: '48px 0 0',
              maxWidth: 720,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            A question we didn&apos;t answer? Email{' '}
            <a
              href="mailto:rachel@planbforpans.com"
              style={{ color: 'var(--teal)', textDecoration: 'underline' }}
            >
              rachel@planbforpans.com
            </a>{' '}
            and we&apos;ll add it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <a
          href="https://app.planbforpans.com/signup"
          rel="noopener"
          className="cta-teal"
          style={{ textDecoration: 'none' }}
        >
          Start your intake →
        </a>
      </section>
    </main>
  )
}
