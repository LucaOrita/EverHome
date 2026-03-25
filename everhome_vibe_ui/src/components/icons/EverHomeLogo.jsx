export default function EverHomeLogo({ size = 80, variant = 'dark' }) {
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#0D3B66';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House outline */}
      <path
        d="M60 15L20 50V100H45V75H75V100H100V50L60 15Z"
        stroke={primaryColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Protective hand curve */}
      <path
        d="M35 80C35 65 42 55 55 50C48 58 46 65 48 75"
        stroke={primaryColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 85C40 72 44 60 58 52"
        stroke={primaryColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* WiFi signal arcs */}
      <path
        d="M68 58C73 58 78 60 82 64"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M68 48C77 48 85 52 91 58"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M68 38C81 38 92 44 100 52"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* WiFi dot */}
      <circle cx="68" cy="67" r="3.5" fill={primaryColor} />
    </svg>
  );
}
