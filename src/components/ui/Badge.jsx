import { cn } from '@/utils/cn'

const variantClasses = {
  default: 'bg-field-light text-smoke',
  new: 'bg-foreman text-white',
  'coming-soon': 'bg-field-light text-foreman border border-foreman',
  popular: 'bg-foreman text-white',
}

export function Badge({ variant = 'default', children, className }) {
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-xs font-display uppercase tracking-wider rounded',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
