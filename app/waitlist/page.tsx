import type { Metadata } from 'next'
import WaitlistClient from './WaitlistClient'

export const metadata: Metadata = {
  title: 'Join the Waitlist — Plan B for PANS',
  description:
    'Join the Plan B for PANS waitlist and be first in line for your child\'s free clinical synthesis as we onboard new founding families.',
}

export default function Page() {
  return <WaitlistClient />
}
