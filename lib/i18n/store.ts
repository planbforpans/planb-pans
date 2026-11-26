import * as React from 'react'
import type { Dict } from './lookup'
import type { Locale } from '../locales'

// Per-request translation state for the server (React Server Components) render.
// React.cache gives one object per request, so pages for different languages
// rendered at the same time never see each other's dictionary.
export type ServerI18n = { locale: Locale | null; dict: Dict | null; reverse: Map<string, string> | null }

const make = (): ServerI18n => ({ locale: null, dict: null, reverse: null })
const cache = (React as unknown as { cache?: <T>(fn: () => T) => () => T }).cache

export const serverI18n: () => ServerI18n = typeof cache === 'function' ? cache(make) : make
