import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/locales'
import ConditionHome from '../_components/ConditionHome'

// Plan B for Constipation (Rachel, 2026-11-26). Served at planbforconstipation.com via middleware rewrite.
// Same layout and theme as the homepage; content lives in app/_components/conditions.ts.
const TITLE = 'Plan B for Constipation · When it won’t go away'
const DESC = 'Constipation that won’t go away, with mood or behavior changes? Better on antibiotics? Free help from a nonprofit: what to track, which tests, and what to bring to your child’s doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-constipation', languages: languageAlternates('/for-constipation') },
  openGraph: { title: 'Plan B for Constipation', description: DESC, url: 'https://planbforpans.com/for-constipation', siteName: 'Plan B for Constipation', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for Constipation', description: DESC },
}

export default function PlanBForConstipation() {
  return <ConditionHome k="constipation" />
}
