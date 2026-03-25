import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';
import { Home, DoorOpen, Thermometer, Activity, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
}

export default function SeniorDashboard({ onNavigate }) {
  const { t } = useTranslation();
  const timeOfDay = getTimeOfDay();

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Greeting */}
        <div className="mt-sp-6">
          <p className="text-body text-text-secondary">
            {t('seniorDashboard.greeting')('Margaret', timeOfDay)}
          </p>
          <h1 className="text-display text-primary-dark">Margaret</h1>
        </div>

        {/* Cards */}
        <div className="mt-sp-6 flex flex-col gap-sp-3 card-stagger">
          {/* Home Status */}
          <Card borderColor="var(--color-primary-medium)" className="animate-slide-up">
            <div className="flex items-start gap-sp-3">
              <Home size={24} className="text-primary-dark mt-0.5" />
              <div>
                <h3 className="text-h3 text-text-primary">{t('seniorDashboard.homeStatus')}</h3>
                <StatusBadge label={t('common.allSafe')} color="safe" className="mt-sp-2" />
                <p className="text-sm text-text-tertiary mt-sp-1">
                  {t('seniorDashboard.lastUpdated')} 11:08 AM
                </p>
                <p className="text-sm text-text-secondary mt-sp-1">
                  {t('seniorDashboard.allSensorsActive')}
                </p>
              </div>
            </div>
          </Card>

          {/* Front Door */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-sp-3">
              <DoorOpen size={24} className="text-primary-dark" />
              <div>
                <h3 className="text-h3 text-text-primary">{t('seniorDashboard.frontDoor')}</h3>
                <p className="text-sm text-text-secondary">{t('seniorDashboard.closed')}</p>
              </div>
            </div>
          </Card>

          {/* Temperature */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-sp-3">
              <Thermometer size={24} className="text-primary-dark" />
              <div>
                <h3 className="text-h3 text-text-primary">{t('seniorDashboard.temperature')}</h3>
                <p className="text-sm text-text-secondary">22°C</p>
              </div>
            </div>
          </Card>

          {/* Motion Sensor */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-sp-3">
              <Activity size={24} className="text-primary-dark" />
              <div>
                <h3 className="text-h3 text-text-primary">{t('seniorDashboard.motionSensor')}</h3>
                <p className="text-sm text-text-secondary">{t('seniorDashboard.active')}</p>
              </div>
            </div>
          </Card>

          {/* Fall Detector */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-sp-3">
              <ShieldAlert size={24} className="text-primary-dark" />
              <div>
                <h3 className="text-h3 text-text-primary">{t('seniorDashboard.fallDetector')}</h3>
                <p className="text-sm text-text-secondary">{t('seniorDashboard.active')}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Emergency Button */}
        <div className="mt-sp-5 mb-sp-4">
          <Button
            variant="emergency"
            onClick={() => onNavigate?.('emergency-confirmed')}
          >
            {t('common.emergency')}
          </Button>
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
