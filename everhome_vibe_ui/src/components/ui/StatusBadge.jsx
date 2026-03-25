const colorMap = {
  safe: 'bg-status-safe',
  warning: 'bg-status-warning',
  info: 'bg-primary-medium',
  error: 'bg-status-error',
};

export default function StatusBadge({
  label,
  color = 'safe',
  showDot = true,
  className = '',
}) {
  if (showDot && !label) {
    return (
      <div
        className={`w-3 h-3 rounded-full ${colorMap[color]} ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-sp-2 ${className}`}>
      {showDot && (
        <div className={`w-3 h-3 rounded-full ${colorMap[color]}`} />
      )}
      {label && (
        <span
          className={`text-sm font-semibold ${
            color === 'safe' ? 'text-status-safe' : 'text-text-primary'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
