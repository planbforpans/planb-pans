export const CALENDLY_URL = 'https://calendly.com/rachel-planbforpans/the-case-review'
export const CASE_REVIEW_DETAILS = 'https://app.planbforpans.com/case-review'
export function caseReviewBookingUrl(source: string) {
  return `https://app.planbforpans.com/book-case-review?source=${encodeURIComponent(source)}`
}
