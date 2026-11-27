import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/locales'
import ResearchClient from './ResearchClient'
import { fetchFindings, fetchStudies, fetchTrials } from '../../lib/research-data'

export const revalidate = 600

export const metadata: Metadata = {
  alternates: { canonical: '/research', languages: languageAlternates('/research') },
  title: 'Research & Studies — Plan B for PANS',
  description:
    'We are the research. Weekly findings from families tracking together, Plan B studies you can join, recruiting pediatric trials on PANS, PANDAS, autism and tics, and a vote on what we study next.',
}

export default async function Page() {
  const [findings, studies, trials] = await Promise.all([fetchFindings(), fetchStudies(), fetchTrials()])
  return <ResearchClient findings={findings} studies={studies} trials={trials} />
}
