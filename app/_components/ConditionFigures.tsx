// Shared figures for the Plan B condition pages, drawn in the homepage's theme (white, ink, teal, signal red).
// Rachel, 2026-11-26: "These are precursors to PANS." / "Same thing, just not as severe." /
// "Most don't even know that strep causes these things." / "Show that pathogens have a personality."
import type { BugKey, SignKey } from './conditions'

const FX_CSS = `
.fx { padding: clamp(56px, 7vw, 96px) 24px 0; }
.fx-in { max-width: 1200px; margin: 0 auto; border-top: 1px solid var(--ink); padding-top: 20px; }
.fx-head { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; align-items: baseline; margin: 0 0 18px; }
.fx-fig { font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal); margin: 0; }
.fx-by { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); margin: 0; }
.fx-title { font-size: clamp(30px, 3.8vw, 50px); margin: 0 0 clamp(20px, 3vw, 32px); max-width: 860px; }
.fx-title em { color: var(--teal); }
.fx-p { font-size: 16.5px; line-height: 1.7; color: var(--ink-soft); margin: 0 0 16px; max-width: 760px; }
.fx-p b { color: var(--ink); }
.fx-note { font-size: 12.5px; color: var(--sand-dark); margin: 14px 0 0; font-style: italic; }
.fx-tag { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; fill: var(--sand-dark); color: var(--sand-dark); }
.fx-link { color: var(--teal); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--teal-light); min-height: 44px; display: inline-flex; align-items: center; font-size: 15px; }
.fx-chips { list-style: none; padding: 0; margin: 0 0 18px; display: flex; flex-wrap: wrap; gap: 6px; }
.fx-chips li { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--sand); background: var(--cream-light); padding: 7px 10px; border-radius: 2px; }
.fx-chips li.on { border-color: var(--teal); color: var(--teal); background: var(--cream); }
.sx-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(24px, 4vw, 48px); align-items: center; }
.sx-plate { border: 1px solid var(--sand); background: var(--cream); padding: 16px 16px 10px; }
.sx-plate svg { width: 100%; height: auto; display: block; }
.sx-line { fill: none; stroke: var(--ink); stroke-width: 2.4; stroke-linejoin: round; stroke-linecap: round; stroke-dasharray: 600; stroke-dashoffset: 600; }
.in-view .sx-line { animation: fxDraw 2.2s .3s cubic-bezier(.4,.1,.2,1) forwards; }
.sx-ask { margin-top: clamp(24px, 3vw, 36px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 12px; }
.sx-ask div { border: 1px solid var(--sand); background: var(--cream-light); padding: 16px 18px; }
.sx-ask b { display: block; font-family: var(--font-display); font-weight: 500; font-size: 20px; margin: 0 0 6px; color: var(--ink); }
.sx-ask span { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); }
.sx-ask code { font-family: var(--font-mono); font-size: 11px; color: var(--sand-dark); display: block; margin-top: 6px; }
.dx-scale { position: relative; margin: 8px 0 0; }
.dx-bar { height: 10px; border-radius: 999px; background: linear-gradient(90deg, var(--teal-light) 0%, var(--teal) 45%, var(--signal) 100%); }
.dx-ends { display: flex; justify-content: space-between; margin: 8px 0 0; }
.dx-cols { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin-top: 18px; }
.dx-col { padding: 0 16px 0 0; }
.dx-col + .dx-col { border-inline-start: 1px dashed var(--sand); padding-inline-start: 16px; }
.dx-col h3 { font-size: clamp(20px, 2vw, 26px); margin: 0 0 10px; }
.dx-col ul { list-style: none; padding: 0; margin: 0; }
.dx-col li { display: flex; align-items: center; gap: 10px; font-size: 15.5px; padding: 6px 0; color: var(--ink); flex-wrap: wrap; }
.dx-col li i { width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--sand-dark); flex: none; }
.dx-col li.on { font-weight: 700; }
.dx-col li.on i { background: var(--teal); border-color: var(--teal); box-shadow: 0 0 0 4px rgba(46,110,112,.16); }
.dx-col li em { font-family: var(--font-mono); font-style: normal; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--teal); font-weight: 500; }
.dx-bugs { margin-top: 26px; border: 1px solid var(--sand); background: var(--cream-light); padding: 14px 16px; }
.dx-span { display: flex; align-items: center; gap: 10px; margin: 0 0 10px; }
.dx-span::before, .dx-span::after { content: ""; flex: 1; border-top: 1px solid var(--sand-dark); }
.dx-bugs ul { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 18px; }
.dx-bugs li { font-family: var(--font-display); font-size: 19px; color: var(--ink); }
.bx-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
.bx-card { border: 1px solid var(--sand); background: var(--cream); padding: 20px; display: flex; flex-direction: column; }
.bx-card.hot { border-color: var(--teal); box-shadow: inset 0 3px 0 var(--teal); }
.bx-hot { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--teal); margin: 0 0 6px; }
.bx-tier { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--sand-dark); margin: 0 0 4px; }
.bx-card h3 { font-size: 26px; margin: 0 0 8px; }
.bx-tell { font-family: var(--font-display); font-style: italic; font-size: 18px; line-height: 1.35; color: var(--teal); margin: 0 0 12px; }
.bx-k { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--sand-dark); margin: 10px 0 4px; }
.bx-card p.bx-v { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); margin: 0; }
.bx-card .fx-link { margin-top: auto; padding-top: 10px; font-size: 14px; }
@keyframes fxDraw { to { stroke-dashoffset: 0; } }
@media (max-width: 760px) {
  .sx-grid { grid-template-columns: 1fr; }
  .dx-cols { grid-template-columns: 1fr; }
  .dx-col + .dx-col { border-inline-start: 0; padding-inline-start: 0; border-top: 1px dashed var(--sand); padding-top: 12px; margin-top: 12px; }
  .bx-row { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 12px; margin: 0 -24px; padding: 0 24px 12px; }
  .bx-card { flex: 0 0 82%; scroll-snap-align: start; }
}
@media (prefers-reduced-motion: reduce) { .sx-line { animation: none !important; stroke-dashoffset: 0; } }
`

export function FiguresStyle() {
  return <style dangerouslySetInnerHTML={{ __html: FX_CSS }} />
}

// The strep connection. Test wording follows /pans-and-strep.html.
export function StrepConnection({ fig, signs }: { fig: string; signs: string[] }) {
  const all = ['Food refusal', 'Constipation', 'Worries that won’t let go', 'Tics', 'Focus falling apart']
  return (
    <section className="fx reveal" aria-label="The strep connection">
      <div className="fx-in">
        <div className="fx-head"><p className="fx-fig">{fig} &middot; The strep connection</p><p className="fx-by">An illustration, not a real child</p></div>
        <h2 className="fx-title">Strep can do <em>more than</em> a sore throat.</h2>
        <div className="sx-grid">
          <div>
            <p className="fx-p">Most parents have never been told this. Strep, and other infections like Mycoplasma, can set off sudden or worsening changes in a child’s brain and body:</p>
            <ul className="fx-chips">{all.map((s) => <li key={s} className={signs.includes(s) ? 'on' : undefined}>{s}</li>)}</ul>
            <p className="fx-p">Sometimes it shows up weeks after a sore throat. Sometimes there was no sore throat at all: strep can live around the bottom (perianal strep), or be carried by someone at home who never gets sick.</p>
          </div>
          <div className="sx-plate">
            <svg viewBox="0 0 400 210" role="img" aria-label="A timeline: a sore throat, or no symptoms at all; days to weeks pass; then a change in behavior begins.">
              <defs>
                <pattern id="sx-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0 H0 V20" fill="none" stroke="var(--sand-light)" strokeWidth="1" /></pattern>
                <marker id="sx-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10" fill="none" stroke="var(--sand-dark)" strokeWidth="1.5" /></marker>
              </defs>
              <rect width="400" height="210" fill="url(#sx-grid)" />
              <line x1="20" y1="170" x2="390" y2="170" stroke="var(--sand-dark)" strokeWidth="1" />
              <line x1="70" y1="40" x2="70" y2="170" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="70" cy="158" r="6" fill="var(--teal)" />
              <text x="78" y="44" className="fx-tag" style={{ fill: 'var(--teal)' }}>Sore throat</text>
              <text x="78" y="61" fill="var(--ink-soft)" fontSize="12.5" fontFamily="var(--font-body)">or no symptoms at all</text>
              <path d="M74 120 H236" stroke="var(--sand-dark)" strokeWidth="1" markerEnd="url(#sx-ar)" />
              <text x="155" y="112" textAnchor="middle" className="fx-tag">Days to weeks</text>
              <line x1="250" y1="40" x2="250" y2="170" stroke="var(--signal)" strokeWidth="1.2" strokeDasharray="4 4" />
              <text x="257" y="44" className="fx-tag" style={{ fill: 'var(--signal)' }}>Change begins</text>
              <path className="sx-line" d="M20 160 L70 158 L120 160 L170 158 L220 159 L250 155 L270 120 L290 86 L310 78 L330 82 L350 74 L370 80 L390 76" />
              <text x="24" y="192" className="fx-tag">time →</text>
            </svg>
          </div>
        </div>
        <div className="sx-ask">
          <div><b>A strep swab</b><span>Rapid strep with a throat culture, or a strep PCR. For your child, and everyone at home.</span><code>LabCorp 180800</code></div>
          <div><b>A perianal swab</b><span>When there is redness or itching around the bottom.</span></div>
          <div><b>Strep blood tests</b><span>ASO and anti-DNase B titers, run together and repeated in 4–6 weeks. A rise matters more than one number.</span></div>
          <div><b>Mycoplasma</b><span>A PCR swab, with IgG + IgM blood tests.</span><code>LabCorp 139845</code></div>
        </div>
        <p style={{ margin: '14px 0 0' }}><a className="fx-link" href="/pans-and-strep.html">Read: PANDAS and strep →</a></p>
        <p className="fx-note">A possible trigger to test for, not a diagnosis.</p>
      </div>
    </section>
  )
}

const RANGE: { h: string; items: [SignKey, string][] }[] = [
  { h: 'Quieter', items: [['constipation', 'Constipation'], ['picky', 'Picky eating'], ['worries', 'Worries'], ['focus', 'Focus slipping']] },
  { h: 'Getting louder', items: [['sleep', 'Sleep falling apart'], ['tics', 'Tics'], ['food', 'Food restriction']] },
  { h: 'Full PANS', items: [['ocd', 'Sudden OCD'], ['rage', 'Rage'], ['regression', 'Regression']] },
]

// Early signs: a range from quieter to full PANS, with the same bugs across the whole range.
export function EarlySigns({ fig, current }: { fig: string; current: SignKey[] }) {
  return (
    <section className="fx reveal" aria-label="Early signs">
      <div className="fx-in">
        <div className="fx-head"><p className="fx-fig">{fig} &middot; Early signs</p><p className="fx-by">Same pattern, different volume</p></div>
        <h2 className="fx-title">Often it’s the same pattern as PANS, <em>just quieter.</em></h2>
        <div className="dx-scale" aria-hidden="true">
          <div className="dx-bar" />
          <div className="dx-ends"><span className="fx-tag">Quieter</span><span className="fx-tag" style={{ color: 'var(--signal)' }}>Full PANS</span></div>
        </div>
        <div className="dx-cols">
          {RANGE.map((c) => (
            <div key={c.h} className="dx-col">
              <h3>{c.h}</h3>
              <ul>{c.items.map(([k, t]) => { const on = current.includes(k); return <li key={k} className={on ? 'on' : undefined}><i />{t}{on && <em>you are here</em>}</li> })}</ul>
            </div>
          ))}
        </div>
        <div className="dx-bugs">
          <p className="dx-span"><span className="fx-tag">The same bugs, across the whole range</span></p>
          <ul>{['Strep', 'Mycoplasma', 'Viruses', 'Mold', 'Yeast', 'Clostridia', 'Bartonella', 'Lyme'].map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <p className="fx-p" style={{ marginTop: 26 }}>Each of these can be an early sign that something in the body, often an infection or an immune reaction, is driving the brain. The signs often start soft, like these, one at a time.</p>
        <p className="fx-p">When they come together, doctors have a name for it: <b>PANS</b>, or <b>PANDAS</b> when strep is the trigger. It’s a name for when an infection or immune reaction drives sudden changes in a child’s brain and body. Many parents have never heard of it, and assume it couldn’t be their child. It often begins just like this, with one sign that doesn’t quite make sense.</p>
        <p className="fx-p">Catching the pattern early and testing the biology is Phase 1 of the care path. <a className="fx-link" href="#care-path">See the two phases →</a></p>
        <p className="fx-note">A sign worth looking into, not a diagnosis.</p>
      </div>
    </section>
  )
}

// Wording from the Pathogen Personality Map and /behavior-pathogen-map.html. A routing heuristic, never a diagnosis.
const BUGS: Record<BugKey, { name: string; tier: string; tell: string; shows: string; hides?: string; test: string; href: string; read: string; href2?: string; read2?: string }> = {
  strep: {
    name: 'Strep', tier: 'Well studied',
    tell: 'Tends to arrive overnight, in a child who was fine.',
    shows: 'Sudden OCD and rituals, tics, fear-based food restriction, separation anxiety, rage storms, handwriting changes, peeing often.',
    hides: 'In the throat, around the bottom (perianal strep), and in a brother, sister or parent who carries it without getting sick.',
    test: 'Throat and perianal swab (culture or PCR, LabCorp 180800), and swab the household. ASO tends to peak about 3–6 weeks after strep and anti-DNase B later, about 6–8 weeks, so run both and repeat.',
    href: '/pans-and-strep.html', read: 'PANDAS and strep',
  },
  myco: {
    name: 'Mycoplasma', tier: 'Emerging',
    tell: '“Never bounced back after that cough.”',
    shows: 'Tics, worries, a foggy, slow-to-answer child. Often more trigger than personality, and a sign the body is struggling to clear it.',
    test: 'PCR swab (LabCorp 139845) plus IgG and IgM, repeated over time.',
    href: '/behavior-pathogen-map.html', read: 'The behavior–pathogen map',
  },
  virus: {
    name: 'Viruses', tier: 'Published',
    tell: 'The flu, COVID, or hand-foot-and-mouth, and then a different child.',
    shows: 'Tics, worries, OCD or a sudden change after a viral illness. Coxsackie, the hand-foot-and-mouth virus, is an under-recognized trigger.',
    test: 'Coxsackie A and B antibody titers (high, lasting titers matter). Write down every flu, COVID or hand-foot-and-mouth, with dates.',
    href: '/behavior-pathogen-map.html', read: 'The behavior–pathogen map',
  },
  mold: {
    name: 'Mold', tier: 'Emerging',
    tell: 'Worse in one place, better away.',
    shows: 'Anxiety, mood swings, brain fog, sensory overload, “sensitive to everything,” thirst and peeing often.',
    hides: 'At home or at school: a past leak, a damp basement, a musty room.',
    test: 'Urine mycotoxins (RealTime Laboratories) plus an away-trial. Fast better-away rules mold in; no change in a week doesn’t rule it out.',
    href: '/find-mold.html', read: 'Find mold yourself', href2: '/mold-protocol.html', read2: 'The mold protocol',
  },
  yeast: {
    name: 'Yeast', tier: 'Clinician-observed',
    tell: 'Giddy, silly, “drunk” laughing, then the crash.',
    shows: 'Relentless sugar cravings, bloating, brain fog, irritability. Often flares after antibiotics or a sugar binge.',
    test: 'Organic acids test (D-arabinitol) plus a stool test (GI-MAP). Post-antibiotic timing is the clue.',
    href: '/yeast.html', read: 'Yeast and Candida',
  },
  clostridia: {
    name: 'Clostridia', tier: 'Clinician-observed',
    tell: 'Aggression that rides along with the gut.',
    shows: 'Agitation, rage and sudden behavior swings with a gut history: constipation, belly pain, antibiotics.',
    test: 'Organic acids test (HPHPA, 4-cresol) plus a stool test (GI-MAP).',
    href: '/gut.html', read: 'The gut and the microbiome',
  },
  bartonella: {
    name: 'Bartonella', tier: 'Published, still debated',
    tell: 'Explosive, out-of-nowhere rage.',
    shows: 'Rage, dark intrusive thoughts, terror, vivid nightmares; sore soles on the first steps of the morning, stretch-mark-like lines.',
    test: 'IGeneX or TLab ImmunoBlot plus FISH.',
    href: '/bartonella-rage-children.html', read: 'Bartonella and rage',
  },
  lyme: {
    name: 'Lyme', tier: 'Published, still debated',
    tell: 'The “brain on fire” child.',
    shows: 'Irritable, foggy, mood swings, sensitive to light and sound, sleep trouble, migrating aches, often with no remembered bite.',
    test: 'IGeneX or TLab ImmunoBlot. A negative standard test does not rule it out.',
    href: '/lyme-brain-fog-mood-swings-children.html', read: 'Lyme: fog and mood swings',
  },
  stress: {
    name: 'A hard season', tier: 'The second hit',
    tell: 'A move, a loss, a big change, on top of a bug.',
    shows: 'Stress can lower the body’s defenses. When a child is already fighting an infection, a hard season can tip things over. That isn’t “just stress”: the body piece still matters.',
    test: 'Put it on the timeline next to every illness. Then test for the infection it may have tipped.',
    href: '/nervous-system.html', read: 'The nervous system',
  },
}

// Every bug has a personality.
export function BugPersonalities({ fig, order, hot, hotLabel }: { fig: string; order: BugKey[]; hot: BugKey[]; hotLabel: string }) {
  return (
    <section className="fx reveal" aria-label="Every bug has a personality">
      <div className="fx-in">
        <div className="fx-head"><p className="fx-fig">{fig} &middot; Every bug has a personality</p><p className="fx-by">A map to test, not a diagnosis</p></div>
        <h2 className="fx-title">Every trigger tends to bring <em>its own behavior.</em></h2>
        <p className="fx-p">Strep, Mycoplasma, viruses, mold, yeast, ticks, and the hard seasons that can tip them. The same child can carry more than one. The behavior tells you where to look first; the test tells you what is really there.</p>
        <div className="bx-row">
          {order.map((k) => {
            const b = BUGS[k]
            const isHot = hot.includes(k)
            return (
              <article key={k} className={`bx-card${isHot ? ' hot' : ''}`}>
                {isHot && <p className="bx-hot">Most often linked to {hotLabel}</p>}
                <p className="bx-tier">{b.tier}</p>
                <h3>{b.name}</h3>
                <p className="bx-tell">{b.tell}</p>
                <p className="bx-k">Often shows up as</p>
                <p className="bx-v">{b.shows}</p>
                {b.hides && <><p className="bx-k">Where it hides</p><p className="bx-v">{b.hides}</p></>}
                <p className="bx-k">What to test</p>
                <p className="bx-v">{b.test}</p>
                <p style={{ marginTop: 'auto', display: 'flex', gap: '0 16px', flexWrap: 'wrap' }}><a className="fx-link" href={b.href}>{b.read} →</a>{b.href2 && <a className="fx-link" href={b.href2}>{b.read2} →</a>}</p>
              </article>
            )
          })}
        </div>
        <p className="fx-note">Drawn from published work (Swedo, Bransfield, O’Hara, Shoemaker) and what clinicians report. Much of it is still emerging; Plan B for PANS tests these patterns across families.</p>
      </div>
    </section>
  )
}
