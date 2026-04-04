import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  function renderHero() {
    return render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    )
  }

  it('renders the main heading', () => {
    renderHero()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders Subscribe Free button', () => {
    renderHero()
    expect(screen.getByRole('link', { name: /subscribe free/i })).toBeInTheDocument()
  })

  it('renders Browse Issues link', () => {
    renderHero()
    expect(screen.getByRole('link', { name: /browse issues/i })).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    renderHero()
    expect(screen.getByText(/weekly ai tips/i)).toBeInTheDocument()
  })
})
