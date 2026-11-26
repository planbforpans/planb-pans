import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/locales'
import ConditionHome from '../_components/ConditionHome'

// Plan B for ADHD (Rachel, 2026-11-26: "And for ADHD."). Served at planbforadhd.com/.org via middleware rewrite.
// Never anti-medication: ADHD medicine and support help many children. Content lives in app/_components/conditions.ts.
const TITLE = 'Plan B for ADHD · Look at the body too'
const DESC = 'Focus fell apart after an illness? Hyperactivity that came on fast or flares with every cold? Free help from a nonprofit to look at the body alongside your child’s ADHD care: what to track, which tests, what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-adhd', languages: languageAlternates('/for-adhd') },
  openGraph: { title: 'Plan B for ADHD', description: DESC, url: 'https://planbforpans.com/for-adhd', siteName: 'Plan B for ADHD', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for ADHD', description: DESC },
}

export default function PlanBForADHD() {
  return <ConditionHome k="adhd" />
}
