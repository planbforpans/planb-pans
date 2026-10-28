// PRIVATE — password-gated by middleware.ts (HTTP Basic Auth).
// The running list of trainings/conferences worth taking to keep Minta current
// and Rachel credentialed. The daily radar adds to this; not linked anywhere public.

export const metadata = {
  title: 'Classes Minta Should Take — Private',
  robots: { index: false, follow: false },
}

type Course = {
  name: string
  provider: string
  why: string
  cost?: string
  next?: string
  pri: 1 | 2 | 3
  status: string
  href?: string
}

const PRI: Record<number, string> = { 3: '⭐⭐⭐ core', 2: '⭐⭐ strong', 1: '⭐ nice-to-have' }

const SECTIONS: { heading: string; courses: Course[] }[] = [
  {
    heading: 'Tick-borne · Lyme · Bartonella',
    courses: [
      { name: 'Vector-Borne Illness Fundamentals', provider: 'ILADS', why: 'Core Lyme/co-infection dx + tx — the prereq for ILADEF mentorship.', cost: '~mid', next: 'rolling / recorded', pri: 3, status: '🔲 considering', href: 'https://www.ilads.org/' },
      { name: 'ILADS Annual Scientific Conference 2026', provider: 'ILADS', why: 'The newest tick-borne + PANS science, taught live.', cost: '$$', next: 'Oct 22–25, 2026', pri: 3, status: '🔲 considering', href: 'https://membercompass.ilads.org/events/2026-ilads-annual-scientific-conference' },
      { name: 'Lyme Disease Practitioner Cert (LDPC)', provider: 'cert program', why: 'Lyme + mycotoxin + PANS/PANDAS in one credential.', cost: '$$', next: 'rolling', pri: 3, status: '🔲 considering' },
      { name: 'ILADEF Physician Training / mentorship', provider: 'ILADEF', why: '1:1 mentorship treating chronic Lyme (needs Fundamentals first).', cost: '$$$', next: 'rolling', pri: 2, status: '🔲 considering' },
    ],
  },
  {
    heading: 'Mold · CIRS · environmental',
    courses: [
      { name: 'Shoemaker CIRS / "Surviving Mold" practitioner training', provider: 'Surviving Mold', why: 'The CIRS protocol gold standard — sequencing, binders, VIP.', pri: 3, status: '🔲 considering', href: 'https://www.survivingmold.com/' },
      { name: 'ISEAI conference + training', provider: 'ISEAI', why: 'Environmentally-acquired illness — mold, MCAS, and their PANS overlap.', pri: 2, status: '🔲 considering', href: 'https://iseai.org/education/' },
    ],
  },
  {
    heading: 'Methylation · nutrigenomics',
    courses: [
      { name: 'Mastering Brain Chemistry / methylation training', provider: 'Walsh Research Institute', why: 'Walsh phenotypes — the biochemical engine Plan B for PANS owns.', pri: 3, status: '🔲 considering', href: 'https://www.walshinstitute.org/' },
      { name: 'Nutrigenomic / SNP-cycle protocols', provider: 'Yasko', why: 'Deep methylation-cycle interpretation for the sensitive kids.', pri: 2, status: '🔲 considering' },
    ],
  },
  {
    heading: 'PANS · PANDAS · neuro-immune',
    courses: [
      { name: 'Provider resources + CME', provider: 'PANDAS Physicians Network (PPN)', why: 'Consensus diagnosis + treatment guidelines.', pri: 3, status: '🔲 considering', href: 'https://www.pandasppn.org/' },
      { name: 'PANS / Immune Behavioral Health updates', provider: 'Stanford', why: 'Latest PANS research from the program that named it.', pri: 2, status: '🔲 considering' },
    ],
  },
  {
    heading: 'Herbal (Buhner lineage)',
    courses: [
      { name: 'Buhner protocol study (books + recommended courses)', provider: 'Buhner', why: 'The herbal kill menu Plan B for PANS leans on for Lyme/co-infections.', pri: 2, status: '🔲 considering' },
    ],
  },
]

export default function MintaClassesPage() {
  return (
    <main style={{ background: 'var(--cream, #F5F7F6)', minHeight: '100vh', padding: '48px 24px 96px' }}>
      <div className="pb-container" style={{ maxWidth: 880, margin: '0 auto' }}>
        <p className="eyebrow" style={{ marginBottom: 12, color: 'var(--teal)' }}>Private · Rachel only · 🔒</p>
        <h1 className="serif" style={{ fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 14px' }}>
          Classes Minta should take
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 680, margin: '0 0 10px' }}>
          The running list of trainings, conferences, and courses that keep Minta current and you credentialed.
          The daily research radar adds to this; the weekly reminder flags what&apos;s enrolling soon.
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 36px' }}>
          ⭐⭐⭐ core · ⭐⭐ strong · ⭐ nice-to-have &nbsp;·&nbsp; 🔲 considering · 📝 enrolling · ✅ enrolled · 🎓 done
        </p>

        {SECTIONS.map((sec) => (
          <section key={sec.heading} style={{ marginBottom: 36 }}>
            <h2 className="serif" style={{ fontSize: 22, fontWeight: 400, color: 'var(--ink)', margin: '0 0 14px', paddingBottom: 8, borderBottom: '1px solid var(--rule)' }}>
              {sec.heading}
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {sec.courses.map((c) => (
                <div key={c.name} style={{ background: 'var(--cream-light, #fff)', border: '1px solid var(--rule)', borderRadius: 10, padding: '16px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: 16.5, fontWeight: 600, color: 'var(--ink)' }}>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener" style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--teal)' }}>{c.name}</a>
                      ) : (
                        c.name
                      )}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>{PRI[c.pri]}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: '0 0 8px', lineHeight: 1.55 }}>{c.why}</p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12.5, color: 'var(--ink-soft)' }}>
                    <span><strong style={{ color: 'var(--ink)' }}>Provider:</strong> {c.provider}</span>
                    {c.cost && <span><strong style={{ color: 'var(--ink)' }}>Cost:</strong> {c.cost}</span>}
                    {c.next && <span><strong style={{ color: 'var(--ink)' }}>Next:</strong> {c.next}</span>}
                    <span><strong style={{ color: 'var(--ink)' }}>Status:</strong> {c.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 40, fontStyle: 'italic' }}>
          This page is private (password-gated) and is not linked or indexed anywhere public.
        </p>
      </div>
    </main>
  )
}
