// Plan B pricing — the full offering, on the marketing site.
//
// RESTRUCTURED 1 Oct 2026, to match app.planbforpans.com/pricing exactly and
// to stop presenting a menu. Trigger: a parent (Tina C.) wrote in — "I'm a bit
// overwhelmed on your website... First the free option then the paid option.
// Then there's the app to record symptoms. Then there's the AI tool I access
// and pay for. Is this all correct?" She read a sequence as four parallel
// products. The old page made that easy: three paid cards side by side at
// $200 / $375 / $200, plus token packs, plus a free orientation — five choices
// on one screen. The orientation is gone entirely.
//
// Now ONE PATH, three rungs:
//   1. Free — vault, daily tracking, AI synthesis (Rachel-reviewed)
//   2. The Case Review — $400. The one human product. Absorbs the old
//      $200 Roadmap / second synthesis, which is what the $375 package was
//      really selling and what Lupita's $400 already covered.
//   3. Chat with Rachel — $100/hr. Follow-ups, AFTER a Case Review, never
//      instead of one.
// Prices must stay in sync with /api/synthesis-checkout in planb-app.
//

export const metadata = {
  title: 'What it costs | Plan B for PANS',
  description:
    'One path. Your records, your tracking and your synthesis are free. The Case Review is the one paid thing — Rachel herself, reading your whole record with you.',
}

const ink = '#1F2424'
const teal = '#2E6E70'
const gold = '#20575A'
const soft = '#505858'
const rule = '#E1E5E4'
const card = '#FFFFFF'

const APP = 'https://app.planbforpans.com'
// Booked AND paid through Calendly (book + pay in one step).
// Case Review has its own dedicated event; the package + results-plan use the
// base scheduling page until they get their own event slugs.
const CASE_REVIEW_CAL = 'https://app.planbforpans.com/book/case-review?source=website-pricing'
const CONSULT_CAL = 'https://calendly.com/rachel-planbforpans/follow-up-with-rachel'

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
    price: '$400',
    name: 'The Case Review',
    eyebrow: 'The one paid thing · book + pay in one step',
    body: 'Your free Synthesis is a strong start, but it only knows what is in your child\u2019s file. The Case Review is Rachel herself. She goes through your child\u2019s whole record, birth to now, with a fine-toothed comb. She built the system behind every Synthesis, so she knows exactly where it can go wrong, and she catches and corrects any inconsistency. Together you work out the possible triggers and the order of operations: what to do first, what can wait, and what could make things worse if done too early. You leave with a clean, complete timeline of your child\u2019s illness, the full list of bloodwork still to run with its insurance codes, and an updated Synthesis when the results come in. She sets you up with the tracker and keeps tabs on you after. No stone left unturned. It is a crash course in your own child\u2019s health, with someone who has walked this road beside you.',
    cta: 'Book a Case Review \u2014 $400 \u2192',
    href: CASE_REVIEW_CAL,
    accent: teal,
    featured: true,
    badge: 'Step 2',
  },
  {
    price: '$100',
    name: 'Chat with Rachel',
    eyebrow: 'An hour, as often as you need · after a Case Review',
    body: 'If this is your first time booking, you want the Case Review above, not this \u2014 an hour on the phone without Rachel having read the whole record first is the weak version of it. Once you have had a Case Review, this is how you keep going: new results to read, a flare that came out of nowhere, a decision you are stuck on, the next stage of the plan. And the hour is yours to use however suits you \u2014 all in one go, or broken into several short calls as questions come up.',
    cta: 'Book an hour \u2014 $100 \u2192',
    href: CONSULT_CAL,
    accent: gold,
    badge: 'After that',
  },
]

export default function PricingPage() {
  return (
    <main style={{ background: '#F5F7F6', color: ink }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: '#7C8585', margin: '0 0 18px' }}>NON-PROFIT &middot; WHAT IT COSTS</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            One path. The first part is free.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Your records, your daily tracking and your <strong style={{ color: ink }}>synthesis</strong> are free, and
            they come first for everybody &mdash; everything below is built on your child&rsquo;s uploaded record.
            From there one thing is paid: <strong style={{ color: ink }}>the Case Review</strong>, which is Rachel
            herself going through your child&rsquo;s whole record with you. Most families never buy anything else.
          </p>
          <div style={{ marginTop: 22 }}>
            <a href={`${APP}/signup`} style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 16, fontWeight: 700, padding: '14px 32px', borderRadius: 9, textDecoration: 'none' }}>Start free →</a>
          </div>
        </div>
      </section>

      {/* Bucket 1 — Work with Rachel */}
      <section style={{ padding: 'clamp(44px, 7vw, 80px) 24px clamp(20px, 3vw, 30px)' }}>
        <div className="pb-container" style={{ maxWidth: 1040, margin: '0 auto' }}>
          <p style={{ color: gold, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Step 2 &middot; when you&rsquo;d rather not do it alone</p>

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
                  <span style={{ position: 'absolute', top: -11, left: 20, background: t.accent, color: '#FFFFFF', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4 }}>{t.badge}</span>
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
                  style={{ display: 'inline-block', textAlign: 'center', background: t.accent, color: '#FFFFFF', fontSize: 14.5, fontWeight: 700, padding: '13px 20px', borderRadius: 9, textDecoration: 'none' }}
                >
                  {t.cta}
                </a>
                {t.name === 'The Case Review' && (
                  <a href="https://app.planbforpans.com/case-review/what-you-get" style={{ display: 'block', textAlign: 'center', marginTop: 12, fontSize: 14, color: t.accent, fontWeight: 600 }}>
                    See exactly what you get, with real examples &rarr;
                  </a>
                )}
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

      {/* WORKING WITH RACHEL — Oct 13. Rachel: "what about testimonials… esp for
          the case review". Verbatim from parents' emails; first names only. */}
      <section style={{ padding: 'clamp(40px, 6vw, 72px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 1040, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>From Case Review families</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)', margin: '0 0 30px' }}>In parents&rsquo; <em style={{ color: teal }}>words</em></h2>
          <div className="rachel-quotes">
            {[
              { q: 'Thank you so much Rachel! 20 years from now you\u2019re going to be famous for this! I can say I knew you when\u2026', w: 'Devon, PANS parent' },
              { q: 'It was helpful for me as well to really weed through all the history and hone in on the viruses.', w: 'Devon, PANS parent' },
              { q: 'I am very committed to finding all of the triggers and trying to tackle them one by one with your guidance instead of just blindly treating with antibiotics and nsaids.', w: 'Lupita, PANS parent' },
              { q: 'I appreciate your time and effort into helping mothers like myself in getting their children on the path to recovery and a better quality of life!', w: 'Lupita, PANS parent' },
            ].map((t) => (
              <figure key={t.q}>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption>{t.w}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship — load-bearing. The Case Review went from $200 to $400 on
          1 Oct 2026. That is only defensible alongside a genuinely free path and
          a genuinely available ask. No form, no means test: PANS families are
          financially wrecked by this illness and nobody goes without because of
          a number on a page. */}
      <section style={{ padding: '0 24px clamp(30px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ background: teal, color: '#FFFFFF', borderRadius: 14, padding: 'clamp(22px, 3vw, 30px)' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.2, margin: '0 0 10px' }}>
              If the money isn&rsquo;t there, say so.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#d9e9e6', margin: 0, maxWidth: 700 }}>
              No form, no means test, no explaining yourself. Email Rachel and tell her a Case Review
              isn&rsquo;t affordable right now, and we will cover it. This illness wrecks families financially
              &mdash; that is exactly what donations are for, and nobody is going without because of a price on
              a page.
            </p>
          </div>
        </div>
      </section>

      {/* Bucket 2 — Minta tokens */}
      <section style={{ padding: 'clamp(20px, 4vw, 40px) 24px clamp(20px, 3vw, 32px)' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 8px' }}>Minta AI — pay only for what you use</p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 14px', maxWidth: 720 }}>
            Everyone gets a <strong style={{ color: ink }}>free taste</strong> of Minta. After that, you cover your own
            usage: no subscription, and nobody profits. Here&rsquo;s the honest part:{' '}
            <strong style={{ color: ink }}>Plan B for PANS uses a combination of leading AI models to process and organize information, and that work has a real cost.</strong>{' '}
            Every single message re-reads your child&rsquo;s <em>entire</em> record (every lab, every note, the whole picture),
            which is exactly why the answers are so good, and exactly why they cost real money to produce.
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 22px', maxWidth: 720 }}>
            So be prepared: <strong style={{ color: ink }}>a top-up buys fewer messages than a normal chatbot would</strong>,
            because this isn&rsquo;t small talk. It&rsquo;s a specialist reading your kid&rsquo;s full file each time. What you pay
            covers what it costs us to run, plus a little that keeps Plan B for PANS going for the next family. Every answer stays saved in your vault to keep.
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
            <a href={APP} style={{ display: 'inline-block', background: teal, color: '#FFFFFF', fontSize: 16, fontWeight: 700, padding: '14px 32px', borderRadius: 9, textDecoration: 'none' }}>Top up in the app →</a>
          </div>
          <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '18px 0 0', maxWidth: 620 }}>
            Can&rsquo;t swing the $20? <strong style={{ color: ink }}>No family is ever turned away because of cost.</strong>{' '}
            <a href={`${APP}/sponsor`} style={{ color: teal, fontWeight: 700, textDecoration: 'none', borderBottom: `2px solid rgba(31,107,107,0.32)`, paddingBottom: 1 }}>Ask about a sponsored top-up →</a>
          </p>
        </div>
      </section>

      {/* Donate */}
      <section style={{ padding: 'clamp(20px, 3vw, 28px) 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: '#F5F7F6', border: `1.5px solid ${teal}`, borderRadius: 16, padding: 'clamp(24px, 4vw, 34px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Pay it forward</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(26px, 4.4vw, 38px)', lineHeight: 1.1, color: ink, margin: '0 0 12px' }}>
            Support the mission
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            Plan B for PANS is a non-profit. A gift goes straight to the work — funding <strong style={{ color: ink }}>free syntheses</strong> for
            families who can&rsquo;t pay, the cohort <strong style={{ color: ink }}>studies</strong> that keep Minta learning,
            and keeping Minta running for the next family.
          </p>
          <a href="/donate" style={{ display: 'inline-block', marginTop: 20, background: teal, color: '#FFFFFF', fontSize: 16, fontWeight: 700, padding: '13px 32px', borderRadius: 9, textDecoration: 'none' }}>Donate →</a>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Plan B for PANS gives you direction — not medical advice or treatment. Your licensed medical team makes all clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
