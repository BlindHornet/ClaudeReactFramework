import { useState } from 'react'
import { config } from '@/config/env.js'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function submit() {
    if (!EMAIL_REGEX.test(email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    if (!config.beehiivFormUrl) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStatus('success')
      return
    }

    try {
      const response = await fetch(config.beehiivFormUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setErrorMsg('')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Try again.')
    }
  }

  return { email, setEmail, status, errorMsg, submit }
}
