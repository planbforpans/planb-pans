import English, { metadata } from '../../for-adhd/page'
import { localized } from '../localized'

const page = localized('/for-adhd', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
