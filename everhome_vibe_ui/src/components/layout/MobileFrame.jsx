export default function MobileFrame({ children, scale = 1, className = '', interactive = true }) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{
        width: 390 * scale,
        height: 844 * scale,
      }}
    >
      <div
        className="relative bg-bg-card overflow-hidden"
        style={{
          width: 390,
          height: 844,
          borderRadius: '40px',
          border: '8px solid #1A1A2E',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 120,
            height: 30,
            backgroundColor: '#1A1A2E',
            borderRadius: '20px',
          }}
        />

        {/* Content area */}
        <div className={`phone-scroll w-full h-full overflow-x-hidden ${interactive ? 'overflow-y-auto' : 'overflow-y-hidden pointer-events-none'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
