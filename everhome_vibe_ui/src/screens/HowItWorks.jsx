import StatusBar from '../components/layout/StatusBar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useTranslation } from '../i18n/LanguageContext';
import { ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    key: 'assess',
    Icon: ClipboardCheck,
    titleColor: 'text-primary-medium',
    borderColor: '#3A7BC8',
  },
  {
    key: 'adapt',
    Icon: Wrench,
    titleColor: 'text-accent-gold',
    borderColor: '#C9A96E',
  },
  {
    key: 'assure',
    Icon: ShieldCheck,
    titleColor: 'text-status-safe',
    borderColor: '#2E8B57',
  },
];

export default function HowItWorks({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Header */}
        <div className="mt-sp-8 text-center">
          <h1 className="text-h1 font-bold text-primary-dark">
            {t('howItWorks.title')}
          </h1>
          <p className="text-body text-text-secondary mt-sp-2">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Step Cards */}
        <div className="mt-sp-8 flex flex-col gap-sp-5 card-stagger">
          {steps.map((step, index) => {
            const { key, Icon, titleColor, borderColor } = step;
            return (
              <Card
                key={key}
                borderColor={borderColor}
                className={`animate-slide-up p-sp-6`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-sp-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon size={40} className="text-primary-dark" />
                  </div>
                  <div>
                    <h2 className={`text-h2 font-bold ${titleColor}`}>
                      {t(`howItWorks.${key}Title`)}
                    </h2>
                    <p className="text-body text-text-secondary mt-sp-2">
                      {t(`howItWorks.${key}Desc`)}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-sp-6 mb-sp-12">
        <Button
          variant="primary"
          onClick={() => onNavigate?.('senior-dashboard')}
        >
          {t('common.continue')}
        </Button>
      </div>
    </div>
  );
}
