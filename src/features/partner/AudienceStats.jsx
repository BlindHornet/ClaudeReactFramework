import { Card } from '@/components/ui/Card'

const STATS = [
  { value: '1,200+', label: 'Active Subscribers' },
  { value: '42%', label: 'Average Open Rate' },
  { value: '8+', label: 'Trades Covered' },
  { value: '6.8%', label: 'Avg. Click Rate' },
]

export function AudienceStats() {
  return (
    <section className="py-12 px-4 bg-field-mid">
      <div className="max-w-6xl mx-auto">
        <p className="text-foreman font-display uppercase tracking-widest text-sm text-center">
          By the Numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {STATS.map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="font-display text-foreman text-3xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-smoke text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
