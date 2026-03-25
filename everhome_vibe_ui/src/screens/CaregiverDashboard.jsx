import { useState } from 'react';
import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';
import { useTranslation } from '../i18n/LanguageContext';

export default function CaregiverDashboard({ onNavigate }) {
  const { t } = useTranslation();
  const [showAlertDemo, setShowAlertDemo] = useState(false);

  return (
    <div className="flex flex-col h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 min-h-0 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Alert Demo Toggle */}
        <div className="mt-sp-3 text-right">
          <span
            onClick={() => setShowAlertDemo((prev) => !prev)}
            className="text-xs text-text-link cursor-pointer hover:underline"
          >
            {showAlertDemo ? `✓ ${t('caregiverDashboard.clearAlert')}` : `🔔 ${t('caregiverDashboard.simulateAlert')}`}
          </span>
        </div>

        {/* Header */}
        <div className="mt-sp-3 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">{t('caregiverDashboard.monitoring')}</p>
            <h1 className="text-h1 text-text-primary">Margaret{t('caregiverDashboard.home')}</h1>

            {showAlertDemo ? (
              <div
                className="mt-sp-2 rounded-lg p-sp-3 bg-emergency-warm"
              >
                <p className="text-body font-semibold text-status-error">
                  ⚠️ {t('alertScreen.fallDetected')}
                </p>
                <p className="text-sm text-status-error/80">
                  {t('alertScreen.location')}
                </p>
                <span
                  onClick={() => onNavigate?.('alert-screen')}
                  className="text-xs text-text-link underline cursor-pointer mt-sp-1 inline-block"
                >
                  {t('caregiverDashboard.tapToViewDetails')} →
                </span>
              </div>
            ) : (
              <StatusBadge label={t('common.allSafe')} color="safe" className="mt-sp-2" />
            )}

            <p className={`text-sm mt-sp-1 ${showAlertDemo ? 'text-status-error' : 'text-text-tertiary'}`}>
              {t('caregiverDashboard.lastActivity')} {showAlertDemo ? t('caregiverDashboard.justNow') : t('caregiverDashboard.timeAgo')}
            </p>
            <p className="text-sm italic text-text-secondary mt-sp-1">
              Margaret {t('caregiverDashboard.safeAtHome')}
            </p>
          </div>
          <Button variant="badge">{t('caregiverDashboard.carePlan')}</Button>
        </div>

        {/* Feature cards row */}
        <div className="mt-sp-5 grid grid-cols-2 gap-sp-3 card-stagger">
          <Card variant="feature" className="animate-slide-up">
            <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold">
              {t('caregiverDashboard.motionIn')}
            </p>
            <h3 className="text-h3 font-bold text-text-primary mt-sp-1">{t('caregiverDashboard.bedroom')}</h3>
            <p className="text-sm text-text-tertiary mt-sp-1">{t('caregiverDashboard.now')}</p>
          </Card>

          <Card variant="feature" className="animate-slide-up">
            <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold">
              {t('caregiverDashboard.frontDoor')}
            </p>
            <h3 className="text-h3 font-bold text-status-safe mt-sp-1">{t('caregiverDashboard.locked')}</h3>
            <p className="text-sm text-text-tertiary mt-sp-1">{t('caregiverDashboard.sinceMorning')}</p>
          </Card>
        </div>

        {/* Sensors label */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-5">
          {t('caregiverDashboard.sensors')}
        </p>

        {/* Sensor list */}
        <div className="mt-sp-3 flex flex-col gap-sp-3 card-stagger">
          <Card borderColor="var(--color-primary-medium)" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  {t('caregiverDashboard.fallDetectorBedroom')}
                </h3>
                <p className="text-sm text-text-secondary">{t('caregiverDashboard.daysClear')}</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card borderColor="var(--color-primary-medium)" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  {t('caregiverDashboard.motionLivingRoom')}
                </h3>
                <p className="text-sm text-text-secondary">{t('caregiverDashboard.activeNormal')}</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card variant="warning" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  {t('caregiverDashboard.smokeAlarmKitchen')}
                </h3>
                <p className="text-sm text-status-warning">
                  {t('caregiverDashboard.lowBattery')}
                </p>
              </div>
              <StatusBadge color="warning" />
            </div>
          </Card>

          <Card borderColor="var(--color-primary-medium)" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  {t('caregiverDashboard.panicButtonBath')}
                </h3>
                <p className="text-sm text-text-secondary">{t('caregiverDashboard.readyNotTriggered')}</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card borderColor="var(--color-primary-medium)" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  {t('caregiverDashboard.sleepSensorBedroom')}
                </h3>
                <p className="text-sm text-text-secondary">
                  {t('caregiverDashboard.sleepData')}
                </p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>
        </div>
      </div>

      <BottomNav
        activeTab="home"
        onTabChange={(tab) => {
          if (tab === 'maintenance') onNavigate?.('maintenance');
          if (tab === 'support') onNavigate?.('support');
        }}
      />
    </div>
  );
}
