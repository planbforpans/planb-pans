import English, { metadata } from '../../for-arfid/page'
import { localized } from '../localized'

const page = localized('/for-arfid', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
