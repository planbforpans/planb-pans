import English, { metadata } from '../../../learning/behaviors-are-a-clue/page'
import { localized } from '../../localized'
import '../../../learning/learning.css'

const page = localized('/learning/behaviors-are-a-clue', English, metadata)
export default page.Page
export const generateMetadata = page.generateMetadata
