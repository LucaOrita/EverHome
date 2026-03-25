import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Tag from '../components/ui/Tag';

const plans = [
  {
    name: 'Peace',
    price: '35 lei',
    bg: 'bg-bg-card',
    textColor: 'text-text-primary',
    tagVariant: 'light',
    features: ['Essential monitoring', 'Door sensor', 'Temperature'],
  },
  {
    name: 'Care',
    price: '70 lei',
    bg: 'bg-bg-card-blue',
    textColor: 'text-text-primary',
    tagVariant: 'light',
    features: ['Everything in Peace', 'Fall detection', 'Motion tracking', 'GPS monitoring'],
  },
  {
    name: 'Safety',
    price: '136 lei',
    bg: 'bg-primary-dark',
    textColor: 'text-white',
    tagVariant: 'dark',
    features: ['Everything in CARE', 'Sleep sensor', '24/7 monitoring', 'Priority support'],
  },
];

export default function SubscriptionPlans({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        <div className="mt-sp-6">
          <p className="text-sm text-text-secondary">Subscription plans</p>
          <h1 className="text-h1 text-text-primary mt-sp-2">
            Choose your level of protection
          </h1>
        </div>

        <div className="mt-sp-6 flex flex-col gap-sp-4 card-stagger">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                animate-slide-up
                ${plan.bg} rounded-xl p-sp-6
                ${plan.name === 'Safety' ? '' : 'shadow-card'}
              `}
            >
              <div className="flex items-start justify-between">
                <h2 className={`text-h2 ${plan.textColor}`}>{plan.name}</h2>
                <span className={`text-price ${plan.textColor}`}>
                  {plan.price}
                </span>
              </div>

              <div className="flex flex-wrap gap-sp-2 mt-sp-4">
                {plan.features.map((feature) => (
                  <Tag key={feature} variant={plan.tagVariant}>
                    {feature}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
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
