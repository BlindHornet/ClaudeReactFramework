import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/archive', label: 'Archive' },
  { to: '/shop', label: 'Shop' },
  { to: '/partner', label: 'Partner' },
]

export function Footer() {
  return (
    <footer className="bg-near-black border-t-2 border-foreman mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">
          <div>
            <p className="font-display text-foreman text-lg font-bold tracking-widest uppercase mb-2">
              FIELD FOREMAN
            </p>
            <p className="text-smoke text-sm">
              AI tips for the people who actually build things.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-smoke hover:text-white text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-field-light">
          <p className="text-smoke text-xs">
            &copy; 2025 Field Foreman. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-smoke hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-smoke hover:text-white text-xs transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
