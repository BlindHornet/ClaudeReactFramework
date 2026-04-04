import { Card } from '@/components/ui/Card'

const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const LightningIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const ToolboxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const VALUE_CARDS = [
  {
    icon: <WrenchIcon />,
    title: 'Prompts That Actually Work',
    body: 'Real-world AI prompts tested on job site scenarios — writing customer emails, generating quotes, researching parts. Not theory. Actual copy-paste prompts.',
  },
  {
    icon: <LightningIcon />,
    title: 'No Fluff, Just Signal',
    body: "Every issue is 5 minutes max. We cut the buzzword soup and get straight to what matters. Your coffee won't go cold while you're reading.",
  },
  {
    icon: <ToolboxIcon />,
    title: 'Tools You Can Use Monday',
    body: "Software, extensions, and AI tricks that save real time on real jobs. If it doesn't work for a landscaper or an HVAC tech, we don't cover it.",
  },
]

export function ValueSection() {
  return (
    <section className="py-24 px-4 bg-field-mid">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl uppercase font-bold text-white text-center mb-4">
          What You&apos;re Actually Getting
        </h2>
        <p className="text-smoke text-lg text-center max-w-2xl mx-auto">
          Every issue takes under 5 minutes to read and leaves you with something you can use that same week.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {VALUE_CARDS.map((card) => (
            <Card key={card.title} hover={true} className="bg-field">
              <div className="mb-4">{card.icon}</div>
              <h3 className="font-display text-xl uppercase font-bold text-foreman mb-3">
                {card.title}
              </h3>
              <p className="text-smoke leading-relaxed">
                {card.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
