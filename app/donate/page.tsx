import { redirect } from 'next/navigation'

// The live donation page (Stripe checkout, one-time or monthly) is in the app.
// Plan B for PANS is a 501(c)(3); this route just sends people to it.
export default function Page() {
  redirect('https://app.planbforpans.com/donate')
}
