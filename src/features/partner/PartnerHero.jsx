import { cn } from '@/utils/cn'

export function PartnerHero() {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-foreman font-display uppercase tracking-widest text-sm mb-4">
        Advertise With Us
      </p>

      <h1
        className={cn(
          'font-display uppercase text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'
        )}
      >
        Get Your Brand in Front of the Trades
      </h1>

      <p className="text-smoke text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
        Field Foreman goes out every week to HVAC techs, roofers, landscapers,
        and pressure washers actively looking for tools and shortcuts. No bots.
        No tire-kickers. Real workers with real budgets.
      </p>

      <p className="font-display italic text-foreman text-xl md:text-2xl font-bold">
        No fluff sponsorships. Real reach. Real workers.
      </p>
    </section>
  )
}
