import { cn } from '@/utils/cn'

export function Card({ children, className, hover = false }) {
  return (
    <div
      className={cn(
        'bg-field-mid rounded-card p-6',
        hover && 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30',
        className
      )}
    >
      {children}
    </div>
  )
}
