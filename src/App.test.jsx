import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('vCard portfolio shell', () => {
  it('renders a tabbed vCard layout with the About panel active by default', () => {
    render(<App />)

    expect(screen.getByRole('tablist', { name: /portfolio sections/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'About', selected: true })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Resume', selected: false })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Portfolio', selected: false })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Contact', selected: false })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'About', level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
    expect(screen.getAllByText('Your Name').length).toBeGreaterThan(0)
    expect(screen.getAllByText('5+').length).toBeGreaterThan(0)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Build')).toBeInTheDocument()
  })

  it('switches between Resume and Portfolio while preserving existing content', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('tab', { name: 'Resume' }))
    const resumePanel = await screen.findByRole('tabpanel', { name: 'Resume' })
    expect(within(resumePanel).getByRole('heading', { name: 'Resume', level: 1 })).toBeInTheDocument()
    expect(within(resumePanel).getByText('Senior Software Engineer')).toBeInTheDocument()
    expect(within(resumePanel).getByText('Tech Stack')).toBeInTheDocument()
    expect(within(resumePanel).queryByText('E-Commerce Platform')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Portfolio' }))
    const portfolioPanel = await screen.findByRole('tabpanel', { name: 'Portfolio' })
    expect(within(portfolioPanel).getByRole('heading', { name: 'Portfolio', level: 1 })).toBeInTheDocument()
    expect(within(portfolioPanel).getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(within(portfolioPanel).getByText('Task Management App')).toBeInTheDocument()
    expect(within(portfolioPanel).queryByText('Senior Software Engineer')).not.toBeInTheDocument()
  })

  it('keeps the current contact form validation behavior in the Contact panel', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('tab', { name: 'Contact' }))
    const contactPanel = await screen.findByRole('tabpanel', { name: 'Contact' })
    await user.click(within(contactPanel).getByRole('button', { name: 'Send Message' }))

    expect(within(contactPanel).getByText('Name is required')).toBeInTheDocument()
    expect(within(contactPanel).getByText('Email is required')).toBeInTheDocument()
    expect(within(contactPanel).getByText('Message is required')).toBeInTheDocument()

    await user.type(within(contactPanel).getByLabelText('Name'), 'Your name')
    await user.type(within(contactPanel).getByLabelText('Email'), 'invalid-email')
    await user.type(within(contactPanel).getByLabelText('Message'), 'Your message...')
    await user.click(within(contactPanel).getByRole('button', { name: 'Send Message' }))

    expect(within(contactPanel).getByText('Invalid email')).toBeInTheDocument()
  })
})
