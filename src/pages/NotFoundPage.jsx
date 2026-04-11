import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-field flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-foreman text-8xl font-bold mb-4">404</p>
        <h1 className="font-display text-3xl uppercase font-bold text-white mb-4">
          Lost on the Job Site?
        </h1>
        <p className="text-smoke mb-8">
          This page doesn't exist. Maybe it got buried under some drywall.
          Head back home and we'll get you sorted.
        </p>
        <Link to="/">
          <Button variant="primary">Back to Home Base</Button>
        </Link>
      </div>
    </div>
  )
}
