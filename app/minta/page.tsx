import type { Metadata } from 'next'
import MintaClient from './MintaClient'

export const metadata: Metadata = {
  title: 'Meet Minta — Plan B for PANS',
  description:
    'Minta is Plan B for PANS’s guide: she reads your child’s whole story — every lab, record and night in the tracker — and helps you make sense of it, any time. Free to try, no sign-up.',
}

export default function Page() {
  return <MintaClient />
}
