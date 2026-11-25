import type { Metadata } from 'next'
import Link from 'next/link'

// What we're learning — the hub (Rachel, 2026-11-25: "we need a page to share
// things we are learning"). One clue at a time; Clue 01 is the landing page for
// the 10-week series "Behavior is a symptom. Track it."

const DESCRIPTION =
  'Plan B for PANS is a research engine run by parents. Every family that tracks teaches us something. Here is what we are learning about PANS, PANDAS, autism and brain inflammation, one clue at a time.'

export const metadata: Metadata = {
  title: 'What we’re learning — Plan B for PANS',
  description: DESCRIPTION,
  alternates: { canonical: '/learning' },
  openGraph: {
    title: 'What we’re learning — Plan B for PANS',
    description: DESCRIPTION,
    url: 'https://planbforpans.com/learning',
    type: 'website',
    images: ['/opengraph-image'],
  },
}

export default function LearningHub() {
  return (
    <main className="lrn">
      <header className="lrn-hero">
        <div className="lrn-wrap">
          <p className="lrn-serial">
            <span className="tag">Field notes</span>
            <span className="muted">From families who track</span>
          </p>
          <h1>What we&rsquo;re <em>learning.</em></h1>
          <div className="lrn-narrow">
            <p className="lrn-lede" style={{ marginBottom: 14 }}>
              Plan B for PANS is a <strong>research engine run by parents.</strong> There is still so much nobody knows about PANS, PANDAS, autism and brain inflammation. Every family that tracks teaches us something, and the more of us who do it, the faster we all learn.
            </p>
            <p className="lrn-lede">
              This is where we share it. <strong>One clue at a time</strong>, in plain words, with the tests to ask for and what has helped.
            </p>
            <p className="lrn-sign">&mdash; Rachel</p>
          </div>
        </div>
      </header>

      <section className="lrn-section">
        <div className="lrn-wrap">
          <p className="lrn-eyebrow">The clues so far</p>
          <h2>Start <em>here.</em></h2>

          <Link href="/learning/behaviors-are-a-clue" className="lrn-entry">
            <div className="lrn-entry-art">
              <span className="lrn-serial" style={{ color: 'var(--teal-light)', margin: 0 }}>
                <span className="tag">Clue 01</span>
                <span>New</span>
              </span>
              <span className="big" aria-hidden="true">01</span>
              <span className="chips">
                <span>Rage</span><span>OCD</span><span>Food</span><span>Tics</span><span>Sleep</span><span>+5</span>
              </span>
            </div>
            <div className="lrn-entry-copy">
              <p className="t">Behaviors are a clue.</p>
              <p>Behavior is often the loudest sign that something in the body changed. Ten behaviors, what each can be a clue to, what to check, and what has brought it down.</p>
              <span className="go">Read clue 01 &rarr;</span>
            </div>
          </Link>

          <p className="lrn-eyebrow" style={{ marginTop: 36 }}>Coming in the series · Behavior is a symptom. Track it.</p>
          <div className="lrn-soon">
            <div><span className="n">Clue 02</span><span className="t">Coming soon</span></div>
            <div><span className="n">Clue 03</span><span className="t">Coming soon</span></div>
            <div><span className="n">Clue 04</span><span className="t">Coming soon</span></div>
          </div>
          <p className="body" style={{ marginTop: 18 }}>A new clue every week. The fastest way to help write the next one is to track your own child.</p>
          <div className="lrn-ctas" style={{ marginTop: 10 }}>
            <a href="https://app.planbforpans.com/signup" rel="noopener" className="lrn-btn solid">Start tracking free</a>
            <a href="/daily-tracker" className="lrn-btn ghost">How the tracker works</a>
          </div>
        </div>
      </section>

      <section className="lrn-section alt" style={{ borderBottom: 0 }}>
        <div className="lrn-wrap">
          <div className="lrn-live">
            <span className="pulse"><span className="pulse-dot" aria-hidden="true" />Live</span>
            <p>The numbers behind these clues update as families track: which behaviors are most common, what came before a flare, and what made it better. Patterns, never names.</p>
            <a href="https://app.planbforpans.com/learning" rel="noopener" className="lrn-btn ghost">See what families are tracking right now</a>
          </div>
        </div>
      </section>
    </main>
  )
}
