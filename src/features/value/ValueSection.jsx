const VALUE_CARDS = [
  {
    num: '01',
    title: 'Prompts That Actually Work',
    body: 'Real-world AI prompts tested on job site scenarios — writing customer emails, generating quotes, researching parts. Not theory. Actual copy-paste prompts.',
  },
  {
    num: '02',
    title: 'No Fluff, Just Signal',
    body: "Every issue is 5 minutes max. We cut the buzzword soup and get straight to what matters. Your coffee won't go cold while you're reading.",
  },
  {
    num: '03',
    title: 'Tools You Can Use Monday',
    body: "Software, extensions, and AI tricks that save real time on real jobs. If it doesn't work for a landscaper or an HVAC tech, we don't cover it.",
  },
]

export function ValueSection() {
  return (
    <section className="py-24 px-4 bg-warm-dark border-t border-foreman/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-foreman text-xs font-display uppercase tracking-widest mb-4 border-l-2 border-foreman pl-3">
            What You&apos;re Getting
          </span>
          <h2 className="font-display text-4xl md:text-5xl uppercase font-bold text-white mb-4">
            What You&apos;re Actually Getting
          </h2>
          <p className="text-smoke text-lg max-w-2xl mx-auto">
            Every issue takes under 5 minutes to read and leaves you with something you can use that same week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {VALUE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-field p-8 relative group border-t-2 border-transparent hover:border-foreman transition-colors duration-300"
            >
              <div
                aria-hidden="true"
                className="font-display font-bold text-white/5 leading-none mb-4 select-none"
                style={{ fontSize: '64px' }}
              >
                {card.num}
              </div>
              <h3 className="font-display text-lg uppercase font-bold tracking-wider text-foreman-light mb-3">
                {card.title}
              </h3>
              <p className="text-smoke leading-relaxed text-sm">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
