// "What Your Doctor Sees" — the PANS diagnostic workup + treatment decision tree,
// laid out so parents can walk in informed and decide alongside their clinician.
// Original Plan B rendering of the JCAP 2017 PANS Consortium guideline logic +
// standard pediatric (IDSA/AAP/CDC) dosing. Educational — not medical advice.

export const metadata = {
  title: 'What Your Doctor Sees — The PANS Protocol | Plan B for PANS',
  description:
    'The exact tests a good PANS doctor orders to find the trigger, the antibiotic for each infection with standard doses, when IVIG is used and how it gets covered, and the decision tree they follow — laid out so you can decide alongside them.',
}

const ink = '#1F2424'
const teal = '#2E6E70'
const soft = '#505858'
const rule = '#E1E5E4'
const cream = '#F5F7F6'
const card = '#FFFFFF'

const SCREEN: [string, string][] = [
  ['Throat swab — rapid strep + culture', 'Active group A Strep, even with no sore throat. If the rapid test is negative they culture it — rapid tests miss ~15% of strep.'],
  ['ASO (anti-streptolysin O)', 'A recent strep infection (an antibody). Most useful as serial values over time — a single number says little.'],
  ['Anti-DNase B', 'A second strep antibody, run with ASO. Together they catch more — but a negative still does not rule strep out.'],
  ['Mycoplasma PCR + IgM/IgG', 'Active mycoplasma ("walking pneumonia"). PCR confirms current infection; IgG alone can stay high for life, so it is not proof of a current bug.'],
  ['Influenza (molecular swab)', 'Active flu — a common, overlooked trigger.'],
  ['Perineal / skin-site culture', 'Strep hiding outside the throat — perianal, impetigo, vulvovaginitis.'],
  ['Family / close-contact throat swabs', 'A silent strep carrier in the house re-infecting your child. Swab the adults who never seem sick.'],
  ['Lyme — only if endemic', 'Tick-borne infection, but only screened where Lyme is common. In endemic areas, test through IGeneX (more sensitive than the standard CDC two-tier).'],
  ['CBC with differential', 'A baseline blood count — infection, inflammation, and immune clues in one inexpensive test.'],
  ['ESR + CRP (inflammation)', 'Whole-body inflammation markers. Often normal in PANS (the inflammation is in the brain), but worth the baseline.'],
  ['ANA (antinuclear antibody)', 'A screen for broader autoimmunity riding alongside.'],
  ['Immunoglobulins — IgG, IgA, IgM, IgE', 'Immune-system baseline. Low IgG/IgA can explain infections that never clear.'],
  ['Pneumococcal antibody titers', 'If infections keep recurring — catches specific antibody deficiency (SPAD), which is its own door to covered IVIG.'],
  ['Thyroid — TSH, Free T4, TPO + TgAb', 'Autoimmune thyroid can mimic or ride alongside PANS.'],
  ['Vitamin D (25-OH)', 'Low D worsens immune dysregulation; the Consortium targets above 30 ng/mL.'],
  ['Ferritin + iron studies', 'Low ferritin tracks with restless sleep and worse symptoms.'],
  ['B12 + folate', 'Methylation and neurologic cofactors.'],
  ['EBV panel (VCA IgM/IgG, EBNA, EA)', 'Epstein-Barr — a common viral trigger; EA positivity flags active reactivation.'],
  ['tTG-IgA (celiac screen)', 'If there are GI symptoms — celiac can drive neuro-behavioral change.'],
]

const ABX: [string, string, string, string][] = [
  ['Strep (first-line)', 'Amoxicillin or Penicillin V', 'Amoxicillin ~50 mg/kg once daily (max 1 g)', '10 days (some run an initial 3-week course)'],
  ['Strep — penicillin-allergic', 'Cephalexin or Cefadroxil (Consortium-preferred)', 'Cephalexin 20 mg/kg/dose twice daily', '10 days'],
  ['Strep — anaphylactic PCN allergy', 'Azithromycin or Clindamycin (avoid all cephalosporins)', 'Azithromycin 12 mg/kg day 1, then 6 mg/kg', '5 days'],
  ['Mycoplasma', 'Azithromycin (macrolide); tetracyclines if resistant', 'Azithromycin ~10 mg/kg/day', '3–5 days'],
  ['Sinusitis', 'High-dose Amoxicillin-clavulanate', '80–90 mg/kg/day (amox component), divided', '10–14 days'],
  ['Acute Lyme / tick-borne', 'Doxycycline (any age now); Amoxicillin alt.', 'Doxycycline 4.4 mg/kg/day (max 200 mg)', '10–14 days'],
]

const TREE: { step: string; title: string; body: string }[] = [
  { step: '1', title: 'New PANS diagnosis', body: 'A good doctor treats every new case with an initial anti-strep course — even if strep isn’t found — because strep is the most common, most treatable trigger.' },
  { step: '2', title: 'Run the infection screen', body: 'The tests above, at onset and at every flare. Find the trigger.' },
  { step: '3', title: 'Target the infection', body: 'The right antibiotic for the bug they found, at a full course (table below).' },
  { step: '4', title: 'Calm the brain', body: 'Anti-inflammatories on a schedule (a 6-week trial), and often a short steroid burst — most effective started within 1–3 days of a flare.' },
  { step: '5', title: 'Grade the severity', body: 'Mild → time + the steps above. Moderate-to-severe → escalate. Extreme → urgent.' },
  { step: '6', title: 'Moderate-to-severe → IVIG', body: 'Immune-modulating IVIG (1.5–2 g/kg), often the preferred next step, alone or with steroids.' },
  { step: '7', title: 'Extreme → plasma exchange (TPE)', body: 'First-line for the most severe, life-impacting cases; IVIG or IV steroids as backup. Refer to a neuroimmune center.' },
]

const sectionTitle: React.CSSProperties = { fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, margin: '0 0 14px' }
const th: React.CSSProperties = { textAlign: 'left', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: teal, padding: '10px 12px', borderBottom: `2px solid ${rule}` }
const td: React.CSSProperties = { fontSize: 14.5, color: soft, padding: '12px', borderBottom: `1px solid ${rule}`, lineHeight: 1.5, verticalAlign: 'top' }

export default function ProtocolPage() {
  return (
    <main style={{ background: cream, color: ink }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>What your doctor sees</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            The protocol, in the open.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Doctors respond differently to a parent who shows up informed. So here is exactly what a good PANS
            doctor <strong style={{ color: ink }}>orders to find the infection</strong>, the{' '}
            <strong style={{ color: ink }}>antibiotic for each one</strong>, when it escalates to{' '}
            <strong style={{ color: ink }}>IVIG</strong> — and the <strong style={{ color: ink }}>decision tree</strong>{' '}
            they follow. Laid out so you can walk in, name it, and decide alongside them.
          </p>
        </div>
      </section>

      {/* What the protocol IS — the story + the "hit it hard while you wait" framing */}
      <section style={{ padding: 'clamp(44px, 6vw, 72px) 24px', borderBottom: `1px solid ${rule}`, background: '#F5F7F6' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={sectionTitle}>What &ldquo;the protocol&rdquo; even is</h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: soft, margin: '0 0 16px' }}>
            In <strong style={{ color: ink }}>1998</strong>, Dr. Susan Swedo at the NIH first described <strong style={{ color: ink }}>PANDAS</strong> —
            a strep infection setting off a sudden, severe neuropsychiatric change in a child overnight. The category later
            widened to <strong style={{ color: ink }}>PANS</strong> (any infection or trigger, not just strep).
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: soft, margin: '0 0 16px' }}>
            In <strong style={{ color: ink }}>2017</strong>, a small group of the leading PANS clinicians — the{' '}
            <strong style={{ color: ink }}>PANS Research Consortium</strong> — published the first consensus
            <strong style={{ color: ink }}> treatment guidelines</strong>{' '}
            (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5610386/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>read the actual document →</a>).
            That document is, essentially, <strong style={{ color: ink }}>what your pediatrician receives</strong> when they go looking for
            &ldquo;how do I treat this.&rdquo; It is the <strong style={{ color: ink }}>first line.</strong>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: soft, margin: '0 0 16px' }}>
            It doesn&rsquo;t work for every child — but it is <strong style={{ color: ink }}>always worth a hard, early shot</strong>,
            and the sooner you hit it, the better it tends to go. So if your specialist appointment is{' '}
            <strong style={{ color: ink }}>months out</strong> and your pediatrician doesn&rsquo;t know where to start —{' '}
            <strong style={{ color: ink }}>now you do.</strong> Here is the first line, in plain sight. Hit it hard, hit it early.
          </p>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 12, padding: '20px 22px', marginTop: 22 }}>
            <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: teal, fontWeight: 700, margin: '0 0 12px' }}>Can&rsquo;t wait for the appointment? Three moves:</p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.6, margin: '0 0 10px' }}>
              <strong style={{ color: ink }}>① Find a prescriber.</strong> A telehealth PANS doctor can start the first line now —{' '}
              <a href="https://app.planbforpans.com/doctors" rel="noopener" style={{ color: teal, fontWeight: 700 }}>see the practitioner directory →</a>
            </p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.6, margin: '0 0 10px' }}>
              <strong style={{ color: ink }}>② Read them this.</strong> &ldquo;My child had a sudden, severe neuropsychiatric onset
              that fits PANS/PANDAS. I&rsquo;d like to start the PANS Consortium first line — the bloodwork to find the trigger, plus an
              empiric antibiotic course while we wait. Can we begin today?&rdquo;
            </p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.6, margin: '0 0 12px' }}>
              <strong style={{ color: ink }}>③ Ask for this bloodwork</strong> — when a child changes overnight, run the panel the protocol calls for to find the trigger. The exact list is right below. 👇
            </p>
            <p style={{ fontSize: 15, color: soft, lineHeight: 1.6, margin: 0, paddingTop: 12, borderTop: `1px solid ${rule}` }}>
              <strong style={{ color: ink }}>📄 Hand them the actual guidelines.</strong> Most pediatricians have never seen them — print and bring the real published documents:{' '}
              <a href="https://www.pandasppn.org/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>PANDAS Physicians Network guidance →</a>,{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9836684/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>2017 treatment guideline — infections/antibiotics →</a>,{' '}
              <a href="https://neuroimmune.org/clinicians/pans-diagnosis-and-treatment-guides/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Neuroimmune clinician guides →</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 — the screen */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>Step 1 · find the trigger</p>
          <h2 style={sectionTitle}>The tests doctors order to find the infection</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, maxWidth: 680, margin: '0 0 24px' }}>
            These are the labs a PANS-literate doctor runs at onset and at every flare. Name them, and most
            doctors will order the standard, insurance-covered ones.
          </p>
          <div style={{ overflowX: 'auto', border: `1px solid ${rule}`, borderRadius: 10, background: card }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead><tr><th style={th}>Test</th><th style={th}>What it’s looking for</th></tr></thead>
              <tbody>
                {SCREEN.map(([t, w]) => (
                  <tr key={t}><td style={{ ...td, fontWeight: 600, color: ink, minWidth: 200 }}>{t}</td><td style={td}>{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 20, background: card, border: `1px solid ${rule}`, borderRadius: 10, padding: '20px 22px' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: teal, fontWeight: 700, margin: '0 0 12px' }}>How to actually get this bloodwork — two ways</p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: '0 0 12px' }}>
              <strong style={{ color: ink }}>① Order it yourself — no doctor needed.</strong> In most states you can order most of these labs direct (they run through Quest or LabCorp; you book a quick blood draw):{' '}
              <a href="https://www.walkinlab.com/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Walk-In Lab</a>,{' '}
              <a href="https://www.questhealth.com/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Quest Health</a>,{' '}
              <a href="https://www.labcorp.com/labcorp-ondemand" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Labcorp OnDemand</a>,{' '}
              <a href="https://www.ultalabtests.com/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Ulta Lab Tests</a>. A few specialized tests (like IGeneX Lyme) still need a provider to order.
            </p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: ink }}>② Have an online doctor order it — and try for insurance.</strong> A telehealth PANS doctor can order the full panel and often get it covered.{' '}
              <a href="https://app.planbforpans.com/doctors" rel="noopener" style={{ color: teal, fontWeight: 700 }}>See our practitioner directory →</a> — where parents flag <em>which</em> doctors actually order the workup and got insurance to cover it, so you can go straight to the ones who do.
            </p>
          </div>

          <div style={{ marginTop: 18, background: '#eef5f4', border: `1px solid ${teal}`, borderRadius: 10, padding: '20px 22px' }}>
            <p style={{ fontSize: 15.5, color: ink, margin: '0 0 12px', lineHeight: 1.65, fontWeight: 700 }}>
              Overwhelmed? You don’t order everything, and you don’t do this alone.
            </p>
            <p style={{ fontSize: 15, color: soft, margin: '0 0 12px', lineHeight: 1.65 }}>
              Plan B for PANS doesn’t treat your child — <strong style={{ color: ink }}>your doctors do that.</strong> What
              Minta gives you is <strong style={{ color: teal }}>direction,</strong> in two steps:
            </p>
            <p style={{ fontSize: 15, color: soft, margin: '0 0 8px', lineHeight: 1.6 }}>
              <strong style={{ color: ink }}>1 · A testing direction.</strong> Based on whatever you have right
              now, Minta tells you exactly which tests to run next to complete the picture — prioritized, one or
              two at a time, with where to order each.
            </p>
            <p style={{ fontSize: 15, color: soft, margin: '0 0 12px', lineHeight: 1.6 }}>
              <strong style={{ color: ink }}>2 · A treatment direction.</strong> Once your results are in, she
              shows you what’s driving it, what the options are, in what order, and the <em>why</em> — written as
              the roadmap and the questions to <strong style={{ color: ink }}>bring to your medical team,</strong>{' '}
              so they can act with the whole picture in front of them.
            </p>
            <p style={{ fontSize: 14, color: soft, margin: 0, lineHeight: 1.55, fontStyle: 'italic' }}>
              We integrate and direct. Your prescriber decides and treats. That’s the line — and we never cross it.
            </p>
          </div>
        </div>
      </section>

      {/* Decision tree */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderBottom: `1px solid ${rule}`, background: '#F5F7F6' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>The decision tree</p>
          <h2 style={sectionTitle}>The path a doctor follows</h2>
          <div style={{ display: 'grid', gap: 0, marginTop: 18 }}>
            {TREE.map((n, i) => (
              <div key={n.step}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: card, border: `1px solid ${rule}`, borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: teal, color: '#fff', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n.step}</div>
                  <div><div style={{ fontSize: 16, fontWeight: 700, color: ink }}>{n.title}</div><div style={{ fontSize: 14, color: soft, lineHeight: 1.5, marginTop: 3 }}>{n.body}</div></div>
                </div>
                {i < TREE.length - 1 && <div style={{ textAlign: 'center', color: teal, fontSize: 18, lineHeight: 1.4 }}>↓</div>}
              </div>
            ))}
          </div>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 12, padding: '18px 20px', marginTop: 24 }}>
            <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: teal, fontWeight: 700, margin: '0 0 8px' }}>Dr. Swedo&rsquo;s anti-inflammatory basics</p>
            <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: 0 }}>
              Alongside the antibiotic, Dr. Swedo — who first described PANDAS — leans on two simple, accessible anti-inflammatories to calm
              the brain: <strong style={{ color: ink }}>around-the-clock ibuprofen</strong> (on a schedule, not just as-needed, to keep the
              inflammation suppressed) and <strong style={{ color: ink }}>lots of fish oil</strong> (high-dose omega-3). Inexpensive, gentle,
              and often a meaningful part of early recovery.
            </p>
            <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: '10px 0 0' }}>
              <strong style={{ color: ink }}>How long on the ibuprofen?</strong> Most start with a scheduled trial of about{' '}
              <strong style={{ color: ink }}>4–8 weeks</strong> (the Consortium frames it as roughly a 6-week NSAID trial). If it clearly
              helps, doctors often continue through the active inflammatory period, then taper; if there&rsquo;s no benefit by ~6 weeks,
              reassess. Longer-term NSAID use needs prescriber monitoring (stomach + kidneys) — dosing and duration are your prescriber&rsquo;s call.
            </p>
          </div>
          <div style={{ background: '#fdeeee', border: '1px solid #e6b8b8', borderRadius: 12, padding: '18px 20px', marginTop: 16 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#8a1f1f', margin: '0 0 8px' }}>⚠️ One critical caution before any steroid</p>
            <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: 0 }}>
              A steroid burst can calm PANS inflammation — but steroids <strong style={{ color: ink }}>suppress the immune system</strong>,
              and if a child has <strong style={{ color: ink }}>active Lyme or another tick-borne infection</strong>, a steroid can make
              them dramatically <strong style={{ color: ink }}>worse.</strong> So if you live in a tick-endemic area — or there&rsquo;s any
              tick-borne suspicion — <strong style={{ color: ink }}>rule out Lyme first</strong>, and test through{' '}
              <strong style={{ color: ink }}>IGeneX</strong>, which is far more sensitive than the standard CDC two-tier test that misses many cases.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2 — targeting (antibiotics) */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>Step 2 · target the infection</p>
          <h2 style={sectionTitle}>The antibiotic for each bug</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, maxWidth: 700, margin: '0 0 24px' }}>
            The doses below are the <strong style={{ color: ink }}>standard published pediatric regimens</strong>{' '}
            (IDSA / AAP / CDC). They are here so you know what “normal” looks like — the exact dose for your
            child is always your prescriber’s decision.
          </p>
          <div style={{ overflowX: 'auto', border: `1px solid ${rule}`, borderRadius: 10, background: card }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead><tr><th style={th}>Infection</th><th style={th}>First-line</th><th style={th}>Standard dose</th><th style={th}>Course</th></tr></thead>
              <tbody>
                {ABX.map(([inf, drug, dose, dur]) => (
                  <tr key={inf}><td style={{ ...td, fontWeight: 600, color: ink }}>{inf}</td><td style={td}>{drug}</td><td style={td}>{dose}</td><td style={td}>{dur}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#eef5f4', border: `1px solid ${teal}`, borderRadius: 12, padding: '20px 22px', margin: '22px 0 0' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: teal, fontWeight: 700, margin: '0 0 10px' }}>&ldquo;Which one?&rdquo; — and what to fight for while you wait</p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: '0 0 12px' }}>
              The right antibiotic depends on <strong style={{ color: ink }}>which infection is driving it</strong> — that&rsquo;s what the
              bloodwork decides. High strep titers (ASO / anti-DNase B) point to a strep drug; a positive Mycoplasma points to a
              different class; a tick-borne result points to another. Match the bug to the row above.
            </p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: 0 }}>
              But you don&rsquo;t have to wait helplessly. While results come back, prescribers commonly start an{' '}
              <strong style={{ color: ink }}>empiric broad-spectrum first line</strong> that covers the most common triggers — most often{' '}
              <strong style={{ color: ink }}>azithromycin</strong> (it hits <em>both</em> strep and Mycoplasma — the two biggest culprits) or{' '}
              <strong style={{ color: ink }}>Augmentin (amoxicillin-clavulanate)</strong> (broad strep coverage, with anti-inflammatory
              properties noted in the PANDAS research). If your child is in an acute flare, <strong style={{ color: ink }}>that&rsquo;s the
              thing to ask for now</strong> — early treatment matters most. Your prescriber picks the drug and dose.
            </p>
          </div>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 12, padding: '20px 22px', margin: '18px 0 0' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: teal, fontWeight: 700, margin: '0 0 6px' }}>A named early-onset protocol that works</p>
            <p style={{ fontSize: 18, color: ink, fontWeight: 400, margin: '0 0 12px', fontFamily: 'var(--font-cormorant)' }}>Dr. Andrew Baumel&rsquo;s two-drug cocktail — a pediatrician&rsquo;s simple, gentle, early approach (Framingham, MA · 155+ children over 6+ years)</p>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: '0 0 10px' }}>
              Dr. Baumel — a board-certified general pediatrician — treats early, mild-to-moderate PANS right in his regular office with
              a deliberately simple combination he&rsquo;s leaned on for over six years:
            </p>
            <ul style={{ fontSize: 15.5, color: soft, lineHeight: 1.75, margin: '0 0 10px', paddingLeft: 20 }}>
              <li><strong style={{ color: ink }}>Cephalexin (Keflex) — 50 mg/kg/day, divided twice a day</strong> &nbsp;(the antibiotic, from Dr. Pasternack at Harvard)</li>
              <li><strong style={{ color: ink }}>Naproxen sodium — 5 mg/kg per dose</strong> &nbsp;(the anti-inflammatory, from Dr. Frankovich at Stanford)</li>
            </ul>
            <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.65, margin: 0 }}>
              His key insight: use these <strong style={{ color: ink }}>mild medications long-term — slow and steady</strong>, not a quick
              burst. No steroids, IVIG, or Rituximab for mild-to-moderate cases. In his experience, <strong style={{ color: ink }}>most
              early-caught children respond</strong> and recover without the heavier therapies. He also swabs the whole family for strep and
              checks for the tell-tale perianal/vaginal strep rash. <em>This is a real protocol a pediatrician can run — bring it to yours.</em>
            </p>
            <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '12px 0 0', paddingTop: 12, borderTop: `1px solid ${rule}` }}>
              This gentle, early, pediatrician-led approach <strong style={{ color: ink }}>isn&rsquo;t formally written into the 2017 Consortium guidelines</strong> — but Dr. Baumel argues, and his six years of results suggest, that it belongs there as the first and simplest option for early cases.{' '}
              <a href="https://neuroimmune.org/pans-pandas-interview-baumel/" rel="noopener" style={{ color: teal, fontWeight: 700 }}>Read his full interview →</a>
            </p>
          </div>
          <p style={{ fontSize: 13.5, color: soft, fontStyle: 'italic', margin: '16px 0 0' }}>
            For penicillin allergy, the Consortium specifically prefers <strong style={{ color: ink }}>cephalexin</strong> over
            cefadroxil (cefadroxil shares a side-chain with amoxicillin). True anaphylactic allergy → no cephalosporins at all.
          </p>
        </div>
      </section>

      {/* IVIG + insurance */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderBottom: `1px solid ${rule}`, background: '#F5F7F6' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>When it’s severe</p>
          <h2 style={sectionTitle}>IVIG — and how families get it covered</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, margin: '0 0 16px' }}>
            For <strong style={{ color: ink }}>moderate-to-severe</strong> PANS, IVIG (immune-modulating
            immunoglobulin, <strong style={{ color: ink }}>1.5–2 g/kg</strong>, split over 2+ days) is often the
            preferred next step — alone or with steroids. The most extreme, life-impacting cases go to{' '}
            <strong style={{ color: ink }}>plasma exchange (TPE)</strong> first. Response to IVIG is often
            delayed 2–3 weeks, and most kids treated early need only 1–3 courses.
          </p>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 10, padding: '18px 20px' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: '0 0 10px' }}>How to get insurance to cover it</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: soft, lineHeight: 1.65 }}>
              <li><strong style={{ color: ink }}>Code it as autoimmune encephalitis.</strong> Until there’s a PANS-specific code, this is the lever — six states (CA, CO, IL, MD, OR, RI) require it. PANS is, literally, an emerging autoimmune encephalopathy.</li>
              <li><strong style={{ color: ink }}>A letter of medical necessity</strong> mapping the treatment to the insurer’s own policy criteria.</li>
              <li><strong style={{ color: ink }}>Letters from multiple providers</strong> — several states require a PCP <em>and</em> a specialist to jointly attest.</li>
              <li><strong style={{ color: ink }}>Attach the peer-reviewed evidence</strong> (the Perlmutter IVIG/TPE trial, the Consortium guidelines) — reviewers often don’t know PANS.</li>
              <li><strong style={{ color: ink }}>Expect prior authorization</strong> on every request, and document objective inflammation where you can (MRI, EEG, sleep study, autoantibodies, family autoimmune history).</li>
            </ul>
            <p style={{ fontSize: 13, color: soft, margin: '12px 0 0' }}>
              Templates: <a href="https://neuroimmune.org/obtaining-insurance-coverage-for-pans-pandas-treatments/" target="_blank" rel="noopener" style={{ color: teal }}>Neuroimmune Foundation</a> ·{' '}
              <a href="https://www.pandasppn.org/" target="_blank" rel="noopener" style={{ color: teal }}>PANDAS Physicians Network</a>
            </p>
          </div>
        </div>
      </section>

      {/* Healing + escalate */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={sectionTitle}>What healing looks like — and when to escalate</h2>
          <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 15.5, color: soft, lineHeight: 1.7 }}>
            <li><strong style={{ color: ink }}>Antibiotics:</strong> recent-onset kids often improve within <strong>days to a few weeks</strong> of the right antibiotic.</li>
            <li><strong style={{ color: ink }}>Anti-inflammatories:</strong> a <strong>6-week</strong> trial; many kids slip when it’s withdrawn — itself a sign it was helping.</li>
            <li><strong style={{ color: ink }}>Steroid burst:</strong> works best within <strong>1–3 days</strong> of a flare; flares treated early ran ~6 weeks vs ~11 untreated.</li>
            <li><strong style={{ color: ink }}>The escalation rule:</strong> early treatment beats late, and when first-line fails, second-line helps — so you <strong>escalate, you don’t wait.</strong></li>
            <li><strong style={{ color: ink }}>When to pivot:</strong> if a kid stops responding to immune treatment entirely (even high-dose steroids), the guideline itself says to shift toward <strong>rehabilitation</strong> — and that’s exactly where Plan B for PANS starts hunting for the driver no one found.</li>
          </ul>
        </div>
      </section>

      {/* The bigger escalation path: protocol → functional med → homeopathy */}
      <section style={{ padding: 'clamp(48px, 7vw, 90px) 24px', borderBottom: `1px solid ${rule}`, background: '#F5F7F6' }}>
        <div className="pb-container" style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>The bigger picture</p>
          <h2 style={sectionTitle}>If the protocol isn&rsquo;t enough — the path forward</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: soft, margin: '0 0 30px' }}>
            Everything above is <strong style={{ color: ink }}>Stage 1</strong>. Most kids caught early get better here. But if your child
            isn&rsquo;t <em>all the way</em> better, you don&rsquo;t stop — you go deeper. This is the path Plan B for PANS walks with you.
          </p>
          {([
            ['1', 'Stage 1 · Conventional', 'The Protocol', 'Everything on this page — find the trigger, the right antibiotic, scheduled anti-inflammatories, and IVIG or plasma exchange when it’s severe. The standard first line, and where most early, mild-to-moderate kids get better.', '#2E6E70'],
            ['2', 'Stage 2 · Functional medicine', 'Find the root drivers', 'Not all better? Go deeper than infection: methylation & detox, the gut, mold/CIRS, chronic tick-borne (Lyme, Bartonella, Babesia, Mycoplasma), MCAS, and mineral & immune dysregulation — the roots conventional medicine doesn’t look for. Test them, treat them.', '#6b3fa0'],
            ['3', 'Stage 3 · Deepest tier', 'Homeopathy & what hasn’t been tried', 'Still not all the way there? Homeopathy, plus the full “what hasn’t been tried” menu — biomagnetism, phage therapy, peptides, and more. Nothing left on the table.', '#9a5b2a'],
          ] as [string, string, string, string, string][]).map(([n, tag, title, body, color], i) => (
            <div key={n}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: card, border: `2px solid ${color}`, borderRadius: 14, padding: '20px 22px' }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: color, color: '#fff', fontWeight: 700, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
                <div>
                  <p style={{ fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color, fontWeight: 700, margin: '2px 0 4px' }}>{tag}</p>
                  <p style={{ fontSize: 21, fontFamily: 'var(--font-cormorant)', color: ink, margin: '0 0 8px' }}>{title}</p>
                  <p style={{ fontSize: 15, color: soft, lineHeight: 1.6, margin: 0 }}>{body}</p>
                </div>
              </div>
              {i < 2 && (
                <div style={{ textAlign: 'center', padding: '8px 0' }}>
                  <div style={{ color: teal, fontSize: 22, lineHeight: 1 }}>↓</div>
                  <div style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', fontWeight: 600 }}>Still not all better?</div>
                </div>
              )}
            </div>
          ))}
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '28px 0 0', textAlign: 'center' }}>
            <strong style={{ color: ink }}>This is Plan B for PANS.</strong> The name is literal — when Plan A runs out, there&rsquo;s a whole map left.
            We help you work down it, one stage at a time, and keep looking for the next thing to try.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, fontStyle: 'italic' }}>
            This page is educational — the standard guideline picture (PANS Consortium, JCAP 2017) plus standard
            pediatric dosing, drawn so you can have a smarter conversation. It is not medical advice. I’m Rachel
            Johnson, a parent navigator and integrator, not a licensed clinician. Every dose and decision is your
            child’s prescriber’s. Sources:{' '}
            <a href="https://www.liebertpub.com/doi/10.1089/cap.2016.0148" target="_blank" rel="noopener" style={{ color: teal }}>Consortium Part II (immune)</a> ·{' '}
            <a href="https://www.liebertpub.com/doi/10.1089/cap.2016.0151" target="_blank" rel="noopener" style={{ color: teal }}>Part III (infections)</a> ·{' '}
            <a href="https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis/" target="_blank" rel="noopener" style={{ color: teal }}>IDSA strep</a> ·{' '}
            <a href="https://www.idsociety.org/practice-guideline/lyme-disease/" target="_blank" rel="noopener" style={{ color: teal }}>IDSA Lyme</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
