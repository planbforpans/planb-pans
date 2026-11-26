import type { Metadata } from 'next'
import HeaderLang from '../_components/HeaderLang'
import { ClueFigure, EarlySigns, StrepConnection } from '../_components/ConditionFigures'

// Plan B for ADHD (Rachel, 2026-11-26: "And for ADHD."). Served at planbforadhd.com/.org via middleware rewrite.
// Attention or hyperactivity that came on suddenly, got much worse, or flares with illness: look at the body too.
// Never anti-medication: ADHD medicine and support help many children.
const TITLE = 'Plan B for ADHD · Look at the body too'
const DESC = 'Focus fell apart after an illness? Hyperactivity that came on fast or flares with every cold? Free help from a nonprofit to look at the body alongside your child’s ADHD care: what to track, which tests, what to bring to the doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-adhd' },
  openGraph: { title: 'Plan B for ADHD', description: DESC, url: 'https://planbforpans.com/for-adhd', siteName: 'Plan B for ADHD', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for ADHD', description: DESC },
}

const APP = 'https://app.planbforpans.com'
const FROM = 'adhd'
const BEHAVIORS = 'https://planbforpans.com/learning/behaviors-are-a-clue'

const css = `
body:has(.pd) .site-header, body:has(.pd) > footer { display:none !important }
body:has(.pd){ background:#F2F3F7 }
.pd{ --ink:#141B33; --cob:#1B2A6B; --cob2:#2C3F92; --lemon:#F2D35B; --paper:#F2F3F7; --card:#FBFBFD; --rule:#D9DCE8; --muted:#565C72;
  color:var(--ink); font-family: var(--f-instrument), 'Instrument Sans', system-ui, sans-serif; font-size:17px; line-height:1.65; overflow-x:hidden }
.pd *{ box-sizing:border-box } .pd a{ color:inherit }
.pd h1,.pd h2,.pd h3,.pd p,.pd li{ color:inherit }
.pd .serif{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400 }
.pd .mono{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px }
.pd .wrap{ max-width:1100px; margin:0 auto; padding:0 20px }
.pd .hero{ background-color:var(--cob); color:#F2F3F7; padding:22px 0 72px; position:relative; overflow:hidden;
  background-image: linear-gradient(90deg, rgba(242,243,247,.06) 1px, transparent 1px), radial-gradient(ellipse 70% 80% at 85% 20%, #2C3F92 0%, #1B2A6B 58%, #111B4A 100%);
  background-size: 18px 100%, 100% 100% }
.pd .top{ display:flex; justify-content:space-between; align-items:center; gap:12px; position:relative; flex-wrap:wrap }
.pd .brand{ font-family: var(--f-bodoni), Georgia, serif; font-size:24px; text-decoration:none; min-height:44px; display:inline-flex; align-items:center }
.pd .brand em{ color:var(--lemon) }
.pd .topr{ display:flex; gap:10px; align-items:center; font-size:12px }
.pd .topr a, .pd .topr .nav-lang{ min-height:44px; display:inline-flex; align-items:center; text-decoration:none; color:#E3E6F2 }
.pd .topr .nav-lang{ padding:0 14px; font-family: var(--f-plex), monospace; letter-spacing:.1em; font-size:12px }
.pd .grid{ display:grid; grid-template-columns: 1.1fr .9fr; gap:36px; align-items:center; margin-top:44px; position:relative }
.pd .grid > *{ min-width:0 }
.pd h1{ font-size:clamp(42px,6.4vw,78px); line-height:1; margin:0 }
.pd h1 em{ color:var(--lemon) }
.pd .lede{ font-size:clamp(18px,2.1vw,21px); line-height:1.5; color:#DDE1F0; margin:22px 0 28px; max-width:590px }
.pd .btns{ display:flex; flex-wrap:wrap; gap:12px }
.pd .btn{ display:inline-flex; align-items:center; min-height:48px; padding:12px 22px; border-radius:6px; text-decoration:none; font-weight:600; font-size:15px }
.pd .btn.p{ background:var(--lemon); color:#1E1A05 } .pd .btn.g{ border:1px solid rgba(242,243,247,.5); color:#F2F3F7 } .pd .btn.d{ background:var(--cob); color:#fff }
.pd section{ padding: clamp(58px,8vw,104px) 0 }
.pd h2{ font-size:clamp(32px,4.4vw,52px); line-height:1.06; margin:10px 0 18px }
.pd h2 em{ color:var(--cob2) }
.pd .k{ color:var(--cob2) }
.pd .frame{ border-inline-start:3px solid var(--lemon); padding:4px 0 4px 16px; margin:0 0 26px; font-style:italic; color:var(--muted) }
.pd .clues{ list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr)); gap:0 34px }
.pd .clues li{ border-top:1px solid var(--rule); padding:16px 0 }
.pd .clues b{ display:block; font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:22px; line-height:1.25; margin-bottom:4px }
.pd .clues span{ color:var(--muted); font-size:15.5px }
.pd .minta{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:clamp(22px,4vw,40px); box-shadow:0 30px 70px -44px rgba(27,42,107,.55) }
.pd .ask{ display:flex; gap:8px; margin-top:18px }
.pd .ask input{ flex:1; min-width:0; font-size:17px; padding:13px 16px; min-height:50px; border:1px solid #C5CADC; border-radius:6px; font-family:inherit; background:#fff }
.pd .ask button{ border:0; border-radius:6px; background:var(--cob); color:#fff; font-weight:600; padding:0 22px; min-height:50px; font-size:15px; cursor:pointer }
.pd .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:14px }
.pd .chips a{ text-decoration:none; border:1px solid var(--rule); background:var(--paper); border-radius:6px; padding:10px 14px; font-size:13.5px; min-height:44px; display:inline-flex; align-items:center }
.pd .two{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); gap:18px; margin-top:20px }
.pd .panel{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:24px }
.pd .panel h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:28px; margin:6px 0 10px }
.pd .panel ul{ margin:0; padding-inline-start:20px } .pd .panel li{ margin-bottom:6px }
.pd .note{ border:1px solid #CDD3EA; background:#E9ECF7; border-radius:10px; padding:16px 20px; margin-top:20px; font-size:15.5px }
.pd .tests{ width:100%; border-collapse:collapse; margin-top:16px }
.pd .tests td{ border-top:1px solid var(--rule); padding:16px 12px 16px 0; vertical-align:top }
.pd .tests td:first-child{ width:38%; font-weight:600 }
.pd .tests .code{ display:block; font-family: var(--f-plex), monospace; font-size:12px; color:var(--muted); font-weight:400; margin-top:3px }
.pd .band{ background:var(--cob); color:#F2F3F7 }
.pd .band h2 em{ color:var(--lemon) }
.pd .band .k{ color:#C6CEF0 }
.pd .cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:16px; margin-top:22px }
.pd .card{ background:var(--card); color:var(--ink); border-radius:10px; padding:22px; text-decoration:none; display:block; border:1px solid var(--rule) }
.pd .card h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:8px 0 6px }
.pd .card p{ margin:0; font-size:15.5px; color:var(--muted) }
.pd .helped{ counter-reset:h; list-style:none; padding:0; margin:20px 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:18px }
.pd .helped li{ counter-increment:h; background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:22px }
.pd .helped li::before{ content:"0" counter(h); font-family: var(--f-plex), monospace; color:var(--cob2); font-size:13px; letter-spacing:.15em; display:block }
.pd .helped h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:6px 0 8px }
.pd .helped p{ margin:0; font-size:15.5px; color:var(--muted) }
.pd .teaser{ display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid var(--rule); border-radius:10px; padding:24px; background:var(--card); text-decoration:none }
.pd .research{ border-top:1px solid rgba(242,243,247,.25); margin-top:34px; padding-top:26px; display:grid; grid-template-columns:auto 1fr; gap:22px; align-items:start; max-width:900px }
.pd .research p{ margin:0; font-size:clamp(18px,2vw,21px); color:#DDE1F0 }
.pd .foot{ background:#0C1333; color:#B3B9D1; padding:44px 0 88px; font-size:14.5px }
.pd .foot a{ color:#E9EBF5; min-height:44px; display:inline-flex; align-items:center }
.pd .fam{ display:flex; flex-wrap:wrap; gap:0 20px; margin:10px 0 14px }
@keyframes rise{ from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:none } }
.pd .r{ opacity:0; animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards } .pd .d1{animation-delay:.1s} .pd .d2{animation-delay:.3s} .pd .d3{animation-delay:.5s} .pd .d4{animation-delay:.75s}
@media (max-width:820px){ .pd .grid{ grid-template-columns:1fr } .pd .tests td{ display:block; width:auto !important; padding:4px 0 } .pd .tests td:first-child{ padding-top:16px } .pd .tests td + td{ border-top:0; padding-bottom:16px } .pd .research{ grid-template-columns:1fr; gap:8px } }
@media (prefers-reduced-motion: reduce){ .pd .r{ animation:none; opacity:1 } }
`

const IDEAS = [
  'His focus fell apart after strep. What should I ask the doctor?',
  'Could low iron be part of her attention trouble?',
  'How do I tell long-standing ADHD from a sudden change?',
  'She snores and can’t focus at school. Could sleep be part of it?',
]

const CLUES: [string, string][] = [
  ['Focus fell apart after a sore throat: think strep.', 'A sibling or parent who carries strep counts too.'],
  ['After a cough in the house: think Mycoplasma.', 'It can set things off without ever looking like pneumonia.'],
  ['Snoring, mouth breathing, short or restless sleep: think sleep.', 'Poor sleep can look a lot like ADHD in children. Snoring and big tonsils are worth asking about.'],
  ['Restless legs at night, tired, pale: think iron.', 'Low ferritin, the iron store, is linked to restless sleep and attention trouble.'],
  ['Worse in one house or school, better away: think mold.', 'Mold keeps the immune system on edge, and focus often shows it.'],
  ['Belly aches, constipation, reactions to food: think the gut.', 'The gut and the brain talk all day. A backed-up or inflamed gut can show up as restlessness.'],
  ['Meltdowns after hunger, exercise or sweets: think blood-sugar swings.', 'A home glucose meter, checked in the moment, can show it.'],
  ['Came with new worries, tics or food refusal: think PANS.', 'When focus changes arrive with these, ask your doctor about an immune trigger.'],
]

const TESTS: [string, string | null, string][] = [
  ['Ferritin and an iron panel', null, 'The iron store, which a plain CBC can miss. Linked to restless sleep and attention.'],
  ['Thyroid: TSH + free T4', null, 'An over- or underactive thyroid can change focus, energy and mood.'],
  ['Blood lead level', null, 'A simple screen. Lead affects attention, and older homes still carry it.'],
  ['A sleep evaluation', null, 'If your child snores, stops breathing for moments, or wakes unrefreshed, ask whether a sleep study makes sense.'],
  ['Glucose during a meltdown', null, 'A home meter, checked in the moment, shows whether blood-sugar swings are part of the picture.'],
  ['Immunoglobulins (IgG, IgA, IgM, IgG subclasses) + pneumococcal titers', null, 'Can your child’s immune system make the antibodies it needs? A child who keeps getting hit may not be clearing infections.'],
]

export default function PlanBForADHD() {
  return (
    <div className="pd">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="hero">
        <div className="wrap top">
          <a className="brand" href="/for-adhd">Plan B&nbsp;<em>for ADHD</em></a>
          <div className="topr mono">
            <HeaderLang />
            <a href={`${APP}/sign-in`}>Sign in</a>
          </div>
        </div>
        <div className="wrap grid">
          <div>
            <p className="mono r d1" style={{ color: '#C6CEF0', margin: '0 0 16px' }}>When focus changes suddenly · free · a nonprofit</p>
            <h1 className="serif r d2">Focus fell apart after an illness? <em>Look at the body too.</em></h1>
            <p className="lede r d3">ADHD is real, and medicine and support help many children. But when attention or hyperactivity came on suddenly, got much worse fast, or flares with every cold, it can also be an early sign that something in the body is driving the brain. Plan B helps you look at the body alongside your child’s ADHD care: what to track, which tests, what to bring to your doctor. Free.</p>
            <div className="btns r d4">
              <a className="btn p" href={`${APP}/ask?from=${FROM}`}>Ask Minta now</a>
              <a className="btn g" href={`${APP}/signup?from=${FROM}`}>Start your child’s free Synthesis</a>
            </div>
          </div>
          <div className="r d3">
            <ClueFigure
              id="adhd"
              kind="girl"
              fig="Fig. 1 · Where the clue can start"
              caption="An illustration, not a real child. Places to look, not a diagnosis."
              tint="#DCE2F7"
              accent="#F2D35B"
              label="#D3D8EC"
              line="rgba(242,243,247,.09)"
              panel="rgba(8,12,36,.35)"
              points={[
                { x: 262, y: 215, label: 'Brain', sub: 'focus, impulse, sleep' },
                { x: 171, y: 260, label: 'Airway', sub: 'snoring, mouth breathing' },
                { x: 236, y: 342, label: 'Throat', sub: 'strep, Mycoplasma' },
                { x: 272, y: 398, label: 'Gut', sub: 'constipation, food' },
              ]}
            />
          </div>
        </div>
      </header>

      <StrepConnection id="adhd" ink="var(--ink)" muted="var(--muted)" accent="#D9B42E" rule="var(--rule)" card="var(--card)" em="var(--cob2)" />

      <EarlySigns current="attention" ink="var(--ink)" muted="var(--muted)" accent="#D9B42E" rule="var(--rule)" card="var(--card)" em="var(--cob2)" />

      <section>
        <div className="wrap">
          <p className="mono k">Behavior is a clue</p>
          <h2 className="serif">What came <em>right before</em> the change?</h2>
          <p className="frame">Clues to test, not a diagnosis. We update when the data says otherwise.</p>
          <ul className="clues">
            {CLUES.map(([b, s]) => <li key={b}><b>{b}</b><span>{s}</span></li>)}
          </ul>
          <a className="teaser" href={BEHAVIORS} style={{ marginTop: 28 }}>
            <span><span className="mono k">Read more</span><br /><span className="serif" style={{ fontSize: 26 }}>Behaviors are a clue: rage, food refusal, tics, sleep and more</span></span>
            <span aria-hidden style={{ fontSize: 28 }}>→</span>
          </a>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="minta">
            <p className="mono k" style={{ margin: 0 }}>Minta · your 2am troubleshooter</p>
            <h2 className="serif" style={{ marginTop: 8 }}>A wild week after a cold. <em>Ask Minta why.</em></h2>
            <p style={{ maxWidth: 700, margin: 0 }}>Minta is Plan B’s AI, built for families like yours. Tell her what changed: a focus crash, a run of bad nights, a rough stretch after someone at home got sick. She helps you think through what might be driving it and what to try or ask next. She gets sharper once she’s read your child’s records.</p>
            <form className="ask" action={`${APP}/ask`} method="get">
              <input type="hidden" name="from" value={FROM} />
              <input name="q" placeholder="What’s going on with your child?" aria-label="Your question for Minta" />
              <button type="submit">Ask</button>
            </form>
            <div className="chips">{IDEAS.map((q) => <a key={q} href={`${APP}/ask?from=${FROM}&q=${encodeURIComponent(q)}`}>{q}</a>)}</div>
            <p style={{ fontSize: 12.5, color: 'var(--muted)', margin: '12px 0 0' }}>Minta is an AI and can be wrong. Plan B is not a doctor and this isn’t medical advice. In an emergency, call 911 or 988.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">ADHD and the body, in plain words</p>
          <h2 className="serif">Was it always there, <em>or did it switch on?</em></h2>
          <p style={{ maxWidth: 760 }}>ADHD is a real and valid way a brain works. The question that changes what you look for is how it started.</p>
          <div className="two">
            <div className="panel">
              <span className="mono k">Long-standing</span>
              <h3>There for years</h3>
              <ul>
                <li>Present since early childhood, at home and at school</li>
                <li>No clear “before and after”</li>
                <li>ADHD care, including medicine, behavioral support and school help, can make a real difference. Sleep, iron and the gut are still worth checking</li>
              </ul>
            </div>
            <div className="panel">
              <span className="mono k">Sudden</span>
              <h3>It switched on</h3>
              <ul>
                <li>Came on or got much worse over days or weeks, often after an illness</li>
                <li>Flares with colds, strep, a season or a building</li>
                <li>Arrived with new worries, OCD, tics, rage, food refusal, bedwetting or handwriting changes</li>
                <li>That pattern is worth asking your doctor about PANS</li>
              </ul>
            </div>
          </div>
          <p className="note"><b>A child can have both.</b> Looking at the body is something you add, not a reason to stop ADHD care that is helping. Never start, stop or change a medicine without your child’s doctor.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">What to track</p>
          <h2 className="serif">One minute a night. <em>The pattern shows itself.</em></h2>
          <div className="two">
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Focus and restlessness today, 0 to 10</li>
              <li>Sleep: how long, snoring, wakings</li>
              <li>Mood, rage, worries, tics</li>
              <li>Food, and bowel movements</li>
            </ul>
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Sore throats, coughs, fevers, anyone sick at home</li>
              <li>Every treatment and medicine change, and the day it started</li>
              <li>Where they were: home, school, a trip</li>
              <li>School notes, handwriting changes</li>
            </ul>
          </div>
          <div className="research">
            <p className="mono" style={{ color: 'var(--lemon)', fontSize: 11.5, paddingTop: 6 }}>We are the research</p>
            <p>Most ADHD research takes a snapshot. We follow children night by night: infections, sleep, the gut, the immune system and treatments. Every family that tracks helps us find what makes symptoms rise and fall, and the way out.</p>
          </div>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}&next=/tracker`}>Start the free tracker</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="mono k">The tests</p>
          <h2 className="serif">What to ask for, <em>and why.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>Start with the strep and Mycoplasma tests above. Then these, for sleep, iron and the rest of the body. Bring this list to your doctor.</p>
          <table className="tests">
            <tbody>
              {TESTS.map(([n, code, why]) => (
                <tr key={n}><td>{n}{code && <span className="code">{code}</span>}</td><td>{why}</td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 18 }}><a href="https://planbforpans.com/tests" style={{ display: 'inline-flex', minHeight: 44, alignItems: 'center' }}>See every test, with costs and where to get them →</a></p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">What has helped</p>
          <h2 className="serif">ADHD care, <em>and the body too.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>What families and published studies report has helped. Every child is different, and every one of these is decided with your doctor.</p>
          <ol className="helped">
            <li><h3>ADHD care that fits</h3><p>Medicine, behavioral support and school accommodations help many children. Keep what is working.</p></li>
            <li><h3>Treating what is found</h3><p>When a swab or titer finds strep or Mycoplasma, treating it, then checking it cleared. Correcting low iron or a thyroid problem.</p></li>
            <li><h3>Sleep first</h3><p>Fixing snoring, restless legs or a body clock that runs late. Better sleep can change the whole day.</p></li>
          </ol>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16 }}>We’re not doctors. Everything we give you is made to take to yours. Never start, stop or change a medicine without your child’s doctor.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">From the Field Guide</p>
          <h2 className="serif">Read <em>more.</em></h2>
          <div className="cards">
            <a className="card" href="https://planbforpans.com/is-it-adhd-or-pans.html"><span className="mono k">Guide</span><h3>Is it ADHD, or something more?</h3><p>Onset and company: how to tell a long-standing pattern from a sudden change.</p></a>
            <a className="card" href="https://planbforpans.com/root-cause-adhd-treatable-drivers.html"><span className="mono k">Guide</span><h3>Treatable drivers behind focus</h3><p>Sleep, iron, the gut and more, alongside standard care.</p></a>
            <a className="card" href="https://planbforpans.com/mold-and-adhd.html"><span className="mono k">Guide</span><h3>Mold and attention</h3><p>The inflammation and attention connection.</p></a>
            <a className="card" href="https://planbforpans.com/gut-microbiome-and-adhd.html"><span className="mono k">Guide</span><h3>The gut and the brain in ADHD</h3><p>Microbiome, diet and focus.</p></a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">Everything is free</p>
          <h2 className="serif">One family file. <em>Every tool.</em></h2>
          <div className="cards">
            <a className="card" href={`${APP}/signup?from=${FROM}`}><span className="mono k">01 · Free</span><h3>Your child’s Synthesis</h3><p>Every lab and record, read together, so the clues line up. Questions and tests to bring to your doctor.</p></a>
            <a className="card" href={`${APP}/ask?from=${FROM}`}><span className="mono k">02 · Free</span><h3>Minta, any hour</h3><p>Your troubleshooter for the hard nights.</p></a>
            <a className="card" href={`${APP}/signup?from=${FROM}&next=/tracker`}><span className="mono k">03 · Free</span><h3>A one-minute tracker</h3><p>See what helps and what sets off a flare, on a chart you can show the doctor.</p></a>
            <a className="card" href="https://planbforpans.com/app"><span className="mono k">04 · Free</span><h3>Get the app</h3><p>Plan B on your phone, in the App Store and Google Play.</p></a>
          </div>
          <p style={{ marginTop: 22, color: '#DDE1F0' }}>What happens next: biology first, then whatever your child needs. <a href="https://planbforpans.com/#care-path" style={{ color: 'var(--lemon)' }}>See the two-phase care path →</a></p>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}`}>Start free</a>
            <a className="btn g" href={`${APP}/join?src=${FROM}`}>Just keep me posted</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <p className="serif" style={{ fontSize: 24, color: '#F2F3F7', margin: '0 0 6px' }}>Plan B for ADHD</p>
          <p style={{ margin: 0 }}>Part of the Plan B family, from Plan B for PANS, a Colorado nonprofit.</p>
          <div className="fam">
            <a href="https://planbforpans.com">Plan B for PANS</a>
            <a href="https://planbforpans.com/for-autism">Plan B for Autism</a>
            <a href="https://planbforpans.com/for-ocd">Plan B for OCD</a>
            <a href="https://planbforpans.com/for-arfid">Plan B for ARFID</a>
            <a href="https://planbforpans.com/for-constipation">Plan B for Constipation</a>
            <a href="https://planbforpans.com/directory">Find a doctor</a>
            <a href="https://planbforpans.com/donate">Donate</a>
          </div>
          <p style={{ margin: 0, fontSize: 13 }}>Educational information only; not medical advice. Plan B does not diagnose or treat. Always work with your child’s doctor.</p>
        </div>
      </footer>
    </div>
  )
}
