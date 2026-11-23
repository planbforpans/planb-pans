export type ProviderSource = {
  name: string
  url: string
  retrievedAt: string
}

export type Provider = {
  slug: string
  name: string
  credentials: string | null
  npi: string | null
  kind: 'physician' | 'nurse-practitioner' | 'practitioner' | 'researcher' | 'clinic'
  specialties: string[]
  practice: string | null
  address: {
    line1: string | null
    city: string | null
    state: string | null
    zip: string | null
  }
  phone: string | null
  website: string | null
  telehealth: boolean | null
  treats: string[]
  sources: ProviderSource[]
  lastVerified: string
}
