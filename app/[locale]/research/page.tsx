import English, { metadata } from '../../research/page'
import { localized } from '../localized'

const page = localized('/research', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
