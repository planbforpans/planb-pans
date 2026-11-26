'use client'

import { createContext, createElement, useContext, type ReactNode } from 'react'
import { lookup, type Dict } from './lookup'

// The translated text of one phrase inside a client component. The JSX runtime
// (lib/i18n/jsx-runtime.ts) puts every text child of an element in one of these;
// with no dictionary above it (every English page) it renders the text unchanged.
// The dictionary arrives as a prop from the server, so the server HTML and the
// browser's first render are identical and hydration matches.
const DictContext = createContext<Dict | null>(null)

export function T({ s }: { s: string }) {
  return lookup(useContext(DictContext), s) as unknown as ReactNode
}

export function DictProvider({ lang, dict, children }: { lang: string; dict: Dict; children?: ReactNode }) {
  // Hand the same phrases to AutoTranslate (attributes, text that appears later).
  if (typeof window !== 'undefined') (window as unknown as { __pbDict?: unknown }).__pbDict = { lang, dict }
  return createElement(DictContext.Provider, { value: dict }, children)
}
