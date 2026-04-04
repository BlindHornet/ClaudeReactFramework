import { useSubscribe } from '@/hooks/useSubscribe'
import { Button } from '@/components/ui/Button'

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
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          className="flex-1 px-4 py-3 bg-near-black border-2 border-field-light sm:border-r-0 text-white placeholder:text-smoke focus:outline-none focus:border-foreman transition-colors duration-150 disabled:opacity-50"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={isDisabled}
          className="sm:rounded-l-none"
        >
          {buttonLabel}
        </Button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-sm text-foreman text-center">
          You&apos;re in. Check your inbox — the next issue drops soon.
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
