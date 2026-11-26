import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/locales'
import ConditionHome from '../_components/ConditionHome'

// Plan B for ARFID (Rachel, 2026-11-26). Served at planbforarfid.com/.org via middleware rewrite.
// Same layout and theme as the homepage; content lives in app/_components/conditions.ts.
const TITLE = 'Plan B for ARFID · When eating suddenly narrows'
const DESC = 'Safe foods suddenly inedible? A new fear of choking or throwing up? Free help from a nonprofit for parents whose child’s eating narrowed fast: what to track, which tests, and what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-arfid', languages: languageAlternates('/for-arfid') },
  openGraph: { title: 'Plan B for ARFID', description: DESC, url: 'https://planbforpans.com/for-arfid', siteName: 'Plan B for ARFID', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for ARFID', description: DESC },
}

export default function PlanBForARFID() {
  return <ConditionHome k="arfid" />
}
