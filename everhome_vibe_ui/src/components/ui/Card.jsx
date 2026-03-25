const variants = {
  standard: {
    bg: 'bg-bg-card',
    border: '',
    shadow: 'shadow-card',
  },
  warning: {
    bg: 'bg-warning-bg',
    border: 'border-l-4 border-status-warning',
    shadow: 'shadow-card',
  },
  info: {
    bg: 'bg-bg-info',
    border: '',
    shadow: '',
  },
  feature: {
    bg: 'bg-bg-page',
    border: '',
    shadow: '',
  },
};

export default function Card({
  variant = 'standard',
  children,
  className = '',
  borderColor,
}) {
  const config = variants[variant];
  const borderStyle = borderColor
    ? `border-l-4`
    : config.border;

  return (
    <div
      className={`
        rounded-lg p-sp-4
        ${config.bg}
        ${config.shadow}
        ${borderStyle}
        ${className}
      `}
      style={borderColor ? { borderLeftColor: borderColor } : undefined}
    >
      {children}
    </div>
  );
}
