import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Tests — Plan B for PANS',
  description:
    'Every test a child with PANS or PANDAS needs, explained in plain language. What each test finds, why it matters, what it costs, and how to order it yourself if your doctor won\'t.',
}

type TestRow = { label: string; value: React.ReactNode }
type TestCardProps = {
  num: string
  name: React.ReactNode
  subtitle: string
  rows: TestRow[]
  warn?: React.ReactNode
}

function TestCard({ num, name, subtitle, rows, warn }: TestCardProps) {
  return (
    <article
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--sand)',
        padding: '28px 30px',
        marginBottom: 18,
        position: 'relative',
      }}
    >
      <span
        className="serial"
        style={{
          position: 'absolute',
          top: 28,
          right: 30,
        }}
      >
        N°. {num}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 500,
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          lineHeight: 1.15,
          color: 'var(--ink)',
          marginBottom: 6,
          paddingRight: 90,
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 17,
          color: 'var(--sand-dark)',
          marginBottom: 18,
        }}
      >
        {subtitle}
      </p>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: 16,
            padding: '10px 0',
            borderTop: '1px solid var(--sand-light)',
            alignItems: 'baseline',
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--sand-dark)',
              fontWeight: 500,
            }}
          >
            {row.label}
          </span>
          <span style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink)' }}>{row.value}</span>
        </div>
      ))}
      {warn && (
        <div
          style={{
            background: 'rgba(31, 107, 107, 0.06)',
            borderLeft: '3px solid var(--teal)',
            padding: '12px 16px',
            marginTop: 14,
            fontSize: 14,
            color: 'var(--ink-soft)',
            fontStyle: 'italic',
          }}
        >
          {warn}
        </div>
      )}
    </article>
  )
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{
        color: 'var(--teal)',
        textDecoration: 'underline',
        textDecorationColor: 'var(--teal-deep)',
        textUnderlineOffset: 3,
        fontWeight: 500,
      }}
    >
      {children}
    </a>
  )
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <>
      <strong style={{ fontStyle: 'normal', fontWeight: 600 }}>Why doctors skip:</strong>{' '}
      {children}
    </>
  )
}

function CategoryHead({
  num,
  title,
  italic,
  intro,
  icon,
  id,
}: {
  num: string
  title: string
  italic: string
  intro: string
  icon: React.ReactNode
  id: string
}) {
  return (
    <div id={id} style={{ marginBottom: 36, paddingTop: 24 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          paddingBottom: 18,
          borderBottom: '2px solid var(--ink)',
          marginBottom: 28,
        }}
      >
        <div style={{ width: 60, height: 60, color: 'var(--teal)', flexShrink: 0 }}>{icon}</div>
        <div>
          <span
            className="serial"
            style={{ display: 'block', marginBottom: 4 }}
          >
            Category {num}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
            }}
          >
            {title}{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{italic}</em>
          </h2>
        </div>
      </div>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--ink-soft)',
          maxWidth: 680,
          marginBottom: 32,
        }}
      >
        {intro}
      </p>
    </div>
  )
}

function RouteCard({
  num, title, tag, body, links, footnote,
}: {
  num: string; title: string; tag: string; body: string
  links: [string, string][]; footnote?: string
}) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        border: '1px solid var(--sand)',
        borderRadius: 10,
        padding: 'clamp(22px, 3vw, 30px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
        <span
          style={{
            fontFamily: 'var(--font-cormorant)', fontSize: 30, fontWeight: 300,
            color: 'var(--teal)', lineHeight: 1,
          }}
        >
          {num}
        </span>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 24, lineHeight: 1.1, color: 'var(--ink)', margin: 0 }}>
          {title}
        </h3>
      </div>
      <p className="serial" style={{ color: 'var(--sand-dark)', marginBottom: 14, fontSize: 12 }}>{tag}</p>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 16px', flex: 1 }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
        {links.map(([label, href]) => (
          <ExtLink key={href} href={href}>{label}</ExtLink>
        ))}
      </div>
      {footnote && (
        <p style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--sand-dark)', margin: '16px 0 0', paddingTop: 12, borderTop: '1px solid var(--sand-light)' }}>
          {footnote}
        </p>
      )}
    </div>
  )
}

export default function TestsPage() {
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* HERO */}
      <section
        className="graph-paper"
        style={{
          padding: 'clamp(64px, 9vw, 112px) 24px clamp(48px, 7vw, 80px)',
          borderBottom: '1px solid var(--sand)',
        }}
      >
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 24 }}>
            For the parent of a child with PANS or PANDAS
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(42px, 7vw, 88px)',
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              marginBottom: 22,
              maxWidth: 920,
            }}
          >
            The tests your doctor probably{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>isn't running.</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              lineHeight: 1.4,
              color: 'var(--sand-dark)',
              maxWidth: 600,
              marginBottom: 36,
            }}
          >
            If your child was just diagnosed with PANS or PANDAS — or you suspect it — this is the
            complete list of tests they need. Every one explained in plain language. Every one you
            can order yourself if you have to.
          </p>
          <div style={{ maxWidth: 680, fontSize: 17, lineHeight: 1.7, color: 'var(--ink)' }}>
            <p style={{ marginBottom: 16 }}>
              We are not doctors. We are parents who have been where you are. We have watched our
              kids change overnight. We have sat across from pediatricians who told us to "wait and
              see." We have learned, slowly and at great cost, that{' '}
              <strong>most of the testing your child needs is testing your standard pediatrician
              has never heard of.</strong>
            </p>
            <p>
              This page is the workup we wish someone had handed us on day one. Print it. Take it to
              the doctor. Demand each test. If they won't run it, we'll show you how to get it
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO GET THEM — the route, no doctor required */}
      <section
        style={{
          padding: 'clamp(48px, 7vw, 80px) 24px',
          background: 'var(--cream-deep, #ece2cd)',
          borderBottom: '1px solid var(--sand)',
        }}
      >
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            How to actually get them
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.8vw, 52px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 18,
              maxWidth: 880,
            }}
          >
            Most parents don&apos;t have a doctor who&apos;ll order these.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>You don&apos;t need one.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680, marginBottom: 18 }}>
            Here&apos;s the secret: doctors respond differently when a parent shows up{' '}
            <strong style={{ color: 'var(--ink)' }}>informed, with specifics, and a clear plan.</strong>{' '}
            Name the tests, and most will order at least the standard, insurance-covered ones. The rest
            you order yourself — almost everything on this page can be ordered{' '}
            <strong>without your pediatrician</strong> — then bring the results back.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680, marginBottom: 36 }}>
            There are three routes, and most families use all three. Each test below lists exactly
            where to order it.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {/* Route 1 */}
            <RouteCard
              num="1"
              title="Self-order blood tests"
              tag="No doctor · ~most of this page"
              body="Order online, get a lab requisition signed by their physician network, walk into a LabCorp or Quest draw site, results come to you. This covers most of the bloodwork here — vitamin D, ferritin, CBC, immunoglobulins, ASO / anti-DNase B, thyroid, histamine + tryptase."
              links={[
                ['Ulta Lab Tests', 'https://www.ultalabtests.com'],
                ['Quest Direct', 'https://www.questhealth.com'],
                ['Labcorp OnDemand', 'https://www.ondemand.labcorp.com'],
                ['Request A Test', 'https://www.requestatest.com'],
                ['Walk-In Lab', 'https://www.walkinlab.com'],
              ]}
            />
            {/* Route 2 */}
            <RouteCard
              num="2"
              title="Mail-in kits, done at home"
              tag="No doctor · collected at home"
              body="A kit arrives, you collect at home (saliva, stool, urine, or a nasal swab), mail it back. This is the route for the tests a draw site can't do."
              links={[
                ['Genetic → StrateGene*', 'https://www.strategene.org'],
                ['Tiny Health (gut)', 'https://www.tinyhealth.com'],
                ['Mosaic GI360 (gut)', 'https://mosaicdx.com'],
                ['EverlyWell (strep)', 'https://www.everlywell.com'],
                ['RealTime Labs (mold)', 'https://www.realtimelab.com'],
                ['ZRT (neurotransmitters)', 'https://www.zrtlab.com'],
              ]}
              footnote="*Run an AncestryDNA or 23andMe raw-data file through StrateGene (free) for methylation SNPs. Note: 23andMe went through bankruptcy and its database was sold — AncestryDNA or Nebula Genomics are privacy-safer ways to get the same raw file."
            />
            {/* Route 3 */}
            <RouteCard
              num="3"
              title="A telehealth provider for the rest"
              tag="One visit · orders anything"
              body="A few specialty tests (full IGeneX tickborne panels, the immune workup that leads to IVIG) need a clinician's requisition. A PANS-literate telehealth provider can order all of them in a single visit — far easier than convincing a skeptical pediatrician. Many tickborne labs also allow direct ordering in most states."
              links={[
                ['IGeneX (direct in many states)', 'https://igenex.com'],
                ['Galaxy Diagnostics', 'https://galaxydx.com'],
              ]}
            />
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680, marginTop: 32 }}>
            Not sure which tests <em>your</em> kid needs, or the cheapest route for each?{' '}
            <Link href="/pricing" style={{ color: 'var(--teal)', fontWeight: 600 }}>
              A Plan B Synthesis
            </Link>{' '}
            builds the exact list, prioritized, with where to order every one.
          </p>
        </div>
      </section>

      {/* WHAT MINTA DOES WITH THE RESULTS */}
      <section style={{ padding: 'clamp(56px, 7vw, 88px) 24px', background: 'var(--cream-deep, #ece2cd)', borderTop: '1px solid var(--sand)', borderBottom: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            Then upload them
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(30px, 4.6vw, 50px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 18,
              maxWidth: 880,
            }}
          >
            A test result is only as good as <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>what you do with it.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 700, marginBottom: 14 }}>
            Upload your results and <strong style={{ color: 'var(--ink)' }}>Minta tells you what actually
            matters</strong> — which findings are significant, what they mean for your child, and{' '}
            <strong style={{ color: 'var(--ink)' }}>why.</strong> Then she brings{' '}
            <strong style={{ color: 'var(--ink)' }}>every result together under one umbrella</strong> —
            labs, symptoms, and history — and hands you a <strong style={{ color: 'var(--ink)' }}>clear
            direction with a why behind every step</strong>, not a pile of disconnected numbers no one
            connected.
          </p>
          <p className="serif" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 'clamp(19px, 2.3vw, 25px)', lineHeight: 1.45, color: 'var(--ink)', maxWidth: 640, margin: '8px 0 0', paddingLeft: 16, borderLeft: '2px solid var(--teal)' }}>
            You don&apos;t need all of these at once. Start with a few, upload them, and let Minta lead
            you out.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            Why this exists
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.8vw, 52px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 20,
              maxWidth: 880,
            }}
          >
            What's actually wrong with your child{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>can be measured.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680, marginBottom: 16 }}>
            PANS and PANDAS look like sudden-onset OCD, intrusive thoughts, rage, regression, food
            refusal, tics, sleep loss — out of nowhere, often after an infection. It's not a "phase."
            It's an inflammatory immune response in the brain, almost always triggered by something
            measurable: an infection, a toxin, a mold exposure, or an underlying biochemical
            vulnerability. Standard pediatric workups miss almost all of it because the tests aren't
            part of standard care.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680 }}>
            There are <strong>six categories</strong> of testing every PANS/PANDAS kid should have.
            Each tells a different part of the story.
          </p>
        </div>
      </section>

      {/* CATEGORY OVERVIEW GRID */}
      <section
        style={{
          background: 'var(--cream-soft)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
          padding: 'clamp(48px, 7vw, 72px) 24px',
        }}
      >
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            At a glance
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 36,
            }}
          >
            The <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>six</em> categories of
            testing.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 14,
            }}
          >
            {[
              { num: '01', title: 'Infectious triggers', count: '7 tests · the most common cause', href: '#triggers' },
              { num: '02', title: 'Immune function', count: '5 tests · how the immune system is responding', href: '#immune' },
              { num: '03', title: 'Biochemistry & nutrients', count: '7 tests · the Walsh-aligned methylation, mineral & nutrient workup', href: '#biochem' },
              { num: '04', title: 'Toxins & environment', count: '4 tests · mold, heavy metals, biofilm infections', href: '#toxins' },
              { num: '05', title: 'Gut & digestion', count: '4 tests · the second brain, often the root', href: '#gut' },
              { num: '06', title: 'Genetic blueprint', count: '1 test · once, forever, IntellxxDNA', href: '#dna' },
            ].map(c => (
              <a
                key={c.num}
                href={c.href}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--sand)',
                  padding: 22,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  transition: 'border-color 220ms, transform 220ms',
                }}
              >
                <span className="serial">N°. {c.num}</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--sand-dark)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-cormorant)',
                    lineHeight: 1.4,
                  }}
                >
                  {c.count}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 1 — TRIGGERS */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div className="pb-container">
          <CategoryHead
            id="triggers"
            num="01"
            title="Infectious"
            italic="triggers"
            intro="Almost every PANS/PANDAS case is triggered by an infection — usually one your child has already had, often months or years ago, that the body never fully cleared. Strep is the most common (the &ldquo;S&rdquo; in PANDAS), but it&rsquo;s far from the only one. These tests find what triggered your child&rsquo;s flare and what may still be active."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="6" />
                <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" />
              </svg>
            }
          />

          <TestCard
            num="01"
            name={<>Strep titers — <em style={{ color: 'var(--teal)' }}>ASO + anti-DNase B</em></>}
            subtitle="The two antibody tests for strep exposure. Run both."
            rows={[
              { label: 'What it finds', value: 'Past or ongoing exposure to strep bacteria. ASO peaks 3–6 weeks after infection. Anti-DNase B peaks 6–8 weeks after. Together they catch what one alone misses.' },
              { label: 'Why it matters', value: 'Strep is the original PANDAS trigger. Even a "silent" strep infection — one your child never had a fever or sore throat for — can drive an antibody attack on the brain.' },
              { label: 'Cost', value: <><strong>~$50–100</strong> · usually covered by insurance</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · <ExtLink href="https://www.requestatest.com">Request A Test</ExtLink> · <ExtLink href="https://www.walkinlab.com">Walk-In Lab</ExtLink></> },
            ]}
            warn={<Warn>Most pediatricians think strep is only an acute illness. They don&rsquo;t know that strep antibodies can drive PANDAS months after the infection is gone.</Warn>}
          />

          <TestCard
            num="02"
            name={<>Mycoplasma pneumoniae — <em style={{ color: 'var(--teal)' }}>IgG + IgM</em></>}
            subtitle="The second most common PANS trigger."
            rows={[
              { label: 'What it finds', value: 'Recent or past mycoplasma infection. Mycoplasma is the bug behind "walking pneumonia" — but it can also drive PANS without ever causing visible illness.' },
              { label: 'Why it matters', value: 'If positive, often responds beautifully to a long course of azithromycin. Many kids with "PANS that won\'t resolve" have undertreated mycoplasma underneath.' },
              { label: 'Cost', value: <><strong>~$50–80</strong> · often covered</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · <ExtLink href="https://www.questhealth.com">Quest Direct</ExtLink></> },
            ]}
            warn={<Warn>Most pediatricians associate mycoplasma only with pneumonia. They don&rsquo;t realize it&rsquo;s the second-leading PANS trigger.</Warn>}
          />

          <TestCard
            num="03"
            name={<>EBV panel — <em style={{ color: 'var(--teal)' }}>VCA IgG, VCA IgM, EBNA, Early Antigen</em></>}
            subtitle="Epstein-Barr Virus reactivation. The four-panel — not just one."
            rows={[
              { label: 'What it finds', value: 'Whether your child has had EBV (most have — it causes mono) and whether it\'s reactivated. Reactivation is what matters in chronic PANS.' },
              { label: 'Why it matters', value: 'EBV reactivation is a major driver of chronic PANS, especially in kids with fatigue, brain fog, swollen glands. Treatable with antivirals + immune support.' },
              { label: 'Cost', value: <><strong>~$150–250</strong> for the full four-panel</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · <ExtLink href="https://www.questhealth.com">Quest Direct</ExtLink></> },
            ]}
            warn={<Warn>Doctors think EBV is "just mono" and call the test "useless because everyone&rsquo;s positive." They run one antibody instead of four and miss reactivation.</Warn>}
          />

          <TestCard
            num="04"
            name="HHV-6, Parvovirus B19, CMV"
            subtitle="The other common viral PANS triggers."
            rows={[
              { label: 'What it finds', value: 'Three additional viruses that can trigger or maintain PANS: Human Herpes Virus 6 (roseola), Parvovirus B19 (slap-cheek), Cytomegalovirus.' },
              { label: 'Why it matters', value: 'If any are reactivated, they&rsquo;re treatable. HHV-6 in particular is often missed and is implicated in long-COVID and chronic neuroinflammation.' },
              { label: 'Cost', value: <><strong>~$150–300</strong> for the bundle</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · <ExtLink href="https://www.questhealth.com">Quest Direct</ExtLink></> },
            ]}
          />

          <TestCard
            num="05"
            name={<>Tick-borne panel — <em style={{ color: 'var(--teal)' }}>Lyme, Babesia, Bartonella</em></>}
            subtitle="Specialty labs only. Do not let your doctor talk you into a standard ELISA."
            rows={[
              { label: 'What it finds', value: 'Active or recent infection with Lyme and common co-infections. Specialty labs use Western blot, FISH, and PCR with much higher sensitivity than standard hospital tests.' },
              { label: 'Why it matters', value: 'Lyme and Bartonella mimic PANS exactly. Many kids labeled PANS have a missed tick-borne infection. Standard ELISA misses 50%+ of cases. Specialty labs catch what&rsquo;s actually there.' },
              { label: 'Cost', value: <><strong>~$400–800</strong> · rarely covered by insurance, worth it</> },
              { label: 'Order yourself', value: <><ExtLink href="https://igenex.com">IGeneX</ExtLink> · <ExtLink href="https://galaxydx.com">Galaxy Diagnostics</ExtLink> · <ExtLink href="https://www.t-lab.com">T-Lab</ExtLink> · most allow direct ordering in many states</> },
            ]}
            warn={<Warn>Most pediatricians are taught that Lyme is rare and only causes a bullseye rash. Both are false. The CDC ELISA is the wrong test for chronic Lyme.</Warn>}
          />

          <TestCard
            num="06"
            name={<>MRSA &amp; MARCoNS — <em style={{ color: 'var(--teal)' }}>deep nasal swab</em></>}
            subtitle="Drug-resistant staph in the nasal cavity. The hidden infection most pediatricians don't know to test for."
            rows={[
              { label: 'What it finds', value: <>Two related infections: <strong>MRSA</strong> (methicillin-resistant Staph aureus) and <strong>MARCoNS</strong> (multiple-antibiotic-resistant coagulase-negative staph). Both colonize deep in the nasal passages and hide behind a biofilm that ordinary antibiotics can&rsquo;t penetrate.</> },
              { label: 'Why it matters', value: 'These bugs pump inflammatory toxins into the bloodstream around the clock. They&rsquo;re a chronic driver of neuroinflammation — and a frequently-missed piece in PANS kids with any mold exposure history. Treatable with BEG nasal spray and/or targeted antibiotics, but only once identified.' },
              { label: 'Cost', value: <><strong>~$200</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.microbiologydx.com">Microbiology DX</ExtLink> ships a swab kit; you do the swab at home and return.</> },
            ]}
            warn={<Warn>99% of pediatricians have never heard of MARCoNS. Even when MRSA is found in a standard nasal swab, the implication for neuroinflammation is rarely connected to the PANS picture.</Warn>}
          />

          <TestCard
            num="07"
            name={<>Cunningham Panel — <em style={{ color: 'var(--teal)' }}>only if pursuing IVIG</em></>}
            subtitle="A diagnostic test we don't routinely recommend."
            rows={[
              { label: 'What it finds', value: 'Five antibodies (anti-D1, anti-D2L, anti-tubulin, anti-lysoganglioside, CaMKII) that some researchers associate with PANS autoimmunity.' },
              { label: 'Why we rarely run it', value: 'Misses 20–40% of clinically-confirmed PANS kids (high false-negative rate). A negative result doesn\'t rule out PANS. A positive result doesn\'t unlock a unique treatment. Costs ~$925.' },
              { label: 'When to do it', value: 'If you are pursuing IVIG and your insurance company requires Cunningham documentation for prior authorization. That is the only scenario where it\'s worth the cost.' },
              { label: 'Cost', value: <><strong>~$925</strong> · rarely covered</> },
              { label: 'Lab', value: <><ExtLink href="https://www.moleculera.com">Moleculera Labs</ExtLink> · requires a doctor&rsquo;s order</> },
            ]}
          />
        </div>
      </section>

      {/* CATEGORY 2 — IMMUNE */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderTop: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <CategoryHead
            id="immune"
            num="02"
            title="Immune"
            italic="function"
            intro="PANS is fundamentally an immune disorder — the immune system has gone after the brain. These tests tell you how your child's immune system is functioning, whether it's deficient, whether it's autoimmune, and whether IVIG might help."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4l16 6v12c0 11-7 18-16 22-9-4-16-11-16-22V10l16-6z" />
                <path d="M18 24l4 4 8-8" />
              </svg>
            }
          />

          <TestCard
            num="08"
            name={<>IgG subclasses — <em style={{ color: 'var(--teal)' }}>1, 2, 3, 4</em></>}
            subtitle="The most important immune test most pediatricians never run."
            rows={[
              { label: 'What it finds', value: 'Deficiency in one of the four IgG subclasses. Kids can have a "normal" total IgG but a critical subclass deficiency that explains recurrent infections.' },
              { label: 'Why it matters', value: 'Subclass deficiency is the single biggest predictor of IVIG response. If positive, IVIG is a high-leverage treatment and insurance will often cover it.' },
              { label: 'Cost', value: <><strong>~$150</strong> · usually covered</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · <ExtLink href="https://www.questhealth.com">Quest Direct</ExtLink></> },
            ]}
            warn={<Warn>Only immunologists order this routinely. Your pediatrician may not know it exists.</Warn>}
          />

          <TestCard
            num="09"
            name="Total IgA, IgM, IgE"
            subtitle="The other immunoglobulins — round out the immune picture."
            rows={[
              { label: 'What it finds', value: 'IgA deficiency (very common, often missed); high IgE (allergy/mast cell); low IgM (acute infection response problem).' },
              { label: 'Why it matters', value: 'IgA deficiency makes mucosal infections worse and is found in ~1 in 600 people. If you\'re treating PANS triggers but the kid keeps getting reinfected, this often explains why.' },
              { label: 'Cost', value: <><strong>~$80</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink></> },
            ]}
          />

          <TestCard
            num="10"
            name={<>Inflammation panel — <em style={{ color: 'var(--teal)' }}>hs-CRP, ANA, C3, C4</em></>}
            subtitle="High-sensitivity inflammation markers + autoimmune screen."
            rows={[
              { label: 'What it finds', value: 'hs-CRP catches low-level inflammation that regular CRP misses. ANA screens for autoimmunity. Complement levels (C3, C4) show whether the immune system is being consumed by inflammation.' },
              { label: 'Why it matters', value: 'These give a baseline you can track. Drops in C3/C4 with rising hs-CRP often predict flares before they happen.' },
              { label: 'Cost', value: <><strong>~$100</strong> · usually covered</> },
              { label: 'Order yourself', value: <ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> },
            ]}
          />

          <TestCard
            num="11"
            name="CBC with differential"
            subtitle="Basic blood count — but read the differential carefully."
            rows={[
              { label: 'What it finds', value: 'Red/white cells, platelets, plus the breakdown of white-cell types. Low absolute neutrophils, high eosinophils, or elevated basophils each tell a different story.' },
              { label: 'Why it matters', value: <>Elevated <strong>absolute basophils</strong> is a Walsh-framework marker for undermethylation. Most doctors ignore basophils entirely.</> },
              { label: 'Cost', value: <><strong>~$30</strong></> },
              { label: 'Order yourself', value: 'Available at any DTC lab' },
            ]}
          />

          <TestCard
            num="12"
            name={<>CIRS panel — <em style={{ color: 'var(--teal)' }}>TGF-β1, C4a, MMP-9, MSH, VEGF</em></>}
            subtitle="The Shoemaker biotoxin illness panel. Run if any mold or water-damaged building exposure."
            rows={[
              { label: 'What it finds', value: 'Chronic Inflammatory Response Syndrome — the specific inflammatory pattern of mold/biotoxin illness. Elevated TGF-β1 and MMP-9 are hallmarks.' },
              { label: 'Why it matters', value: 'If positive, your child has biotoxin illness on top of (or instead of) PANS. Different treatment protocol. Often what\'s actually driving "PANS that won&rsquo;t get better."' },
              { label: 'Cost', value: <><strong>~$300–500</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.labcorp.com">LabCorp</ExtLink> via a Shoemaker-certified practitioner — see <ExtLink href="https://www.survivingmold.com">survivingmold.com</ExtLink> for a directory</> },
            ]}
          />
        </div>
      </section>

      {/* CATEGORY 3 — BIOCHEM */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderTop: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <CategoryHead
            id="biochem"
            num="03"
            title="Biochemistry &"
            italic="nutrients"
            intro="This is the Walsh Research Institute workup — biochemical individuality. Every PANS kid has nutrient imbalances driving their symptoms. Copper toxicity drives intrusive thoughts. Pyrrole disorder drives stress intolerance. Undermethylation drives OCD. These tests find which biochemical pattern your child fits, and what to do about it."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h16M18 4v12l-8 24c-2 4 1 8 5 8h26c4 0 7-4 5-8l-8-24V4" />
                <path d="M12 28h24" />
              </svg>
            }
          />

          <TestCard
            num="13"
            name="Whole-blood histamine"
            subtitle="The master methylation marker. Must be whole blood, not serum."
            rows={[
              { label: 'What it finds', value: 'Histamine stored in white blood cells. High = undermethylator. Low = overmethylator. Both have different symptoms and need different treatments.' },
              { label: 'Why it matters', value: 'Undermethylators with OCD/intrusive thoughts often get worse on methylfolate. Overmethylators with anxiety often get worse on niacin. Without histamine, you\'re guessing.' },
              { label: 'Cost', value: <><strong>~$80</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> · search "histamine, whole blood"</> },
            ]}
            warn={<Warn>Comes from the Walsh / Pfeiffer Treatment Center world. Standard psychiatry doesn&rsquo;t teach it.</Warn>}
          />

          <TestCard
            num="14"
            name={<>Urinary kryptopyrroles — <em style={{ color: 'var(--teal)' }}>HPL test</em></>}
            subtitle="The pyrrole disorder test. Walsh's discovery."
            rows={[
              { label: 'What it finds', value: 'Elevated kryptopyrroles in urine. When elevated, they bind and remove zinc + B6 from the body, leaving the child chronically depleted in both.' },
              { label: 'Why it matters', value: 'Pyrrole disorder shows up as: stress intolerance, irritability, poor short-term memory, sound/light sensitivity, no dream recall, frequent infections. Treatable with zinc + P-5-P + GLA. If your kid has this, missing it is the single biggest blind spot you can have.' },
              { label: 'Cost', value: <><strong>~$95</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.dhalab.com">DHA Laboratory</ExtLink> · <ExtLink href="https://directhealthcareaccess.com">Direct Healthcare Access</ExtLink> — both allow direct ordering</> },
            ]}
            warn={<><strong style={{ fontStyle: 'normal', fontWeight: 600 }}>Important:</strong> Sample is light- and air-sensitive. Must be frozen immediately and shipped overnight on dry ice.</>}
          />

          <TestCard
            num="15"
            name="Zinc + Copper + Ceruloplasmin"
            subtitle="The copper overload workup. Critical for OCD-presenting PANS."
            rows={[
              { label: 'What it finds', value: 'Whether your child has copper overload — a Walsh biotype that drives intrusive thoughts, anxiety, racing thoughts, hyperactivity. Ceruloplasmin lets you calculate "free copper" — the neurotoxic fraction.' },
              { label: 'Why it matters', value: 'Copper/zinc ratio above 1.2 is concerning. Above 1.4 is significant. Treated with zinc, molybdenum, manganese, B6, vitamin C — gentle, well-tolerated, often life-changing for OCD kids.' },
              { label: 'Cost', value: <><strong>~$120</strong> for the trio</> },
              { label: 'Order yourself', value: <ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> },
            ]}
          />

          <TestCard
            num="16"
            name="Homocysteine + MMA + RBC folate"
            subtitle="The methylation cycle workup — three together tells the story."
            rows={[
              { label: 'What it finds', value: 'Homocysteine = how well methylation is working overall. MMA = whether B12 is reaching cells. RBC folate = folate stored in cells (not just serum).' },
              { label: 'Why it matters', value: 'Optimal homocysteine in kids is 5–7. Above 9 is functionally elevated even though "lab normal" goes to 10+. High homocysteine + normal B12 + normal folate = MTHFR/methylation problem.' },
              { label: 'Cost', value: <><strong>~$100</strong></> },
              { label: 'Order yourself', value: <ExtLink href="https://www.ultalabtests.com">Ulta Lab Tests</ExtLink> },
            ]}
          />

          <TestCard
            num="17"
            name="Vitamin D 25-OH"
            subtitle="The most undertreated deficiency in PANS."
            rows={[
              { label: 'What it finds', value: 'Stored vitamin D. Optimal for PANS kids is 60–80 ng/mL — much higher than the "normal" range of 30+.' },
              { label: 'Why it matters', value: 'Vitamin D is one of the most powerful immune modulators. Low D is correlated with autoimmune disease, increased infection, and worse PANS outcomes.' },
              { label: 'Cost', value: <><strong>~$40</strong></> },
              { label: 'Order yourself', value: 'Any DTC lab' },
            ]}
          />

          <TestCard
            num="18"
            name="Ferritin + full iron panel"
            subtitle="Not just hemoglobin. Ferritin is the storage form."
            rows={[
              { label: 'What it finds', value: 'How much iron your child has stored. Optimal ferritin in kids is 50+; many PANS kids are at 15–30. Ferritin can be low even when hemoglobin is normal.' },
              { label: 'Why it matters', value: 'Low ferritin impairs sleep, mood, focus, dopamine production, and immune function. Often the silent driver of "PANS won&rsquo;t get better."' },
              { label: 'Cost', value: <><strong>~$50</strong></> },
              { label: 'Order yourself', value: 'Any DTC lab' },
            ]}
          />

          <TestCard
            num="19"
            name={<>Full thyroid — <em style={{ color: 'var(--teal)' }}>TSH, free T3, free T4, TPO antibodies</em></>}
            subtitle="Not just TSH. Most pediatricians stop at TSH and miss the picture."
            rows={[
              { label: 'What it finds', value: 'Whether the thyroid is producing hormone (free T3, T4) and whether the immune system is attacking it (TPO antibodies — Hashimoto&rsquo;s screen).' },
              { label: 'Why it matters', value: 'Autoimmune thyroid disease is common in PANS families. Even subclinical hypothyroidism crushes a kid&rsquo;s mood, energy, and immune function.' },
              { label: 'Cost', value: <><strong>~$120</strong></> },
              { label: 'Order yourself', value: 'Any DTC lab' },
            ]}
          />
        </div>
      </section>

      {/* CATEGORY 4 — TOXINS */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderTop: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <CategoryHead
            id="toxins"
            num="04"
            title="Toxins &"
            italic="environment"
            intro="Mold, heavy metals, and environmental toxins are massively underdiagnosed in PANS. A kid living in a water-damaged building, or with heavy-metal exposure, will not get better until the exposure is identified and addressed."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4l-6 12h-8c-4 0-6 4-4 7l8 12v8a3 3 0 003 3h14a3 3 0 003-3v-8l8-12c2-3 0-7-4-7h-8L24 4z" />
                <path d="M20 30h8" />
              </svg>
            }
          />

          <TestCard
            num="20"
            name="Mycotoxin urine panel"
            subtitle="Mold toxin testing. The single most important environmental test for any kid with a mold-exposure history."
            rows={[
              { label: 'What it finds', value: 'Mycotoxins (ochratoxin, gliotoxin, aflatoxin, trichothecenes, etc.) being excreted in urine. Active exposure produces measurable levels.' },
              { label: 'Why it matters', value: 'Mycotoxin illness causes brain inflammation that looks exactly like PANS. Treatable — but only once identified. Remediation + binders + glutathione support.' },
              { label: 'Cost', value: <><strong>~$300–400</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.realtimelab.com">RealTime Labs</ExtLink> · <ExtLink href="https://mosaicdx.com">Mosaic Diagnostics</ExtLink> — both require a practitioner signature; most functional-medicine telehealth services will order</> },
            ]}
          />

          <TestCard
            num="21"
            name="HTMA — Hair Tissue Mineral Analysis"
            subtitle="A long-term mineral pattern plus toxic-metal screen."
            rows={[
              { label: 'What it finds', value: 'Average mineral and toxic-metal levels over the past 3–4 months. Shows patterns that blood tests miss: copper hiding in tissue, aluminum displacing magnesium, cadmium displacing zinc.' },
              { label: 'Why it matters', value: 'Gives you the metabolic-type picture (fast vs slow metabolizer) and a baseline you can re-test 6–9 months later to see if minerals are rebalancing.' },
              { label: 'Cost', value: <><strong>~$100–150</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.traceelements.com">Trace Elements</ExtLink> · <ExtLink href="https://www.arltma.com">ARL</ExtLink> — many HTMA practitioners take direct clients</> },
            ]}
          />

          <TestCard
            num="22"
            name="Provoked urine toxic metals"
            subtitle="DMSA or DMPS challenge — pulls metals out so you can measure them."
            rows={[
              { label: 'What it finds', value: 'Heavy metals stored in tissue — lead, mercury, arsenic, cadmium, aluminum — that don&rsquo;t show up in casual blood or urine testing.' },
              { label: 'Why it matters', value: 'A high-positive HTMA finding for a metal should be confirmed with provoked urine before chelation. Confirms what&rsquo;s actually mobile in the body.' },
              { label: 'Cost', value: <><strong>~$200–300</strong></> },
              { label: 'Order yourself', value: 'Doctor required (DMSA is prescription). Functional-medicine telehealth practitioners will order.' },
            ]}
          />

          <TestCard
            num="23"
            name={<>Home mold testing — <em style={{ color: 'var(--teal)' }}>ERMI or HERTSMI-2</em></>}
            subtitle="Don't forget to test the house. Test the kid AND the building."
            rows={[
              { label: 'What it finds', value: 'Mold species and quantities in your home&rsquo;s dust. ERMI gives a comprehensive species panel; HERTSMI-2 is a focused 5-species version specifically for CIRS-relevant molds.' },
              { label: 'Why it matters', value: 'Treating mycotoxin illness without removing the exposure is impossible. If a HERTSMI-2 scores above 11, the building is unsafe to occupy.' },
              { label: 'Cost', value: <><strong>~$150–300</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.envirobiomicslab.com">EnviroBiomics</ExtLink> · <ExtLink href="https://www.mycometrics.com">Mycometrics</ExtLink> — both ship a dust-collection cloth, no doctor needed</> },
            ]}
          />
        </div>
      </section>

      {/* CATEGORY 5 — GUT */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderTop: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <CategoryHead
            id="gut"
            num="05"
            title="Gut &"
            italic="digestion"
            intro="The gut and the brain are connected. Most PANS kids have measurable gut dysbiosis, leaky gut, candida, or stealth pathogens that drive inflammation and feed the brain symptoms."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4c-4 0-8 4-8 8 0 6 4 8 4 14s-4 6-4 12c0 4 4 6 8 6s8-2 8-6c0-6-4-6-4-12s4-8 4-14c0-4-4-8-8-8z" />
              </svg>
            }
          />

          <TestCard
            num="24"
            name="GI-MAP stool test"
            subtitle="The most comprehensive functional stool test."
            rows={[
              { label: 'What it finds', value: 'Bacterial pathogens, opportunists, parasites, fungal overgrowth, beneficial flora, digestive markers, inflammation markers (calprotectin, zonulin = leaky gut), pancreatic function.' },
              { label: 'Why it matters', value: 'Finds the hidden gut infections (Klebsiella, Pseudomonas, H. pylori, gut Strep, Blastocystis) that drive systemic inflammation and brain symptoms.' },
              { label: 'Cost', value: <><strong>~$370</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.diagnosticsolutionslab.com">Diagnostic Solutions Lab</ExtLink> — practitioner required; functional-medicine telehealth services order it</> },
            ]}
          />

          <TestCard
            num="25"
            name={<>Organic Acids Test — <em style={{ color: 'var(--teal)' }}>OAT</em></>}
            subtitle="A urine test that maps metabolism. Surprisingly powerful."
            rows={[
              { label: 'What it finds', value: 'Candida and yeast markers (arabinose), Clostridia markers (HPHPA — drives dopamine excess), oxalate (a hidden driver of brain inflammation), neurotransmitter precursors, B-vitamin status, mitochondrial function.' },
              { label: 'Why it matters', value: 'Single most-information-dense test we run. Catches Clostridia-driven dopamine excess (a common cause of OCD/intrusive thoughts in PANS) that nothing else finds.' },
              { label: 'Cost', value: <><strong>~$300</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://mosaicdx.com">Mosaic Diagnostics</ExtLink> — practitioner required</> },
            ]}
          />

          <TestCard
            num="26"
            name={<>Celiac panel — <em style={{ color: 'var(--teal)' }}>tTG IgA, total IgA, EMA</em></>}
            subtitle="Rule out celiac BEFORE going gluten-free."
            rows={[
              { label: 'What it finds', value: 'Autoimmune celiac disease. Total IgA matters — IgA-deficient kids can have false-negative tTG.' },
              { label: 'Why it matters', value: 'Celiac and PANS coexist often. If you go gluten-free first, you can&rsquo;t test celiac for months because the antibodies disappear. Test first, then go GF.' },
              { label: 'Cost', value: <><strong>~$80</strong></> },
              { label: 'Order yourself', value: 'Any DTC lab' },
            ]}
          />

          <TestCard
            num="27"
            name={<>Food sensitivities — <em style={{ color: 'var(--teal)' }}>IgG + IgE panels</em></>}
            subtitle="Two different tests for two different things."
            rows={[
              { label: 'What it finds', value: 'IgE: true allergy (immediate, anaphylaxis-style). IgG: delayed sensitivity (inflammation, gut symptoms, mood). Both matter in PANS.' },
              { label: 'Why it matters', value: 'Many PANS kids have multiple food triggers driving inflammation. Identifying and removing the worst offenders calms the immune system.' },
              { label: 'Cost', value: <><strong>~$300–600</strong></> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.vibrant-wellness.com">Vibrant Wellness</ExtLink> · <ExtLink href="https://www.cyrexlabs.com">Cyrex</ExtLink> — practitioner required</> },
            ]}
          />
        </div>
      </section>

      {/* CATEGORY 6 — DNA */}
      <section style={{ padding: 'clamp(48px, 7vw, 80px) 24px', borderTop: '1px solid var(--sand)' }}>
        <div className="pb-container">
          <CategoryHead
            id="dna"
            num="06"
            title="The genetic"
            italic="blueprint"
            intro="Run once. Use for life. A DNA panel tells you which biochemical pathways are predisposed to weakness — methylation, detox, neurotransmitter, inflammation — so every supplement and treatment decision can be tailored."
            icon={
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4c0 8 20 12 20 20s-20 12-20 20" />
                <path d="M34 4c0 8-20 12-20 20s20 12 20 20" />
                <path d="M16 14h16M16 24h16M16 34h16" />
              </svg>
            }
          />

          <TestCard
            num="28"
            name={<>23andMe / AncestryDNA — <em style={{ color: 'var(--teal)' }}>the DIY entry point</em></>}
            subtitle="The cheapest way to read your child's methylation SNPs. Almost everyone should start here."
            rows={[
              { label: 'What it finds', value: <>A consumer kit gives you a <strong>raw genotype file</strong>. Run that file (free) through <ExtLink href="https://www.strategene.org">StrateGene</ExtLink> (Dr. Ben Lynch) or <ExtLink href="https://geneticgenie.org">Genetic Genie</ExtLink> and you get a methylation report — MTHFR, COMT, MAO-A, CBS, MTRR, VDR and the rest of the SNPs that drive PANS biochemistry.</> },
              { label: 'Why it matters', value: 'For about $100 you get ~90% of the actionable methylation picture — which B-vitamin forms your child can actually use, how fast they clear dopamine and histamine, where detox is throttled. Run once, use for life.' },
              { label: 'Order yourself', value: <><ExtLink href="https://www.ancestry.com/dna">AncestryDNA</ExtLink> or <ExtLink href="https://www.23andme.com">23andMe</ExtLink> → download raw data → upload to StrateGene / Genetic Genie. No doctor needed.</> },
              { label: 'Cost', value: <><strong>~$99–129</strong> for the kit · interpretation is free</> },
            ]}
            warn={<Warn>23andMe went through bankruptcy and its database was sold. If privacy concerns you, <strong>AncestryDNA</strong> or <ExtLink href="https://nebula.org">Nebula Genomics</ExtLink> give the same raw file. The value is the raw data + StrateGene, not the brand.</Warn>}
          />

          <TestCard
            num="29"
            name={<>Amy Yasko Nutrigenomic Panel — <em style={{ color: 'var(--teal)' }}>the curated protocol</em></>}
            subtitle="A purpose-built methylation/detox panel that comes with a ready-made protocol."
            rows={[
              { label: 'What it finds', value: '~30 SNPs hand-picked by Dr. Amy Yasko specifically for the methylation + detox + gut-brain pathway her whole protocol is built around — CBS, MTHFR, MTRR, MTR, BHMT, COMT, MAO-A, SUOX, NOS and more.' },
              { label: 'Why it matters', value: 'Unlike a raw 23andMe file, it comes with Yasko&rsquo;s interpretation framework and a step-by-step supplement protocol. Good for complex methylation/detox kids where you want a done-for-you roadmap, not just data.' },
              { label: 'Why it might NOT be for you', value: 'Pricier, narrower than a full panel, and built around Yasko&rsquo;s own supplement line (a conflict of interest to keep in mind). If you only want the SNP data, 23andMe → StrateGene is far cheaper and covers the same core genes.' },
              { label: 'Cost', value: <><strong>~$495</strong> · includes interpretation</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.holisticheal.com">Holistic Health (Yasko)</ExtLink> — direct, no practitioner needed.</> },
            ]}
          />

          <TestCard
            num="30"
            name={<>IntellxxDNA — <em style={{ color: 'var(--teal)' }}>the clinical-grade panel</em></>}
            subtitle="The most comprehensive option — when a practitioner is guiding treatment."
            rows={[
              { label: 'What it finds', value: '~700 clinically annotated SNPs across methylation, detox, neurotransmitter, inflammation, mitochondrial, histamine handling, and toxin processing.' },
              { label: 'Why it matters', value: 'Tells you which methylation form your child can use, how fast their COMT clears dopamine (impacts OCD treatment), how well detox handles metals and mold — annotated by functional-medicine physicians with clinical decision support.' },
              { label: 'Why upgrade from 23andMe', value: '23andMe → StrateGene gives you the major SNPs cheaply and DIY. IntellxxDNA goes further — more genes, clinically curated, with decision support — worth it when a practitioner is actually steering treatment off the results. (GX Sciences is a similar practitioner-ordered panel.)' },
              { label: 'Cost', value: <><strong>~$500–700</strong> · one-time, for life</> },
              { label: 'Order yourself', value: <><ExtLink href="https://www.intellxxdna.com">IntellxxDNA</ExtLink> — practitioner required; many functional-medicine telehealth services will order it</> },
            ]}
          />

          {/* Which one, and why */}
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--teal)',
              borderLeftWidth: 5,
              borderRadius: 4,
              padding: 'clamp(24px, 4vw, 34px)',
              maxWidth: 760,
              marginTop: 28,
            }}
          >
            <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
              Which one — and why
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--ink)', marginBottom: 14 }}>
              All three read the same DNA. The difference is <strong>curation, cost, and who orders it</strong> — not the underlying genes.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              <li style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>›</span>
                <strong style={{ color: 'var(--ink)' }}>Start: 23andMe / AncestryDNA → StrateGene (~$100, DIY).</strong> Covers the major methylation SNPs. Right for almost everyone, first. You rarely need more.
              </li>
              <li style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>›</span>
                <strong style={{ color: 'var(--ink)' }}>Step up: Yasko panel (~$495).</strong> When you want a curated interpretation <em>and</em> a ready protocol, and you&rsquo;re working the methylation/detox angle. Just know it&rsquo;s tied to her supplements.
              </li>
              <li style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', paddingLeft: 18, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>›</span>
                <strong style={{ color: 'var(--ink)' }}>Clinical: IntellxxDNA / GX Sciences (~$500–700, practitioner).</strong> When a practitioner is steering treatment off the results and wants clinical-grade annotation.
              </li>
            </ul>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink)', marginTop: 16, fontStyle: 'italic' }}>
              Bottom line: you almost never need more than one. Start with 23andMe → StrateGene; upgrade only if a practitioner is guiding you or you want a done-for-you protocol.
            </p>
          </div>
        </div>
      </section>

      {/* DEMAND SCRIPT */}
      <section
        id="demand"
        style={{
          background: 'var(--cream-soft)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
          padding: 'clamp(48px, 7vw, 80px) 24px',
        }}
      >
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            When your doctor pushes back
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.8vw, 52px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: 20,
            }}
          >
            How to <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>demand</em> these tests.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 680, marginBottom: 30 }}>
            Most pediatricians have never heard of half this list. They will tell you it&rsquo;s
            unnecessary. They will tell you to wait and see. They are wrong, and you are not.
          </p>

          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--teal)',
              borderLeftWidth: 5,
              padding: '28px 30px',
              maxWidth: 760,
              margin: '24px 0',
            }}
          >
            <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
              Use this script — or print this page
            </p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(18px, 2vw, 22px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                paddingLeft: 16,
                borderLeft: '2px solid var(--teal-light)',
                marginBottom: 16,
              }}
            >
              "My child has been diagnosed with PANS / PANDAS. I&rsquo;d like to order a comprehensive
              workup that includes infection triggers, immune function, biochemistry, environmental
              toxins, gut function, and a one-time genetic panel. I have a list of every test and
              the reasoning for each one. I&rsquo;d like you to order what you&rsquo;re comfortable
              ordering. Anything you won&rsquo;t order, I&rsquo;ll order through a direct-to-consumer
              lab — but I&rsquo;d like the results to come back to your office so we can review them
              together."
            </blockquote>
            <p style={{ fontSize: 14, color: 'var(--sand-dark)', fontStyle: 'italic' }}>
              Doctors respond differently when a parent shows up informed, with specifics, and with
              a clear plan. Most will order at least the standard insurance-covered tests if you can
              name them. The rest you order yourself, then bring back the results.
            </p>
          </div>
        </div>
      </section>

      {/* DTC LABS */}
      <section
        id="dtc"
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          padding: 'clamp(48px, 7vw, 80px) 24px',
        }}
      >
        <div className="pb-container">
          <p
            className="serial"
            style={{ color: 'var(--teal-light)', marginBottom: 14 }}
          >
            If your doctor won&rsquo;t order them
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.8vw, 52px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
              marginBottom: 20,
            }}
          >
            Get them <em style={{ fontStyle: 'italic', color: 'var(--teal-light)' }}>yourself.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(246, 241, 231, 0.78)',
              maxWidth: 700,
              marginBottom: 36,
            }}
          >
            Most of the tests on this page can be ordered without a doctor&rsquo;s prescription. The
            standard chemistry, serology, and antibody tests (everything Quest and LabCorp run) are
            available direct-to-consumer in most states. Functional-medicine tests (Mosaic,
            Diagnostic Solutions, etc.) require a practitioner signature — but functional-medicine
            telehealth services like Rupa Health make this fast and cheap.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: 16,
            }}
          >
            {[
              { title: 'Ulta Lab Tests', url: 'ultalabtests.com', href: 'https://www.ultalabtests.com', desc: 'Quest panel ordering, no doctor needed, deeply discounted prices. The best general-purpose DTC lab for the standard tests on this page.', tests: 'Strep titers · Mycoplasma · EBV · Vit D · Ferritin · Histamine · CBC · CMP · Thyroid' },
              { title: 'Quest Direct', url: 'questhealth.com', href: 'https://www.questhealth.com', desc: "Quest's own direct-to-consumer portal. Slightly more expensive than Ulta but goes through Quest's site.", tests: 'Same menu as Ulta · Easier insurance reimbursement' },
              { title: 'Walk-In Lab', url: 'walkinlab.com', href: 'https://www.walkinlab.com', desc: 'LabCorp partner. Good for LabCorp-specific draws when your local hospital uses LabCorp instead of Quest.', tests: 'Most standard panels · IgG subclasses · CIRS markers' },
              { title: 'IGeneX', url: 'igenex.com', href: 'https://igenex.com', desc: 'The gold-standard tick-borne disease lab. Direct consumer ordering allowed in many states.', tests: 'Lyme · Babesia · Bartonella · Anaplasma · Ehrlichia · Rickettsia' },
              { title: 'DHA Laboratory', url: 'dhalab.com', href: 'https://www.dhalab.com', desc: 'Pyrrole disorder testing (the HPL test). Walsh-recommended lab. Direct order, ships kit to you.', tests: 'Kryptopyrroles (HPL) · Histamine' },
              { title: 'Microbiology DX', url: 'microbiologydx.com', href: 'https://www.microbiologydx.com', desc: 'MARCoNS / MRSA deep nasal swab. Ships a swab kit; you do the swab at home and return it.', tests: 'MARCoNS culture · MRSA · Antibiotic sensitivities' },
              { title: 'EnviroBiomics', url: 'envirobiomicslab.com', href: 'https://www.envirobiomicslab.com', desc: 'Home mold testing — ERMI and HERTSMI-2. You collect dust with a Swiffer-like cloth and mail it in.', tests: 'ERMI · HERTSMI-2 · Mold species DNA' },
              { title: 'Rupa Health', url: 'rupahealth.com', href: 'https://www.rupahealth.com', desc: 'A clearinghouse for ALL the functional-medicine tests (Mosaic, Diagnostic Solutions, Vibrant, Cyrex, RealTime, etc.). A practitioner from their network can order anything for a flat fee.', tests: 'GI-MAP · OAT · Mycotoxin · IgG foods · Cyrex · ANY functional test' },
              { title: 'Function Health', url: 'functionhealth.com', href: 'https://www.functionhealth.com', desc: 'Membership-based functional-medicine telehealth. Monthly fee includes a comprehensive panel and a practitioner to interpret.', tests: 'Membership model · Practitioner included · Good if you want guidance' },
            ].map(c => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 20,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  transition: 'background 220ms, border-color 220ms',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 500,
                    fontSize: 19,
                    color: 'var(--cream)',
                  }}
                >
                  {c.title}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--teal-light)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.url}
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(246, 241, 231, 0.78)' }}>{c.desc}</p>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: 'rgba(246, 241, 231, 0.55)',
                    letterSpacing: '0.05em',
                    lineHeight: 1.55,
                    paddingTop: 10,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {c.tests}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / DISCLAIMER */}
      <section style={{ padding: 'clamp(48px, 7vw, 64px) 24px', textAlign: 'center' }}>
        <div className="pb-container">
          <p className="serial" style={{ color: 'var(--teal)', marginBottom: 14 }}>
            Print · Share · Use it
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(26px, 3.6vw, 38px)',
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: 24,
              maxWidth: 760,
              marginInline: 'auto',
            }}
          >
            You don&rsquo;t have to learn this alone.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--sand-dark)',
              maxWidth: 540,
              margin: '0 auto 24px',
              lineHeight: 1.6,
            }}
          >
            Plan B is a parent-driven knowledge base. We are not doctors. None of this is medical
            advice. Always work with a practitioner. But you deserve to know what tests exist.
          </p>
          <Link
            href="/practitioners"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-inter)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--teal)',
              padding: '14px 24px',
              fontWeight: 600,
              borderRadius: 4,
              textDecoration: 'none',
            }}
          >
            Find a practitioner →
          </Link>
        </div>
      </section>
    </main>
  )
}
