import type { Metadata } from 'next'
import PodcastClient from './PodcastClient'

export const metadata: Metadata = {
  title: 'Podcast — Plan B for PANS',
  description:
    'The Plan B for PANS podcast: honest conversations on PANS, PANDAS, autism, and the fringe modalities that mainstream care never mentions.',
}

export default function Page() {
  return <PodcastClient />
}
