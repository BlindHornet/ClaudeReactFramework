import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function ProductCard({ product }) {
  const initial = product.name.charAt(0).toUpperCase()

  return (
    <Card hover={true}>
      <div className="bg-field-light rounded-card mb-6 h-48 flex items-center justify-center">
        <span className="font-display uppercase text-6xl font-bold text-foreman opacity-50">
          {initial}
        </span>
      </div>

      <div className="mb-4">
        {product.comingSoon ? (
          <Badge variant="coming-soon">{product.badge}</Badge>
        ) : (
          <Badge variant="new">Available</Badge>
        )}
      </div>

      <h2 className="font-display uppercase text-xl font-semibold text-white mb-1">
        {product.name}
      </h2>
      <p className="text-smoke text-sm mb-4">{product.tagline}</p>
      <p className="text-smoke text-sm leading-relaxed mb-6">{product.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-foreman font-display text-2xl font-bold">{product.price}</span>
        {product.comingSoon ? (
          <Button variant="outline" onClick={() => {}}>
            Join Waitlist
          </Button>
        ) : (
          <Button variant="primary" onClick={() => {}}>
            Get It
          </Button>
        )}
      </div>
    </Card>
  )
}
