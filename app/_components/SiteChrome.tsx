import Link from 'next/link'
import HeaderLang from './HeaderLang'
import { CONDITION_LINKS, conditionHref } from './conditions'

// The site header, medical disclaimer and footer. Moved out of app/layout.tsx
// (2026-11-26) so the translated pages (app/[locale]) can render the same
// chrome in their own language; the layout shows this on every English page.

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-in">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <p className="site-logo">
            Plan B{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>for PANS</span>
          </p>
        </Link>
        {/* Trimmed to the essentials 1 Oct 2026; "Get the Tracker" back 7 Oct
            (Rachel: installing the tracker needs to be a link). Oct 13
            overhaul: the two identical sign-up buttons became one. */}
        <nav className="site-nav">
          <HeaderLang />
          <a href="/start" className="strong">Start Here</a>
          <a href="https://app.planbforpans.com/sample-synthesis-2" rel="noopener" className="strong">See a Synthesis</a>
          <a href="/minta">Meet Minta</a>
          <a href="/daily-tracker#install">The Tracker</a>
          <a href="/case-review">Book a Case Review</a>
          <Link href="/about">About</Link>
          <Link href="/donate">Donate</Link>
          <a href="https://app.planbforpans.com/sign-in" rel="noopener" className="quiet">Sign in</a>
          <a href="https://app.planbforpans.com/signup" rel="noopener" className="nav-cta">Get your free Synthesis &rarr;</a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <>
      {/* Site-wide medical disclaimer (Rachel, 2026-10-14: "cover my ass"). */}
      <div style={{ borderTop: '1px solid var(--ink)', background: 'var(--cream-light)', padding: '22px 24px' }}>
        <p style={{ maxWidth: 900, margin: '0 auto', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink)', textAlign: 'center' }}>
          <strong>Important:</strong> Plan B for PANS, Rachel Johnson and Minta are <strong>not doctors</strong>. Everything here, including Minta, the Synthesis and Case Reviews, is <strong>education, not medical advice, diagnosis or treatment</strong>. Always talk with your child&rsquo;s licensed clinicians before changing anything. You use Plan B for PANS and Minta at your own risk. <strong>In an emergency, call 911, or 988 for a mental-health crisis.</strong>{' '}
          <a href="/disclaimer" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>Full disclaimer</a>
        </p>
      </div>
      <footer
        style={{
          borderTop: '1px solid var(--sand)',
          padding: '72px 24px 48px',
          background: 'var(--cream-light)',
          color: 'var(--sand-dark)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto', fontSize: 13, lineHeight: 1.8 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 18, color: 'var(--sand-dark)' }}
          >
            Mission
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(28px, 4.2vw, 42px)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              marginBottom: 40,
            }}
          >
            When the protocols fail,{' '}
            <em style={{ color: 'var(--teal)' }}>this is your Plan B for PANS.</em>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 20,
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: 10,
            }}
          >
            Plan B <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>for PANS</span>
          </p>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            A non-profit clinical synthesis engine for PANS, PANDAS, autism, and severe
            dysregulation. When the standard system runs out of answers, Plan B for PANS helps you
            keep going.
          </p>
          <p
            className="mono"
            style={{
              marginTop: 16,
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--sand-dark)',
              fontWeight: 500,
            }}
          >
            Free for families · Donation-funded
          </p>
          <Link
            href="/donate"
            style={{
              display: 'inline-block',
              marginTop: 24,
              fontFamily: 'var(--font-inter)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--teal)',
              padding: '13px 28px',
              fontWeight: 600,
              borderRadius: 4,
              textDecoration: 'none',
            }}
          >
            Donate → Keep Minta free
          </Link>
          {/* Rachel, 2026-11-15: Instagram, the public Page and the private group on every page. */}
          <p style={{ marginTop: 22, fontSize: 14, color: 'var(--ink)' }}>
            Follow Plan B for PANS:{' '}
            <a href="https://www.instagram.com/planbforpans/" target="_blank" rel="noopener" style={{ color: 'var(--teal)', fontWeight: 600 }}>Instagram</a>
            {' · '}
            <a href="https://www.facebook.com/planbforpans" target="_blank" rel="noopener" style={{ color: 'var(--teal)', fontWeight: 600 }}>Facebook Page</a>
            {' · '}
            <a href="https://www.facebook.com/groups/1329989715405433/" target="_blank" rel="noopener" style={{ color: 'var(--teal)', fontWeight: 600 }}>Private parents&rsquo; group</a>
          </p>
          <p
            className="mono"
            style={{
              marginTop: 22,
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: 600,
            }}
          >
            Led by the community · For the community
          </p>
          {/* PANS & PANDAS basics: sitewide links to the pillar articles (SEO 2026-11-14).
              Search Console showed these crawled-but-not-indexed with almost no internal links. */}
          <nav
            aria-label="PANS and PANDAS basics"
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 18,
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <a href="/understanding-pans.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              What is PANDAS?
            </a>
            <a href="/pans-symptoms-children.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              PANDAS &amp; PANS symptoms
            </a>
            <a href="/pans-vs-pandas.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              PANS vs PANDAS
            </a>
            <a href="/pans-and-strep.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              PANDAS and strep
            </a>
            <a href="/how-to-get-pans-diagnosis.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              Getting a diagnosis
            </a>
            <a href="/pans-treatment-options.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              Treatment options
            </a>
            <a href="/is-it-autism-or-pans.html" style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              Autism or PANS?
            </a>
          </nav>
          {/* The Plan B condition pages (2026-11-26). */}
          <nav
            aria-label="Plan B condition pages"
            style={{ marginTop: 14, display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center', fontSize: 13, fontWeight: 500 }}
          >
            <a href="/for-autism" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Plan B for Autism</a>
            {CONDITION_LINKS.map((l) => (
              <a key={l.k} href={conditionHref(l.k)} style={{ color: 'var(--teal)', textDecoration: 'none' }}>{l.name}</a>
            ))}
          </nav>
          <nav
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 22,
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            <a href="/why-plan-b.html" style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}>
              Why Plan B for PANS
            </a>
            <Link href="/how-to-use" style={{ color: 'var(--sand-dark)' }}>
              How to use it
            </Link>
            <Link href="/learn" style={{ color: 'var(--sand-dark)' }}>
              Field Guide
            </Link>
            <Link href="/research" style={{ color: 'var(--sand-dark)' }}>
              Research
            </Link>
            <Link href="/learning" style={{ color: 'var(--sand-dark)' }}>
              What we&rsquo;re learning
            </Link>
            {/* Podcast link removed 2026-10-07: Google for Nonprofits rejected
                the Workspace application citing "primarily placeholder content
                … specifically in the tab podcast (Coming Soon pages)". The page
                still exists at /podcast — it is simply not linked until there
                are real episodes. Re-add this link when episode 1 ships. */}
            <Link href="/minta" style={{ color: 'var(--sand-dark)' }}>
              Meet Minta
            </Link>
            <Link href="/daily-tracker" style={{ color: 'var(--sand-dark)' }}>
              Tracker
            </Link>
            <a
              href="https://app.planbforpans.com/community"
              rel="noopener"
              style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
            >
              Community
            </a>
            <Link href="/practitioners" style={{ color: 'var(--sand-dark)' }}>
              Practitioners
            </Link>
            <a
              href="https://app.planbforpans.com/volunteer"
              rel="noopener"
              style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
            >
              Volunteer
            </a>
            <Link href="/contact" style={{ color: 'var(--sand-dark)' }}>
              Contact
            </Link>
            <Link href="/disclaimer" style={{ color: 'var(--sand-dark)' }}>
              Disclaimer
            </Link>
            <Link href="/privacy" style={{ color: 'var(--sand-dark)' }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ color: 'var(--sand-dark)' }}>
              Terms
            </Link>
            {/* Was the bare numeric-id Facebook page URL — Facebook serves logged-out visitors a
                "content isn't available" wall on that URL form, which Google's
                reviewer hit and cited as a non-functional social link. The
                group URL renders a public preview instead. */}
            <a
              href="https://www.facebook.com/groups/1329989715405433/"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
            >
              Facebook group (parents)
            </a>
            <a
              href="https://www.facebook.com/planbforpans"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
            >
              Facebook page
            </a>
            <a
              href="https://www.instagram.com/planbforpans/"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
            >
              Instagram
            </a>
          </nav>
          <p style={{ marginTop: 22, fontSize: 12, color: 'var(--sand-dark)' }}>
            © {new Date().getFullYear()} Plan B for PANS
          </p>
          {/* Legal identity. Added 2026-10-06: Google for Nonprofits rejected our
              Workspace activation because nothing on this site connected the
              registered entity to this domain — a reviewer landing here found a
              personal essay and no evidence a charity existed. Donors, grant
              reviewers and Ad Grants all look for exactly this block. */}
          <p style={{ marginTop: 10, fontSize: 11.5, lineHeight: 1.7, color: 'var(--sand-dark)', maxWidth: 760 }}>
            Plan B for PANS is a registered 501(c)(3) nonprofit public charity.
            EIN <strong>42-2258077</strong>. Incorporated in Colorado, April 30, 2026
            (entity ID 20261532334). Tax-exempt status effective April 30, 2026;
            donations are tax-deductible to the extent allowed by law.
            planbforpans.com is our official and only domain.
          </p>
          <p style={{ marginTop: 8, fontSize: 11.5, lineHeight: 1.7, color: 'var(--sand-dark)' }}>
            Plan B for PANS · 4845 Pearl East Circle, Ste 118, Boulder, CO 80301 · <a href="mailto:rachel@planbforpans.com" style={{ color: 'var(--sand-dark)' }}>rachel@planbforpans.com</a>
          </p>
          <p style={{ marginTop: 10, fontSize: 11.5, lineHeight: 1.6, color: 'var(--sand-dark)', maxWidth: 760 }}>
            Plan B for PANS integrates and interprets published frameworks &mdash; including those of Walsh, Yasko, Shoemaker, O&rsquo;Hara, Crista, Nathan and others &mdash; for educational purposes. It is not affiliated with, endorsed by, or reviewed by any named practitioner; names are used only to attribute the ideas described. Nothing here is medical advice &mdash; always confirm with your own practitioner.
          </p>
        </div>
      </footer>
    </>
  )
}
