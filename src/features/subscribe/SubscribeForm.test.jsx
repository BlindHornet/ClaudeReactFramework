import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('renders an email input', () => {
    render(<SubscribeForm />)
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<SubscribeForm />)
    expect(screen.getByRole('button', { name: /join the crew/i })).toBeInTheDocument()
  })

  it('input and button are siblings inside the same form row', () => {
    render(<SubscribeForm />)
    const input = screen.getByPlaceholderText('your@email.com')
    const button = screen.getByRole('button', { name: /join the crew/i })
    expect(input.closest('div')).toBe(button.closest('div'))
  })

  it('updates email value on input', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)
    const input = screen.getByPlaceholderText('your@email.com')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })
})
