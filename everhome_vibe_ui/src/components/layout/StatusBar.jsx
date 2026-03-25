export default function StatusBar({ variant = 'dark' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-text-primary';

  return (
    <div className={`flex items-center justify-between px-sp-6 h-11 ${textColor}`}>
      {/* Time */}
      <span className="text-sm font-semibold">9:41</span>

      {/* Right icons: Signal, WiFi, Battery */}
      <div className="flex items-center gap-1.5">
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="9" width="3" height="3" rx="0.5" />
          <rect x="4" y="6" width="3" height="6" rx="0.5" />
          <rect x="8" y="3" width="3" height="9" rx="0.5" />
          <rect x="12" y="0" width="3" height="12" rx="0.5" />
        </svg>

        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" transform="translate(0,-2)" />
          <path d="M4.93 8.47a4.5 4.5 0 016.14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M2.1 5.64a8 8 0 0111.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0 3a11 11 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>

        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="0" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="2" y="2" width="18" height="8" rx="1" />
          <path d="M23 4v4a2 2 0 000-4z" />
        </svg>
      </div>
    </div>
  );
}
