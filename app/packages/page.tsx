// Plan B pricing — the full offering, on the marketing site (Rachel 2026-08:
// "it all needs to be on the marketing site"). Two clear actions:
//   1. Work with Rachel — all booked + paid in Calendly: a $200 Case Review, a
//      $200 second synthesis, or both together as a $375 package (saves $25).
//      The old $100 30-min call was retired 2026-08-28.
//   2. Minta tokens — pay-as-you-go, ~$20 covers months.
// The app + first synthesis stay free.

export const metadata = {
  title: 'Pricing | Plan B for PANS',
  description:
    'Start free. Work with Rachel when you want a person — a $200 Case Review and your $200 results plan — and pay only for the Minta AI you use.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const gold = '#B8860B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

const APP = 'https://app.planbforpans.com'
// Booked AND paid through Calendly (book + pay in one step).
// Case Review has its own dedicated event; the package + results-plan use the
// base scheduling page until they get their own event slugs.
const CALENDLY = 'https://calendly.com/rachel-planbforpans'
const CASE_REVIEW_CAL = 'https://calendly.com/rachel-planbforpans/the-case-review'
const ROADMAP_CAL = 'https://calendly.com/rachel-planbforpans/the-roadmap'

const PACKS: { price: string; covers: string; note: string }[] = [
  { price: '$20', covers: 'A starter top-up', note: 'Try it and see how far it takes you' },
  { price: '$50', covers: 'Goes further', note: 'A better rate per message' },
  { price: '$100', covers: 'Goes furthest', note: 'The best rate per message' },
]

type Tier = {
  price: string
  name: string
  eyebrow: string
  body: string
  cta: string
  href: string
  accent: string
  featured?: boolean
  badge?: string
}
const TIERS: Tier[] = [
  {
    price: '$200',
    name: 'The Case Review',
    eyebrow: 'Book + pay in one step',
    body: 'Rachel reads everything — every lab, every note, the whole history — and you spend about 90 minutes together. You finally understand why the things you’ve tried were only patches, what really set off your past flares, and how to head off the next one. If getting the testing done is the wall, she helps you order every test — the right panel, the right codes, one stick — and catches what the office dropped.',
    cta: 'Book with Rachel — $200 →',
    href: CASE_REVIEW_CAL,
    accent: teal,
    badge: 'Start here',
  },
  {
    price: '$375',
    name: 'Both — the package',
    eyebrow: 'Case Review + Roadmap · save $25',
    body: 'The full path, start to finish: the Case Review to get the right testing done, then the Roadmap once results come back. Both together — and $25 less than buying them separately.',
    cta: 'Book the package — $375 →',
    href: CALENDLY,
    accent: teal,
    featured: true,
    badge: 'Best value',
  },
  {
    price: '$200',
    name: 'The Roadmap',
    eyebrow: 'Your results → a plan',
    body: 'Once your test results come back, Rachel reads all of them with you and builds your child’s actual plan — what’s driving what, what to do next, and who to see. You leave with a real direction, not a pile of numbers.',
    cta: 'Book the Roadmap — $200 →',
    href: ROADMAP_CAL,
    accent: gold,
    badge: 'After your labs',
  },
]

export default function PricingPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>Pricing · Non-profit</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Start free. Add a person when you want one.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Your vault, your tracking, and your <strong style={{ color: ink }}>first synthesis</strong> are free.
            From there, two simple choices: <strong style={{ color: ink }}>work with Rachel</strong> when you want a
            real person on your kid&rsquo;s case, and use <strong style={{ color: ink }}>Minta AI</strong> pay-as-you-go —
            you only ever cover your own usage.
          </p>
          <div style={{ marginTop: 22 }}>
            <a href={`${APP}/signup`} style={{ display: 'inline-block', background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '14px 32px', borderRadius: 9, textDecoration: 'none' }}>Start free →</a>
          </div>
        </div>
      </section>

      {/* Bucket 1 — Work with Rachel */}
      <section style={{ padding: 'clamp(44px, 7vw, 80px) 24px clamp(20px, 3vw, 30px)' }}>
        <div className="pb-container" style={{ maxWidth: 1040, margin: '0 auto' }}>
          <p style={{ color: gold, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 20px' }}>Work with Rachel — a real person on your kid&rsquo;s case</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {TIERS.map((t) => (
              <div
                key={t.name}
                style={{
                  background: card,
                  border: t.featured ? `2px solid ${teal}` : `1px solid ${rule}`,
                  borderRadius: 14,
                  padding: '26px 26px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {t.badge && (
                  <span style={{ position: 'absolute', top: -11, left: 20, background: t.accent, color: '#fffdf7', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4 }}>{t.badge}</span>
                )}
                <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: soft, fontWeight: 700, margin: '0 0 6px' }}>{t.eyebrow}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                  <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 26, lineHeight: 1.1, color: ink, margin: 0 }}>{t.name}</h2>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 34, color: t.accent, lineHeight: 1 }}>{t.price}</span>
                </div>
                <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.6, margin: '12px 0 20px', flex: 1 }}>{t.body}</p>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', textAlign: 'center', background: t.accent, color: '#fffdf7', fontSize: 14.5, fontWeight: 700, padding: '13px 20px', borderRadius: 9, textDecoration: 'none' }}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '18px 0 0', maxWidth: 720 }}>
            Your first synthesis is free and self-serve. Working with Rachel is the human-reviewed path — the{' '}
            <strong style={{ color: ink }}>results plan</strong> is built from your real test results, and a full plan
            only comes from one she has read by hand. All three options above are booked and paid in one step through
            Calendly. Always meant to bring to your child&rsquo;s doctor, not replace them.
          </p>
        </div>
      </section>

      {/* Bucket 2 — Minta tokens */}
      <section style={{ padding: 'clamp(20px, 4vw, 40px) 24px clamp(20px, 3vw, 32px)' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 8px' }}>Minta AI — pay only for what you use</p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 14px', maxWidth: 720 }}>
            Everyone gets a <strong style={{ color: ink }}>free taste</strong> of Minta. After that you cover your own
            usage — no subscription, no markup, not a cent of profit. Here&rsquo;s the honest part:{' '}
            <strong style={{ color: ink }}>Minta runs on the most advanced AI in the world, and it is genuinely expensive.</strong>{' '}
            Every single message re-reads your child&rsquo;s <em>entire</em> record — every lab, every note, the whole picture —
            which is exactly why the answers are so good, and exactly why they cost real money to produce.
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 22px', maxWidth: 720 }}>
            So be prepared: <strong style={{ color: ink }}>a top-up buys fewer messages than a normal chatbot would</strong> —
            because this isn&rsquo;t small talk, it&rsquo;s a specialist reading your kid&rsquo;s full file each time. You&rsquo;re
            paying only what that actually costs us to run, and every answer stays saved in your vault to keep.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {PACKS.map((p) => (
              <div key={p.price} style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '26px 26px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 52px)', lineHeight: 1, color: ink, margin: '0 0 10px' }}>{p.price}</div>
                <p style={{ fontSize: 15, color: teal, fontWeight: 700, margin: '0 0 6px' }}>{p.covers}</p>
                <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.55, margin: 0 }}>{p.note}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a href={APP} style={{ display: 'inline-block', background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '14px 32px', borderRadius: 9, textDecoration: 'none' }}>Top up in the app →</a>
          </div>
          <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '18px 0 0', maxWidth: 620 }}>
            Can&rsquo;t swing the $20? <strong style={{ color: ink }}>No family is ever turned away because of cost.</strong>{' '}
            <a href={`${APP}/sponsor`} style={{ color: teal, fontWeight: 700, textDecoration: 'none', borderBottom: `2px solid rgba(31,107,107,0.32)`, paddingBottom: 1 }}>Ask about a sponsored top-up →</a>
          </p>
        </div>
      </section>

      {/* Donate */}
      <section style={{ padding: 'clamp(20px, 3vw, 28px) 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: '#f1efe2', border: `1.5px solid ${teal}`, borderRadius: 16, padding: 'clamp(24px, 4vw, 34px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Pay it forward</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(26px, 4.4vw, 38px)', lineHeight: 1.1, color: ink, margin: '0 0 12px' }}>
            Support the mission
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            Plan B is a non-profit. A gift goes straight to the work — funding <strong style={{ color: ink }}>free syntheses</strong> for
            families who can&rsquo;t pay, the cohort <strong style={{ color: ink }}>studies</strong> that keep Minta learning,
            and keeping Minta running for the next family.
          </p>
          <a href="/donate" style={{ display: 'inline-block', marginTop: 20, background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '13px 32px', borderRadius: 9, textDecoration: 'none' }}>Donate →</a>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Plan B gives you direction — not medical advice or treatment. Your licensed medical team makes all clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
