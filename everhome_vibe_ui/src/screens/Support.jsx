import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Headphones } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Support({ onNavigate }) {
  const { t } = useTranslation();
  const faqs = t('support.faqs');

  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-sp-3 mt-sp-6">
          <Headphones size={28} className="text-primary-dark" />
          <h1 className="text-h1 text-primary-medium">{t('support.title')}</h1>
        </div>

        {/* Contact card */}
        <Card variant="info" className="mt-sp-5">
          <p className="text-xs uppercase font-semibold text-text-primary tracking-wide">
            {t('support.contactUs')}
          </p>
          <div className="mt-sp-3 space-y-sp-2">
            <p className="text-sm text-text-primary">
              <span className="font-semibold">{t('support.email')}</span>{' '}
              <span className="text-text-link">office@everhome.com</span>
            </p>
            <p className="text-sm text-text-primary">
              <span className="font-semibold">{t('support.cell')}</span> +40735873164
            </p>
          </div>
        </Card>

        {/* FAQ */}
        <Card variant="info" className="mt-sp-4">
          <p className="text-xs uppercase font-semibold text-text-primary tracking-wide mb-sp-4">
            {t('support.faq')}
          </p>
          <div className="space-y-sp-4">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="text-body-bold text-text-primary">{i + 1}. {faq.q}</p>
                <p className="text-sm text-text-secondary mt-sp-1">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Website link */}
        <div className="mt-sp-6">
          <p className="text-sm text-text-secondary mb-sp-3">
            {t('support.visitWebsite')}
          </p>
          <Button onClick={() => {}}>www.everhome.com</Button>
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
