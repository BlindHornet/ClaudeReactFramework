import { useSubscribe } from '@/hooks/useSubscribe'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function SubscribeForm() {
  const { email, setEmail, status, errorMsg, submit } = useSubscribe()

  function handleSubmit(e) {
    e.preventDefault()
    submit()
  }

  const buttonLabel =
    status === 'loading' ? 'Sending...' :
    status === 'success' ? "You're In" :
    'Join the Crew'

  const isDisabled = status === 'loading' || status === 'success'

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          className="flex-1"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={isDisabled}
        >
          {buttonLabel}
        </Button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-sm text-foreman text-center">
          You're in. Check your inbox — the next issue drops soon.
        </p>
      )}

      {status === 'error' && errorMsg && (
        <p className="mt-3 text-sm text-red-400 text-center">
          {errorMsg}
        </p>
      )}
    </div>
  )
}
