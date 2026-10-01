import type { Metadata } from 'next'
import StoriesClient from './StoriesClient'

export const metadata: Metadata = {
  title: 'Family Stories — Plan B for PANS',
  description:
    'Real families, real PANS and PANDAS recoveries. The kids who went through IVIG, antibiotics, and a year of nothing working — and what finally moved the needle.',
}

export default function Page() {
  return <StoriesClient />
}
