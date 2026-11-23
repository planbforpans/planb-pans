// Reuse the same branded image for Twitter/X cards (summary_large_image).
// Route-segment config must be declared literally here (not re-exported), so
// Next can statically parse it; only the render function is shared.
export const runtime = 'nodejs'
export const alt = 'Plan B for PANS & PANDAS — A path out of the fire'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export { default } from './opengraph-image'
