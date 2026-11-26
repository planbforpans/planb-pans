import type { Metadata } from 'next'
import ConditionHome from '../_components/ConditionHome'

// Plan B for OCD (Rachel, 2026-11-25: "Plan B for OCD"). Served at planbforocd.com/.org via middleware rewrite.
// Same layout and theme as the homepage (2026-11-26); content lives in app/_components/conditions.ts.
const TITLE = 'Plan B for OCD · When OCD comes on suddenly'
const DESC = 'Sudden OCD after a sore throat? Think strep. Free help from a nonprofit for parents whose child’s OCD came on overnight or flares with every illness: what to track, which tests, and what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-ocd' },
  openGraph: { title: 'Plan B for OCD', description: DESC, url: 'https://planbforpans.com/for-ocd', siteName: 'Plan B for OCD', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for OCD', description: DESC },
}

export default function PlanBForOCD() {
  return <ConditionHome k="ocd" />
}
