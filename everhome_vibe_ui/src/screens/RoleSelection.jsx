import StatusBar from '../components/layout/StatusBar';
import { useTranslation } from '../i18n/LanguageContext';

export default function RoleSelection({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Header */}
        <div className="mt-sp-8">
          <p className="text-h3 text-primary-light font-semibold">{t('roleSelection.welcome')}</p>
          <h1 className="text-h1 text-text-primary mt-sp-2">
            {t('roleSelection.title')}
          </h1>
          <p className="text-body text-text-secondary mt-sp-3">
            {t('roleSelection.subtitle')}
          </p>
        </div>

        {/* Role cards */}
        <div className="mt-sp-8 flex flex-col gap-sp-4 card-stagger">
          {/* Senior card */}
          <button
            onClick={() => onNavigate?.('senior-dashboard')}
            className="
              animate-slide-up
              bg-primary-dark rounded-xl p-sp-6
              text-left cursor-pointer
              transition-shadow duration-200 hover:shadow-card-hover
            "
            style={{ minHeight: 160 }}
          >
            <p className="text-body text-white/80">{t('roleSelection.iAmA')}</p>
            <h2 className="text-display text-white mt-sp-1">{t('roleSelection.senior')}</h2>
            <p className="text-sm text-white/70 mt-sp-3">
              {t('roleSelection.seniorDesc')}
            </p>
          </button>

          {/* Caregiver card */}
          <button
            onClick={() => onNavigate?.('caregiver-dashboard')}
            className="
              animate-slide-up
              bg-bg-card-alt rounded-xl p-sp-6
              text-left cursor-pointer
              transition-shadow duration-200 hover:shadow-card-hover
            "
            style={{ minHeight: 160 }}
          >
            <p className="text-body text-text-secondary">{t('roleSelection.iAmA')}</p>
            <h2 className="text-display text-text-primary mt-sp-1">{t('roleSelection.caregiver')}</h2>
            <p className="text-sm text-text-secondary mt-sp-3">
              {t('roleSelection.caregiverDesc')}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
