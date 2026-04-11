import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { adTiers } from '@/config/adtiers.js'
import { usePartnerInquiry } from '@/hooks/usePartnerInquiry'
import { cn } from '@/utils/cn'

const inputBaseClasses =
  'w-full px-4 py-3 bg-field-mid border border-field-light rounded-btn text-white placeholder-smoke focus:outline-none focus:border-foreman focus:ring-1 focus:ring-foreman transition-colors duration-150'

export function PartnerInquiryForm() {
  const { fields, setField, status, errorMsg, submit } = usePartnerInquiry()

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  function handleSubmit(e) {
    e.preventDefault()
    submit()
  }

  return (
    <section id="partner-form" className="py-20 px-4 bg-field-mid">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Let&apos;s Make a Deal
        </h2>

        <p className="text-smoke text-center mb-10">
          Fill out the form below and we&apos;ll get back to you before the next issue drops.
        </p>

        {isSuccess ? (
          <p className="text-foreman text-center text-lg font-semibold">
            We&apos;ll be in touch before the next issue drops.
          </p>
        ) : (
          <form
            name="partner-inquiry"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="partner-inquiry" />

            <div>
              <label htmlFor="partner-name" className="block text-smoke text-sm mb-1">
                Your Name <span className="text-foreman">*</span>
              </label>
              <Input
                id="partner-name"
                name="name"
                placeholder="Jane Smith"
                value={fields.name}
                onChange={(e) => setField('name', e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="partner-company" className="block text-smoke text-sm mb-1">
                Company (optional)
              </label>
              <Input
                id="partner-company"
                name="company"
                placeholder="Acme Tools Co."
                value={fields.company}
                onChange={(e) => setField('company', e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="partner-email" className="block text-smoke text-sm mb-1">
                Email Address <span className="text-foreman">*</span>
              </label>
              <Input
                id="partner-email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={fields.email}
                onChange={(e) => setField('email', e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="partner-tier" className="block text-smoke text-sm mb-1">
                Interested In <span className="text-foreman">*</span>
              </label>
              <select
                id="partner-tier"
                name="tier"
                value={fields.tier}
                onChange={(e) => setField('tier', e.target.value)}
                disabled={isLoading}
                className={cn(
                  inputBaseClasses,
                  isLoading && 'opacity-50 cursor-not-allowed'
                )}
              >
                <option value="">Select a tier...</option>
                {adTiers.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    {tier.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="partner-message" className="block text-smoke text-sm mb-1">
                Tell Us About Your Business <span className="text-foreman">*</span>
              </label>
              <textarea
                id="partner-message"
                name="message"
                rows={4}
                placeholder="What you sell, who you serve, what you're hoping to accomplish..."
                value={fields.message}
                onChange={(e) => setField('message', e.target.value)}
                disabled={isLoading}
                className={cn(
                  inputBaseClasses,
                  'resize-y',
                  isLoading && 'opacity-50 cursor-not-allowed'
                )}
              />
            </div>

            {status === 'error' && errorMsg && (
              <p className="text-red-400 text-sm text-center">{errorMsg}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
