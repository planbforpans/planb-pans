import Home from '../page'
import { metadata } from '../layout'
import { localized } from './localized'

const page = localized('/', Home, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
