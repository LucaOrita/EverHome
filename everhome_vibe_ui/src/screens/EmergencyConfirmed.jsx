import { useState, useEffect } from 'react';
import StatusBar from '../components/layout/StatusBar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Phone } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function EmergencyConfirmed({ onNavigate }) {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col min-h-full transition-colors duration-[3000ms] ease-in-out"
      style={{
        backgroundColor: seconds < 3 ? '#FFF0F0' : '#F0FFF5',
      }}
    >
      <StatusBar variant="dark" />

      <div className="flex-1 flex flex-col items-center px-sp-6 pb-sp-6 overflow-y-auto">
        {/* Animated Checkmark */}
        <div className="mt-sp-10 flex items-center justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            className="animate-check-draw"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#2E8B57"
              strokeWidth="4"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="283"
              style={{
                animation: 'checkCircleDraw 800ms ease-out forwards',
              }}
            />
            <path
              d="M30 52 L44 66 L70 38"
              stroke="#2E8B57"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="60"
              strokeDashoffset="60"
              style={{
                animation: 'checkTickDraw 400ms ease-out 600ms forwards',
              }}
            />
          </svg>
        </div>

        {/* Main Text */}
        <h1 className="text-display text-primary-dark font-bold text-center mt-sp-6">
          {t('emergencyConfirmed.helpOnTheWay')}
        </h1>
        <p className="text-h3 text-text-secondary text-center mt-sp-3">
          Maria {t('emergencyConfirmed.notified')}
        </p>

        {/* Status Section */}
        <Card variant="info" className="w-full mt-sp-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-body text-text-primary font-semibold">
                {t('emergencyConfirmed.emergencyServices')}
              </p>
              <p className="text-small text-text-secondary">
                {t('emergencyConfirmed.notCalledYet')}
              </p>
            </div>
            <button
              onClick={() => {}}
              className="flex items-center gap-sp-2 px-sp-4 py-sp-2 rounded-full border-2 border-primary-dark text-primary-dark text-button-sm font-semibold cursor-pointer hover:bg-bg-page transition-colors"
              style={{ minHeight: 44 }}
            >
              <Phone size={16} />
              {t('emergencyConfirmed.callEmergency')}
            </button>
          </div>
        </Card>

        {/* Reassurance */}
        <p className="text-body text-text-secondary text-center mt-sp-6">
          {t('emergencyConfirmed.stayCalmMsg')}
        </p>

        {/* Timer */}
        <p className="text-small text-text-tertiary text-center mt-sp-4">
          {t('emergencyConfirmed.alertSent')} {seconds} {t('emergencyConfirmed.secondsAgo')}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* I'm OK Button */}
        <div className="w-full mt-sp-6">
          <Button
            variant="secondary"
            onClick={() => onNavigate?.('senior-dashboard')}
          >
            {t('emergencyConfirmed.imOk')}
          </Button>
        </div>
      </div>
    </div>
  );
}
