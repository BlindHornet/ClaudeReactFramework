import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

function scrollToForm() {
  document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })
}

export function AdTierCard({ tier }) {
  const isPopular = tier.popular === true
  const spotsLabel = `${tier.spotsAvailable} spot${tier.spotsAvailable !== 1 ? 's' : ''} available`

  return (
    <Card
      hover
      className={cn(
        'flex flex-col',
        isPopular && 'ring-2 ring-foreman'
      )}
    >
      {isPopular && (
        <div className="mb-4">
          <Badge variant="popular">Most Popular</Badge>
        </div>
      )}

      <h3 className="font-display uppercase text-xl font-bold text-white mb-3">
        {tier.name}
      </h3>

      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-4xl font-display font-bold text-foreman">
          ${tier.price}
        </span>
        <span className="text-smoke text-sm">/{tier.billingPeriod}</span>
      </div>

      <p className="text-smoke text-sm mb-4 leading-relaxed">
        {tier.description}
      </p>

      <p className="text-foreman text-sm font-semibold mb-4">
        {spotsLabel}
      </p>

      <ul className="flex-1 space-y-2 mb-6">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-sm">
            <span className="text-foreman font-bold mt-0.5 shrink-0">&#x2713;</span>
            <span className="text-smoke">{perk}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isPopular ? 'primary' : 'outline'}
        onClick={scrollToForm}
        className="w-full"
      >
        Reserve a Spot
      </Button>
    </Card>
  )
}
