import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-field flex items-center justify-center">
          <div className="text-center p-8">
            <p className="font-display text-foreman text-2xl uppercase tracking-wide mb-4">
              Something went sideways.
            </p>
            <p className="text-smoke mb-6">
              Not your fault &mdash; try refreshing the page.
            </p>
            <a href="/" className="text-foreman hover:text-foreman-light underline">
              Head back home
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
