export default function RadioOption({ label, selected = false, onSelect, className = '' }) {
  return (
    <button
      onClick={onSelect}
      className={`
        flex items-center gap-sp-3 w-full
        bg-bg-card border border-border-light rounded-lg
        px-5 py-sp-4 cursor-pointer
        transition-all duration-200 ease-out
        ${selected ? 'border-primary-dark bg-bg-selected' : 'hover:bg-bg-page'}
        ${className}
      `}
      style={{ minHeight: 44 }}
    >
      {/* Radio circle */}
      <div
        className={`
          flex items-center justify-center flex-shrink-0
          w-6 h-6 rounded-full border-2
          transition-all duration-200 ease-out
          ${selected ? 'border-primary-dark' : 'border-border-medium'}
        `}
      >
        {selected && (
          <div className="w-3 h-3 rounded-full bg-primary-dark" />
        )}
      </div>

      <span className="text-body text-text-primary">{label}</span>
    </button>
  );
}
