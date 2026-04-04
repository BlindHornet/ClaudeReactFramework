import { SubscribeForm } from '@/features/subscribe/SubscribeForm'

export function SubscribeSection() {
  return (
    <section id="subscribe" className="py-20 px-4 bg-warm-dark border-t border-foreman/10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="h-1 w-24 bg-foreman mx-auto mb-8" />

        <h2 className="font-display uppercase text-3xl md:text-4xl text-white font-bold mb-4">
          Don't Miss the Next One
        </h2>

        <p className="text-smoke mb-8">
          Join the crew getting smarter every week. Unsubscribe anytime — no hard feelings.
        </p>

        <SubscribeForm />
      </div>
    </section>
  )
}
