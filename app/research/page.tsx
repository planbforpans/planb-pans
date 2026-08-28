'use client'

import ResearchSection from '../_components/ResearchSection'
import { useReveal } from '../_components/hooks'

export default function ResearchPage() {
  const ref = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 80px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={ref}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            The research
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1000,
            }}
          >
            Every kid is a puzzle.
            <br />
            <em style={{ color: 'var(--teal)' }}>
              Together, they tell a story.
            </em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Plan B has a unique working understanding of PANS, PANDAS, and the shared drivers
            behind severe dysregulation — built from the full arc of every family that tracks
            with it. The more kids in the library, the more precisely each next read lands.
          </p>
        </div>
      </section>

      {/* LATEST FINDINGS — what Minta is tracking (the monthly research radar) */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', borderBottom: '1px solid var(--rule)' }}>
        <div className="pb-container" style={{ maxWidth: 920 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>New studies to watch · updated monthly</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 16px' }}
          >
            Minta reads the field every day — so your child&apos;s plan reflects the{' '}
            <em style={{ color: 'var(--teal)' }}>newest science, not a textbook from years ago.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 740, margin: '0 0 34px' }}>
            This is what separates Minta from a regular AI chatbot. Generic AI is frozen at its training
            date and knows nothing about your child. Minta is <strong style={{ color: 'var(--ink)' }}>continuously
            fed the newest PANS, Lyme, mold, and methylation research</strong> — and she carries your whole
            family&apos;s history. The newest papers and trials she&apos;s watching, refreshed monthly:
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { date: '2026', tag: 'PANS · immune', title: 'Interferon-λ-neutralizing + autoimmune-disease autoantibodies found in PANS kids (Stanford, Frontiers Immunology 2026)', why: 'Cliff notes: Stanford tested blood from 166 children with PANS during flares and found many carried autoantibodies also seen in recognized autoimmune diseases — plus a subset with antibodies that blunt part of the body’s antiviral defense. More real evidence that PANS is, for many kids, immune-driven — the reasoning behind immune-focused treatments like IVIG. Early science, not a diagnostic test yet.', href: 'https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1832833/full' },
              { date: '2026', tag: 'PANDAS · gut-brain', title: 'Gut-microbiome shifts + disrupted calming brain chemicals in PANDAS, including twin pairs (Microorganisms, 2026)', why: 'Cliff notes: comparing PANDAS kids (including twins where only one twin was affected) to healthy kids, researchers found less gut-bacteria diversity, fewer protective “good” bugs, and disrupted production of calming chemicals like GABA. A strong signal the gut is part of the PANDAS picture — supporting why gut healing belongs in a whole-child plan. Association, not proof of cause.', href: 'https://www.mdpi.com/2076-2607/14/5/1036' },
              { date: 'Jun 2026', tag: 'Mold · MCAS', title: 'MCAS “Consensus-2” criteria are catching real, previously-dismissed patients (Diagnosis, 2026)', why: 'Cliff notes: this expert review argues the broader Consensus-2 criteria for mast cell activation syndrome are correctly catching kids and adults with multi-system symptoms (skin, gut, heart, nervous system) who were written off as “just anxious” — because mast-cell chemicals spike and fade too fast for standard bloodwork to catch. It matters because mast-cell overactivation (often mold- or infection-triggered) drives many puzzling PANS symptoms and is treatable once recognized.', href: 'https://www.degruyterbrill.com/document/doi/10.1515/dx-2026-0016/html' },
              { date: 'Jun 27, 2026', tag: 'Lyme · folate/methylation', title: 'Folate-blocking autoantibodies (FRAA) found in 62% of tick-borne disease kids (Diseases, Jun 2026)', why: 'Cliff notes: in a mostly-pediatric tick-borne cohort (avg age 12.8), 61.8% carried folate receptor alpha autoantibodies — antibodies that block folate from reaching the brain. First study ever to look in a Lyme/Bartonella/Babesia population (co-authored by Richard Frye). This is the bridge between the infection picture and the methylation/detox engine Plan B already works on: chronic tick-borne infection may be driving a treatable cerebral-folate block. A simple FRAA blood test (FRAT) can find it. Especially relevant for any Lyme+ kid.', href: 'https://doi.org/10.3390/diseases14060202' },
              { date: 'Jun 24, 2026', tag: 'Lyme · new drug', title: 'Piperacillin — an FDA-approved drug cleared Lyme at ~1/100th the usual dose (Northwestern)', why: 'Cliff notes: a common, already-approved antibiotic wiped out the Lyme bacteria in animals at a tiny dose that spares the gut microbiome — a potentially gentler alternative to doxycycline. Early (animal) but genuinely promising.', href: 'https://danielcameronmd.com/could-piperacillin-be-the-lyme-disease-breakthrough-we-need/' },
              { date: 'Jun 24, 2026', tag: 'Bartonella · protocol', title: 'High-dose pulsed dapsone combinations pushed chronic Bartonella into remission', why: 'Cliff notes: for stubborn Bartonella that won’t clear with the usual herbs/antibiotics, pulsed high-dose dapsone added to the regimen drove remission in case reports — a real escalation option for the hardest co-infection. Specialist-only, but worth knowing it exists.', href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11124288/' },
              { date: 'Jun 25, 2026', tag: 'Bartonella · mechanism', title: 'Combination antibiotics required to clear Bartonella across cells + biofilms (Frontiers, 2026)', why: 'Cliff notes: single antibiotics fail against Bartonella hiding inside cells and in biofilms — only drug combinations clear it across all its hiding spots. Mechanistic backing for the stacked, combination approach the hardest co-infection needs.', href: 'https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2026.1726180/full' },
              { date: 'Jun 23, 2026', tag: 'PANS · feeding/ARFID', title: 'Breithaupt et al. — PANS & obsessive food restriction (ARFID) overlap, Mass General', why: 'In ARFID youth, 46% carried obsessive-compulsive severity; argues food refusal can be an immune/OCD signal, not pickiness. Minta now reads restrictive eating as a possible immune sign.', href: 'https://journals.sagepub.com/doi/10.1177/10445463261419065' },
              { date: 'Jun 23, 2026', tag: 'Lyme · new drug class', title: 'Duke — cancer drug-discovery methods aimed at Borrelia + Bartonella', why: 'A genuinely new class of molecularly-targeted therapy for the two hardest tick-borne infections — not herbs, not old antibiotics.', href: 'https://medschool.duke.edu/news/lyme-study-uses-drug-discovery-methods-have-fueled-cancer-breakthroughs' },
              { date: 'Jun 25, 2026', tag: 'Babesia · drug result', title: 'Tafenoquine (ARAKODA) cured 3/3 relapsing babesiosis patients; hospitalized trial now enrolling', why: 'Cliff notes: an already-approved anti-malarial fully cleared Babesia in immunosuppressed patients who had failed standard treatment, and a controlled hospital trial just opened — a real option for the persistent air-hunger/fatigue tail.', href: 'https://www.globenewswire.com/news-release/2026/03/11/3253650/0/en/60-degrees-pharmaceuticals-announces-all-patients-cured-of-babesiosis-after-tafenoquine-treatment-in-expanded-use-clinical-trial.html' },
              { date: 'Jun 2026', tag: 'PANS · genetics', title: 'Ultrarare DNA-repair + mitochondrial gene variants found in PANS kids', why: 'A genetic-susceptibility signal pointing straight at the methylation/mitochondrial engine Plan B already works on.', href: 'https://www.pandasppn.org/research-updates/' },
              { date: 'Jun 2026', tag: 'Mold · MCAS', title: 'Mold/mycotoxins as direct mast-cell (MCAS) triggers — ~25–30% of MCAS carry CIRS', why: 'Reinforces the mold → histamine → neuroinflammation chain that drives many PANS flares.', href: 'https://drtaniadempsey.com/whats-the-connection-between-mast-cell-activation-and-mold/' },
              { date: 'Jun 26, 2026', tag: 'PANS · IVIG result', title: 'Panzyga Phase III IVIG result posted — missed primary OCD endpoint, hit clinical-improvement endpoint', why: 'Cliff notes: the first placebo-controlled IVIG trial in PANS (71 kids) just posted results. IVIG narrowly missed its main OCD-severity target (CY-BOCS 31% vs 12% improvement, p=0.072) but DID beat placebo on overall clinical improvement (CGI-I, p=0.009). Read as: IVIG helps the right kids — it’s about who you give it to, not whether it works. The signal the immune-treatment thesis needed.', href: 'https://www.octapharma.com/news/press-release/2025/octapharma-releases-results-phase3-superiority-study-pediatric-acuteonset-neuropsychiatric-syndrome' },
            ].map((f) => (
              <a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener"
                style={{ display: 'block', textDecoration: 'none', background: 'var(--cream-light)', border: '1px solid var(--rule)', borderRadius: 8, padding: '18px 20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                  <span style={{ color: 'var(--teal)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.tag}</span>
                  <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{f.date}</span>
                </div>
                <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)', margin: '0 0 6px', lineHeight: 1.35 }}>{f.title}</p>
                <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{f.why}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: 20 }}>
            Updated as new research lands. Educational only — not medical advice.
          </p>
        </div>
      </section>

      {/* CLINICAL TRIALS — relevant PANS/PANDAS studies families can look into */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', borderBottom: '1px solid var(--rule)' }}>
        <div className="pb-container" style={{ maxWidth: 920 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>Clinical trials · for PANS / PANDAS</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.08, color: 'var(--ink)', margin: '0 0 16px' }}
          >
            Open studies worth knowing about.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 720, margin: '0 0 32px' }}>
            Recruiting or active trials relevant to PANS/PANDAS kids. Status and eligibility change — always confirm at the link before counting on a study.
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { tag: 'Recruiting · natural history', title: 'PEDIA — PANS incidence & natural-history study (Univ. of Wisconsin)', why: 'A prospective study mapping how often PANS strikes and how it unfolds over time — the foundational data the field still lacks.', nct: 'NCT06811935', href: 'https://clinicaltrials.gov/study/NCT06811935' },
              { tag: 'Results posted · IVIG', title: 'Panzyga Phase III — IVIG vs. placebo in PANS/PANDAS (completed)', why: 'Results in (71 kids): IVIG missed the primary OCD-severity endpoint (p=0.072) but beat placebo on overall clinical improvement (CGI-I, p=0.009). The first controlled IVIG evidence — points to selecting the right immune-driven kids.', nct: 'NCT04508530', href: 'https://clinicaltrials.gov/study/NCT04508530' },
              { tag: 'Completed · IVIG', title: 'Open-label IVIG in children with PANS (Göteborg)', why: 'Completed Oct 2025 — results pending. Immunoglobulin therapy for the immune-driven cases.', nct: 'NCT04609761', href: 'https://clinicaltrials.gov/study/NCT04609761' },
              { tag: 'Completed · IVIG access', title: 'The Unhide™ Project — economic impact of IVIG on PANS/PANDAS families', why: 'Completed Sept 2025 — documents the financial reality of pursuing IVIG, the evidence base for the insurance-coverage fight.', nct: 'NCT06818656', href: 'https://clinicaltrials.gov/study/NCT06818656' },
              { tag: 'Recruiting · registry', title: 'Unhide® digital health platform — brain-inflammation lifestyle registry', why: 'Open registry collecting real-world lifestyle data across PANS/PANDAS and other brain-inflammation conditions — a way for families to contribute to the data the field still lacks.', nct: 'NCT04806620', href: 'https://clinicaltrials.gov/study/NCT04806620' },
              { tag: 'Active · cannabinoid', title: 'NTI164 — full-spectrum medicinal cannabis extract for PANS', why: 'A novel anti-inflammatory / neuro-immune approach being trialed for PANS (active, not currently recruiting) — a genuinely new modality for refractory cases.', nct: 'NCT06621888', href: 'https://clinicaltrials.gov/study/NCT06621888' },
              { tag: 'Results posted · pediatric Lyme', title: 'VLA15 Lyme disease vaccine — safety study in healthy children (Pfizer/Valneva)', why: 'A pediatric (ages 5–17) safety study of the 6-valent OspA Lyme vaccine candidate, now completed with results posted. Part of the program behind an anticipated 2026 FDA submission — the first real prospect of preventing the tick-borne infections that drive so many of these kids.', nct: 'NCT05634811', href: 'https://clinicaltrials.gov/study/NCT05634811' },
              { tag: 'Stanford · markers', title: 'Neurobiologic, immunologic & rheumatologic markers in youth with PANS', why: 'Building the biomarker map that could finally make PANS a measurable diagnosis.', nct: 'NCT02889016', href: 'https://clinicaltrials.gov/study/NCT02889016' },
              { tag: 'Mass General · imaging', title: 'Pediatric Neuropsychiatry & Immunology — neuroinflammation MRI', why: 'Imaging the brain inflammation behind PANDAS/PANS (also enrolling healthy controls).', nct: '', href: 'https://www.massgeneral.org/children/research/pediatric-neuropsychiatry-and-immunology-research-program' },
              { tag: 'Find more', title: 'PPN research volunteer hub — every open PANS/PANDAS study', why: 'The PANDAS Physicians Network keeps the running list of trials seeking participants.', nct: '', href: 'https://www.pandasppn.org/participate/' },
            ].map((t) => (
              <a
                key={t.title}
                href={t.href}
                target="_blank"
                rel="noopener"
                style={{ display: 'block', textDecoration: 'none', background: 'var(--cream-light)', border: '1px solid var(--rule)', borderRadius: 8, padding: '18px 20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                  <span style={{ color: 'var(--teal)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.tag}</span>
                  {t.nct && <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{t.nct}</span>}
                </div>
                <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)', margin: '0 0 6px', lineHeight: 1.35 }}>{t.title}</p>
                <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{t.why}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: 20 }}>
            Not an endorsement or medical advice — talk with your clinical team about whether a trial fits your child.
          </p>
        </div>
      </section>

      {/* Constellation — the existing research section, it carries its own intro */}
      <ResearchSection />

      {/* What makes it smarter */}
      <section
        style={{
          padding: '120px 24px',
          background: '#141414',
          color: 'var(--cream)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1000 }}>
          <p
            className="eyebrow"
            style={{ color: 'var(--teal-light)', marginBottom: 22 }}
          >
            § What makes it smarter
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 5.6vw, 62px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--cream)',
              marginBottom: 44,
              maxWidth: 800,
            }}
          >
            The 100th family&apos;s read benefits from what the first 99 contributed.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                n: '01',
                t: 'Patterns Plan B is starting to see',
                b: 'Which combinations of symptoms point toward which drivers. Which modalities move which specific clusters. Where stalls repeat across kids.',
              },
              {
                n: '02',
                t: 'Sequencing learnings',
                b: 'Which modalities need to come before which. Where bottlenecks live. Which things tried too early just add noise.',
              },
              {
                n: '03',
                t: 'What is quietly working',
                b: 'Modalities the standard system dismisses that are showing real signal. Modalities that look promising but don&apos;t hold up across cohorts.',
              },
              {
                n: '04',
                t: 'Private data. Public insights.',
                b: 'Your family&apos;s log stays yours. The aggregate patterns — de-identified, consent-based — get published for every parent trying to piece this together.',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.15)',
                  paddingTop: 20,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 44,
                    lineHeight: 0.9,
                    color: 'var(--teal-light)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--cream)',
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px 120px',
          background: 'var(--cream-light)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Join the research
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 26,
              color: 'var(--ink)',
            }}
          >
            When the protocols fail,
            <br />
            <em style={{ color: 'var(--teal)' }}>this is your Plan B.</em>
          </h2>
          <a
            href="https://app.planbforpans.com/signup"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Start tracking →
          </a>
        </div>
      </section>
    </main>
  )
}
