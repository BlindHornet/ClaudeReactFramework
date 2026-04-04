import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1006 0%, #111827 40%, #0f1a0f 100%)',
      }}
    >
      {/* Scanline texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        }}
      />

      {/* Amber radial glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(217,119,6,0.18), transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
        <span className="inline-block text-foreman text-xs font-display uppercase tracking-widest mb-6 border border-foreman/30 px-3 py-1 bg-foreman/5">
          Weekly AI Tips for the Trades
        </span>

        <h1
          className="font-display uppercase font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(42px, 7vw, 80px)', letterSpacing: '2px' }}
        >
          AI Tips for People Who{' '}
          <span className="text-foreman-light">Actually Work</span>{' '}
          for a Living
        </h1>

        <p className="text-smoke text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Field Foreman delivers practical, no-BS AI strategies straight to your inbox every week. Built for the trades. Zero buzzword soup.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#subscribe">
            <Button variant="primary" size="lg">
              Subscribe Free
            </Button>
          </a>
          <Link to="/archive">
            <Button variant="outline" size="lg">
              Browse Issues
            </Button>
          </Link>
        </div>

        <p className="text-smoke text-sm">
          Joined by HVAC techs, roofers, landscapers &amp; more
        </p>
      </div>
    </section>
  )
}
