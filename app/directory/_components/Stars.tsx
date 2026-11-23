import s from '../directory.module.css'

export default function Stars({ avg, count }: { avg: number | null; count?: number }) {
  if (avg == null) return null
  const full = Math.round(avg)
  return (
    <span className={s.stars} aria-label={`Rated ${avg.toFixed(1)} out of 5${count != null ? ` by ${count} parent${count === 1 ? '' : 's'}` : ''}`}>
      <span className={s.starRow} aria-hidden="true">
        {'★'.repeat(full)}
        <span className={s.starEmpty}>{'★'.repeat(5 - full)}</span>
      </span>
      {avg.toFixed(1)}
      {count != null && <span>({count})</span>}
    </span>
  )
}
