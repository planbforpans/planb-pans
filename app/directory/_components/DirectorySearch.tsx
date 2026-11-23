'use client'

import { useMemo, useState } from 'react'
import s from '../directory.module.css'

export type SearchEntry = { slug: string; name: string; where: string; haystack: string }

export default function DirectorySearch({ entries }: { entries: SearchEntry[] }) {
  const [q, setQ] = useState('')
  const hits = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    if (!terms.length) return []
    return entries.filter((e) => terms.every((t) => e.haystack.includes(t))).slice(0, 12)
  }, [q, entries])

  return (
    <div>
      <input
        className={s.search}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name, practice, city or state…"
        aria-label="Search the directory"
      />
      {q.trim() && (
        <ul className={s.results}>
          {hits.length === 0 && <li style={{ padding: '14px 18px' }} className={s.muted}>No matches. Try a state name, or a nearby city.</li>}
          {hits.map((h) => (
            <li key={h.slug}>
              <a href={`/directory/p/${h.slug}`}>
                <span>{h.name}</span>
                <span className={s.muted}>{h.where}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
