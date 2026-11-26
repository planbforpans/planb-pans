import English, { metadata } from '../../for-autism/page'
import { localized } from '../localized'

const page = localized('/for-autism', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
