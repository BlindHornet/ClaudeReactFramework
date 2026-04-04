import { render, screen } from '@testing-library/react'
import { NewsletterCard } from './NewsletterCard'

const mockNewsletter = {
  id: 'issue-006',
  title: "5 AI Prompts That'll Save Your HVAC Tech 2 Hours on Friday",
  blurb: 'Friday afternoons are for getting out early.',
  date: '2025-03-01',
  tags: ['HVAC', 'Prompts'],
  coverEmoji: '🔧',
  readUrl: '#',
}

describe('NewsletterCard', () => {
  it('renders the newsletter title', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText(mockNewsletter.title)).toBeInTheDocument()
  })

  it('renders an issue number badge derived from the id', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText(/Issue\s+#006/)).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText('HVAC')).toBeInTheDocument()
    expect(screen.getByText('Prompts')).toBeInTheDocument()
  })

  it('renders a Read Issue link', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByRole('link', { name: /read issue/i })).toBeInTheDocument()
  })

  it('does not render the cover emoji', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.queryByText('🔧')).not.toBeInTheDocument()
  })
})
