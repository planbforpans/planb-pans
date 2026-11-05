'use client'

import type { ReactNode } from 'react'
import MethodSection from '../_components/MethodSection'
import { useReveal } from '../_components/hooks'

function InstallStep({ n, visual, children }: { n: number; visual: ReactNode; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 10, padding: '14px 16px' }}>
      <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'var(--teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{n}</div>
      <p style={{ flex: 1, margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--ink)', fontWeight: 300 }}>{children}</p>
      <div style={{ flexShrink: 0, width: 56, display: 'flex', justifyContent: 'center' }}>{visual}</div>
    </div>
  )
}
function ShareGlyph() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden="true">
      <path d="M13 3 L13 18" stroke="#2E6E70" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 7 L13 2 L18 7" stroke="#2E6E70" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12 L4 12 L4 27 L22 27 L22 12 L19 12" stroke="#2E6E70" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function SafariGlyph() {
  return <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(160deg,#3aa3ff,#1f6bd6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧭</div>
}
function ChromeGlyph() {
  return <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4,#ea4335)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 13, height: 13, borderRadius: '50%', background: '#fff', border: '3px solid #4285f4' }} /></div>
}
function AddRowGlyph() {
  return <div style={{ width: 30, height: 30, borderRadius: 7, border: '2px solid #2E6E70', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E6E70', fontSize: 20 }}>+</div>
}
function AddBtnGlyph() {
  return <span style={{ background: '#2E6E70', color: '#fff', padding: '5px 13px', borderRadius: 14, fontSize: 12, fontWeight: 600 }}>Add</span>
}
function AppIconGlyph() {
  return <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌱</div>
}
function MenuGlyph() {
  return <div style={{ width: 30, height: 30, borderRadius: 7, border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: 18, fontWeight: 700 }}>⋮</div>
}

export default function TrackerPage() {
  const intro = useReveal()
  const close = useReveal()
  const example = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 80px',
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
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={intro}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Daily tracker · What it actually does
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1000,
            }}
          >
            The log you wish <em style={{ color: 'var(--teal)' }}>you&apos;d been keeping.</em>
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
            A PANS kid on a protocol generates more variables in a week than anyone can hold in
            their head. The tracker is how you stop guessing — and how Minta gets the signal
            it needs to tell you what&apos;s actually working.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
              marginTop: 56,
            }}
          >
            {[
              {
                k: 'One tap',
                v: 'Log meds, symptoms, reactions in seconds. Works offline.',
              },
              {
                k: 'Weekly roll-up',
                v: 'Rate each symptom 0–10. Spot trends before they become crises.',
              },
              {
                k: 'Analysis on demand',
                v: 'Minta reads your full timeline and flags correlations you&apos;d miss.',
              },
              {
                k: 'Share-ready',
                v: 'Export clean timelines to take into any practitioner appointment.',
              },
            ].map((c) => (
              <div
                key={c.k}
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {c.k}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.v }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method graphic — the 4-step visual already built */}
      <MethodSection />

      {/* The deeper story */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream)',
        }}
      >
        <div
          ref={close}
          className="pb-container reveal"
          style={{ maxWidth: 960 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 64,
              alignItems: 'start',
            }}
            className="tracker-deep"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                Why it matters
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                What&apos;s helping? <em style={{ color: 'var(--teal)' }}>What isn&apos;t?</em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Track your child&apos;s symptoms: rage, OCD, food intake, constipation, sleep,
                whatever you&apos;re watching. Two minutes a night. Log what changed that day,
                too: a new supplement, a dose, a cold in the house.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  marginTop: 18,
                }}
              >
                In a few weeks you can see what&apos;s working and what isn&apos;t, instead of
                guessing. And when things get worse, Minta looks at the nights with you and helps
                you troubleshoot what changed.
              </p>
              <p
                className="serif"
                style={{
                  fontSize: 24,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  margin: '32px 0 0',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  borderLeft: '3px solid var(--teal)',
                  paddingLeft: 22,
                }}
              >
                The log is the protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXAMPLE — Rachel, Oct 28: the tracker page never showed what it
          looks like, or why it works. Same phone as the homepage, with the
          payoff spelled out. Illustrative, not a real child. */}
      <div ref={example} className="tracker-show reveal">
        <div className="tracker-in">
          <div className="phone" aria-hidden="true">
            <div className="phone-screen">
              <p className="ph-date">Tonight &middot; Tue</p>
              <p className="ph-title">How was today?</p>
              {[
                { k: 'Rage', v: 3, w: 30 },
                { k: 'OCD', v: 4, w: 40 },
                { k: 'Food', v: 6, w: 60 },
                { k: 'Sleep', v: 7, w: 70 },
              ].map((r, i) => (
                <div key={r.k} className="ph-row">
                  <span>{r.k}</span><b>{r.v}</b>
                  <div className="ph-track"><i style={{ ['--w' as string]: `${r.w}%`, animationDelay: `${0.3 + i * 0.25}s` }} /></div>
                </div>
              ))}
              <p className="ph-note">+ Started magnesium, 100 mg</p>
              <div className="ph-spark">{[8, 7, 8, 7, 8, 6, 7, 5, 5, 4, 4, 3, 3, 3].map((h, i) => <span key={i} style={{ height: `${h * 10}%`, animationDelay: `${1.4 + i * 0.05}s` }} />)}</div>
              <p className="ph-saved">Rage &middot; last 14 nights</p>
            </div>
          </div>
          <div className="tracker-copy">
            <p className="eyebrow" style={{ marginBottom: 14 }}>An example &middot; what it shows you</p>
            <h2>Two minutes a night. <em>Then the pattern shows up.</em></h2>
            <ul>
              <li><b>Every night:</b> rate rage, OCD, food, sleep, constipation &mdash; whatever you&apos;re watching.</li>
              <li><b>What changed that day:</b> a new supplement, a dose, a cold in the house.</li>
              <li><b>Two weeks later:</b> rage drifted down from 8 to 3 after the magnesium started &mdash; and Minta points it out, so you know what to keep.</li>
              <li><b>When it gets worse:</b> Minta looks back at the nights with you and helps you find what changed.</li>
            </ul>
            <p style={{ fontSize: 13, color: 'var(--sand-dark)', fontStyle: 'italic', margin: '0 0 22px' }}>An illustration, not a real child.</p>
            <a href="#install" className="cta-teal">Put the tracker on your phone</a>
          </div>
        </div>
      </div>

      {/* ADD TO PHONE — hand-held visual walkthrough */}
      <section id="install" style={{ padding: 'clamp(56px, 7vw, 88px) 24px', background: 'var(--cream)', borderTop: '1px solid var(--rule)', scrollMarginTop: 90 }}>
        <div className="pb-container" style={{ maxWidth: 680 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>📱 Put it on your phone</p>
          <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 14px' }}>
            On your home screen in <em style={{ color: 'var(--teal)' }}>under a minute.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: '0 0 30px' }}>
            No app store, nothing to download. We&apos;ll walk you through it — one step at a time.
          </p>

          <p className="serial" style={{ color: 'var(--teal)', margin: '0 0 14px', fontSize: 13 }}>🍎 On an iPhone</p>
          <div style={{ display: 'grid', gap: 12 }}>
            <InstallStep n={1} visual={<SafariGlyph />}>
              Open <strong>Safari</strong> (the blue compass) and go to <strong>app.planbforpans.com</strong>
            </InstallStep>
            <InstallStep n={2} visual={<ShareGlyph />}>
              Tap the <strong>Share button</strong> at the bottom — the little square with an arrow pointing up
            </InstallStep>
            <InstallStep n={3} visual={<AddRowGlyph />}>
              Scroll down and tap <strong>&ldquo;Add to Home Screen&rdquo;</strong>
            </InstallStep>
            <InstallStep n={4} visual={<AddBtnGlyph />}>
              Tap <strong>&ldquo;Add&rdquo;</strong> in the top-right corner
            </InstallStep>
            <InstallStep n={5} visual={<AppIconGlyph />}>
              Done! Tap the new <strong>Plan B icon</strong> on your home screen — it opens like a real app
            </InstallStep>
          </div>

          <p className="serial" style={{ color: 'var(--teal)', margin: '30px 0 14px', fontSize: 13 }}>🤖 On Android</p>
          <div style={{ display: 'grid', gap: 12 }}>
            <InstallStep n={1} visual={<ChromeGlyph />}>
              Open <strong>Chrome</strong> and go to <strong>app.planbforpans.com</strong>
            </InstallStep>
            <InstallStep n={2} visual={<MenuGlyph />}>
              Tap the <strong>menu (⋮)</strong> in the top-right, then <strong>&ldquo;Install app&rdquo;</strong> (or &ldquo;Add to Home screen&rdquo;)
            </InstallStep>
            <InstallStep n={3} visual={<AppIconGlyph />}>
              Tap the <strong>Plan B icon</strong> on your home screen and you&apos;re in
            </InstallStep>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', fontWeight: 300, margin: '24px 0 0', background: 'var(--cream-soft)', border: '1px solid var(--rule)', borderRadius: 8, padding: '14px 16px' }}>
            <strong style={{ color: 'var(--ink)' }}>Stuck?</strong> The most common hiccup: it has to be{' '}
            <strong>Safari</strong> on iPhone (not Chrome, and not a link opened inside a text or Facebook).
            Open Safari fresh, type the address, and the steps above will be there.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Start free
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 30,
              color: 'var(--ink)',
            }}
          >
            When the protocols fail,
            <br />
            <em style={{ color: 'var(--teal)' }}>this is your Plan B for PANS.</em>
          </h2>
          <a
            href="https://app.planbforpans.com/signup"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Start tracking →
          </a>
        </div>
      </section>
    </main>
  )
}
