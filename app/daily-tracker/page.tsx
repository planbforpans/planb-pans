import type { Metadata } from 'next'
import TrackerClient from './TrackerClient'

export const metadata: Metadata = {
  title: 'Daily Tracker — Plan B for PANS',
  description:
    'A free daily symptom and treatment tracker for PANS, PANDAS, and autism — the n-of-1 loop that separates signal from noise and shows what\'s actually working for your child.',
}

export default function Page() {
  return <TrackerClient />
}
