import type { Metadata } from 'next'
import ResearchClient from './ResearchClient'

export const metadata: Metadata = {
  title: 'Research & Studies — Plan B for PANS',
  description:
    'The science behind Plan B: parent-led cohort research on PANS, PANDAS, and autism treatments — tracking what actually moves the needle across real families, de-identified.',
}

export default function Page() {
  return <ResearchClient />
}
