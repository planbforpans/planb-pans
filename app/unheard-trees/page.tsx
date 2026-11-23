import type { Metadata } from 'next'

// The Unheard Trees (Rachel, 2026-11-19). Served at unheardtrees.org / .com / theunheardtreesproject.com.
// Design: a herbarium sheet and a chromatography plate. Thin-layer chromatography (TLC) is the first test a
// lab runs on a plant extract; studied trees show lanes of compound spots, unheard trees are blank lanes.
// Sage + parchment (Rachel's palette). Scientific first, with heart; never spiritual ("too hippy").
// Data: BGCI GlobalTreeSearch v1.10 x LOTUS/Wikidata, queried 2026-11-19 (compound counts per species).
export const metadata: Metadata = {
  title: 'The Unheard Trees',
  description: 'Nine in ten of the world’s 58,015 tree species have never been chemically examined. A nonprofit research program to screen them against cancer, neurodegeneration, autoimmunity, inflammation and persistent infection.',
  alternates: { canonical: 'https://unheardtrees.org' },
  openGraph: { title: 'The Unheard Trees', description: '58,015 tree species. 6,417 with any chemistry on record.', url: 'https://unheardtrees.org' },
}

const APP = 'https://app.planbforpans.com'
const C = { paper: '#E9EDE3', plate: '#FBF8EF', sage: '#5F8466', ink: '#1F2D27', stain: '#6B3F73', stamp: '#B0412E', rule: '#C9D2C3' }
// Vanillin-sulfuric acid stain colors: plant compound classes develop as distinct hues on a TLC plate.
const VAN = ['#C2477A', '#7A4BA0', '#2E8C8C', '#C9922B', '#4E8A3E', '#9A3B5E', '#3F6BB0']

// Lane pairs: a studied tree and an unexamined sibling. n = compounds on record (LOTUS, Nov 2026).
const LANES = [
  { sp: 'Taxus brevifolia', n: 67, lead: 'paclitaxel', rf: 0.46 }, { sp: 'Taxus contorta', n: 0 },
  { sp: 'Cinchona calisaya', n: 70, lead: 'quinine', rf: 0.58 }, { sp: 'Cinchona barbacoensis', n: 0 },
  { sp: 'Salix alba', n: 24, lead: 'salicin', rf: 0.32 }, { sp: 'Salix aegyptiaca', n: 0 },
  { sp: 'Ceratonia siliqua', n: 31, lead: 'polyphenols', rf: 0.24 }, { sp: 'Ceratonia oreothauma', n: 0 },
  { sp: 'Juglans mandshurica', n: 74, lead: 'juglone', rf: 0.66 }, { sp: 'Juglans californica', n: 0 },
] as const

function rng(seed: number) { let x = seed >>> 0; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return ((x >>> 0) % 100000) / 100000 } }

function Plate() {
  const W = 760, H = 470, top = 46, origin = 372, laneW = 62, x0 = 96
  const r = rng(1921)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="tlc" role="img" aria-label="A thin-layer chromatography plate with ten lanes. Five studied trees show columns of compound spots; their five unexamined sibling species show blank lanes.">
      <defs>
        <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.6" /></filter>
        <linearGradient id="wet" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor={C.sage} stopOpacity=".16" /><stop offset="1" stopColor={C.sage} stopOpacity=".05" /></linearGradient>
        <clipPath id="plateclip"><rect x="60" y="20" width={W - 120} height={H - 70} rx="2" /></clipPath>
      </defs>
      <rect x="60" y="20" width={W - 120} height={H - 70} rx="2" fill={C.plate} stroke={C.rule} />
      <g clipPath="url(#plateclip)">
        <rect className="wet" x="60" y={top} width={W - 120} height={origin - top + 40} fill="url(#wet)" />
      </g>
      <line x1="70" y1={top} x2={W - 70} y2={top} stroke={C.sage} strokeDasharray="4 4" strokeWidth=".8" />
      <text x={W - 66} y={top + 4} className="tlab" textAnchor="start">solvent front</text>
      <line x1="70" y1={origin} x2={W - 70} y2={origin} stroke={C.ink} strokeWidth=".8" />
      <text x={W - 66} y={origin + 4} className="tlab" textAnchor="start">origin</text>
      {LANES.map((l, i) => {
        const cx = x0 + i * laneW + (i % 2 ? -8 : 8)
        const spots = l.n ? Math.min(11, 4 + Math.round(Math.log2(l.n))) : 0
        const studied = l.n > 0
        return (
          <g key={l.sp}>
            <circle cx={cx} cy={origin} r="2.6" fill={C.ink} />
            {studied && Array.from({ length: spots }).map((_, k) => {
              const rf = 0.08 + r() * 0.84
              const y = origin - rf * (origin - top)
              const w = 6 + r() * 6, h = 3 + r() * 3.5
              return <ellipse key={k} cx={cx + (r() - 0.5) * 3} cy={y} rx={w} ry={h} fill={VAN[Math.floor(r() * VAN.length)]} opacity={0.45 + r() * 0.45} filter="url(#soft)" className="spot" style={{ animationDelay: `${0.4 + (1 - rf) * 2.2}s` }} />
            })}
            {studied && 'lead' in l && (() => {
              const y = origin - l.rf * (origin - top)
              return (
                <g className="spot" style={{ animationDelay: `${0.4 + (1 - l.rf) * 2.2 + 0.2}s` }}>
                  <ellipse cx={cx} cy={y} rx="12" ry="6" fill={VAN[i % VAN.length]} opacity=".95" filter="url(#soft)" />
                  <text x={cx + 16} y={y + 4} className="tcmp">{l.lead}</text>
                </g>
              )
            })()}
            {!studied && <text x={cx} y={(origin + top) / 2} className="tq" textAnchor="middle">?</text>}
            <text x={cx} y={origin + 18} className={studied ? 'tsp' : 'tsp un'} textAnchor="end" transform={`rotate(-38 ${cx} ${origin + 18})`}>{l.sp}</text>
            {!studied && <text x={cx} y={origin - 6} className="tzero" textAnchor="middle">0</text>}
          </g>
        )
      })}
    </svg>
  )
}

function DotField() {
  const r = rng(6417); const cols = 50, rows = 20, total = cols * rows
  const lit = new Set<number>(); while (lit.size < 111) lit.add(Math.floor(r() * total))
  return (
    <svg viewBox={`0 0 ${cols * 14} ${rows * 14}`} className="fig" role="img" aria-label="1,000 marks, each about 58 tree species. 111 are filled: species with any compound on record.">
      {Array.from({ length: total }).map((_, i) => {
        const x = (i % cols) * 14 + 7, y = Math.floor(i / cols) * 14 + 7
        return lit.has(i) ? <circle key={i} cx={x} cy={y} r={3.8} fill={C.stain} opacity=".8" /> : <circle key={i} cx={x} cy={y} r={3.2} fill="none" stroke={C.sage} strokeWidth=".9" opacity=".7" />
      })}
    </svg>
  )
}

const GENERA: { g: string; n: number; h: number }[] = [
  { g: 'Acacia', n: 435, h: 107 }, { g: 'Ardisia', n: 229, h: 11 }, { g: 'Beilschmiedia', n: 263, h: 16 }, { g: 'Calophyllum', n: 179, h: 41 }, { g: 'Casearia', n: 173, h: 18 }, { g: 'Cinnamomum', n: 241, h: 23 }, { g: 'Clusia', n: 253, h: 22 }, { g: 'Cordia', n: 189, h: 17 }, { g: 'Croton', n: 372, h: 59 }, { g: 'Cryptocarya', n: 353, h: 33 }, { g: 'Diospyros', n: 753, h: 105 }, { g: 'Drypetes', n: 196, h: 9 }, { g: 'Elaeocarpus', n: 454, h: 19 }, { g: 'Eucalyptus', n: 724, h: 159 }, { g: 'Eugenia', n: 822, h: 15 }, { g: 'Euphorbia', n: 181, h: 24 }, { g: 'Ficus', n: 697, h: 34 }, { g: 'Garcinia', n: 318, h: 86 }, { g: 'Glochidion', n: 195, h: 2 }, { g: 'Guatteria', n: 180, h: 24 }, { g: 'Heptapleurum', n: 203, h: 4 }, { g: 'Ilex', n: 426, h: 64 }, { g: 'Inga', n: 269, h: 12 }, { g: 'Ixora', n: 211, h: 4 }, { g: 'Lithocarpus', n: 346, h: 9 }, { g: 'Litsea', n: 347, h: 27 }, { g: 'Macaranga', n: 252, h: 16 }, { g: 'Magnolia', n: 365, h: 42 }, { g: 'Memecylon', n: 203, h: 1 }, { g: 'Miconia', n: 746, h: 13 }, { g: 'Myrcia', n: 519, h: 10 }, { g: 'Ocotea', n: 443, h: 37 }, { g: 'Palicourea', n: 249, h: 13 }, { g: 'Pandanus', n: 313, h: 6 }, { g: 'Phyllanthus', n: 178, h: 17 }, { g: 'Pouteria', n: 219, h: 3 }, { g: 'Prunus', n: 223, h: 41 }, { g: 'Psychotria', n: 457, h: 7 }, { g: 'Quercus', n: 424, h: 39 }, { g: 'Rhododendron', n: 240, h: 37 }, { g: 'Saurauia', n: 189, h: 1 }, { g: 'Shorea', n: 186, h: 18 }, { g: 'Solanum', n: 206, h: 27 }, { g: 'Sorbus', n: 266, h: 14 }, { g: 'Swartzia', n: 185, h: 9 }, { g: 'Symplocos', n: 279, h: 12 }, { g: 'Syzygium', n: 1090, h: 32 }, { g: 'Terminalia', n: 238, h: 33 },
]
function GenusBars() {
  const rows = [...GENERA].sort((a, b) => b.n - a.n).slice(0, 14), max = rows[0].n
  return (
    <svg viewBox="0 0 640 430" className="fig" role="img" aria-label="Fourteen of the largest tree genera; bar length is species count, the filled part is species with any compound on record.">
      {rows.map((g, i) => {
        const y = 14 + i * 29, L = (g.n / max) * 430, S = (g.h / g.n) * L
        return (
          <g key={g.g}>
            <text x="150" y={y + 12} textAnchor="end" className="gname">{g.g}</text>
            <rect x="160" y={y} width={L} height="16" fill="none" stroke={C.sage} strokeWidth=".9" />
            <rect x="160" y={y} width={S} height="16" fill={C.stain} opacity=".85" className="bar" style={{ animationDelay: `${0.1 + i * 0.05}s` }} />
            <text x={160 + L + 8} y={y + 12} className="gnum">{g.h} of {g.n.toLocaleString()}</text>
          </g>
        )
      })}
    </svg>
  )
}

function AgeRings() {
  const trees = [
    { n: 'Pinus longaeva', c: 'Great Basin bristlecone pine', y: 4800, k: '13 compounds on record' },
    { n: 'Sequoiadendron giganteum', c: 'Giant sequoia', y: 3200, k: '45 compounds on record' },
    { n: 'Sequoia sempervirens', c: 'Coast redwood', y: 2200, k: '45 compounds on record' },
    { n: 'Taxus brevifolia', c: 'Pacific yew', y: 2000, k: '67 compounds, including paclitaxel' },
  ]
  return (
    <div className="ages">
      {trees.map((t) => {
        const R = 30 + 78 * Math.sqrt(t.y / 4800), n = Math.round(t.y / 300)
        return (
          <figure key={t.n} className="age">
            <svg viewBox="0 0 230 230" aria-hidden>{Array.from({ length: n }).map((_, i) => <circle key={i} cx="115" cy="115" r={R * ((i + 1) / n)} fill="none" stroke={C.ink} strokeOpacity={i === n - 1 ? 0.7 : 0.18} strokeWidth={i === n - 1 ? 1.3 : 0.7} />)}</svg>
            <figcaption><i>{t.n}</i><span>{t.c}, up to {t.y.toLocaleString()} years</span><span className="dim">{t.k}</span></figcaption>
          </figure>
        )
      })}
    </div>
  )
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Courier+Prime&display=swap');
body:has(.ht) .site-header, body:has(.ht) > footer { display:none !important }
body:has(.ht){ background:${C.paper} }
.ht{ --paper:${C.paper}; --plate:${C.plate}; --sage:${C.sage}; --ink:${C.ink}; --stain:${C.stain}; --stamp:${C.stamp}; --rule:${C.rule};
  color:var(--ink); background:var(--paper); font-family:'Spectral', Georgia, serif; font-weight:300; font-size:19px; line-height:1.7 }
.ht *{ box-sizing:border-box }
.ht a{ color:inherit; text-decoration-color:var(--sage); text-underline-offset:3px }
.ht a:focus-visible, .ht .btn:focus-visible{ outline:2px solid var(--stamp); outline-offset:3px }
.ht h1,.ht h2,.ht h3,.ht p,.ht li,.ht dd,.ht dt{ color:inherit }
.ht .wrap{ max-width:1080px; margin:0 auto; padding:0 24px }
.ht .mast{ display:flex; justify-content:space-between; align-items:baseline; padding:26px 0 18px; border-bottom:1px solid var(--rule); gap:16px; flex-wrap:wrap }
.ht .mast b{ font-weight:500; font-size:22px }
.ht .mast span{ font-size:16px; color:#5B6A60 }
.ht .label{ font-family:'Courier Prime', 'Courier New', monospace; font-size:14px; letter-spacing:.01em; color:#4E5A52 }
.ht .stamp{ display:inline-block; border:1.5px solid var(--stamp); color:var(--stamp); font-family:'Courier Prime', monospace; font-size:13.5px; padding:2px 8px; transform:rotate(-2deg) }
.ht h1{ font-weight:300; font-size:clamp(44px,7vw,92px); line-height:1.04; letter-spacing:-.012em; margin:44px 0 18px; max-width:15ch }
.ht .lede{ font-size:clamp(19px,2vw,22px); max-width:60ch; margin:0 0 26px }
.ht .btns{ display:flex; gap:14px; flex-wrap:wrap; margin-bottom:36px }
.ht .btn{ font-family:'Spectral', serif; font-size:17px; font-weight:500; padding:12px 22px; border:1px solid var(--ink); text-decoration:none; background:transparent }
.ht .btn.p{ background:var(--ink); color:var(--plate) }
.ht .sheet{ background:var(--plate); border:1px solid var(--rule); padding:clamp(14px,3vw,30px); box-shadow: 0 1px 0 #fff inset, 0 18px 40px -30px rgba(38,59,48,.5) }
.ht .sheet-foot{ display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-top:14px; align-items:flex-start }
.ht .sheet-foot p{ margin:0; font-size:16px; max-width:62ch; color:#3E4B43 }
.ht .tlc{ width:100%; height:auto; display:block }
.ht .tlab{ font-family:'Courier Prime', monospace; font-size:11.5px; fill:#6C766E }
.ht .tcmp{ font-family:'Spectral', serif; font-style:italic; font-size:13.5px; fill:var(--stain) }
.ht .tsp{ font-family:'Spectral', serif; font-style:italic; font-size:12.5px; fill:var(--ink) }
.ht .tsp.un{ fill:#7C8A80 }
.ht .tq{ font-family:'Spectral', serif; font-size:30px; fill:var(--sage); opacity:.55 }
.ht .tzero{ font-family:'Courier Prime', monospace; font-size:11px; fill:var(--stamp) }
.ht .wet{ transform-box: fill-box; transform-origin: bottom; animation: rise 2.8s cubic-bezier(.3,.6,.3,1) .2s both }
.ht .spot{ opacity:0; animation: show .7s ease-out forwards }
@keyframes rise{ from{ transform: scaleY(0) } to{ transform: scaleY(1) } }
@keyframes show{ to{ opacity:1 } }
.ht .bignum{ background:var(--ink); color:#EEF2EA; border-top:0 }
.ht .huge{ font-family:'Spectral', serif; font-weight:300; font-size:clamp(84px,17vw,230px); line-height:.9; letter-spacing:-.03em; margin:0; color:#EEF2EA }
.ht .huge-sub{ font-size:clamp(20px,2.4vw,28px); max-width:34ch; margin:14px 0 0; color:#C9D6C6 }
.ht section{ padding: clamp(56px,7vw,96px) 0; border-top:1px solid var(--rule) }
.ht h2{ font-weight:400; font-size:clamp(30px,3.8vw,44px); line-height:1.12; margin:0 0 18px; max-width:24ch }
.ht .cols{ display:grid; grid-template-columns: 1fr 1.3fr; gap:44px; align-items:start }
.ht .prose p{ margin:0 0 16px; max-width:62ch }
.ht .num{ font-weight:400; font-variant-numeric: lining-nums }
.ht .fig{ width:100%; height:auto; display:block }
.ht .gname{ font-family:'Spectral', serif; font-style:italic; font-size:14px; fill:var(--ink) }
.ht .gnum{ font-family:'Courier Prime', monospace; font-size:11.5px; fill:#5B6A60 }
.ht .bar{ transform-box: fill-box; transform-origin:left; animation: grow 1.2s ease-out both }
@keyframes grow{ from{ transform: scaleX(0) } to{ transform: scaleX(1) } }
.ht .ages{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr)); gap:18px }
.ht .age{ margin:0 } .ht .age svg{ width:100%; max-width:200px; height:auto; display:block; margin:0 auto 8px }
.ht .age figcaption{ display:flex; flex-direction:column; font-size:15.5px; line-height:1.45; text-align:center }
.ht .age i{ font-size:17px } .ht .dim{ color:#5B6A60 }
.ht .record{ display:grid; grid-template-columns: 90px 1fr; gap:6px 26px; max-width:860px; margin:0 }
.ht .record dt{ font-family:'Courier Prime', monospace; font-size:15px; color:var(--stamp); padding-top:4px }
.ht .record dd{ margin:0 0 14px }
.ht .origin{ display:grid; grid-template-columns: 1.4fr .6fr; gap:40px; align-items:end }
.ht .origin blockquote{ margin:0; font-size:clamp(21px,2.3vw,25px); line-height:1.6; font-weight:300 }
.ht .origin blockquote p{ margin:0 0 16px; max-width:56ch }
.ht .origin img{ width:100%; max-width:220px; opacity:.9; justify-self:end }
.ht .sig{ font-style:italic; color:#4E5A52; margin-top:6px }
.ht ol.method{ list-style:none; counter-reset:m; padding:0; margin:0; display:grid; gap:0 }
.ht ol.method li{ counter-increment:m; display:grid; grid-template-columns: 56px 1fr; gap:18px; padding:18px 0; border-top:1px solid var(--rule) }
.ht ol.method li:before{ content: counter(m); font-family:'Courier Prime', monospace; font-size:15px; color:var(--stamp); padding-top:4px }
.ht ol.method b{ font-weight:500; display:block }
.ht .tiers{ display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr)); gap:0; border:1px solid var(--rule); background:var(--plate); margin:22px 0 26px }
.ht .tier{ padding:24px; border-right:1px solid var(--rule) }
.ht .tier:last-child{ border-right:0; background:#E3EADF }
.ht .tier .amt{ font-size:40px; font-weight:400; line-height:1; margin:6px 0 4px }
.ht .tier ul{ padding-left:18px; margin:12px 0 0; font-size:16px }
.ht .honest{ max-width:72ch; font-size:16.5px; border-left:3px solid var(--stamp); padding-left:16px }
.ht .foot{ border-top:1px solid var(--rule); padding:36px 0 50px; font-size:15.5px; color:#4E5A52 }
.ht .foot nav{ display:flex; gap:8px 22px; flex-wrap:wrap; margin:10px 0 14px }
@media (max-width:860px){ .ht .cols, .ht .origin{ grid-template-columns:1fr } .ht .origin img{ max-width:140px; justify-self:start } .ht .tier{ border-right:0; border-bottom:1px solid var(--rule) } }
@media (prefers-reduced-motion: reduce){ .ht .wet,.ht .spot,.ht .bar{ animation:none; opacity:1; transform:none } }
`

export default function UnheardTrees() {
  return (
    <div className="ht">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wrap">
        <header className="mast">
          <b>The Unheard Trees</b>
          <span>A research program of <a href="https://planbforpans.com">Plan B for PANS</a>, a nonprofit</span>
        </header>

        <h1>Nine in ten tree species have never been chemically examined.</h1>
        <p className="lede">Trees gave medicine aspirin, quinine and paclitaxel. Of the 58,015 tree species on Earth, only 6,417 have a single compound on record. We are screening the rest against cancer, neurodegeneration, autoimmunity, inflammation and infections that won’t clear.</p>
        <div className="btns">
          <a className="btn p" href="#support">Fund the first 100 trees</a>
          <a className="btn" href={`${APP}/join?src=trees`}>Follow the research</a>
        </div>

        <figure className="sheet" style={{ margin: 0 }}>
          <Plate />
          <figcaption className="sheet-foot">
            <p>Fig. 1. When a plant extract is run on a chromatography plate, its compounds separate into spots. Each studied tree here sits beside a close relative that has never been examined. Same genus, no chemistry on record.</p>
            <span className="stamp">Unexamined</span>
          </figcaption>
        </figure>
      </div>

      <section className="bignum">
        <div className="wrap">
          <p className="huge">51,598</p>
          <p className="huge-sub">tree species with no chemistry on record. Not one compound. Not one test.</p>
        </div>
      </section>
      <section>
        <div className="wrap cols">
          <div className="prose">
            <h2>Most of the forest has never been read.</h2>
            <p>We matched every species in Botanic Gardens Conservation International’s GlobalTreeSearch against LOTUS, the open global database of natural-product chemistry.</p>
            <p><span className="num">6,417</span> of <span className="num">58,015</span> tree species have at least one compound on record. Only <span className="num">525</span> have fifty or more. The other <span className="num">51,598</span> have none.</p>
          </div>
          <figure className="sheet" style={{ margin: 0 }}>
            <DotField />
            <figcaption className="sheet-foot"><p>Fig. 2. One thousand marks, each about 58 species. Filled: any compound on record.</p></figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="wrap cols">
          <figure className="sheet" style={{ margin: 0 }}>
            <GenusBars />
            <figcaption className="sheet-foot"><p>Fig. 3. The largest tree genera. Outline: species. Filled: species with any compound on record.</p></figcaption>
          </figure>
          <div className="prose">
            <h2>Even the great genera are mostly unread.</h2>
            <p><i>Syzygium</i>, the genus of clove, has 1,090 tree species. Thirty-two have been studied. <i>Eugenia</i> has 822; fifteen have.</p>
            <p>Related species tend to make related compounds. A 2012 study of about 20,000 plants found medicinal plants cluster on the same branches of the plant family tree across cultures that never met. The unstudied relatives of trees that already gave us medicine are where we start.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>The oldest living things on Earth are almost unread.</h2>
          <p style={{ maxWidth: '62ch', marginTop: 0 }}>A tree that stands for thousands of years survives every fungus, insect and drought by chemistry, much of it stored in its heartwood. The Pacific yew, once studied, gave us paclitaxel.</p>
          <AgeRings />
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>When trees were tested, they gave us medicine.</h2>
          <dl className="record">
            <dt>1763</dt><dd>Edward Stone notices willow growing where fevers are common, tests the bark on about fifty patients, and reports to the Royal Society. Salicin is isolated in 1828; aspirin follows in 1899.</dd>
            <dt>1820</dt><dd>Quinine is isolated from cinchona bark, used for fever by Andean healers. It treats malaria for the next century.</dd>
            <dt>1921</dt><dd>Otto Loewi dreams an experiment, wakes in the night and runs it on two frog hearts, proving nerves signal with chemicals. Nobel Prize, 1936.</dd>
            <dt>1962</dt><dd>A U.S. government botanist collects Pacific yew bark for the National Cancer Institute’s screen of thousands of plants. It becomes paclitaxel, approved in 1992.</dd>
            <dt>2023</dt><dd>A gel made from birch bark is approved by the FDA for a rare blistering skin disease, from six months of age.</dd>
          </dl>
        </div>
      </section>

      <section>
        <div className="wrap cols">
          <div className="prose">
            <h2>Why Plan B can run this.</h2>
            <p>Most natural-product programs screen compounds in search of a disease. We start from patients.</p>
          </div>
          <div className="prose">
            <p><b style={{ fontWeight: 500 }}>A real population to match against.</b> Plan B for PANS holds a registry of more than 250 children with chronic inflammatory illness: their labs, their histories and nightly symptom tracking. That lets us test compounds against the deficiencies and drivers we actually see, not hypothetical ones.</p>
            <p><b style={{ fontWeight: 500 }}>The gap is already mapped.</b> The figures on this page come from our own analysis of every tree species on Earth against the open chemistry record, and of which traditional uses later held up in trials.</p>
            <p><b style={{ fontWeight: 500 }}>Partners, not a lab of our own.</b> We have reached out to a botanical garden with Pacific living collections, a natural-products laboratory that screens plant extracts against persistent infection, and a research foundation that funds this work.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>How the program works</h2>
          <ol className="method">
            <li><div><b>Select the trees.</b> Unstudied relatives of medicine-rich genera, the longest-lived species, and trees that thrive in contaminated or pathogen-heavy places.</div></li>
            <li><div><b>Source them legally.</b> Vouchered material from botanical-garden living collections and herbaria, with permits and benefit-sharing agreements. Traditional knowledge is used only with consent.</div></li>
            <li><div><b>Screen in the lab.</b> Extracts are tested against cancer cells, neuroinflammation and neurodegeneration, autoimmunity, mast cells, and persistent infections such as strep, Bartonella and Lyme.</div></li>
            <li><div><b>Match against real patients.</b> Plan B’s registry holds the labs of hundreds of chronically ill children. We compare their most common deficiencies and drivers with what each tree contains, and with plant combinations used together since ancient times.</div></li>
            <li><div><b>Identify and publish.</b> Active compounds are isolated from every hit, and every result, positive or negative, is published openly.</div></li>
          </ol>
        </div>
      </section>

      <section id="support">
        <div className="wrap">
          <h2>Fund the first trees.</h2>
          <p style={{ maxWidth: '62ch', marginTop: 0 }}>Planning estimates; final budgets are set with partner laboratories.</p>
          <div className="tiers">
            <div className="tier"><span className="label">Seed</span><div className="amt">$150,000</div><span>100 species, 12 months</span><ul><li>Selection and legal sourcing</li><li>Screening against our five targets</li><li>First results published</li></ul></div>
            <div className="tier"><span className="label">Program</span><div className="amt">$750,000</div><span>1,000 species, 2 years</span><ul><li>Including redwood, sequoia and bristlecone</li><li>Active compounds identified for every hit</li><li>Patient-registry matching study</li></ul></div>
            <div className="tier"><span className="label">Founding partner</span><div className="amt">$2M+</div><span>An institute, 5 years</span><ul><li>A standing screening program with gardens and labs</li><li>A permanent open atlas of tree chemistry</li><li>Founding recognition</li></ul></div>
          </div>
          <div className="btns">
            <a className="btn p" href="mailto:rachel@planbforpans.com?subject=The%20Unheard%20Trees">Talk with Rachel</a>
            <a className="btn" href="https://planbforpans.com/donate">Give now</a>
          </div>
          <p className="honest">Most of these trees have never been tested against anything. We promise rigor and open results, not cures. Several tree products are dangerous, especially for children (camphor, eucalyptus and tea tree oils by mouth, willow bark, wild cherry bark, ginkgo seeds), which is why this work begins in laboratories, never with patients.</p>
        </div>
      </section>

      <footer className="wrap foot">
        <b>The Unheard Trees</b>, a research program of <a href="https://planbforpans.com">Plan B for PANS</a>, a Colorado nonprofit.
        <nav><a href="https://planbforpans.com">Plan B for PANS</a><a href="https://askminta.org">Ask Minta</a><a href={`${APP}/join?src=trees`}>Mailing list</a><a href="https://planbforpans.com/donate">Donate</a></nav>
        <span style={{ fontSize: 14 }}>Data: BGCI GlobalTreeSearch v1.10 and LOTUS natural products via Wikidata, queried November 19, 2026. Exact-name matching undercounts synonyms. Educational information only; not medical advice.</span>
      </footer>
    </div>
  )
}
