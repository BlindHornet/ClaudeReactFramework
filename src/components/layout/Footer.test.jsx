import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

describe('Footer', () => {
  function renderFooter() {
    return render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
  }

  it('renders the brand name', () => {
    renderFooter()
    expect(screen.getByText('FIELD FOREMAN')).toBeInTheDocument()
  })

  it('renders footer nav links', () => {
    renderFooter()
    const links = screen.getAllByRole('link')
    const labels = links.map((l) => l.textContent)
    expect(labels).toContain('Home')
    expect(labels).toContain('Archive')
  })

  it('renders copyright notice', () => {
    renderFooter()
    expect(screen.getByText(/2025 Field Foreman/)).toBeInTheDocument()
  })
})
