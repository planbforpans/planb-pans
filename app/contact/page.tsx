import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Plan B for PANS',
  description:
    'Get in touch with Plan B for PANS — questions from parents, practitioner inquiries, and help getting started with your child\'s free synthesis.',
}

export default function Page() {
  return <ContactClient />
}
