// Lets `node --test` load the site's TypeScript the way Next resolves it:
// imports without an extension ('./lib/locales', 'next/server') find the .ts or
// .js file.
import { registerHooks } from 'node:module'

registerHooks({
  resolve(specifier, context, next) {
    try {
      return next(specifier, context)
    } catch (err) {
      if (err?.code !== 'ERR_MODULE_NOT_FOUND' || /\.[cm]?[jt]s$/.test(specifier)) throw err
      for (const ext of ['.ts', '.js']) {
        try {
          return next(specifier + ext, context)
        } catch {}
      }
      throw err
    }
  },
})
