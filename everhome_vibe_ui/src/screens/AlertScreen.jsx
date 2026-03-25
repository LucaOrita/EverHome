import StatusBar from '../components/layout/StatusBar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { AlertTriangle, Phone, CheckCircle, User } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const timelineEntries = [
  { time: '14:23', dotColor: 'bg-status-error', key: 'detected' },
  { time: '14:23', dotColor: 'bg-primary-medium', key: 'alertSent' },
  { time: '14:24', dotColor: 'bg-status-safe', key: 'youOpened' },
];

export default function AlertScreen({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="light" />

      {/* Urgent Header */}
      <div
        className="px-sp-6 pt-sp-4 pb-sp-8 flex flex-col items-center text-center bg-status-error"
      >
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-20 h-20 rounded-full animate-pulse-ring bg-white/20"
          />
          <AlertTriangle size={48} className="text-white relative" />
        </div>

        <h1 className="text-display text-white font-bold uppercase mt-sp-4">
          {t('alertScreen.fallDetected')}
        </h1>
        <p className="text-body text-white/80 mt-sp-2">
          {t('alertScreen.location')}
        </p>
        <p className="text-sm text-white/60 mt-sp-1">
          2 {t('alertScreen.minutesAgo')} — 14:23 PM
        </p>
      </div>

      {/* Person Section */}
      <div className="flex flex-col items-center p-sp-6">
        <div className="w-16 h-16 rounded-full bg-bg-page flex items-center justify-center">
          <User size={32} className="text-primary-medium" />
        </div>
        <h2 className="text-display text-primary-dark mt-sp-3">Margaret</h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-sp-3 px-sp-6">
        <Button variant="primary" onClick={() => {}}>
          <span className="flex items-center justify-center gap-sp-2">
            <Phone size={20} />
            {t('alertScreen.callPerson')}
          </span>
        </Button>

        <Button variant="emergency" onClick={() => {}}>
          <span className="flex items-center justify-center gap-sp-2">
            <AlertTriangle size={20} />
            {t('alertScreen.callEmergency')}
          </span>
        </Button>

        <Button variant="secondary" onClick={() => onNavigate?.('caregiver-dashboard')}>
          <span className="flex items-center justify-center gap-sp-2">
            <CheckCircle size={20} />
            {t('alertScreen.markSafe')}
          </span>
        </Button>
      </div>

      {/* Notification Card */}
      <div className="mt-sp-4 mx-sp-6">
        <Card variant="info">
          <p className="text-sm text-text-secondary">
            {t('alertScreen.otherCaregiversNotified')}
          </p>
          <p className="text-body font-semibold text-primary-dark mt-sp-1">
            {t('alertScreen.caregiverNames')}
          </p>
        </Card>
      </div>

      {/* Timeline */}
      <div className="mt-sp-4 mx-sp-6 mb-sp-6">
        <div className="flex flex-col gap-0">
          {timelineEntries.map((entry, i) => (
            <div key={entry.key} className="flex items-start gap-sp-3">
              <span className="text-xs text-text-tertiary w-12 text-right pt-0.5">
                {entry.time}
              </span>
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${entry.dotColor}`} />
                {i < timelineEntries.length - 1 && (
                  <div className="w-0.5 h-6 bg-border-light" />
                )}
              </div>
              <span className="text-sm text-text-primary pt-0.5">
                {t(`alertScreen.timeline.${entry.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
