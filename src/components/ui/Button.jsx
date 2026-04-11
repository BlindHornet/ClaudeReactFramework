import { cn } from '@/utils/cn'

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses = {
  primary: 'bg-foreman text-white hover:bg-foreman-dark',
  outline: 'border-2 border-foreman text-foreman hover:bg-foreman hover:text-white',
  ghost: 'text-smoke hover:text-white',
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  children,
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center font-display uppercase tracking-wide font-semibold transition-colors duration-150 rounded-btn cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}
