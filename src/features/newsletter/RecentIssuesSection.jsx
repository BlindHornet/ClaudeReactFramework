import { Link } from 'react-router-dom'
import { newsletters } from '@/config/newsletters.js'
import { NewsletterGrid } from '@/features/newsletter/NewsletterGrid'

export function RecentIssuesSection() {
  return (
    <section className="py-20 px-4 bg-field">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display uppercase text-3xl md:text-4xl text-white font-bold">
            Recent Issues
          </h2>
          <Link
            to="/archive"
            className="text-foreman hover:text-foreman-light transition-colors text-sm font-display uppercase tracking-wide"
          >
            See All Issues
          </Link>
        </div>

        <NewsletterGrid newsletters={newsletters} limit={3} />
      </div>
    </section>
  )
}
