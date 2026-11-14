import CaseReviewVoices, { CaseReviewLong } from '../_components/CaseReviewVoices'
// /orlando — was a bare redirect to app.planbforpans.com/signup.
//
// Two reasons it is now a real page. (1) Ad Grants rejects sites whose
// submitted domain "forwards to a separate portal"; a 302 straight off the
// apex domain is literally that. (2) It is better for the booth: a parent who
// scans the card at Documenting Hope lands on something that explains what
// Plan B is, instead of an unexplained sign-up form.
export const metadata = {
  title: 'Documenting Hope, Orlando | Plan B for PANS',
  description:
    'For families we met at the Health and Healing Expo in Orlando — what Plan B for PANS is, what is free, and where to start.',
}
const ink='#1F2424', teal='#2E6E70', soft='#505858', rule='#E1E5E4', cream='#FAF9F6'
const SIGNUP='https://app.planbforpans.com/signup?source=orlando'
export default function Page(){
  return (
    <main style={{background:cream,color:ink,fontFamily:'var(--font-body)'}}>
      <section style={{maxWidth:720,margin:'0 auto',padding:'84px 24px 0'}}>
        <p style={{fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.22em',textTransform:'uppercase',color:soft,marginBottom:16}}>
          Health &amp; Healing Expo &middot; Orlando &middot; November 2026
        </p>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(34px,6.5vw,54px)',lineHeight:1.1,fontWeight:500,margin:0}}>
          We read your child&rsquo;s <i>whole record</i>.
        </h1>
        <p style={{fontSize:20,lineHeight:1.55,marginTop:24}}>
          If we met at the table in Orlando &mdash; this is the page from the card.
        </p>
        <p style={{fontSize:17,lineHeight:1.65,color:soft,marginTop:16}}>
          Plan B for PANS is a nonprofit, started by parents whose children got sick and whose
          doctors could not explain it. We read every lab, every page, birth to now, and tell you
          plainly what is in it, what it means, and what has never been tested.
        </p>
        <p style={{fontSize:17,lineHeight:1.65,color:soft,marginTop:14}}>
          <strong>We are not doctors.</strong> We do not diagnose and we do not prescribe. Everything
          we find is written for you to take to your own clinician.
        </p>
      </section>
      <section style={{maxWidth:720,margin:'0 auto',padding:'44px 24px 0'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:500,margin:'0 0 6px'}}>What you get, free</h2>
        <p style={{fontSize:15,color:soft,margin:'0 0 24px'}}>No card, no trial, no catch.</p>
        {[['The tracker','One minute a day. In a complicated child it is the only way to tell what is actually working — patterns surface in weeks that years of appointments never caught.'],
          ['The vault','Every lab your child has ever had, in one place. Photograph it, upload a PDF, screenshot the portal — however it comes.'],
          ['The read','What is abnormal, what is trending the wrong way, what was ordered and never resulted, and what has never been run at all.'],
          ['Minta','Ask questions about your own child. Minta has read every page of their record and the research behind it, and answers at two in the morning.']].map(([h,b])=>(
          <div key={h} style={{marginBottom:22}}>
            <h3 style={{fontSize:19,fontWeight:700,margin:'0 0 6px',color:teal}}>{h}</h3>
            <p style={{fontSize:16.5,lineHeight:1.6,color:soft,margin:0}}>{b}</p>
          </div>))}
      </section>
      <CaseReviewVoices />
      <CaseReviewLong />
      <section style={{maxWidth:720,margin:'0 auto',padding:'30px 24px 96px'}}>
        <div style={{border:`1px solid ${rule}`,background:'#fff',padding:'28px 26px'}}>
          <p style={{fontSize:17,lineHeight:1.6,margin:'0 0 18px'}}>
            Families who sign up from Orlando get <strong>30 Minta questions instead of 10</strong>.
          </p>
          <a href={SIGNUP} style={{display:'inline-block',padding:'14px 26px',background:teal,color:'#fff',textDecoration:'none',fontSize:16,fontWeight:600}}>
            Start free
          </a>
          <p style={{fontSize:15,lineHeight:1.6,color:soft,margin:'20px 0 0'}}>
            Not ready? <a href="/start" style={{color:teal}}>Read how it works</a> or{' '}
            <a href="/daily-tracker" style={{color:teal}}>put the tracker on your phone</a> first.
          </p>
        </div>
      </section>
    </main>
  )
}
