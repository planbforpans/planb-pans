import English, { metadata } from '../../for-ocd/page'
import { localized } from '../localized'

const page = localized('/for-ocd', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
