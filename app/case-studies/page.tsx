import type { Metadata } from 'next'
import CaseStudiesClient from './CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Cohort Studies — Plan B for PANS',
  description:
    'Plan B\'s open cohort studies: phage therapy for strep-triggered PANS, craniosacral + SSP, and more — real modalities tracked across real kids and openly documented.',
}

export default function Page() {
  return <CaseStudiesClient />
}
