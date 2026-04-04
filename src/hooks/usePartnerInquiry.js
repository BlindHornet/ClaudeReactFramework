import { useState } from 'react'
import { config } from '@/config/env.js'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FIELDS = {
  name: '',
  company: '',
  email: '',
  tier: '',
  message: '',
}

export function usePartnerInquiry() {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function setField(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  async function submit() {
    const { name, email, tier, message } = fields

    if (!name || !email || !tier || !message) {
      setStatus('error')
      setErrorMsg('Please fill in all required fields.')
      return
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    if (!config.partnerFormUrl) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStatus('success')
      return
    }

    try {
      const body = new URLSearchParams({
        'form-name': 'partner-inquiry',
        ...fields,
      }).toString()

      const response = await fetch(config.partnerFormUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Try again.')
    }
  }

  return { fields, setField, status, errorMsg, submit }
}
