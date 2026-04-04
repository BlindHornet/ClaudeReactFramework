import { cn } from '@/utils/cn'

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  id,
  name,
  className,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
      className={cn(
        'w-full px-4 py-3 bg-field-mid border border-field-light rounded-btn text-white placeholder-smoke focus:outline-none focus:border-foreman focus:ring-1 focus:ring-foreman transition-colors duration-150',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    />
  )
}
