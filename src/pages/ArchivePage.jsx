import { PageWrapper } from '@/components/layout/PageWrapper'
import { NewsletterGrid } from '@/features/newsletter/NewsletterGrid'
import { newsletters } from '@/config/newsletters'
import { useState } from 'react'

export function ArchivePage() {
  const [activeTag, setActiveTag] = useState('All')

  // Get unique tags across all newsletters
  const allTags = ['All', ...new Set(newsletters.flatMap(n => n.tags))]

  const filtered = activeTag === 'All'
    ? newsletters
    : newsletters.filter(n => n.tags.includes(activeTag))

  return (
    <PageWrapper>
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl uppercase font-bold text-white mb-4">
          All Issues
        </h1>
        <p className="text-smoke text-lg">
          Every issue of Field Foreman, in one place. Find the ones relevant to your trade.
        </p>
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-btn font-display uppercase text-xs tracking-wide transition-colors duration-150 ${
              activeTag === tag
                ? 'bg-foreman text-white'
                : 'bg-field-light text-smoke hover:text-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <NewsletterGrid newsletters={filtered} />
    </PageWrapper>
  )
}
