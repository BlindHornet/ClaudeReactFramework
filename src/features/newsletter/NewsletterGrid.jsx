import { NewsletterCard } from '@/features/newsletter/NewsletterCard'

export function NewsletterGrid({ newsletters, limit }) {
  const items = limit ? newsletters.slice(0, limit) : newsletters

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((newsletter) => (
        <NewsletterCard key={newsletter.id} newsletter={newsletter} />
      ))}
    </div>
  )
}
