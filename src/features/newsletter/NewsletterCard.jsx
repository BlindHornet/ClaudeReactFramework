import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/utils/formatDate'

export function NewsletterCard({ newsletter }) {
  return (
    <div className="border-l-4 border-transparent hover:border-foreman transition-colors">
      <Card hover={true} className="h-full">
        <div className="text-5xl mb-4">{newsletter.coverEmoji}</div>

        <div className="mb-2">
          <Badge variant="default">{formatDate(newsletter.date)}</Badge>
        </div>

        <h3 className="font-display text-white font-semibold text-xl mb-2">
          {newsletter.title}
        </h3>

        <p className="text-smoke text-sm leading-relaxed mb-4">
          {newsletter.blurb}
        </p>

        <div className="mb-4">
          {newsletter.tags.map((tag) => (
            <Badge key={tag} variant="default" className="mr-2 mb-1">
              {tag}
            </Badge>
          ))}
        </div>

        <a href={newsletter.readUrl}>
          <Button variant="ghost" size="sm">
            Read Issue
          </Button>
        </a>
      </Card>
    </div>
  )
}
