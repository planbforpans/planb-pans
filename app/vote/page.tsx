import type { Metadata } from 'next'
import VoteClient from './VoteClient'

export const metadata: Metadata = {
  title: 'Vote on the Next Study — Plan B for PANS',
  description:
    'Help decide which PANS treatment Plan B studies next. Parents vote on the modalities and cohort studies we fund and document openly.',
}

export default function Page() {
  return <VoteClient />
}
