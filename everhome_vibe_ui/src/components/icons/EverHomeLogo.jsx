export default function EverHomeLogo({ size = 80, variant = 'dark' }) {
  const color = variant === 'light' ? '#FFFFFF' : '#0D3B66';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House outline — pentagon with pointed roof */}
      <path
        d="M60 12L18 48V106H102V48L60 12Z"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Protective hand — fingers curving from upper-left downward */}
      <path
        d="M32 44C28 56 28 68 34 78"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M40 37C35 50 34 64 38 76"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M48 34C43 48 42 62 44 74"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M56 36C52 48 52 60 53 70"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* WiFi signal arcs — bottom right */}
      <path
        d="M73 85Q79 79 85 85"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M69 79Q79 70 89 79"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M65 73Q79 61 93 73"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* WiFi dot */}
      <circle cx="79" cy="91" r="3.5" fill={color} />
    </svg>
  );
}
