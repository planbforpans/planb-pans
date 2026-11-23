'use client'

import { useEffect, useState } from 'react'
import { APP_ORIGIN, type Facts, type Review, type Summary } from '@/lib/directory/data'
import Stars from './Stars'
import s from '../directory.module.css'

type Viewer = { signedIn: boolean; mine: Review | null }

const API = `${APP_ORIGIN}/api/directory/reviews`

const EMPTY_FACTS: Facts = { acceptingNew: null, telehealth: null, takesInsurance: null, waitWeeks: null }

function tri(v: boolean | null) {
  return v == null ? '' : v ? 'yes' : 'no'
}
function fromTri(v: string): boolean | null {
  return v === 'yes' ? true : v === 'no' ? false : null
}

function FactLine({ f }: { f: Facts }) {
  const bits: string[] = []
  if (f.acceptingNew != null) bits.push(f.acceptingNew ? 'Was accepting new patients' : 'Was not accepting new patients')
  if (f.telehealth != null) bits.push(f.telehealth ? 'Offered telehealth' : 'In person only')
  if (f.takesInsurance != null) bits.push(f.takesInsurance ? 'Took our insurance' : 'Did not take our insurance')
  if (f.waitWeeks != null) bits.push(`Waited ${f.waitWeeks} week${f.waitWeeks === 1 ? '' : 's'} for a first visit`)
  if (!bits.length) return null
  return <p className={s.muted} style={{ margin: 0 }}>{bits.join(' · ')}</p>
}

export default function Reviews({
  slug,
  providerName,
  initialReviews,
  initialSummary,
}: {
  slug: string
  providerName: string
  initialReviews: Review[]
  initialSummary: Summary
}) {
  const [reviews, setReviews] = useState(initialReviews)
  const [summary, setSummary] = useState(initialSummary)
  const [viewer, setViewer] = useState<Viewer | null>(null)
  const [editing, setEditing] = useState(false)
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [facts, setFacts] = useState<Facts>(EMPTY_FACTS)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [reported, setReported] = useState<Set<string>>(new Set())

  async function load() {
    try {
      const res = await fetch(`${API}?provider=${encodeURIComponent(slug)}`, { credentials: 'include', cache: 'no-store' })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setReviews(data.reviews ?? [])
      setSummary(data.summary ?? { count: 0, avg: null })
      setViewer(data.viewer ?? { signedIn: false, mine: null })
      const mine: Review | null = data.viewer?.mine ?? null
      if (mine) {
        setRating(mine.rating)
        setBody(mine.body)
        setDisplayName(mine.displayName === 'A PANS parent' ? '' : mine.displayName)
        setFacts(mine.facts)
      }
    } catch {
      setViewer({ signedIn: false, mine: null })
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!rating) return setError('Please choose a star rating.')
    if (body.trim().length < 20) return setError('Please write at least a sentence or two (20+ characters).')
    setBusy(true)
    setError('')
    try {
      const res = await fetch(API, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: slug, providerName, rating, body: body.trim(), displayName: displayName.trim() || null, facts }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not save your review.')
      setEditing(false)
      await load()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  async function remove() {
    setBusy(true)
    try {
      await fetch(`${API}?provider=${encodeURIComponent(slug)}`, { method: 'DELETE', credentials: 'include' })
      setRating(0)
      setBody('')
      setDisplayName('')
      setFacts(EMPTY_FACTS)
      setEditing(false)
      await load()
    } finally {
      setBusy(false)
    }
  }

  async function report(id: string) {
    setReported((r) => new Set(r).add(id))
    await fetch(`${API}/report`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewId: id }),
    }).catch(() => {})
  }

  const signInHref = `${APP_ORIGIN}/sign-in?next=${encodeURIComponent(`/go/directory/${slug}`)}`
  const mine = viewer?.mine ?? null
  const showForm = viewer?.signedIn && (editing || !mine)

  return (
    <section id="reviews" className={s.panel} style={{ marginTop: 28 }}>
      <div className={s.reviewHead}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 30, margin: 0 }}>What parents say</h2>
        {summary.count > 0 && <Stars avg={summary.avg} count={summary.count} />}
      </div>
      <p className={s.muted} style={{ margin: '0 0 10px' }}>
        Written by parents with a Plan B for PANS account, about their own experience. Not verified by Plan B. <a href="/directory/review-policy" style={{ color: 'var(--teal)' }}>Review policy</a>
      </p>

      {viewer && !viewer.signedIn && (
        <div style={{ padding: '14px 0 18px' }}>
          <p style={{ margin: 0, fontSize: 15.5 }}>Have you seen {providerName}? Your experience could save another family months.</p>
          <a className={s.signIn} href={signInHref}>Sign in to leave a review</a>
          <p className={s.muted} style={{ margin: '8px 0 0' }}>
            No account? <a href={`${APP_ORIGIN}/signup`} style={{ color: 'var(--teal)' }}>Create one free</a>. It also gets you a free Synthesis of your child&rsquo;s case.
          </p>
        </div>
      )}

      {mine && !editing && (
        <p style={{ margin: '8px 0 14px', fontSize: 14.5 }}>
          You reviewed this provider.{' '}
          <button className={s.linkBtn} onClick={() => setEditing(true)}>Edit</button>{' '}
          <button className={s.linkBtn} onClick={remove} disabled={busy}>Delete</button>
        </p>
      )}

      {showForm && (
        <form className={s.form} onSubmit={submit}>
          <div>
            <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 600 }}>Your overall experience</p>
            <div className={s.starPicker} role="radiogroup" aria-label="Rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" role="radio" aria-checked={rating === n} aria-label={`${n} star${n > 1 ? 's' : ''}`} data-on={n <= rating} onClick={() => setRating(n)}>
                  ★
                </button>
              ))}
            </div>
          </div>
          <label>
            Your review
            <textarea value={body} onChange={(e) => setBody(e.target.value)} maxLength={4000} placeholder="What was it like? Did they take PANS seriously? What helped, what didn't? Please don't include your child's name." />
          </label>
          <div className={s.factsGrid}>
            <label>
              Accepting new patients?
              <select value={tri(facts.acceptingNew)} onChange={(e) => setFacts({ ...facts, acceptingNew: fromTri(e.target.value) })}>
                <option value="">Not sure</option><option value="yes">Yes</option><option value="no">No</option>
              </select>
            </label>
            <label>
              Offered telehealth?
              <select value={tri(facts.telehealth)} onChange={(e) => setFacts({ ...facts, telehealth: fromTri(e.target.value) })}>
                <option value="">Not sure</option><option value="yes">Yes</option><option value="no">No</option>
              </select>
            </label>
            <label>
              Took your insurance?
              <select value={tri(facts.takesInsurance)} onChange={(e) => setFacts({ ...facts, takesInsurance: fromTri(e.target.value) })}>
                <option value="">Not sure</option><option value="yes">Yes</option><option value="no">No</option>
              </select>
            </label>
            <label>
              Weeks to first visit
              <input type="number" min={0} max={104} value={facts.waitWeeks ?? ''} onChange={(e) => setFacts({ ...facts, waitWeeks: e.target.value === '' ? null : Math.max(0, Math.min(104, Number(e.target.value))) })} />
            </label>
          </div>
          <label>
            Show my review as (optional)
            <input type="text" value={displayName} maxLength={40} onChange={(e) => setDisplayName(e.target.value)} placeholder="A PANS parent" />
          </label>
          {error && <p className={s.error}>{error}</p>}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button className={s.primaryBtn} disabled={busy}>{busy ? 'Saving…' : mine ? 'Update review' : 'Post review'}</button>
            {editing && <button type="button" className={s.linkBtn} onClick={() => setEditing(false)}>Cancel</button>}
          </div>
        </form>
      )}

      {reviews.length === 0 && <p className={s.muted} style={{ padding: '14px 0 0', margin: 0 }}>No reviews yet.</p>}
      {reviews.map((r) => (
        <article key={r.id} className={s.review}>
          <div className={s.reviewHead}>
            <span className={s.reviewName}>{r.displayName}</span>
            <Stars avg={r.rating} />
          </div>
          <p className={s.reviewBody}>{r.body}</p>
          <FactLine f={r.facts} />
          <p className={s.muted} style={{ margin: '6px 0 0', display: 'flex', gap: 14 }}>
            <time dateTime={r.createdAt}>{new Date(r.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</time>
            {viewer?.signedIn && mine?.id !== r.id && (
              reported.has(r.id) ? <span>Reported. Thank you.</span> : <button className={s.linkBtn} onClick={() => report(r.id)}>Report</button>
            )}
          </p>
        </article>
      ))}
    </section>
  )
}
