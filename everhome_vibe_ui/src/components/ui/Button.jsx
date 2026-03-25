import { AlertTriangle } from 'lucide-react';

const variants = {
  primary: {
    base: 'bg-primary-dark text-white font-button shadow-button w-full hover:brightness-110 active:brightness-90',
    height: 'h-14',
    radius: 'rounded-full',
  },
  secondary: {
    base: 'bg-bg-card text-primary-dark font-button border-2 border-primary-dark w-full hover:bg-bg-page',
    height: 'h-14',
    radius: 'rounded-full',
  },
  emergency: {
    base: 'bg-status-error text-white font-button w-full animate-emergency-pulse',
    height: 'h-14',
    radius: 'rounded-md',
  },
  help: {
    base: 'bg-accent-gold text-white font-button uppercase hover:bg-accent-gold-hover',
    height: 'py-3.5 px-12',
    radius: 'rounded-full',
  },
  badge: {
    base: 'bg-transparent text-primary-dark text-xs font-semibold border border-primary-dark',
    height: 'py-1.5 px-4',
    radius: 'rounded-full',
  },
};

export default function Button({
  variant = 'primary',
  children,
  onClick,
  fullWidth = false,
  className = '',
  disabled = false,
}) {
  const config = variants[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        transition-all duration-150 ease-in-out
        cursor-pointer select-none
        text-button
        ${config.base}
        ${config.height}
        ${config.radius}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{ minHeight: 44 }}
    >
      {variant === 'emergency' && <AlertTriangle size={20} />}
      {children}
    </button>
  );
}
