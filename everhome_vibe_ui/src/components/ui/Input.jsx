export default function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-sp-2 ${className}`}>
      {label && (
        <label className="text-body font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full bg-bg-card text-body text-text-primary
          border border-border-light rounded-sm
          px-sp-4 py-3.5
          placeholder:text-text-tertiary
          outline-none
          transition-all duration-200 ease-in-out
          focus:border-primary-medium
          focus:shadow-[0_0_0_3px_rgba(26,95,158,0.1)]
        "
      />
    </div>
  );
}
