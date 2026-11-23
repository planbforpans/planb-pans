import type { Metadata } from 'next'
import PractitionersClient from './PractitionersClient'

export const metadata: Metadata = {
  title: 'For Practitioners — Plan B for PANS',
  description:
    'Practitioners: take on ten pro-bono cohort clients, have your work openly documented over six months, and get matched to families whose kids fit your modality.',
}

export default function Page() {
  return <PractitionersClient />
}
