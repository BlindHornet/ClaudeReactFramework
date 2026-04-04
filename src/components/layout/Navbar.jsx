import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/archive', label: 'Archive' },
  { to: '/shop', label: 'Shop' },
  { to: '/partner', label: 'Partner' },
]

function navLinkClass({ isActive }) {
  const base = 'font-display uppercase tracking-wide text-sm transition-colors'
  return isActive
    ? `${base} text-foreman`
    : `${base} text-smoke hover:text-white`
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleLinkClick() {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-near-black border-b-2 border-foreman">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-foreman text-xl font-bold tracking-widest uppercase"
        >
          FIELD FOREMAN
        </Link>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-smoke hover:text-white transition-colors text-sm font-display uppercase tracking-wide"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '\u00d7 Close' : '\u2261 Menu'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-field-mid border-t border-field-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
