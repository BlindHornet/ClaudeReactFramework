import { formatDate } from '@/utils/formatDate'

function parseIssueNumber(id) {
  const match = id.match(/(\d+)$/)
  return match ? `#${match[1].padStart(3, '0')}` : null
}

export function NewsletterCard({ newsletter }) {
  const issueNumber = parseIssueNumber(newsletter.id)

  return (
    <div className="bg-field-mid border-l-4 border-field-light hover:border-foreman hover:-translate-y-1 transition-all duration-200">
      <div className="p-7 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {issueNumber && (
            <span className="font-display text-xs uppercase tracking-widest text-foreman bg-foreman/10 border border-foreman/30 px-2 py-0.5">
              Issue {issueNumber}
            </span>
          )}
          <span className="text-smoke text-xs">{formatDate(newsletter.date)}</span>
        </div>

        <h3 className="font-display text-white font-semibold text-lg leading-snug mb-3">
          {newsletter.title}
        </h3>

        <p className="text-smoke text-sm leading-relaxed mb-4 flex-1">
          {newsletter.blurb}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {newsletter.tags.map((tag) => (
            <span
              key={tag}
              className="text-smoke/70 text-xs uppercase tracking-wider border border-field-light px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={newsletter.readUrl}
          className="font-display text-xs uppercase tracking-widest text-foreman hover:text-foreman-light transition-colors"
        >
          Read Issue →
        </a>
      </div>
    </div>
  )
}
