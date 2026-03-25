import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Tag from '../components/ui/Tag';
import { useTranslation } from '../i18n/LanguageContext';

const planKeys = ['peace', 'care', 'safety'];

const planStyles = {
  peace: { bg: 'bg-bg-card', textColor: 'text-text-primary', tagVariant: 'light', shadow: true },
  care: { bg: 'bg-bg-card-blue', textColor: 'text-text-primary', tagVariant: 'light', shadow: true },
  safety: { bg: 'bg-primary-dark', textColor: 'text-white', tagVariant: 'dark', shadow: false },
};

export default function SubscriptionPlans({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 min-h-0 px-sp-6 pb-sp-4 overflow-y-auto">
        <div className="mt-sp-6">
          <p className="text-sm text-primary-medium italic">{t('subscriptionPlans.header')}</p>
          <h1 className="text-h1 font-bold text-text-primary mt-sp-2">
            {t('subscriptionPlans.title')}
          </h1>
          <p className="text-sm text-text-secondary mt-sp-2">
            {t('subscriptionPlans.allPlansInclude')}
          </p>
        </div>

        <div className="mt-sp-6 flex flex-col gap-sp-4 card-stagger">
          {planKeys.map((key) => {
            const style = planStyles[key];
            const plan = t(`subscriptionPlans.${key}`);

            return (
              <div
                key={key}
                className={`
                  animate-slide-up
                  ${style.bg} rounded-xl p-sp-6
                  ${style.shadow ? 'shadow-card' : ''}
                `}
              >
                {/* Row 1: Name + Price */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className={`text-h1 font-bold ${style.textColor}`}>{plan.name}</h2>
                    <p className={`text-sm mt-sp-1 ${key === 'safety' ? 'text-white/70' : 'text-text-secondary'}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-sp-3">
                    <span className={`text-price ${style.textColor}`}>{plan.price}</span>
                    <p className={`text-xs ${key === 'safety' ? 'text-white/60' : 'text-text-tertiary'}`}>
                      {t('subscriptionPlans.perMonth')}
                      <br />
                      {t('subscriptionPlans.plusTVA')}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-sp-2 mt-sp-4">
                  {plan.features.map((feature) => (
                    <Tag key={feature} variant={style.tagVariant}>
                      {feature}
                    </Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav
        activeTab="support"
        onTabChange={(tab) => {
          if (tab === 'home') onNavigate?.('caregiver-dashboard');
          if (tab === 'maintenance') onNavigate?.('maintenance');
        }}
      />
    </div>
  );
}
