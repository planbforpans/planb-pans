import type { Provider } from '@/lib/directory/types'
import { cityLine, displayCredentials, type Summary } from '@/lib/directory/data'
import Stars from './Stars'
import s from '../directory.module.css'

export default function ProviderCard({ p, summary, delay = 0 }: { p: Provider; summary?: Summary; delay?: number }) {
  return (
    <a href={`/directory/p/${p.slug}`} className={s.card} style={{ animationDelay: `${delay}ms` }}>
      <p className={s.cardName}>{displayCredentials(p)}</p>
      <div>{summary && summary.count > 0 ? <Stars avg={summary.avg} count={summary.count} /> : <span className={s.muted}>No reviews yet</span>}</div>
      <p className={s.cardMeta}>
        {[p.practice, cityLine(p)].filter(Boolean).join(' · ')}
        {p.specialties.length > 0 && <> &mdash; {p.specialties.slice(0, 3).join(', ')}</>}
      </p>
      {(p.treats.length > 0 || p.telehealth) && (
        <div className={s.tags}>
          {p.treats.map((t) => (
            <span key={t} className={`${s.tag} ${s.tagStrong}`}>{t}</span>
          ))}
          {p.telehealth && <span className={s.tag}>Telehealth</span>}
        </div>
      )}
    </a>
  )
}
