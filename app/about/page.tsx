import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About — Plan B for PANS',
  description:
    'The mom behind Plan B: Rachel Johnson taught herself the entire PANS field at 2am to heal her own three children when the system couldn\'t. Why she built Minta, and who Plan B is for.',
}

export default function Page() {
  return <AboutClient />
}
