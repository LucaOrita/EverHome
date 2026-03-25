export default function Toggle({ options = [], activeOption, onToggle, className = '' }) {
  return (
    <div
      className={`
        inline-flex items-center
        bg-bg-card border border-border-light rounded-full
        p-1
        ${className}
      `}
      style={{ width: 250 }}
    >
      {options.map((option) => {
        const isActive = activeOption === option;
        return (
          <button
            key={option}
            onClick={() => onToggle?.(option)}
            className={`
              flex-1 py-2.5 px-6 rounded-full
              text-center cursor-pointer select-none
              transition-all duration-250 ease-in-out
              ${
                isActive
                  ? 'bg-primary-dark text-white font-semibold'
                  : 'bg-transparent text-primary-dark text-body'
              }
            `}
            style={{ minHeight: 44 }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
