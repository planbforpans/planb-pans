import { Bodoni_Moda, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import AutoTranslate from './_components/AutoTranslate'
import { ChromeGate, HtmlShell } from './_components/LocaleShell'
import { SiteFooter, SiteHeader } from './_components/SiteChrome'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://planbforpans.com'),
  alternates: { canonical: './' },
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
  // Activates once NEXT_PUBLIC_GSC_VERIFICATION is set in the Vercel env.
  // Renders <meta name="google-site-verification" ...> for Search Console.
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '',
  },
}

// Site-wide organization schema. Helps Google understand who Plan B is and
// links the official Facebook parent community + page (sameAs).
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Plan B for PANS',
  alternateName: 'Plan B for PANS & PANDAS',
  url: 'https://planbforpans.com',
  description:
    'A non-profit clinical synthesis engine for PANS, PANDAS, autism, and severe dysregulation. When the standard system runs out of answers, Plan B for PANS helps families keep going.',
  sameAs: [
    'https://www.facebook.com/groups/1329989715405433/',
    'https://www.facebook.com/planbforpans',
    'https://www.instagram.com/planbforpans/',
  ],
}

const bodoni = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--f-bodoni' })
const instrument = Instrument_Sans({ subsets: ['latin'], display: 'swap', variable: '--f-instrument' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap', variable: '--f-plex' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang dir> follows the URL: /es/... is Spanish, /ar/... is Arabic, right to left.
    <HtmlShell className={`${bodoni.variable} ${instrument.variable} ${plexMono.variable}`}>
      <head>        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Google Ads conversion measurement, AW-18556430921 (2026-11-04). This IS
            the Ad Grants account's tag (Customer ID 916-558-2142, confirmed 2026-11-14).
            Ad Grants requires conversion tracking - accounts are suspended
            without it - and Smart Bidding cannot optimise toward a conversion
            it cannot see.

            DELIBERATELY ONLY ON THE MARKETING SITE. It must NOT go site-wide on
            app.planbforpans.com: every page view there would send Google a hit
            from a page about a named child - their labs, their synthesis, their
            record - and the URLs carry client IDs. That is children's health
            information going to an ad network. On the app, only the single
            sign-up conversion event fires, on the success step, carrying
            nothing about any child. */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18556430921"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18556430921');`,
          }}
        />
        <script src="/start-free-click.js" defer />
      </head>
      <body className="grain">
        <ChromeGate>
          <SiteHeader />
        </ChromeGate>
        {children}
        <ChromeGate>
          <SiteFooter />
        </ChromeGate>
        <Analytics />
        <AutoTranslate />
      </body>
    </HtmlShell>
  )
}
