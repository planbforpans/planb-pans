import type { Metadata } from 'next'
import s from '../directory.module.css'

export const metadata: Metadata = {
  title: 'Directory Review Policy — Plan B for PANS',
  description: 'How reviews in the Plan B for PANS provider directory work: who can post, what is allowed, and how to report or dispute a review.',
  alternates: { canonical: '/directory/review-policy' },
}

export default function ReviewPolicy() {
  return (
    <main className={s.page}>
      <section className={`${s.hero} graph-paper`}>
        <div className={s.heroIn}>
          <p className={s.crumbs}><a href="/directory">Directory</a> / Review policy</p>
          <h1 className={s.h1}>Review policy</h1>
          <p className={s.lede}>Reviews exist so the next family knows what to expect. Here&rsquo;s how we keep them useful and fair.</p>
        </div>
      </section>
      <div className={s.wrap}>
        <div className={s.prose}>
          <h2>Who can review</h2>
          <p>Any parent or caregiver with a Plan B for PANS account. Each family can leave one review per provider, and can edit or delete it at any time.</p>

          <h2>What belongs in a review</h2>
          <p>Your own, first-hand experience: how you were treated, whether the provider took PANS seriously, how long you waited, what it cost, what helped and what didn&rsquo;t.</p>
          <p>Please don&rsquo;t include your child&rsquo;s name or anything that identifies them, other people&rsquo;s private information, threats or harassment, or claims you can&rsquo;t speak to from your own experience. Reviews are opinions, and we don&rsquo;t edit them.</p>

          <h2>What Plan B for PANS does and doesn&rsquo;t do</h2>
          <p>We don&rsquo;t verify reviews, and we don&rsquo;t endorse any provider in the directory. Listings are gathered automatically from public sources. Reviews are the views of the parents who wrote them, not of Plan B for PANS.</p>
          <p>Nothing in the directory is medical advice. Always make medical decisions with your child&rsquo;s licensed clinicians.</p>

          <h2>Reporting a review</h2>
          <p>Signed-in parents can report any review. A review reported by several families is hidden automatically until we look at it. We remove reviews that break this policy.</p>

          <h2>For providers</h2>
          <p>You can ask us to correct or remove your listing, or to look at a review you believe breaks this policy, by emailing <a href="mailto:rachel@planbforpans.com?subject=Directory%20review">rachel@planbforpans.com</a>. We don&rsquo;t remove honest reviews because they&rsquo;re negative, and we never accept payment to change a listing or a review.</p>
        </div>
      </div>
    </main>
  )
}
