import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import { useTranslation } from '../i18n/LanguageContext';

export default function AlertScreen({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 flex flex-col items-center justify-center px-sp-6">
        <h1 className="text-h1 text-status-error font-heading text-center">
          {t('alertScreen.fallDetected')}
        </h1>
        <p className="text-body text-text-secondary mt-sp-3 text-center">
          {t('alertScreen.location')}
        </p>
      </div>

      <BottomNav activeTab="home" onTabChange={(tab) => onNavigate?.(tab)} />
    </div>
  );
}
