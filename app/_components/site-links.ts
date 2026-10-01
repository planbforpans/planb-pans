// Shared external links for the site.
//
// ┌──────────────────────────────────────────────────────────────────────┐
// │  TODO: swap CALENDLY_URL to the real booking link when the scheduler   │
// │  is live. Every "Book a consult" / "Talk to Rachel" CTA — including     │
// │  the header button — reads from this ONE constant. The header button   │
// │  is hidden while this is '#', and appears site-wide the moment it's a   │
// │  real URL.                                                              │
// └──────────────────────────────────────────────────────────────────────┘
// Every "Book a consult" / "Talk to Rachel" CTA site-wide reads from this one
// constant, including the header button. Pointed at the $400 Case Review event
// 1 Oct 2026 — a first-time booking should always be the Case Review, never a
// generic call. The $100 follow-up hour is only offered from /packages, below
// the Case Review, and only to families who have already had one.
export const CALENDLY_URL: string = 'https://calendly.com/rachel-planbforpans/case-study'
