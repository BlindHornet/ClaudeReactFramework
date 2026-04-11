import { cn } from '@/utils/cn'

export function PageWrapper({ children, className }) {
  return (
    <div className={cn('max-w-6xl mx-auto px-4 sm:px-6 py-12', className)}>
      {children}
    </div>
  )
}
