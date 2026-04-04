import { adTiers } from '@/config/adtiers.js'
import { AdTierCard } from './AdTierCard'

export function AdTierGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Choose Your Placement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {adTiers.map((tier) => (
            <AdTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
