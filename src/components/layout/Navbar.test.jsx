import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  function renderNavbar() {
    return render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  }

  it('renders the brand name', () => {
    renderNavbar()
    expect(screen.getByText('FIELD FOREMAN')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderNavbar()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Archive')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Partner')).toBeInTheDocument()
  })

  it('renders a mobile menu toggle button', () => {
    renderNavbar()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
