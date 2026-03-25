import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Button from '../components/ui/Button';
import { useTranslation } from '../i18n/LanguageContext';

export default function SplashScreen({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col min-h-full"
      style={{
        background: 'linear-gradient(180deg, #0D3B66 0%, #0A2D4D 100%)',
      }}
    >
      <StatusBar variant="light" />

      <div className="flex-1 flex flex-col items-center justify-center px-sp-6">
        {/* Logo in white circle */}
        <div
          className="animate-logo-scale bg-white rounded-full flex items-center justify-center"
          style={{ width: 140, height: 140 }}
        >
          <EverHomeLogo size={90} variant="dark" />
        </div>

        {/* App name */}
        <h1
          className="animate-splash-text text-display text-white mt-sp-6"
          style={{ fontWeight: 600 }}
        >
          {t('common.appName')}
        </h1>

        {/* Tagline */}
        <p className="animate-splash-tagline text-body text-white/80 italic mt-sp-3 text-center">
          {t('splash.tagline')}
        </p>
      </div>

      {/* Get Started button */}
      <div className="animate-splash-button px-sp-6 mb-sp-12">
        <Button
          variant="splash"
          onClick={() => onNavigate?.('how-it-works')}
        >
          {t('splash.getStarted')}
        </Button>
      </div>
    </div>
  );
}
