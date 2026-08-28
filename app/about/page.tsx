'use client'

import { useReveal } from '../_components/hooks'

export default function AboutPage() {
  const head = useReveal()
  const body = useReveal()

  const p: React.CSSProperties = {
    fontSize: 17,
    lineHeight: 1.85,
    color: 'var(--ink-soft)',
    fontWeight: 300,
    marginBottom: 22,
  }
  const pull: React.CSSProperties = {
    fontSize: 'clamp(21px, 2.7vw, 27px)',
    fontStyle: 'italic',
    color: 'var(--ink)',
    lineHeight: 1.4,
    fontWeight: 400,
    margin: '36px 0',
    borderLeft: '3px solid var(--teal)',
    paddingLeft: 22,
  }

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 60px',
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
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div ref={head} className="pb-container reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            About · Why I built this
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(40px, 6.4vw, 76px)',
              fontWeight: 300,
              letterSpacing: '-0.024em',
              lineHeight: 1.02,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 900,
            }}
          >
            I was the parent looking for Plan B.{' '}
            <em style={{ color: 'var(--teal)' }}>Then I built it.</em>
          </h1>
        </div>
      </section>

      {/* The story */}
      <section style={{ padding: '72px 24px', background: 'var(--cream)' }}>
        <div ref={body} className="pb-container reveal" style={{ maxWidth: 680 }}>
          <p style={p}>It started on a Tuesday night.</p>

          <p style={p}>
            My kids were playing in the laundry room while my husband and I cleaned up. I kept hearing
            my daughter&apos;s voice through the wall — <em>sorry, sorry, sorry</em> — to her brother,
            to her sister, to no one. I went in.
          </p>

          <p style={{ ...p, fontStyle: 'italic', color: 'var(--ink)' }}>
            &ldquo;Sweetheart. What are you sorry for?&rdquo;
          </p>

          <p style={p}>
            Her siblings said she&apos;d been doing it all day. I knelt down in front of her.{' '}
            <em>&ldquo;Why do you keep saying it?&rdquo;</em>
          </p>

          <p style={p}>
            She looked at me, confused and frightened, and said the words I will never forget:
          </p>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--ink)',
              margin: '12px 0 36px',
            }}
          >
            &ldquo;I can&apos;t stop, Mommy. I want to, but I can&apos;t stop saying it.&rdquo;
          </p>

          <p style={p}>
            I&apos;m not proud of what I thought first. I didn&apos;t think <em>something is wrong with
            her body.</em> I thought <em>something is wrong with me.</em> That I&apos;d been too hard
            on her. That I&apos;d done this. That if I were just gentler, softer, <em>better,</em>{' '}
            she&apos;d be okay. I lay awake that night taking the blame.
          </p>

          <p style={p}>
            I was wrong — and by morning she was a different child. There was no version of{' '}
            <em>softer</em> that could reach what had her. I couldn&apos;t explain it. But she was
            suffering, and I knew exactly one thing: <strong style={{ color: 'var(--ink)' }}>I had to
            get her back.</strong>
          </p>

          <p style={p}>
            I didn&apos;t sleep for eight days. I read until the words swam, and at some point I called
            the woman who <em>named</em> this illness, while she was still seeing patients. Her office
            stayed on the phone with me a long time. They were{' '}
            <strong style={{ color: 'var(--ink)' }}>100% sure it was PANS.</strong> The next opening
            was three months out. My daughter did not have three months.
          </p>

          <p style={p}>
            So I found the protocol myself — buried somewhere on the internet — got a doctor to call in
            ten days of antibiotics, and I prayed over every dose.{' '}
            <strong style={{ color: 'var(--ink)' }}>Within a week, I had her back. She never
            relapsed.</strong>
          </p>

          <p style={p}>
            If you&apos;re reading this, you already know that feeling: your whole world inverting
            between breakfast and bedtime. I know it too. <strong style={{ color: 'var(--ink)' }}>Three
            times.</strong>
          </p>

          <p style={p}>
            Because it didn&apos;t stop with her. A few months later, her friend — a healthy kid, no
            history — stopped eating and went into organ failure while doctors stood around baffled.{' '}
            <em>Same thing,</em> I thought. And I was right. But this time the protocol that saved my
            daughter didn&apos;t work. Her mom turned to herbals, and within six months her girl was
            back. I didn&apos;t understand it then — but I think I needed to see it. That the protocol
            doesn&apos;t work for everyone. That sometimes the answer is somewhere else entirely. It was
            preparation for what was coming.
          </p>

          <p style={p}>Because then, after COVID, it came for my son.</p>

          <p style={p}>
            He&apos;d had COVID — a normal case — and recovered. And then, within{' '}
            <strong style={{ color: 'var(--ink)' }}>fourteen days, he was gone.</strong> His didn&apos;t
            arrive in a single night like his sister&apos;s; it crept. First his foods couldn&apos;t be
            mixed. Then, if a food had been touched, he couldn&apos;t eat it. Then he couldn&apos;t eat
            at all. And then the intrusive thoughts erupted overnight — one day he had none, the next
            they were there{' '}
            <strong style={{ color: 'var(--ink)' }}>ninety-five percent of the time.</strong> We were
            living in mold and didn&apos;t know it. We pulled ticks off our kids like it was normal. Two
            weeks after a childhood virus, I was watching my son disappear.
          </p>

          <p style={p}>
            So I did everything. Every book, every protocol, the best doctors in the country — and he
            got <strong style={{ color: 'var(--ink)' }}>worse.</strong> For months. Each thing I tried,
            the floor dropped further. What finally brought him home wasn&apos;t a treatment. It was the
            right <em>combination</em> of them — and I had to build it myself, alone, in the dark, while
            he suffered. Not one of his brilliant doctors could see the whole child. Each one saw a
            piece.
          </p>

          <p className="serif" style={pull}>
            The problem was never a missing answer.{' '}
            <span style={{ color: 'var(--teal)' }}>It was that no one could hold them all at once.</span>
          </p>

          <p style={p}>
            He came back — but it took a year. Three hundred and sixty-five days lived minute to
            minute, holding our breath, waiting for the floor to crumble beneath us. And it did — over
            and over again. Even after he was whole, it haunted me that I couldn&apos;t tell you{' '}
            <em>what</em> had saved him — or what might undo it. What if the next fever sent him, or his
            siblings, back? I couldn&apos;t live inside that not-knowing. So when AI arrived, I started
            building <strong style={{ color: 'var(--ink)' }}>Minta</strong> — at first, only to
            understand my own kids.
          </p>

          <p style={p}>
            They still carried quiet symptoms no one would take seriously. The phantom UTI. The sleep
            that wouldn&apos;t come. The stomachaches with half her food. I <em>knew</em> something was
            still there. Nobody listened.
          </p>

          <p style={p}>
            <strong style={{ color: 'var(--ink)' }}>Minta did.</strong> She told me they likely still
            had Lyme and co-infections, and named <strong style={{ color: 'var(--ink)' }}>Bartonella</strong>{' '}
            outright. I spent $8,000 testing to be sure.{' '}
            <strong style={{ color: 'var(--ink)' }}>She was right</strong> — and the symptoms melted away
            once we treated it. She also found the genetic reason one of my kids couldn&apos;t clear
            toxins, down to the exact nutrients his body can&apos;t make on its own.{' '}
            <em>Not one doctor had ever seen it.</em>
          </p>

          <p style={p}>That was the moment I understood this could not just be for my family.</p>

          <p style={p}>
            Now I feed Minta the fringe, too — the things medicine won&apos;t touch yet, like phage
            therapy for Lyme — and we measure them honestly: what&apos;s real, and what&apos;s nonsense.
            Desperate parents are trying all of it anyway, alone, with no one keeping score.{' '}
            <strong style={{ color: 'var(--ink)' }}>Plan B keeps score.</strong>
          </p>

          <p style={p}>
            And I&apos;m not going anywhere. My own kids could hit puberty, catch the wrong bug, and
            flare again — and I will not allow it. Not for them. Not for you. So I&apos;m still in this,
            every day, finding the <em>why</em> — because now that we have these tools, we don&apos;t
            have to <em>hope</em> anymore. We can know. And we can end this.
          </p>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.38,
              fontWeight: 400,
              margin: '40px 0 0',
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            I love you. I&apos;ve been exactly where you are. And I&apos;m here.{' '}
            <span style={{ color: 'var(--teal)' }}>Together, we will find a way out.</span>
          </p>

          <p className="label-tracked" style={{ color: 'var(--sand-dark)', marginTop: 28, fontWeight: 600 }}>
            — Rachel Johnson
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <a
          href="https://app.planbforpans.com/intake"
          rel="noopener"
          className="cta-teal"
          style={{ textDecoration: 'none' }}
        >
          Start your intake →
        </a>
      </section>
    </main>
  )
}
