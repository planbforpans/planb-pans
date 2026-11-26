import { Fragment, jsx as rawJsx, jsxs as rawJsxs } from 'react/jsx-runtime'
import { adapt } from './adapt'

// See lib/i18n/adapt.ts. tsconfig "jsxImportSource": "@/lib/i18n" points the
// compiler here instead of react/jsx-runtime.
export type { JSX } from 'react/jsx-runtime'
export { Fragment }

type Jsx = typeof rawJsx

export const jsx: Jsx = (type, props, key) => rawJsx(type, adapt(type, props) as typeof props, key)
export const jsxs: Jsx = (type, props, key) => rawJsxs(type, adapt(type, props) as typeof props, key)
