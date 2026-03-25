export default function Tag({ children, variant = 'light', className = '' }) {
  const styles =
    variant === 'dark'
      ? 'bg-white/20 text-white border-white/30'
      : 'bg-bg-card-blue/50 text-primary-dark border-primary-dark/15';

  return (
    <span
      className={`
        inline-flex items-center
        text-xs font-medium
        px-3.5 py-1.5
        rounded-full border
        ${styles}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
