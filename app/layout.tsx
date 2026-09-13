import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { caseReviewBookingUrl } from './_components/site-links'

export const metadata: Metadata = {
  metadataBase: new URL('https://planbforpans.com'),
  title: 'Plan B for PANS & PANDAS — A path out of the fire',
  description: 'A path out of the fire — built from every modality, every family, every hard-won answer. A clinical synthesis engine for PANS, PANDAS, autism, and severe dysregulation.',
  openGraph: {
    siteName: 'Plan B for PANS',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <header
          style={{
            borderBottom: '1px solid var(--sand)',
            padding: '22px 24px',
            background: 'var(--cream)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Plan B{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--teal)' }}>
                  for PANS
                </span>
              </p>
            </Link>
            <nav className="site-nav" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/packages">Pricing</NavLink>
              <NavLink href="/stories">Family stories</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <a
                href="https://app.planbforpans.com/sign-in"
                rel="noopener"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--sand-dark)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Sign In
              </a>
              <a
                href="https://app.planbforpans.com/signup"
                rel="noopener"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--teal)',
                  background: 'transparent',
                  border: '1px solid var(--teal)',
                  padding: '9px 16px',
                  fontWeight: 600,
                  borderRadius: 4,
                  textDecoration: 'none',
                }}
              >
                Free app
              </a>
              <a
                href={caseReviewBookingUrl('website-header')}
                rel="noopener"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: 'var(--teal)',
                  padding: '10px 18px',
                  fontWeight: 600,
                  borderRadius: 4,
                  textDecoration: 'none',
                }}
              >
                Case Review · $200
              </a>
            </nav>
          </div>
        </header>
        {children}
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
              <em style={{ color: 'var(--teal)' }}>this is your Plan B.</em>
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
              dysregulation. When the standard system runs out of answers, Plan B helps you
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
              Free app · Optional paid Case Reviews
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
              Donate → Support families
            </Link>
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
                Why Plan B
              </a>
              <Link href="/tracker" style={{ color: 'var(--sand-dark)' }}>
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
              <a
                href="https://www.facebook.com/profile.php?id=61588842100605"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--sand-dark)', textDecoration: 'none' }}
              >
                Facebook
              </a>
            </nav>
            <p style={{ marginTop: 22, fontSize: 12, color: 'var(--sand-dark)' }}>
              © {new Date().getFullYear()} Plan B for PANS
            </p>
            <p style={{ marginTop: 10, fontSize: 11.5, lineHeight: 1.6, color: 'var(--sand-dark)', maxWidth: 760 }}>
              Plan B integrates and interprets published frameworks &mdash; including those of Walsh, Yasko, Shoemaker, O&rsquo;Hara, Crista, Nathan and others &mdash; for educational purposes. It is not affiliated with, endorsed by, or reviewed by any named practitioner; names are used only to attribute the ideas described. Nothing here is medical advice &mdash; always confirm with your own practitioner.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-inter)',
        fontSize: 11,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--sand-dark)',
        fontWeight: 500,
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  )
}
