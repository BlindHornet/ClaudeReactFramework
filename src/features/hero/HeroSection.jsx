import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section
      className="min-h-screen bg-field flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(217,119,6,0.03) 25%, transparent 25%),
          linear-gradient(225deg, rgba(217,119,6,0.03) 25%, transparent 25%),
          linear-gradient(315deg, rgba(217,119,6,0.03) 25%, transparent 25%),
          linear-gradient(45deg, rgba(217,119,6,0.03) 25%, transparent 25%)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="inline-block text-foreman text-xs font-display uppercase tracking-widest mb-6 border border-foreman/30 px-3 py-1 rounded-btn">
          Weekly AI Tips
        </span>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-white leading-tight mb-6">
          AI Tips for People Who Actually Work for a Living
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
            <Button variant="ghost" size="lg">
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
