// /pricing and /packages served byte-identical content (same 1,287 words, same
// md5, same <title>) — the only duplicate pair on the site, and it doubled the
// commercial surface a reviewer sees. Google Ad Grants rejection 2026-10-29
// cited "copied text" under insufficient unique content.
//
// A redirect in next.config.js does NOT fire when a route of the same name
// exists, so the canonicalisation has to happen here. /packages is canonical
// because that is the path the rest of the site links to.
import { permanentRedirect } from 'next/navigation'

export default function Page(): never {
  permanentRedirect('/packages')
}
