import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://planbforpans.com'

// App Router pages (each app/<route>/page.tsx → /<route>), plus the homepage.
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/start', priority: 0.9 },
  { path: '/learn', priority: 0.9 },
  { path: '/tests', priority: 0.8 },
  { path: '/packages', priority: 0.8 },
  { path: '/pricing', priority: 0.7 },
  { path: '/research', priority: 0.8 },
  { path: '/protocol', priority: 0.8 },
  { path: '/minta', priority: 0.8 },
  { path: '/daily-tracker', priority: 0.7 },
  { path: '/about', priority: 0.7 },
  { path: '/stories', priority: 0.7 },
  { path: '/case-studies', priority: 0.7 },
  { path: '/practitioners', priority: 0.7 },
  { path: '/podcast', priority: 0.6 },
  // /minta-classes is password-gated — deliberately excluded from the sitemap.
  { path: '/donate', priority: 0.6 },
  { path: '/vote', priority: 0.5 },
  { path: '/waitlist', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
  { path: '/faq', priority: 0.7 },
  { path: '/disclaimer', priority: 0.3 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
]

// Field Guide HTML entries whose filename should rank 0.9 (the map + core driver pages).
const HIGH_PRIORITY_HTML = new Set([
  'tree.html',
  'deconstructing-pans.html',
  'understanding-pans.html',
  'pans-symptoms-children.html',
  'pans-vs-pandas.html',
  'pans-and-strep.html',
  'pans-treatment-options.html',
  'how-to-get-pans-diagnosis.html',
  'is-it-autism-or-pans.html',
  'methylation.html',
  'lyme.html',
  'mold-protocol.html',
  'mcas.html',
  'gut.html',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pageEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: r.priority,
  }))

  // noindex redirect stubs — must never be emitted in the sitemap.
  const EXCLUDED_HTML = new Set([
    'methylation-web.html',
    'mitochondria.html',
  ])

  // Glob every Field Guide entry under public/*.html — never hardcode a stale list.
  const publicDir = path.join(process.cwd(), 'public')
  const htmlFiles = fs
    .readdirSync(publicDir)
    .filter((f) => f.endsWith('.html') && !EXCLUDED_HTML.has(f))
    .sort()

  const htmlEntries: MetadataRoute.Sitemap = htmlFiles.map((file) => ({
    url: `${BASE}/${file}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: HIGH_PRIORITY_HTML.has(file) ? 0.9 : 0.7,
  }))

  return [...pageEntries, ...htmlEntries]
}
