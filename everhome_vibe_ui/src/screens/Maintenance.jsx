import { useState } from 'react';
import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import RadioOption from '../components/ui/RadioOption';
import Dropdown from '../components/ui/Dropdown';
import { Info } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Maintenance({ onNavigate }) {
  const { t } = useTranslation();
  const issues = t('maintenance.issues');
  const [selectedSensor, setSelectedSensor] = useState('smoke-kitchen');
  const [selectedIssue, setSelectedIssue] = useState(issues[0]);
  const [showToast, setShowToast] = useState(false);

  const sensorOptions = [
    { value: 'smoke-kitchen', label: t('caregiverDashboard.smokeAlarmKitchen') },
    { value: 'motion-living', label: t('caregiverDashboard.motionLivingRoom') },
    { value: 'fall-bedroom', label: t('caregiverDashboard.fallDetectorBedroom') },
    { value: 'panic-bath', label: t('caregiverDashboard.panicButtonBath') },
  ];

  const handleHelp = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-status-safe text-white px-sp-6 py-sp-3 rounded-full shadow-card-hover text-sm font-semibold animate-fade-in">
          {t('maintenance.requestSubmitted')}
        </div>
      )}

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Title */}
        <h1 className="text-h1 text-primary-medium mt-sp-6">{t('maintenance.title')}</h1>

        {/* Info banner */}
        <Card variant="info" className="mt-sp-5">
          <div className="flex gap-sp-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center">
              <Info size={20} className="text-white" />
            </div>
            <p className="text-body text-text-primary">
              {t('maintenance.infoBanner')}
            </p>
          </div>
        </Card>

        {/* Which sensor */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-6">
          {t('maintenance.whichSensor')}
        </p>
        <Dropdown
          value={selectedSensor}
          options={sensorOptions}
          onChange={setSelectedSensor}
          className="mt-sp-3"
        />

        {/* Issue type */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-6">
          {t('maintenance.issueType')}
        </p>
        <div className="mt-sp-3 flex flex-col gap-sp-3">
          {issues.map((issue) => (
            <RadioOption
              key={issue}
              label={issue}
              selected={selectedIssue === issue}
              onSelect={() => setSelectedIssue(issue)}
            />
          ))}
        </div>

        {/* Help button */}
        <div className="flex justify-center mt-sp-6 mb-sp-4">
          <Button variant="help" onClick={handleHelp}>{t('common.help')}</Button>
        </div>
      </div>

      <BottomNav
        activeTab="maintenance"
        onTabChange={(tab) => {
          if (tab === 'home') onNavigate?.('caregiver-dashboard');
          if (tab === 'support') onNavigate?.('support');
        }}
      />
    </div>
  );
}
