'use client'

import { useEffect, useRef } from 'react'

const MARKERS = [
  { label: 'Infect', from: 22 },
  { label: 'Immune', from: 120 },
  { label: 'Inflam', from: 18 },
  { label: 'Nutrient', from: 124 },
  { label: 'Mold', from: 28 },
]

type Tool = { t: string; href?: string; note?: boolean }

const BIOLOGY: Tool[] = [
  { t: 'Infections', href: '/pans-and-strep.html' },
  { t: 'Lyme & co-infections', href: '/lyme.html' },
  { t: 'Mold', href: '/mold-protocol.html' },
  { t: 'IVIG & immune', href: '/ivig.html' },
]

const GROUPS: { name: string; tools: Tool[]; note?: string }[] = [
  {
    name: 'Nervous system & brain',
    tools: [
      { t: 'Nervous-system regulation', href: '/nervous-system.html' },
      { t: 'Brain retraining', href: '/brain-retraining-kids.html' },
      { t: 'Neurofeedback & biofeedback', href: '/neurofeedback-biofeedback-autism-adhd.html' },
      { t: 'MeRT', href: '/mert-for-autism.html' },
      { t: 'Behavioral therapy' },
    ],
  },
  {
    name: 'Speech & communication',
    tools: [
      { t: 'Speech therapy + AAC (talking device/app)' },
      { t: 'Intensive speech-motor therapy (AMMT · DTTC · PROMPT)' },
      { t: 'Play-based engagement therapy (JASPER)' },
    ],
  },
  {
    name: 'Energy & body work',
    tools: [
      { t: 'Biomagnetism', href: '/biomagnetism.html' },
      { t: 'Homeopathy', href: '/homeopathy.html' },
      { t: 'Craniosacral work' },
      { t: 'Red light therapy', href: '/red-light-therapy-autism-pans.html' },
      { t: 'Transcranial photobiomodulation (near-infrared)', href: '/red-light-therapy-autism-pans.html' },
      { t: 'PEMF' },
      { t: 'Hyperbaric oxygen (HBOT)', href: '/hbot.html' },
      { t: 'Methylene blue', href: '/methylene-blue.html' },
    ],
  },
  {
    name: 'Immune & gut',
    tools: [
      { t: 'LDN', href: '/ldn.html' },
      { t: 'Phage therapy', href: '/phage.html' },
      { t: 'Peptide therapies', href: '/peptides.html' },
      { t: 'FMT', href: '/fmt.html' },
      { t: 'Probiotic enemas', href: '/gut.html' },
      { t: 'Helminthic therapy', href: '/helminths.html' },
      { t: 'Ozone (rectal)', href: '/ozone.html', note: true },
      { t: 'Blood ozone (EBOO)', href: '/eboo.html', note: true },
    ],
    note: 'With an experienced practitioner',
  },
  {
    name: 'Nutrition & brain',
    tools: [{ t: 'Sulforaphane' }, { t: 'CBD (hemp, low THC)' }],
  },
  {
    name: 'With a physician',
    tools: [
      { t: 'TruDOSE (own platelets)', note: true },
      { t: 'Cerebrolysin', href: '/peptides.html', note: true },
      { t: 'Suramin (clinical trial only)', note: true },
    ],
    note: 'With an experienced practitioner',
  },
  { name: 'When a child is ready', tools: [{ t: 'Stem cells' }] },
]

function Tags({ tools, label }: { tools: Tool[]; label: string }) {
  return (
    <ul className="cp-tools" aria-label={label}>
      {tools.map(({ t, href, note }) => {
        const body = <>{t}{note && <sup className="cp-mark" aria-label="with an experienced practitioner">*</sup>}</>
        return <li key={t}>{href ? <a href={href}>{body}</a> : <span>{body}</span>}</li>
      })}
    </ul>
  )
}

const CSS = `
.cp { margin-top: clamp(56px, 7vw, 96px); border-top: 1px solid var(--ink); padding-top: 20px; }
.cp-head { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; align-items: baseline; margin: 0 0 18px; }
.cp-fig { font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal); margin: 0; }
.cp-by { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); margin: 0; }
.cp-title { font-size: clamp(28px, 3.4vw, 44px); margin: 0 0 clamp(28px, 4vw, 44px); max-width: 760px; }
.cp-title em { color: var(--teal); }
.cp-grid { display: grid; grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr); align-items: stretch; }
.cp-phase { background: var(--cream); border: 1px solid var(--sand); padding: clamp(20px, 2.4vw, 30px); display: flex; flex-direction: column; }
.cp-n { font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal); margin: 0 0 8px; }
.cp-phase h3 { font-size: clamp(22px, 2.2vw, 30px); margin: 0 0 12px; }
.cp-phase > p:not(.cp-n) { font-size: 15px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 20px; }
.cp-arrow { display: flex; align-items: center; justify-content: center; color: var(--teal); }
.cp-arrow svg { width: 40px; height: 16px; }
.cp-arrow .ln { stroke: currentColor; stroke-width: 1.4; fill: none; }
.cp-tag { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase; fill: var(--sand-dark); }
.cp-axis { font-size: 8.5px; letter-spacing: .04em; }
.cp .band { fill: var(--teal); opacity: .09; }
.cp .bandline { stroke: var(--teal); stroke-width: .7; stroke-dasharray: 3 3; }
.cp .was { fill: none; stroke: var(--signal); stroke-width: 1.3; }
.cp .trail { stroke: var(--sand-dark); stroke-width: .9; stroke-dasharray: 2 3; }
.cp .now { fill: var(--teal); opacity: 0; transform-box: fill-box; transform-origin: center; }
.how.in-view .cp .now { animation: pop .5s ease-out forwards; }
.cp-tools { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.cp-tools li > * { display: inline-block; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink); border: 1px solid var(--sand); background: var(--cream-light); padding: 6px 9px; border-radius: 2px; text-decoration: none; }
.cp-tools li > a { color: var(--teal-deep); border-color: var(--teal-light); background: var(--cream); transition: background .2s, color .2s; }
.cp-tools li > a:hover, .cp-tools li > a:focus-visible { background: var(--teal); color: #fff; border-color: var(--teal); }
.cp-mark { color: var(--teal); font-size: 1em; margin-left: 2px; vertical-align: super; line-height: 0; }
.cp-note { font-size: 12.5px; color: var(--sand-dark); margin: 8px 0 0; font-style: italic; }
.cp-note .cp-mark { vertical-align: baseline; font-style: normal; margin: 0 2px 0 0; }
.cp-bio { margin: auto 0 0; padding-top: 16px; }
.cp-groups { margin-top: auto; display: grid; gap: 14px; }
.cp-group { border-top: 1px solid var(--sand); padding-top: 10px; }
.cp-gname { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--sand-dark); margin: 0 0 8px; list-style: none; pointer-events: none; }
.cp-gname::-webkit-details-marker { display: none; }
.cp-end { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; border-top: 1px solid var(--sand); padding-top: 12px; }
.cp-any { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--teal); border: 1px dashed var(--teal-light); padding: 6px 9px; border-radius: 2px; }
.cp-guide { font-size: 14px; color: var(--ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--teal-light); }
.cp-guide:hover { color: var(--teal); }
.cp-loop { margin-top: 18px; border: 1px dashed var(--teal-light); padding: 18px clamp(18px, 2.4vw, 30px); display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 18px; align-items: center; }
.cp-loop svg { width: 64px; height: 64px; color: var(--teal); }
.cp-loop .ring { fill: none; stroke: currentColor; stroke-width: 1.4; stroke-dasharray: 150; stroke-dashoffset: 150; }
.how.in-view .cp-loop .ring { animation: draw 1.6s cubic-bezier(.4,0,.2,1) .8s forwards; }
.cp-loop .head { fill: currentColor; }
.cp-loop p { margin: 0; font-size: 15.5px; line-height: 1.6; color: var(--ink); }
.cp-loop p b { font-weight: 600; }
.cp-steps { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--sand-dark); margin: 8px 0 0 !important; }
.cp-steps span { color: var(--teal); }
@media (max-width: 760px) {
  .cp-gname { pointer-events: auto; cursor: pointer; display: flex; justify-content: space-between; align-items: center; margin: 0; padding: 4px 0; color: var(--ink); }
  .cp-gname::after { content: '+'; font-size: 15px; color: var(--teal); letter-spacing: 0; }
  .cp-group[open] .cp-gname { margin-bottom: 8px; }
  .cp-group[open] .cp-gname::after { content: '−'; }
  .cp-tools li > * { font-size: 10px; padding: 5px 8px; }
  .cp-grid { grid-template-columns: 1fr; }
  .cp-arrow { height: 44px; }
  .cp-arrow svg { transform: rotate(90deg); }
  .cp-loop { grid-template-columns: 1fr; justify-items: start; }
  .cp-loop svg { width: 48px; height: 48px; }
}
`

export default function CarePath() {
  const groupsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!window.matchMedia('(max-width: 760px)').matches) return
    groupsRef.current?.querySelectorAll('details').forEach((d) => { d.open = false })
  }, [])
  return (
    <div className="cp" id="care-path">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cp-head">
        <p className="cp-fig">Fig. 02 &middot; The care path</p>
        <p className="cp-by">In Rachel&apos;s words</p>
      </div>
      <h2 className="cp-title">Two phases. <em>Biology</em> first, then whatever your child needs.</h2>

      <div className="cp-grid">
        <div className="cp-phase">
          <p className="cp-n">Phase 1</p>
          <h3>The biology</h3>
          <p>We start with what the blood and biological labs show: infections, the immune system, inflammation, nutrients, mold. We treat what&apos;s found and retest, until those markers are back in a normal range.</p>
          <svg viewBox="0 0 300 150" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Five lab markers move from outside the normal range back inside it after treatment and retesting">
            <rect className="band" x="10" y="52" width="280" height="44" />
            <line className="bandline" x1="10" x2="290" y1="52" y2="52" />
            <line className="bandline" x1="10" x2="290" y1="96" y2="96" />
            <text className="cp-tag" x="286" y="91" textAnchor="end">normal range</text>
            {MARKERS.map((m, i) => {
              const x = 30 + i * 50
              const y = 66 + (i % 3) * 8
              return (
                <g key={m.label}>
                  <line className="trail" x1={x} x2={x} y1={m.from < 74 ? m.from + 5 : m.from - 5} y2={y} />
                  <circle className="was" cx={x} cy={m.from} r="4.5" />
                  <circle className="now" cx={x} cy={y} r="4.5" style={{ animationDelay: `${0.6 + i * 0.18}s` }} />
                  <text className="cp-tag cp-axis" x={x} y="146" textAnchor="middle">{m.label}</text>
                </g>
              )
            })}
          </svg>
          <div className="cp-bio"><Tags tools={BIOLOGY} label="Phase 1 guides in the Field Guide" /></div>
        </div>

        <div className="cp-arrow" aria-hidden="true">
          <svg viewBox="0 0 40 16"><path className="ln" d="M2 8 H36 M29 2 L36 8 L29 14" /></svg>
        </div>

        <div className="cp-phase">
          <p className="cp-n">Phase 2</p>
          <h3>Whatever your child needs</h3>
          <p>If symptoms persist once the markers are normal, we add other tools, chosen for your child: homeopathy, behavioral therapy, biomagnetism, phage therapy, craniosacral work, stem cells when a child is ready. Whatever helps.</p>
          <div className="cp-groups" ref={groupsRef}>
            {GROUPS.map((g) => (
              <details className="cp-group" key={g.name} open>
                <summary className="cp-gname">{g.name}</summary>
                <Tags tools={g.tools} label={g.name} />
                {g.note && <p className="cp-note"><span className="cp-mark">*</span> {g.note}</p>}
              </details>
            ))}
            <div className="cp-end">
              <span className="cp-any">Whatever helps</span>
              <a className="cp-guide" href="/learn">Every option, deconstructed &rarr; Field Guide</a>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-loop">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path className="ring" d="M32 8 A24 24 0 1 1 12.6 18" />
          <path className="head" d="M7 14 L17 14 L13 24 Z" />
        </svg>
        <div>
          <p><b>We recommend as we go, based on your child&apos;s behavior.</b> Your nightly notes tell us what to try next.</p>
          <p className="cp-steps">Nightly notes <span>&rarr;</span> behavior <span>&rarr;</span> next step <span>&#8634;</span></p>
        </div>
      </div>
    </div>
  )
}
