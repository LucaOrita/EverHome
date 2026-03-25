import { ChevronDown } from 'lucide-react';

export default function Dropdown({ value, options = [], onChange, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          w-full appearance-none
          bg-bg-page rounded-lg
          px-5 py-sp-4
          text-h3 font-semibold text-text-primary
          border-none outline-none
          cursor-pointer
          pr-12
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={20}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
      />
    </div>
  );
}
