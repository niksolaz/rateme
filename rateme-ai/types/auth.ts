export interface UserDetails {
  id?: string
  first_name: string
  last_name: string
  email: string
  plan: 'free' | 'pro' | 'enterprise'
  accept_terms: boolean
  newsletter: boolean
  address?: string
  cap?: string
  created_at?: string
  updated_at?: string
}

export interface RegistrationForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  plan: 'free' | 'pro' | 'enterprise'
  acceptTerms: boolean
  newsletter: boolean
  address?: string
  cap?: string
}