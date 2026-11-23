import type { Metadata } from 'next'
import Link from 'next/link'

// This page used to be a one-line `redirect()` to app.planbforpans.com/donate.
// That is an Ad Grants website-policy violation on two counts, both named in
// the policy text: a site "cannot redirect to another address, a third-party
// portal", and "donation links must work and go to a secure page dedicated to
// donations". A reviewer clicking Donate in the header left the domain being
// reviewed, and planbforpans.com/donate served no content of its own at all.
// (Ad Grants rejections 2026-10-29 and 2026-11-03, neither of which named a
// defect — this was found by auditing the site against the policy text.)
//
// So the donation page lives HERE now, on the domain, fully server-rendered —
// no JavaScript needed to read any of it. Only the final transaction hands off
// to Stripe checkout, which is ordinary and expected for a donate button.

const CHECKOUT = 'https://app.planbforpans.com/donate'

export const metadata: Metadata = {
  title: 'Donate — Plan B for PANS',
  description:
    'Plan B for PANS is a non-profit public charity (EIN 42-2258077). Every family’s first synthesis is free and stays free because of donations. Your gift funds free syntheses for families who cannot pay, the cohort research, and keeps Minta running.',
  alternates: { canonical: 'https://planbforpans.com/donate' },
}

const USES: Array<[string, string]> = [
  ['Free syntheses', 'so a family who cannot pay still gets a real, personally-reviewed plan for their child'],
  ['The studies', 'the cohort research that turns what we learn across many families into evidence'],
  ['Keeping Minta running', 'the AI that reads a child’s whole record, kept available for families in a flare'],
]

const AMOUNTS: Array<[string, string]> = [
  ['$20', 'a month of Minta for a family who cannot pay'],
  ['$50', 'helps fund a free, personally-reviewed synthesis'],
  ['$100', 'underwrites a family through a full flare'],
]

export default function Page() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(40px,7vw,72px) 24px 80px' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', margin: '0 0 14px' }}>
        Support the mission
      </p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px,6vw,54px)', lineHeight: 1.08, color: 'var(--ink)', margin: '0 0 22px', fontWeight: 400 }}>
        Pay it forward for the next family.
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 18px' }}>
        Plan B for PANS is a non-profit. The app, the tracker, and every family&rsquo;s <strong>first synthesis</strong> are free &mdash; and they stay free because of people who give.
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 30px' }}>
        Most families arrive here after years of being told their child&rsquo;s illness is behavioural. They come with a folder of labs nobody has read together and no idea what to ask for next. What we do is read the whole record &mdash; every lab, every note, the full history from birth &mdash; and give them one picture of it, along with the specific tests that have never been run. For a family in that position it is often the first time anyone has looked at everything at once. Your gift is what lets us do that whether or not they can pay.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--ink)', margin: '0 0 14px' }}>
        Where your gift goes
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'grid', gap: 14 }}>
        {USES.map(([title, detail]) => (
          <li key={title} style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', borderLeft: '3px solid var(--teal)', paddingLeft: 16 }}>
            <strong style={{ color: 'var(--ink)' }}>{title}</strong> &mdash; {detail}
          </li>
        ))}
      </ul>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--ink)', margin: '0 0 6px' }}>
        Give once, or monthly
      </h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 18px' }}>
        Monthly giving is what keeps this steady &mdash; a handful of recurring gifts is more useful to a small non-profit than the same amount arriving once. Both options are on the checkout page.
      </p>

      <div style={{ display: 'grid', gap: 12, margin: '0 0 28px' }}>
        {AMOUNTS.map(([amount, note]) => (
          <div key={amount} style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', border: '1px solid var(--rule)', borderRadius: 12, padding: '15px 18px', background: 'var(--cream-light)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, color: 'var(--teal)', minWidth: 64 }}>{amount}</span>
            <span style={{ fontSize: 15, color: 'var(--ink-soft)', flex: 1, lineHeight: 1.5 }}>{note}</span>
          </div>
        ))}
      </div>

      <a href={CHECKOUT} rel="noopener" style={{ display: 'block', textAlign: 'center', background: 'var(--teal)', color: '#fff', fontSize: 17, fontWeight: 700, padding: '17px 24px', borderRadius: 12, textDecoration: 'none' }}>
        Continue to secure checkout &rarr;
      </a>
      <p style={{ fontSize: 13, color: 'var(--mute)', textAlign: 'center', margin: '12px 0 40px', lineHeight: 1.6 }}>
        Payments are processed by Stripe over an encrypted connection. Plan B for PANS never sees or stores your card details. You can choose any amount, one-time or monthly, at checkout.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--ink)', margin: '0 0 14px' }}>
        Other ways to help
      </h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', margin: '0 0 12px' }}>
        If you cannot give money, these matter just as much:
      </p>
      <ul style={{ paddingLeft: 20, margin: '0 0 36px', display: 'grid', gap: 9 }}>
        <li style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
          <strong style={{ color: 'var(--ink)' }}>Tell one other parent.</strong> Most families find us from another mother, not from a search.
        </li>
        <li style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
          <strong style={{ color: 'var(--ink)' }}>Share your child&rsquo;s story.</strong> Every record added makes the pattern clearer for the next child &mdash;{' '}
          <Link href="/case-studies" style={{ color: 'var(--teal)' }}>see the cohort studies</Link>.
        </li>
        <li style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
          <strong style={{ color: 'var(--ink)' }}>If you are a clinician</strong> who can order labs for these children,{' '}
          <Link href="/practitioners" style={{ color: 'var(--teal)' }}>we would like to hear from you</Link>.
        </li>
      </ul>

      <div style={{ borderTop: '1px solid var(--sand)', paddingTop: 22, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
        <p style={{ margin: '0 0 8px' }}>
          <strong style={{ color: 'var(--ink)' }}>Plan B for PANS</strong> is a non-profit public charity incorporated in Colorado, <strong>EIN 42-2258077</strong>. Donations are tax deductible to the extent allowed by law, and a receipt is emailed to you.
        </p>
        <p style={{ margin: 0 }}>
          Questions about giving, or about a larger or in-kind gift? Email{' '}
          <a href="mailto:rachel@planbforpans.com" style={{ color: 'var(--teal)' }}>rachel@planbforpans.com</a>{' '}and Rachel will answer personally.
        </p>
      </div>
    </main>
  )
}
