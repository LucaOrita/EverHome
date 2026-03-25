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
        background: 'linear-gradient(180deg, var(--color-bg-splash) 0%, var(--color-bg-splash-end) 100%)',
      }}
    >
      <StatusBar variant="light" />

      <div className="flex-1 flex flex-col items-center justify-center px-sp-6">
        {/* Logo in white circle */}
        <div
          className="animate-logo-scale bg-white rounded-full flex items-center justify-center w-[140px] h-[140px]"
        >
          <EverHomeLogo size={90} variant="dark" />
        </div>

        {/* App name — refined weight 500-600, elegant feel */}
        <h1
          className="animate-fade-in-d200 text-display text-white mt-sp-6 font-medium"
        >
          {t('common.appName')}
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-d400 text-body text-white/80 italic mt-sp-3 text-center">
          {t('splash.tagline')}
        </p>
      </div>

      {/* Get Started button */}
      <div className="animate-slide-up-d600 px-sp-6 mb-sp-12">
        <Button
          variant="splash"
          onClick={() => onNavigate?.('login-email')}
        >
          {t('splash.getStarted')}
        </Button>
      </div>
    </div>
  );
}
