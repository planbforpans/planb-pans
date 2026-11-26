// Shared by the server renderer, the in-page <T> and the generator script's
// rules: a phrase is the trimmed text of one React text child; the whitespace
// around it is kept.

export type Dict = Record<string, string>

export function worthTranslating(s: string): boolean {
  const t = s.trim()
  return t.length > 1 && /[A-Za-z]{2}/.test(t) && !/^https?:\/\//.test(t) && !/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(t)
}

export function lookup(dict: Dict | null | undefined, s: string): string {
  if (!dict || !worthTranslating(s)) return s
  const key = s.trim()
  const hit = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : undefined
  if (!hit || hit === key) return s
  const lead = s.match(/^\s*/)?.[0] || ''
  const trail = s.match(/\s*$/)?.[0] || ''
  return lead + hit + trail
}

// Elements whose text children must stay plain strings (or are code).
export const SKIP_TAGS = new Set(['script', 'style', 'noscript', 'textarea', 'option', 'title', 'code', 'pre', 'iframe', 'template', 'math'])
export const TEXT_ATTRS = ['title', 'alt', 'placeholder', 'aria-label']
