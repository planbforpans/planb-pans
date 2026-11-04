import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /minta-classes is a real private tool (HTTP Basic Auth via
        // middleware) and returns 401 to anyone without the password. That is
        // correct behaviour, but an unauthenticated crawler or a Google Ad
        // Grants reviewer hitting it sees an error on an otherwise healthy
        // site. Keeping crawlers off it is cleaner than removing a page Rachel
        // uses. Added 2026-11-04 during the Ad Grants review.
        disallow: ['/minta-classes'],
      },
    ],
    sitemap: 'https://planbforpans.com/sitemap.xml',
    host: 'https://planbforpans.com',
  }
}
