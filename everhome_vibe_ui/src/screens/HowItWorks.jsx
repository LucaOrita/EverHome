import { useState } from 'react';
import StatusBar from '../components/layout/StatusBar';
import Button from '../components/ui/Button';
import { useTranslation } from '../i18n/LanguageContext';

/* ─── Flat SVG illustrations for each step ─── */

function AssessIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full max-w-[280px]">
      {/* House outline */}
      <path d="M140 30 L50 90 L50 190 L230 190 L230 90 Z" fill="var(--color-bg-page)" stroke="var(--color-primary-medium)" strokeWidth="2" />
      <rect x="50" y="90" width="180" height="100" fill="var(--color-bg-page)" stroke="var(--color-primary-medium)" strokeWidth="2" />
      {/* Roof */}
      <path d="M40 94 L140 26 L240 94" stroke="var(--color-primary-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Door */}
      <rect x="120" y="140" width="40" height="50" rx="3" fill="var(--color-primary-dark)" />
      <circle cx="153" cy="167" r="3" fill="var(--color-accent-gold)" />
      {/* Window left */}
      <rect x="70" y="110" width="35" height="30" rx="3" fill="white" stroke="var(--color-primary-medium)" strokeWidth="1.5" />
      <line x1="87.5" y1="110" x2="87.5" y2="140" stroke="var(--color-primary-medium)" strokeWidth="1" />
      <line x1="70" y1="125" x2="105" y2="125" stroke="var(--color-primary-medium)" strokeWidth="1" />
      {/* Window right */}
      <rect x="175" y="110" width="35" height="30" rx="3" fill="white" stroke="var(--color-primary-medium)" strokeWidth="1.5" />
      <line x1="192.5" y1="110" x2="192.5" y2="140" stroke="var(--color-primary-medium)" strokeWidth="1" />
      <line x1="175" y1="125" x2="210" y2="125" stroke="var(--color-primary-medium)" strokeWidth="1" />
      {/* Clipboard overlay */}
      <rect x="180" y="40" width="60" height="80" rx="6" fill="white" stroke="var(--color-primary-medium)" strokeWidth="2" />
      <rect x="198" y="34" width="24" height="12" rx="4" fill="var(--color-primary-medium)" />
      {/* Checklist lines */}
      <circle cx="195" cy="62" r="4" fill="var(--color-status-safe)" />
      <path d="M193 62 L194.5 63.5 L197.5 60.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="204" y="59" width="28" height="5" rx="2" fill="var(--color-border-light)" />
      <circle cx="195" cy="78" r="4" fill="var(--color-status-safe)" />
      <path d="M193 78 L194.5 79.5 L197.5 76.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="204" y="75" width="28" height="5" rx="2" fill="var(--color-border-light)" />
      <circle cx="195" cy="94" r="4" fill="var(--color-primary-light)" />
      <rect x="204" y="91" width="28" height="5" rx="2" fill="var(--color-border-light)" />
      {/* Magnifying glass */}
      <circle cx="72" cy="60" r="18" stroke="var(--color-primary-dark)" strokeWidth="2.5" fill="var(--color-primary-light)" fillOpacity="0.15" />
      <line x1="85" y1="73" x2="96" y2="84" stroke="var(--color-primary-dark)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function AdaptIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full max-w-[280px]">
      {/* Room floor */}
      <rect x="30" y="170" width="220" height="8" rx="4" fill="var(--color-border-light)" />
      {/* Wall */}
      <rect x="30" y="50" width="220" height="120" rx="4" fill="var(--color-bg-page)" stroke="var(--color-border-light)" strokeWidth="1.5" />
      {/* Motion sensor on wall */}
      <rect x="55" y="68" width="36" height="22" rx="6" fill="white" stroke="var(--color-primary-medium)" strokeWidth="2" />
      <circle cx="73" cy="79" r="5" fill="var(--color-primary-medium)" />
      {/* Signal waves from motion sensor */}
      <path d="M83 72 Q90 79 83 86" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M88 68 Q98 79 88 90" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Smoke detector on ceiling */}
      <circle cx="140" cy="60" r="14" fill="white" stroke="var(--color-accent-gold)" strokeWidth="2" />
      <circle cx="140" cy="60" r="4" fill="var(--color-accent-gold)" />
      {/* Fall detector / wearable */}
      <rect x="185" y="68" width="40" height="22" rx="11" fill="white" stroke="var(--color-status-safe)" strokeWidth="2" />
      <circle cx="198" cy="79" r="3" fill="var(--color-status-safe)" />
      <rect x="206" y="76" width="12" height="6" rx="2" fill="var(--color-status-safe)" fillOpacity="0.3" />
      {/* Wrench icon */}
      <g transform="translate(120, 110)">
        <rect x="0" y="8" width="40" height="30" rx="4" fill="white" stroke="var(--color-accent-gold)" strokeWidth="2" />
        <path d="M10 20 L18 12 L22 16 L14 24" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18 L30 12 Q34 8 30 4 Q26 8 24 10 L20 14" stroke="var(--color-primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Connection lines */}
      <line x1="73" y1="90" x2="73" y2="115" stroke="var(--color-primary-light)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="140" y1="74" x2="140" y2="115" stroke="var(--color-accent-gold)" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
      <line x1="205" y1="90" x2="205" y2="115" stroke="var(--color-status-safe)" strokeWidth="1" strokeDasharray="4 3" />
      {/* Labels */}
      <text x="73" y="158" textAnchor="middle" fontSize="9" fill="var(--color-text-secondary)" fontFamily="var(--font-sans)">Motion</text>
      <text x="140" y="158" textAnchor="middle" fontSize="9" fill="var(--color-text-secondary)" fontFamily="var(--font-sans)">Smoke</text>
      <text x="205" y="158" textAnchor="middle" fontSize="9" fill="var(--color-text-secondary)" fontFamily="var(--font-sans)">Fall Detect</text>
    </svg>
  );
}

function AssureIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full max-w-[280px]">
      {/* Phone body */}
      <rect x="90" y="20" width="100" height="180" rx="16" fill="white" stroke="var(--color-primary-dark)" strokeWidth="2.5" />
      {/* Dynamic island */}
      <rect x="122" y="28" width="36" height="10" rx="5" fill="var(--color-primary-dark)" />
      {/* Screen content area */}
      <rect x="98" y="46" width="84" height="140" rx="4" fill="var(--color-bg-page)" />
      {/* Status cards on phone */}
      <rect x="104" y="54" width="72" height="24" rx="4" fill="white" stroke="var(--color-status-safe)" strokeWidth="1.5" />
      <circle cx="115" cy="66" r="5" fill="var(--color-status-safe)" />
      <path d="M113 66 L114.5 67.5 L117.5 64.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="124" y="61" width="44" height="4" rx="2" fill="var(--color-border-light)" />
      <rect x="124" y="68" width="30" height="3" rx="1.5" fill="var(--color-status-safe)" fillOpacity="0.3" />

      <rect x="104" y="84" width="72" height="24" rx="4" fill="white" stroke="var(--color-primary-medium)" strokeWidth="1" />
      <rect x="110" y="90" width="28" height="4" rx="2" fill="var(--color-primary-medium)" fillOpacity="0.4" />
      <rect x="110" y="98" width="40" height="3" rx="1.5" fill="var(--color-border-light)" />

      <rect x="104" y="114" width="72" height="24" rx="4" fill="white" stroke="var(--color-primary-medium)" strokeWidth="1" />
      <rect x="110" y="120" width="24" height="4" rx="2" fill="var(--color-primary-medium)" fillOpacity="0.4" />
      <rect x="110" y="128" width="36" height="3" rx="1.5" fill="var(--color-border-light)" />

      {/* Emergency button on phone */}
      <rect x="110" y="146" width="60" height="20" rx="10" fill="var(--color-status-error)" fillOpacity="0.15" stroke="var(--color-status-error)" strokeWidth="1" />
      <text x="140" y="160" textAnchor="middle" fontSize="8" fill="var(--color-status-error)" fontWeight="bold" fontFamily="var(--font-sans)">SOS</text>

      {/* Notification badge */}
      <circle cx="180" cy="40" r="12" fill="var(--color-status-safe)" />
      <path d="M175 40 L178 43 L185 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Signal arcs from phone */}
      <path d="M60 100 Q75 70 90 80" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M50 110 Q68 72 85 76" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M220 100 Q205 70 190 80" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M230 110 Q212 72 195 76" stroke="var(--color-primary-light)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Left: person icon (senior) */}
      <circle cx="45" cy="140" r="10" fill="var(--color-primary-light)" fillOpacity="0.2" stroke="var(--color-primary-medium)" strokeWidth="1.5" />
      <circle cx="45" cy="136" r="4" fill="var(--color-primary-medium)" />
      <path d="M37 150 Q45 144 53 150" stroke="var(--color-primary-medium)" strokeWidth="1.5" fill="none" />

      {/* Right: person icon (caregiver) */}
      <circle cx="235" cy="140" r="10" fill="var(--color-status-safe)" fillOpacity="0.2" stroke="var(--color-status-safe)" strokeWidth="1.5" />
      <circle cx="235" cy="136" r="4" fill="var(--color-status-safe)" />
      <path d="M227 150 Q235 144 243 150" stroke="var(--color-status-safe)" strokeWidth="1.5" fill="none" />

      {/* Connection dotted lines */}
      <line x1="56" y1="140" x2="85" y2="120" stroke="var(--color-primary-light)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="224" y1="140" x2="195" y2="120" stroke="var(--color-status-safe)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

const onboardingSteps = [
  {
    key: 'assess',
    Illustration: AssessIllustration,
    accentColor: 'var(--color-primary-medium)',
    bgGradient: 'linear-gradient(180deg, #E8F0FE 0%, #F5F8FF 100%)',
  },
  {
    key: 'adapt',
    Illustration: AdaptIllustration,
    accentColor: 'var(--color-accent-gold)',
    bgGradient: 'linear-gradient(180deg, #FFF8EC 0%, #FFFCF5 100%)',
  },
  {
    key: 'assure',
    Illustration: AssureIllustration,
    accentColor: 'var(--color-status-safe)',
    bgGradient: 'linear-gradient(180deg, #EDFFF4 0%, #F5FFF9 100%)',
  },
];

export default function HowItWorks({ onNavigate, initialStep = 0 }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(initialStep);

  const current = onboardingSteps[step];
  const isLast = step === onboardingSteps.length - 1;

  const handleNext = () => {
    if (isLast) {
      onNavigate?.('dashboard-from-onboarding');
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleSkip = () => {
    onNavigate?.('dashboard-from-onboarding');
  };

  return (
    <div className="flex flex-col h-full" style={{ background: current.bgGradient }}>
      <StatusBar variant="dark" />

      <div className="flex-1 min-h-0 flex flex-col px-sp-6 overflow-y-auto">
        {/* Skip button */}
        {!isLast && (
          <div className="flex justify-end mt-sp-2">
            <button
              onClick={handleSkip}
              className="text-sm text-text-tertiary hover:text-text-secondary cursor-pointer py-sp-1 px-sp-2"
            >
              {t('common.skip')}
            </button>
          </div>
        )}

        {/* Illustration */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div key={step} className="animate-fade-in flex flex-col items-center">
            <current.Illustration />

            {/* Text content */}
            <div className="mt-sp-6 text-center">
              <p
                className="text-xs uppercase tracking-[0.2em] font-bold"
                style={{ color: current.accentColor }}
              >
                {t('howItWorks.title')}
              </p>
              <h1 className="text-display font-bold text-primary-dark mt-sp-2">
                {t(`howItWorks.${current.key}Title`)}
              </h1>
              <p className="text-body text-text-secondary mt-sp-3 max-w-[300px] mx-auto leading-relaxed">
                {t(`howItWorks.${current.key}Desc`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom area: dots + button */}
      <div className="px-sp-6 pb-sp-10 pt-sp-4">
        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-sp-2 mb-sp-5">
          {onboardingSteps.map((s, i) => (
            <div
              key={s.key}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === step ? 24 : 8,
                height: 8,
                backgroundColor: i === step ? current.accentColor : 'var(--color-border-light)',
              }}
            />
          ))}
        </div>

        <Button
          variant="primary"
          onClick={handleNext}
        >
          {isLast ? t('common.continue') : t('common.next')}
        </Button>
      </div>
    </div>
  );
}
