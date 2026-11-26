import { Fragment, jsxDEV as rawJsxDEV } from 'react/jsx-dev-runtime'
import { adapt } from './adapt'

// Development build of lib/i18n/jsx-runtime.ts.
export type { JSX } from 'react/jsx-dev-runtime'
export { Fragment }

type JsxDEV = typeof rawJsxDEV

export const jsxDEV: JsxDEV = (type, props, key, isStatic, source, self) =>
  rawJsxDEV(type, adapt(type, props) as typeof props, key, isStatic, source, self)
