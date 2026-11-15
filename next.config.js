/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // One address for Google: www → apex (Search Console "Duplicate without
      // user-selected canonical", 2026-10-10).
      { source: '/:path*', has: [{ type: 'host', value: 'www.planbforpans.com' }], destination: 'https://planbforpans.com/:path*', permanent: true },
      // /pricing and /packages were byte-identical (1,287 words, same hash) —
      // duplicate content, and it doubled the commercial footprint a reviewer
      // sees. Ad Grants rejection 2026-10-29 cited "copied text". One canonical
      // money page now: /packages. 301 so link equity and existing links follow.
      { source: '/pricing', destination: '/packages', permanent: true },
      { source: '/tree', destination: '/tree.html', permanent: false },
      { source: '/map', destination: '/tree.html', permanent: false },
      // THE TRACKER LINK, STRAIGHT THROUGH. Rachel, 2026-11-05: "Can you make
      // that an immediate link? Planbforpans.com/tracker" and "Its just
      // inaccessable."
      //
      // It was a 391-line marketing page about the tracker, so the shortest
      // address anyone would say out loud explained the tracker instead of
      // opening it. The measurement that settles it: 18 of 250 children have
      // ever logged a single day, median days logged is 1, and 13 families
      // logged once and stopped. Nobody needed more persuading; they needed
      // fewer steps.
      //
      // 307 not 301: the marketing copy still exists at /daily-tracker for the
      // Ad Grant (the site needs content pages, and the 2026-10-29 rejection
      // was about duplicate/thin content), and a temporary redirect keeps the
      // option of changing where this points without a cached permanent.
      { source: '/tracker', destination: 'https://app.planbforpans.com/tracker', permanent: false },
      { source: '/t', destination: 'https://app.planbforpans.com/tracker', permanent: false },
      // 6 Nov 2026, Rachel: "can we make the link simpler?" The App Store URL is
      // apps.apple.com/us/app/plan-b-for-pans/id6816483159 - unsayable. These go
      // straight to the listing so a parent can type it, or Rachel can say it on
      // a call or from a stage. 307 so the target can change (e.g. a smart
      // iOS/Android split once Google Play is live).
      // 15 Nov 2026: smart split. iPhone/iPad -> App Store; everyone else (Android, which isn't on
      // Google Play yet, and computers) -> the free web app's sign-up, never an Apple dead end.
      // When Google Play is live, add an Android rule above the fallback.
      { source: '/app', has: [{ type: 'header', key: 'user-agent', value: '.*(iPhone|iPad|iPod).*' }], destination: 'https://apps.apple.com/us/app/plan-b-for-pans/id6816483159', permanent: false },
      { source: '/app', destination: 'https://app.planbforpans.com/signup', permanent: false },
      { source: '/ios', destination: 'https://apps.apple.com/us/app/plan-b-for-pans/id6816483159', permanent: false },
      { source: '/download', has: [{ type: 'header', key: 'user-agent', value: '.*(iPhone|iPad|iPod).*' }], destination: 'https://apps.apple.com/us/app/plan-b-for-pans/id6816483159', permanent: false },
      { source: '/download', destination: 'https://app.planbforpans.com/signup', permanent: false },
      // Orlando flyer + card (Documenting Hope, Nov 2026): short, typeable address.
      // Reusable QR on the booth banner + table cover. Repoint per event (Oct 2026: Orlando bonus).
    ]
  },
}

module.exports = nextConfig
