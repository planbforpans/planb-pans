import type { Metadata } from 'next'
import HeaderLang from '../_components/HeaderLang'
import { ClueFigure, EarlySigns, StrepConnection } from '../_components/ConditionFigures'

// Plan B for Constipation (Rachel, 2026-11-26). Served at planbforconstipation.com via middleware rewrite.
// Chronic constipation no one explains, especially with behavior or mood changes, as an early sign.
const TITLE = 'Plan B for Constipation · When it won’t go away'
const DESC = 'Constipation that won’t go away, with mood or behavior changes? Better on antibiotics? Free help from a nonprofit: what to track, which tests, and what to bring to your child’s doctor.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://planbforpans.com/for-constipation' },
  openGraph: { title: 'Plan B for Constipation', description: DESC, url: 'https://planbforpans.com/for-constipation', siteName: 'Plan B for Constipation', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plan B for Constipation', description: DESC },
}

const APP = 'https://app.planbforpans.com'
const FROM = 'constipation'
const BEHAVIORS = 'https://planbforpans.com/learning/behaviors-are-a-clue'

const css = `
body:has(.pk) .site-header, body:has(.pk) > footer { display:none !important }
body:has(.pk){ background:#F4EFE7 }
.pk{ --ink:#241B14; --wal:#33261C; --wal2:#4A3828; --mint:#8FD3B6; --fern:#2F7A5C; --paper:#F4EFE7; --card:#FBF8F2; --rule:#E0D6C8; --muted:#6A5E52;
  color:var(--ink); font-family: var(--f-instrument), 'Instrument Sans', system-ui, sans-serif; font-size:17px; line-height:1.65; overflow-x:hidden }
.pk *{ box-sizing:border-box } .pk a{ color:inherit }
.pk h1,.pk h2,.pk h3,.pk p,.pk li{ color:inherit }
.pk .serif{ font-family: var(--f-bodoni), 'Bodoni Moda', Georgia, serif; font-weight:400 }
.pk .mono{ font-family: var(--f-plex), 'IBM Plex Mono', monospace; letter-spacing:.18em; text-transform:uppercase; font-size:11.5px }
.pk .wrap{ max-width:1100px; margin:0 auto; padding:0 20px }
.pk .hero{ background-color:var(--wal); color:#F4EFE7; padding:22px 0 72px; position:relative; overflow:hidden;
  background-image: repeating-linear-gradient(0deg, rgba(244,239,231,.05) 0 1px, transparent 1px 14px), radial-gradient(ellipse 70% 80% at 85% 20%, #4A3828 0%, #33261C 58%, #211710 100%);
  background-size: 100% 100%, 100% 100% }
.pk .top{ display:flex; justify-content:space-between; align-items:center; gap:12px; position:relative; flex-wrap:wrap }
.pk .brand{ font-family: var(--f-bodoni), Georgia, serif; font-size:24px; text-decoration:none; min-height:44px; display:inline-flex; align-items:center }
.pk .brand em{ color:var(--mint) }
.pk .topr{ display:flex; gap:10px; align-items:center; font-size:12px }
.pk .topr a, .pk .topr .nav-lang{ min-height:44px; display:inline-flex; align-items:center; text-decoration:none; color:#ECE5D9 }
.pk .topr .nav-lang{ padding:0 14px; font-family: var(--f-plex), monospace; letter-spacing:.1em; font-size:12px }
.pk .grid{ display:grid; grid-template-columns: 1.1fr .9fr; gap:36px; align-items:center; margin-top:44px; position:relative }
.pk .grid > *{ min-width:0 }
.pk h1{ font-size:clamp(42px,6.4vw,78px); line-height:1; margin:0 }
.pk h1 em{ color:var(--mint) }
.pk .lede{ font-size:clamp(18px,2.1vw,21px); line-height:1.5; color:#E5DDD0; margin:22px 0 28px; max-width:590px }
.pk .btns{ display:flex; flex-wrap:wrap; gap:12px }
.pk .btn{ display:inline-flex; align-items:center; min-height:48px; padding:12px 22px; border-radius:6px; text-decoration:none; font-weight:600; font-size:15px }
.pk .btn.p{ background:var(--mint); color:#10241B } .pk .btn.g{ border:1px solid rgba(244,239,231,.5); color:#F4EFE7 } .pk .btn.d{ background:var(--wal); color:#fff }
.pk section{ padding: clamp(58px,8vw,104px) 0 }
.pk h2{ font-size:clamp(32px,4.4vw,52px); line-height:1.06; margin:10px 0 18px }
.pk h2 em{ color:var(--fern) }
.pk .k{ color:var(--fern) }
.pk .frame{ border-inline-start:3px solid var(--mint); padding:4px 0 4px 16px; margin:0 0 26px; font-style:italic; color:var(--muted) }
.pk .clues{ list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr)); gap:0 34px }
.pk .clues li{ border-top:1px solid var(--rule); padding:16px 0 }
.pk .clues b{ display:block; font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:22px; line-height:1.25; margin-bottom:4px }
.pk .clues span{ color:var(--muted); font-size:15.5px }
.pk .minta{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:clamp(22px,4vw,40px); box-shadow:0 30px 70px -44px rgba(51,38,28,.55) }
.pk .ask{ display:flex; gap:8px; margin-top:18px }
.pk .ask input{ flex:1; min-width:0; font-size:17px; padding:13px 16px; min-height:50px; border:1px solid #CFC3B2; border-radius:6px; font-family:inherit; background:#fff }
.pk .ask button{ border:0; border-radius:6px; background:var(--wal); color:#fff; font-weight:600; padding:0 22px; min-height:50px; font-size:15px; cursor:pointer }
.pk .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:14px }
.pk .chips a{ text-decoration:none; border:1px solid var(--rule); background:var(--paper); border-radius:6px; padding:10px 14px; font-size:13.5px; min-height:44px; display:inline-flex; align-items:center }
.pk .two{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); gap:18px; margin-top:20px }
.pk .panel{ background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:24px }
.pk .panel h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:28px; margin:6px 0 10px }
.pk .panel ul{ margin:0; padding-inline-start:20px } .pk .panel li{ margin-bottom:6px }
.pk .warn{ border:1px solid #DDBFA8; background:#F8ECE1; border-radius:10px; padding:16px 20px; margin-top:20px; font-size:15.5px }
.pk .tests{ width:100%; border-collapse:collapse; margin-top:16px }
.pk .tests td{ border-top:1px solid var(--rule); padding:16px 12px 16px 0; vertical-align:top }
.pk .tests td:first-child{ width:38%; font-weight:600 }
.pk .tests .code{ display:block; font-family: var(--f-plex), monospace; font-size:12px; color:var(--muted); font-weight:400; margin-top:3px }
.pk .band{ background:var(--wal); color:#F4EFE7 }
.pk .band h2 em{ color:var(--mint) }
.pk .band .k{ color:#B4DCC8 }
.pk .cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr)); gap:16px; margin-top:22px }
.pk .card{ background:var(--card); color:var(--ink); border-radius:10px; padding:22px; text-decoration:none; display:block; border:1px solid var(--rule) }
.pk .card h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:8px 0 6px }
.pk .card p{ margin:0; font-size:15.5px; color:var(--muted) }
.pk .helped{ counter-reset:h; list-style:none; padding:0; margin:20px 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:18px }
.pk .helped li{ counter-increment:h; background:var(--card); border:1px solid var(--rule); border-radius:10px; padding:22px }
.pk .helped li::before{ content:"0" counter(h); font-family: var(--f-plex), monospace; color:var(--fern); font-size:13px; letter-spacing:.15em; display:block }
.pk .helped h3{ font-family: var(--f-bodoni), Georgia, serif; font-weight:400; font-size:24px; margin:6px 0 8px }
.pk .helped p{ margin:0; font-size:15.5px; color:var(--muted) }
.pk .teaser{ display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid var(--rule); border-radius:10px; padding:24px; background:var(--card); text-decoration:none }
.pk .research{ border-top:1px solid rgba(244,239,231,.25); margin-top:34px; padding-top:26px; display:grid; grid-template-columns:auto 1fr; gap:22px; align-items:start; max-width:900px }
.pk .research p{ margin:0; font-size:clamp(18px,2vw,21px); color:#E5DDD0 }
.pk .foot{ background:#18110B; color:#BDB2A4; padding:44px 0 88px; font-size:14.5px }
.pk .foot a{ color:#EEE8DD; min-height:44px; display:inline-flex; align-items:center }
.pk .fam{ display:flex; flex-wrap:wrap; gap:0 20px; margin:10px 0 14px }
@keyframes rise{ from{ opacity:0; transform:translateY(16px) } to{ opacity:1; transform:none } }
.pk .r{ opacity:0; animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards } .pk .d1{animation-delay:.1s} .pk .d2{animation-delay:.3s} .pk .d3{animation-delay:.5s} .pk .d4{animation-delay:.75s}
@media (max-width:820px){ .pk .grid{ grid-template-columns:1fr } .pk .tests td{ display:block; width:auto !important; padding:4px 0 } .pk .tests td:first-child{ padding-top:16px } .pk .tests td + td{ border-top:0; padding-bottom:16px } .pk .research{ grid-template-columns:1fr; gap:8px } }
@media (prefers-reduced-motion: reduce){ .pk .r{ animation:none; opacity:1 } }
`

const IDEAS = [
  'His constipation got better on amoxicillin and came back after. What does that mean?',
  'Her mood is worst when she hasn’t gone in days. Could they be connected?',
  'What does a methane breath test show?',
  'Which stool tests are worth asking for?',
]

const CLUES: [string, string][] = [
  ['Better on antibiotics, back after: that is a clue.', 'Constipation that eases while your child takes an antibiotic for something else suggests a microbe is part of the story. Write down the dates.'],
  ['Bloating, gas, very slow stools: think methane.', 'Methane-making gut microbes slow the bowel. A breath test can measure them.'],
  ['Mood and behavior swing with the gut: think clostridia.', 'Some gut clostridia make byproducts studied for their effects on behavior. After antibiotics, C. diff is a separate thing to rule out.'],
  ['Redness or itching around the bottom: think perianal strep.', 'Strep can live there and make stooling hurt, so children hold it in.'],
  ['Fatty foods sit badly, stools are slow and dry: think bile.', 'Bile acids help keep the bowel moving. Pale or clay-colored stool needs a doctor promptly.'],
  ['Tired, cold, dry skin, slow growth: think thyroid.', 'An underactive thyroid slows the whole body, the gut included.'],
  ['On iron, or low in magnesium: think minerals.', 'Iron supplements can constipate. Low magnesium can slow the bowel. Check levels before guessing.'],
  ['Worse with milk or one food: think a food reaction.', 'Cow’s milk is a known cause of stubborn constipation in some children.'],
]

const TESTS: [string, string | null, string][] = [
  ['Lactulose breath test: hydrogen and methane', 'CPT 91065', 'Measures gas made by gut microbes. High methane points to slow-transit constipation and a treatable overgrowth.'],
  ['A comprehensive stool test', null, 'Shows the balance of gut bacteria, yeast and inflammation markers, including clostridia. C. diff testing is separate and only runs on loose stool.'],
  ['Thyroid: TSH + free T4', null, 'A simple blood test for a slow thyroid, a common and treatable cause of constipation.'],
  ['Ferritin, iron panel and magnesium', null, 'Iron stores, and the mineral that helps the bowel move. Low ferritin is common and often missed by a plain CBC.'],
  ['Celiac screen: tTG-IgA with total IgA', null, 'In children, celiac disease can show up as constipation rather than diarrhea.'],
]

export default function PlanBForConstipation() {
  return (
    <div className="pk">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="hero">
        <div className="wrap top">
          <a className="brand" href="/for-constipation">Plan B&nbsp;<em>for Constipation</em></a>
          <div className="topr mono">
            <HeaderLang />
            <a href={`${APP}/sign-in`}>Sign in</a>
          </div>
        </div>
        <div className="wrap grid">
          <div>
            <p className="mono r d1" style={{ color: '#B4DCC8', margin: '0 0 16px' }}>When constipation won’t go away · free · a nonprofit</p>
            <h1 className="serif r d2">Constipation no one can explain? <em>It may be a clue.</em></h1>
            <p className="lede r d3">Most constipation in children is simple. But when it never really goes away, comes with mood or behavior changes, or gets better every time your child is on an antibiotic, it can be an early sign that something in the gut is talking to the brain. Plan B helps you track it, find the right tests and bring it all to your doctor. Free.</p>
            <div className="btns r d4">
              <a className="btn p" href={`${APP}/ask?from=${FROM}`}>Ask Minta now</a>
              <a className="btn g" href={`${APP}/signup?from=${FROM}`}>Start your child’s free Synthesis</a>
            </div>
          </div>
          <div className="r d3">
            <ClueFigure
              id="constipation"
              kind="boy"
              fig="Fig. 1 · Where the clue can start"
              caption="An illustration, not a real child. Places to look, not a diagnosis."
              tint="#E9E1D3"
              accent="#8FD3B6"
              label="#DDD4C6"
              line="rgba(244,239,231,.09)"
              panel="rgba(18,12,7,.35)"
              points={[
                { x: 270, y: 200, label: 'Brain', sub: 'mood, rage, focus' },
                { x: 235, y: 320, label: 'Neck', sub: 'strep, thyroid' },
                { x: 272, y: 398, label: 'Gut', sub: 'clostridia, methane,\nbile, food' },
              ]}
            />
          </div>
        </div>
      </header>

      <StrepConnection id="constipation" ink="var(--ink)" muted="var(--muted)" accent="#3FA07A" rule="var(--rule)" card="var(--card)" em="var(--fern)" />

      <EarlySigns current="constipation" ink="var(--ink)" muted="var(--muted)" accent="#3FA07A" rule="var(--rule)" card="var(--card)" em="var(--fern)" />

      <section>
        <div className="wrap">
          <p className="mono k">Behavior is a clue</p>
          <h2 className="serif">What does the gut <em>have to do with</em> the behavior?</h2>
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
            <h2 className="serif" style={{ marginTop: 8 }}>Four days, no poop, a hard night. <em>Ask Minta why.</em></h2>
            <p style={{ maxWidth: 700, margin: 0 }}>Minta is Plan B’s AI, built for families like yours. Tell her what changed: a week of backup, a rage that came with it, a course of antibiotics that seemed to help. She helps you think through what might be driving it and what to try or ask next. She gets sharper once she’s read your child’s records.</p>
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
          <p className="mono k">The gut and the brain, in plain words</p>
          <h2 className="serif">Usual constipation, <em>or a clue?</em></h2>
          <p style={{ maxWidth: 760 }}>The gut and the brain talk all day, through nerves, the immune system and what gut microbes make. Most constipation is fiber, fluids and habits. Some is worth a closer look.</p>
          <div className="two">
            <div className="panel">
              <span className="mono k">Usually simple</span>
              <h3>Fixed by the basics</h3>
              <ul>
                <li>Started with potty training, a new school or a diet change</li>
                <li>Gets better with fiber, water, routine and what the pediatrician suggests</li>
                <li>No big swings in mood or behavior that track with it</li>
              </ul>
            </div>
            <div className="panel">
              <span className="mono k">Worth a closer look</span>
              <h3>It keeps coming back</h3>
              <ul>
                <li>Doesn’t budge with the basics, or comes right back</li>
                <li><b>Better on antibiotics</b>, worse after</li>
                <li>Mood, rage, anxiety, sleep or focus rise and fall with it</li>
                <li>Arrived with sudden OCD, food restriction or tics, which is worth asking your doctor about PANS</li>
              </ul>
            </div>
          </div>
          <p style={{ maxWidth: 760, marginTop: 20, color: 'var(--muted)' }}>Only a doctor can diagnose what is behind it. What you bring them, a clear timeline and the right tests, makes that conversation much easier.</p>
          <p className="warn"><b>Call the doctor promptly</b> for constipation since the first days of life, blood in the stool, a swollen belly with vomiting, weight loss, pale or clay-colored stools, or new leg weakness or back pain.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="mono k">What to track</p>
          <h2 className="serif">One minute a night. <em>The pattern shows itself.</em></h2>
          <div className="two">
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Bowel movements: how often, and hard or soft</li>
              <li>Belly aches, bloating, appetite</li>
              <li>Mood, rage, anxiety, sleep</li>
              <li>Food: what and how much</li>
            </ul>
            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
              <li>Every antibiotic, and how the gut did on it and after</li>
              <li>Every treatment, and the day it started</li>
              <li>Sore throats, coughs, fevers, anyone sick at home</li>
              <li>Where they were: home, school, a trip</li>
            </ul>
          </div>
          <div className="research">
            <p className="mono" style={{ color: 'var(--mint)', fontSize: 11.5, paddingTop: 6 }}>We are the research</p>
            <p>Almost no one follows a child’s gut and behavior side by side. We do: infections, the gut, the immune system, sleep and treatments, night by night. Every family that tracks helps us find what makes symptoms rise and fall, and the way out.</p>
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
          <p style={{ maxWidth: 760, margin: 0 }}>Start with the strep swabs above, including the perianal swab. Then these, for the gut itself. Bring this list to your doctor.</p>
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
          <h2 className="serif">Clear it. Find it. <em>Rebuild.</em></h2>
          <p style={{ maxWidth: 760, margin: 0 }}>What families and published studies report has helped. Every child is different, and every one of these is decided with your doctor.</p>
          <ol className="helped">
            <li><h3>Clearing the backup</h3><p>Getting stool moving again with your doctor’s plan comes first. A full gut can drive appetite, sleep and mood on its own.</p></li>
            <li><h3>Treating what is found</h3><p>When a swab, breath test or stool test finds something, treating it, then rechecking. Correcting a slow thyroid or low minerals.</p></li>
            <li><h3>Rebuilding the gut</h3><p>Food, fiber and probiotics, and for some families with a practitioner, probiotic enemas. FMT is the deep end, mostly in research.</p></li>
          </ol>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16 }}>We’re not doctors. Everything we give you is made to take to yours. Never start, stop or change a medicine without your child’s doctor.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mono k">From the Field Guide</p>
          <h2 className="serif">Read <em>more.</em></h2>
          <div className="cards">
            <a className="card" href="https://planbforpans.com/constipation-in-children-hidden-causes.html"><span className="mono k">Guide</span><h3>Constipation that won’t go away</h3><p>The usual causes and red flags first, then when to look deeper.</p></a>
            <a className="card" href={`${APP}/learn/constipation-and-appetite`}><span className="mono k">From our cases</span><h3>Constipation is stealing the appetite</h3><p>No lunch, then a huge dinner, and why.</p></a>
            <a className="card" href="https://planbforpans.com/gut.html"><span className="mono k">Guide</span><h3>The gut and the microbiome</h3><p>Which stool test, and how to reset it.</p></a>
            <a className="card" href="https://planbforpans.com/fmt.html"><span className="mono k">Guide</span><h3>Probiotic enemas and FMT</h3><p>The trial data, the routes and the FDA limits, honestly.</p></a>
            <a className="card" href="https://planbforpans.com/yeast.html"><span className="mono k">Guide</span><h3>Yeast and Candida</h3><p>The behaviors it drives, and a gentle protocol.</p></a>
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
          <p style={{ marginTop: 22, color: '#E5DDD0' }}>What happens next: biology first, then whatever your child needs. <a href="https://planbforpans.com/#care-path" style={{ color: 'var(--mint)' }}>See the two-phase care path →</a></p>
          <div className="btns" style={{ marginTop: 26 }}>
            <a className="btn p" href={`${APP}/signup?from=${FROM}`}>Start free</a>
            <a className="btn g" href={`${APP}/join?src=${FROM}`}>Just keep me posted</a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <p className="serif" style={{ fontSize: 24, color: '#F4EFE7', margin: '0 0 6px' }}>Plan B for Constipation</p>
          <p style={{ margin: 0 }}>Part of the Plan B family, from Plan B for PANS, a Colorado nonprofit.</p>
          <div className="fam">
            <a href="https://planbforpans.com">Plan B for PANS</a>
            <a href="https://planbforpans.com/for-autism">Plan B for Autism</a>
            <a href="https://planbforpans.com/for-ocd">Plan B for OCD</a>
            <a href="https://planbforpans.com/for-adhd">Plan B for ADHD</a>
            <a href="https://planbforpans.com/for-arfid">Plan B for ARFID</a>
            <a href="https://planbforpans.com/directory">Find a doctor</a>
            <a href="https://planbforpans.com/donate">Donate</a>
          </div>
          <p style={{ margin: 0, fontSize: 13 }}>Educational information only; not medical advice. Plan B does not diagnose or treat. Always work with your child’s doctor.</p>
        </div>
      </footer>
    </div>
  )
}
