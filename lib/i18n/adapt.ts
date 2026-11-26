import * as React from 'react'
import { Fragment, jsx as rawJsx } from 'react/jsx-runtime'
import { localizeHref } from '../locales'
import { SKIP_TAGS, TEXT_ATTRS, lookup, worthTranslating } from './lookup'
import { serverI18n, type ServerI18n } from './store'
import { T } from './T'

// The site's JSX runtime hook (tsconfig "jsxImportSource": "@/lib/i18n").
// Every element the site creates passes through adapt(); on English pages it
// changes nothing that reaches the screen.
//
// Server components (the React Server Components layer): while a translated page
// (app/[locale]/...) is rendering, the text children of each element, a few
// text attributes, and links to pages that have a translated version are swapped
// for the dictionary's version before React ever sees them.
//
// Client components ('use client'): each text child becomes <T s="...">, which
// reads the dictionary the translated page provides (lib/i18n/T.ts). With no
// dictionary it is the same text, so English pages render exactly as before.

type Props = Record<string, unknown> & { children?: unknown }

const SERVER_LAYER = typeof (React as unknown as { useState?: unknown }).useState !== 'function'
const CLIENT_REF = Symbol.for('react.client.reference')

// Props never translated on a client component (ids, links, styles, logic).
const KEEP = new Set(['className', 'href', 'src', 'id', 'style', 'key', 'ref', 'type', 'name', 'value', 'as', 'target', 'rel', 'method', 'action', 'slug', 'lang', 'dir', 'role', 'variant', 'size', 'icon', 'kind', 'tone', 'color', 'device', 'from', 'url', 'image', 'img', 'video', 'poster', 'data', 'dangerouslySetInnerHTML'])

function noTranslate(props: Props): boolean {
  return props.translate === 'no' || props['data-no-translate'] != null
}

function mapStrings(c: unknown, f: (s: string, i?: number) => unknown): unknown {
  if (typeof c === 'string') return f(c)
  if (!Array.isArray(c)) return c
  let changed = false
  const out = c.map((x, i) => {
    const y = typeof x === 'string' ? f(x, i) : Array.isArray(x) ? mapStrings(x, f) : x
    if (y !== x) changed = true
    return y
  })
  return changed ? out : c
}

function withChildren(props: Props, children: unknown): Props {
  return children === props.children ? props : { ...props, children }
}

// ---- server layer -------------------------------------------------------

function serverText(st: ServerI18n, s: string): string {
  const out = lookup(st.dict, s)
  return out
}

// Text on a client component's props: phrases only (has a space or starts with a
// capital), never identifiers.
function phraseLike(s: string): boolean {
  return /\s/.test(s.trim()) || /^[A-Z]/.test(s.trim())
}

function deepProps(st: ServerI18n, v: unknown, depth: number): unknown {
  if (typeof v === 'string') return phraseLike(v) ? serverText(st, v) : v
  if (depth > 5 || v == null || typeof v !== 'object' || React.isValidElement(v)) return v
  if (Array.isArray(v)) {
    let changed = false
    const out = v.map((x) => {
      const y = deepProps(st, x, depth + 1)
      if (y !== x) changed = true
      return y
    })
    return changed ? out : v
  }
  const proto = Object.getPrototypeOf(v)
  if (proto !== Object.prototype && proto !== null) return v
  let out: Record<string, unknown> | null = null
  for (const [k, x] of Object.entries(v as Record<string, unknown>)) {
    if (KEEP.has(k)) continue
    const y = deepProps(st, x, depth + 1)
    if (y !== x) (out ||= { ...(v as Record<string, unknown>) })[k] = y
  }
  return out || v
}

function revertServer(st: ServerI18n, c: unknown, depth = 0): unknown {
  if (depth > 20) return c
  if (typeof c === 'string') {
    const en = st.reverse?.get(c.trim())
    return en ? c.replace(c.trim(), en) : c
  }
  if (Array.isArray(c)) {
    let changed = false
    const out = c.map((x) => {
      const y = revertServer(st, x, depth + 1)
      if (y !== x) changed = true
      return y
    })
    return changed ? out : c
  }
  if (React.isValidElement(c)) {
    const p = c.props as Props
    if (p && p.children != null) {
      const k = revertServer(st, p.children, depth + 1)
      if (k !== p.children) return React.cloneElement(c, { children: k } as Props)
    }
  }
  return c
}

function adaptServer(type: unknown, props: Props): Props {
  const st = serverI18n()
  if (!st.dict || !st.locale) return props
  const locale = st.locale
  if (typeof type === 'string' || type === Fragment) {
    if (typeof type === 'string' && SKIP_TAGS.has(type)) return props
    if (noTranslate(props)) return withChildren(props, revertServer(st, props.children))
    let out = withChildren(props, mapStrings(props.children, (s) => serverText(st, s)))
    if (typeof type === 'string') {
      for (const a of TEXT_ATTRS) {
        const v = out[a]
        if (typeof v === 'string' && worthTranslating(v)) {
          const t = serverText(st, v)
          if (t !== v) out = { ...out, [a]: t }
        }
      }
      if (type === 'a' && typeof out.href === 'string') {
        const h = localizeHref(out.href, locale)
        if (h !== out.href) out = { ...out, href: h }
      }
    }
    return out
  }
  if (type && (type as { $$typeof?: symbol }).$$typeof === CLIENT_REF) {
    if (noTranslate(props)) return props
    let out = props
    for (const [k, v] of Object.entries(props)) {
      if (k === 'href') {
        if (typeof v === 'string') {
          const h = localizeHref(v, locale)
          if (h !== v) out = { ...out, href: h }
        }
        continue
      }
      if (KEEP.has(k)) continue
      const y = k === 'children' ? mapStrings(v, (s) => serverText(st, s)) : deepProps(st, v, 0)
      if (y !== v) out = out === props ? { ...props, [k]: y } : { ...out, [k]: y }
    }
    return out
  }
  return props
}

// ---- client layer -------------------------------------------------------

function revertClient(c: unknown, depth = 0): unknown {
  if (depth > 20) return c
  if (Array.isArray(c)) {
    let changed = false
    const out = c.map((x) => {
      const y = revertClient(x, depth + 1)
      if (y !== x) changed = true
      return y
    })
    return changed ? out : c
  }
  if (React.isValidElement(c)) {
    if (c.type === T) return (c.props as { s: string }).s
    const p = c.props as Props
    if (p && p.children != null) {
      const k = revertClient(p.children, depth + 1)
      if (k !== p.children) return React.cloneElement(c, { children: k } as Props)
    }
  }
  return c
}

function adaptClient(type: unknown, props: Props): Props {
  if (!(typeof type === 'string' || type === Fragment)) return props
  if (typeof type === 'string' && SKIP_TAGS.has(type)) return props
  if (props.children == null) return props
  if (noTranslate(props)) return withChildren(props, revertClient(props.children))
  return withChildren(
    props,
    mapStrings(props.children, (s, i) => (worthTranslating(s) ? rawJsx(T, { s }, i === undefined ? undefined : `pbt${i}`) : s)),
  )
}

export function adapt(type: unknown, props: unknown): unknown {
  if (!props || typeof props !== 'object') return props
  try {
    return SERVER_LAYER ? adaptServer(type, props as Props) : adaptClient(type, props as Props)
  } catch {
    return props
  }
}
