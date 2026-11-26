'use client'

// The deeper sections of each condition page (Rachel, 2026-11-26: "Can we deepen it? We definitely have
// the right idea."). Homepage theme, phone first. Every citation below was checked against PubMed/Crossref.
import { useState } from 'react'
import type { Condition } from './conditions'

const APP = 'https://app.planbforpans.com'

const DX_CSS = `
.ck-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 8px 18px; }
.ck-list label { display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; border: 1px solid var(--sand); background: var(--cream); cursor: pointer; min-height: 48px; font-size: 15.5px; line-height: 1.45; color: var(--ink); }
.ck-list input { width: 20px; height: 20px; accent-color: var(--teal); flex: none; margin: 1px 0 0; }
.ck-list label:has(input:checked) { border-color: var(--teal); background: var(--cream-light); }
.ck-out { margin-top: 18px; border-inline-start: 3px solid var(--teal); padding: 10px 0 10px 18px; }
.ck-n { font-family: var(--font-display); font-size: clamp(26px, 3vw, 36px); margin: 0 0 6px; color: var(--ink); }
.ck-n em { color: var(--teal); }
.ck-meter { display: flex; gap: 4px; margin: 0 0 12px; }
.ck-meter span { flex: 1; height: 6px; background: var(--sand); }
.ck-meter span.on { background: var(--teal); }
.cmp { width: 100%; border-collapse: collapse; }
.cmp th { text-align: start; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); font-weight: 500; padding: 0 12px 10px 0; }
.cmp th.b { color: var(--teal); }
.cmp td { border-top: 1px solid var(--sand); padding: 14px 12px 14px 0; vertical-align: top; font-size: 15.5px; line-height: 1.55; color: var(--ink-soft); }
.cmp td:first-child { font-family: var(--font-display); font-size: 18px; color: var(--ink); width: 22%; }
.cmp td.b { color: var(--ink); }
.mx { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(24px, 4vw, 48px); align-items: center; }
.mx-plate { border: 1px solid var(--sand); background: var(--cream); padding: 16px; }
.mx-plate svg { width: 100%; height: auto; display: block; }
.dr { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 12px; }
.dr div { border: 1px solid var(--sand); background: var(--cream); padding: 18px 20px; }
.dr q { display: block; font-family: var(--font-display); font-size: 22px; line-height: 1.25; color: var(--ink); quotes: none; margin: 0 0 10px; }
.dr p { margin: 0; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
.dr p b { font-family: var(--font-mono); font-weight: 500; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--teal); display: block; margin-bottom: 4px; }
.rs { margin: 0; padding-inline-start: 22px; }
.rs li { margin: 0 0 12px; font-size: 15px; line-height: 1.55; color: var(--ink-soft); }
.rs li span { display: block; color: var(--ink); }
.fq details { border-top: 1px solid var(--sand); }
.fq details:last-child { border-bottom: 1px solid var(--sand); }
.fq summary { cursor: pointer; list-style: none; padding: 16px 32px 16px 0; font-family: var(--font-display); font-size: clamp(19px, 2vw, 23px); color: var(--ink); position: relative; min-height: 44px; }
.fq summary::-webkit-details-marker { display: none; }
.fq summary::after { content: "+"; position: absolute; right: 4px; top: 14px; color: var(--teal); font-family: var(--font-mono); font-size: 20px; }
.fq details[open] summary::after { content: "–"; }
.fq details p { margin: 0 0 18px; font-size: 15.5px; line-height: 1.65; color: var(--ink-soft); max-width: 760px; }
@media (max-width: 760px) {
  .mx { grid-template-columns: 1fr; }
  .cmp thead { display: none; }
  .cmp tr { display: block; border-top: 1px solid var(--sand); padding: 12px 0; }
  .cmp td { display: block; border: 0; padding: 3px 0; width: auto !important; }
  .cmp td.b::before { content: "Body-driven: "; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--teal); }
  .cmp td.t::before { content: "More typical: "; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--sand-dark); }
}
`

export function DepthStyle() {
  return <style dangerouslySetInnerHTML={{ __html: DX_CSS }} />
}

function Head({ fig, title, by }: { fig: string; title: string; by: string }) {
  return <div className="fx-head"><p className="fx-fig">{fig} &middot; {title}</p><p className="fx-by">{by}</p></div>
}

// "Is it the body?" Nothing is stored; the count only says how much of the pattern is there.
export function SelfCheck({ fig, c }: { fig: string; c: Condition }) {
  const items = [
    `${c.it} came on fast, over days or weeks.`,
    `${c.it} crept in, then flared with colds or strep.`,
    'It gets worse with colds, strep or other illness.',
    'It comes and goes: good weeks, then bad weeks.',
    'Tics: blinking, throat clearing, sniffing, jerks.',
    'Eating less, or new fears about food.',
    'Bedwetting, or needing to pee often and urgently.',
    'Handwriting or math slipping.',
    'Separation anxiety, or new fears of being alone.',
    'Rage or big mood swings.',
    'Sleep falling apart.',
    'Sounds, tags, lights or smells suddenly unbearable.',
    'Someone in the family had strep recently, or has an autoimmune condition.',
  ]
  const [on, setOn] = useState<boolean[]>(() => items.map(() => false))
  const n = on.filter(Boolean).length
  return (
    <section className="fx reveal" aria-label="Is it the body? A self-check">
      <div className="fx-in">
        <Head fig={fig} title="Is it the body?" by="Nothing you check is saved" />
        <h2 className="fx-title">Check what <em>you’ve seen.</em></h2>
        <p className="fx-p">You know your child better than anyone. Tick what fits. This isn’t a test and it isn’t a diagnosis. It’s a way to see the pattern on one page.</p>
        <ul className="ck-list">
          {items.map((t, i) => (
            <li key={t}><label><input type="checkbox" checked={on[i]} onChange={() => setOn((a) => a.map((v, j) => (j === i ? !v : v)))} />{t}</label></li>
          ))}
        </ul>
        <div className="ck-out" aria-live="polite">
          <div className="ck-meter" aria-hidden="true">{items.map((_, i) => <span key={i} className={i < n ? 'on' : undefined} />)}</div>
          <p className="ck-n">{n === 0 ? <>Nothing checked yet.</> : <>You checked <em>{n}</em>.</>}</p>
          <p className="fx-p" style={{ margin: 0 }}>The more you checked, the more it’s worth looking at the body. Bring this list and the dates to your doctor, and start with the strep swabs and titers above.</p>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', alignItems: 'center', marginTop: 18 }}>
            <a href={`${APP}/signup?from=${c.k}&next=/tracker`} className="cta-teal">Start the free tracker</a>
            <a href={`${APP}/signup?from=${c.k}`} className="link-sweep" style={{ color: 'var(--ink)', fontSize: 14.5 }}>Or start your free Synthesis &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Compare({ fig, c }: { fig: string; c: Condition }) {
  const rows: [string, string, string][] = [
    ['With illness', 'Flares with colds, strep or other bugs.', 'Steadier, not tied to illness.'],
    ['Ups and downs', 'Waxes and wanes: good stretches, then flares.', 'Much the same from week to week.'],
    ['Other signs at once', 'Arrives with other changes: tics, sleep, eating, rage, bedwetting.', 'Usually on its own.'],
    ['After treating an infection', 'May ease when an infection is found and treated.', 'Infection treatment doesn’t change it much.'],
  ]
  return (
    <section className="fx reveal" aria-label="Body-driven or more typical">
      <div className="fx-in">
        <Head fig={fig} title="Side by side" by="Can look like, not a diagnosis" />
        <h2 className="fx-title">Body-driven {c.name}, <em>or more typical?</em></h2>
        <table className="cmp">
          <thead><tr><th /><th className="b">Can look body-driven</th><th>Can look more typical</th></tr></thead>
          <tbody>{rows.map(([k, b, t]) => <tr key={k}><td>{k}</td><td className="b">{b}</td><td className="t">{t}</td></tr>)}</tbody>
        </table>
        <p className="fx-note">How fast it started doesn’t settle it. Often it’s sudden, but not always: it can also creep in and flare with every illness. These can look like each other, and a child can have both. Only a doctor can diagnose.</p>
      </div>
    </section>
  )
}

export function Mechanism({ fig, c }: { fig: string; c: Condition }) {
  return (
    <section className="fx reveal" aria-label="How it can happen">
      <div className="fx-in">
        <Head fig={fig} title="How it can happen" by="In plain English" />
        <h2 className="fx-title">A case of <em>mistaken identity.</em></h2>
        <div className="mx">
          <div>
            <p className="fx-p">When a child catches strep, the immune system makes antibodies to fight it. That’s its job. The trouble is that some parts of strep look a lot like parts of the brain, especially the <b>basal ganglia</b>, a deep center that helps run movement, habits and that “done, now move on” feeling.</p>
            <p className="fx-p">In some children, those antibodies can bump into the brain too. Scientists call it <b>molecular mimicry</b>. Inflammation from other infections can open the door in a similar way. What comes out can look like {c.mechHook}.</p>
            {c.mechExtra && <p className="fx-p">{c.mechExtra}</p>}
            <p className="fx-p">That’s why the swabs and titers come first: find the infection that may be driving it.</p>
          </div>
          <div className="mx-plate">
            <svg viewBox="0 0 400 230" role="img" aria-label="Strep leads the immune system to make antibodies; some antibodies can also reach the basal ganglia in the brain.">
              <defs><marker id="mx-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10" fill="none" stroke="var(--sand-dark)" strokeWidth="1.5" /></marker></defs>
              <g>
                {[[52, 96], [70, 120], [44, 124], [62, 146], [84, 98]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="9" fill="none" stroke="var(--ink)" strokeWidth="1.4" />)}
                <text x="64" y="184" textAnchor="middle" className="fx-tag">Strep</text>
              </g>
              <path d="M110 120 H160" stroke="var(--sand-dark)" strokeWidth="1" markerEnd="url(#mx-ar)" />
              <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
                {[[190, 96], [214, 128], [188, 150]].map(([x, y], i) => <path key={i} d={`M${x} ${y + 16} V${y} L${x - 9} ${y - 10} M${x} ${y} L${x + 9} ${y - 10}`} />)}
              </g>
              <text x="200" y="184" textAnchor="middle" className="fx-tag" style={{ fill: 'var(--teal)' }}>Antibodies</text>
              <path d="M238 120 H288" stroke="var(--sand-dark)" strokeWidth="1" markerEnd="url(#mx-ar)" strokeDasharray="4 3" />
              <path d="M300 70 C300 40 380 36 384 76 C392 92 388 130 368 142 C356 160 320 158 306 140 C292 128 296 96 300 70 Z" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
              <ellipse cx="340" cy="108" rx="14" ry="10" fill="var(--signal)" opacity=".85" />
              <text x="340" y="184" textAnchor="middle" className="fx-tag">Basal ganglia</text>
              <text x="200" y="214" textAnchor="middle" fill="var(--ink-soft)" fontSize="12.5" fontFamily="var(--font-body)">Some antibodies made for strep can also reach the brain.</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DoctorReplies({ fig, c }: { fig: string; c: Condition }) {
  return (
    <section className="fx reveal" aria-label="What a doctor might say">
      <div className="fx-in">
        <Head fig={fig} title="What a doctor might say" by="And what to ask, as a team" />
        <h2 className="fx-title">Curious, not combative. <em>You’re on the same team.</em></h2>
        <p className="fx-p">Doctors are busy and most were trained before PANS was well known. A gentle question opens more doors than a fight.</p>
        <div className="dr">
          {c.replies.map(([said, ask]) => (
            <div key={said}><q>{said}</q><p><b>You might ask</b>{ask}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CITES: [string, string][] = [
  ['Swedo SE, et al. Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections: clinical description of the first 50 cases. Am J Psychiatry. 1998;155(2):264–271.', 'https://pubmed.ncbi.nlm.nih.gov/9464208/'],
  ['Swedo SE, Leckman JF, Rose NR. From research subgroup to clinical syndrome: modifying the PANDAS criteria to describe PANS. Pediatr Therapeut. 2012;2:113.', 'https://doi.org/10.4172/2161-0665.1000113'],
  ['Chang K, et al. Clinical evaluation of youth with PANS: recommendations from the 2013 PANS Consensus Conference. J Child Adolesc Psychopharmacol. 2015;25(1):3–13.', 'https://pubmed.ncbi.nlm.nih.gov/25325534/'],
  ['Swedo SE, Frankovich J, Murphy TK. Overview of treatment of PANS. J Child Adolesc Psychopharmacol. 2017;27(7):562–565. With Parts I–III of the 2017 PANS treatment guidelines (Thienemann; Frankovich; Cooperstock).', 'https://pubmed.ncbi.nlm.nih.gov/28722464/'],
  ['Cooperstock MS, et al. Clinical management of PANS: Part III, treatment and prevention of infections. J Child Adolesc Psychopharmacol. 2017;27(7):594–606.', 'https://pubmed.ncbi.nlm.nih.gov/36358106/'],
  ['Dileepan T, et al. Group A Streptococcus intranasal infection promotes CNS infiltration by streptococcal-specific Th17 cells. J Clin Invest. 2016;126(1):303–317.', 'https://pubmed.ncbi.nlm.nih.gov/26657857/'],
]

export function Research({ fig, c }: { fig: string; c: Condition }) {
  const list = [...CITES, ...(c.cites ?? [])]
  return (
    <section className="fx reveal" aria-label="The research behind it">
      <div className="fx-in">
        <Head fig={fig} title="The research behind it" by="Published, peer-reviewed" />
        <h2 className="fx-title">Not a theory we made up. <em>Here’s where it comes from.</em></h2>
        <ol className="rs">
          {list.map(([t, href]) => <li key={href}><span>{t}</span><a className="fx-link" style={{ minHeight: 32, fontSize: 14 }} href={href} target="_blank" rel="noopener">Read it →</a></li>)}
        </ol>
        <p className="fx-note">Much of the science is still young. Plan B for PANS follows children night by night to help fill in what isn’t known yet.</p>
      </div>
    </section>
  )
}

export function Faq({ fig, c }: { fig: string; c: Condition }) {
  const qa: [string, string][] = [
    ['Isn’t this rare?', 'It’s underrecognized. Many parents, and many doctors, have never heard of PANS, so the quieter versions are easy to miss. That’s why the timeline matters so much.'],
    ['Does it have to come on suddenly?', 'No. Often it’s sudden, and many parents can name the week. But not always. It can also creep in and flare with every illness. The clue is the pattern: worse when sick, several signs moving together, ups and downs. The research criteria for PANS describe an abrupt onset; many families see a slower, flaring pattern, and that is worth checking with your doctor too.'],
    [c.careQ, c.careA],
    ['Can this happen without a sore throat?', 'Yes. Strep can live around the bottom or be carried by someone at home without symptoms, and other infections, like Mycoplasma, flu, COVID or hand-foot-and-mouth, can do it too.'],
    ['How long does testing take?', 'Swabs often come back in a day to a few days, blood titers in about a week. Repeating titers takes four to six weeks. Specialty stool and urine tests can take two to three weeks.'],
    ['What does it cost?', 'Plan B’s Synthesis, Minta and the tracker are free. Basic tests like strep swabs and titers are often covered by insurance; specialty stool and urine tests usually cost more. Your Synthesis lists the codes your doctor needs.'],
    ['What if the labs are normal?', 'That’s useful too. Some markers are worth repeating, because one normal result can miss a rise. And it points to Phase 2 of the care path: the nervous system, therapy, and whatever else your child needs.'],
    ['Do we need a PANS specialist to start?', 'No. A pediatrician can order the swabs and titers. Plan B helps you bring a clear timeline and the right questions.'],
  ]
  return (
    <section className="fx reveal" aria-label="Questions parents ask">
      <div className="fx-in fq">
        <Head fig={fig} title="Questions parents ask" by="Short answers" />
        <h2 className="fx-title">You’re not the first to <em>wonder.</em></h2>
        {qa.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  )
}
