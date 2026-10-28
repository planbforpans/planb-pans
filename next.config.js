/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // One address for Google: www → apex (Search Console "Duplicate without
      // user-selected canonical", 2026-10-10).
      { source: '/:path*', has: [{ type: 'host', value: 'www.planbforpans.com' }], destination: 'https://planbforpans.com/:path*', permanent: true },
      { source: '/tree', destination: '/tree.html', permanent: false },
      { source: '/map', destination: '/tree.html', permanent: false },
      // Orlando flyer + card (Documenting Hope, Nov 2026): short, typeable address.
      { source: '/orlando', destination: 'https://app.planbforpans.com/signup?source=orlando', permanent: false },
      // Reusable QR on the booth banner + table cover. Repoint per event (Oct 2026: Orlando bonus).
      { source: '/scan', destination: 'https://app.planbforpans.com/signup?source=orlando', permanent: false },
    ]
  },
}

module.exports = nextConfig
