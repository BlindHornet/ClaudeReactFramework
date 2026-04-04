import { render, screen } from '@testing-library/react'
import { ValueSection } from './ValueSection'

describe('ValueSection', () => {
  it('renders the section heading', () => {
    render(<ValueSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders all three value card headings', () => {
    render(<ValueSection />)
    expect(screen.getByText(/Prompts That Actually Work/i)).toBeInTheDocument()
    expect(screen.getByText(/No Fluff, Just Signal/i)).toBeInTheDocument()
    expect(screen.getByText(/Tools You Can Use Monday/i)).toBeInTheDocument()
  })

  it('renders ghost numbers for each card', () => {
    render(<ValueSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
