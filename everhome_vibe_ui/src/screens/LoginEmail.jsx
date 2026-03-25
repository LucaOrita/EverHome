import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Toggle from '../components/ui/Toggle';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useTranslation } from '../i18n/LanguageContext';

export default function LoginEmail({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mt-sp-10">
          <EverHomeLogo size={80} variant="dark" />
        </div>

        {/* App name — refined weight, elegant */}
        <h1
          className="text-display text-primary-dark text-center mt-sp-4 font-medium"
        >
          {t('common.appName')}
        </h1>

        {/* Toggle pill — Email / QR Code */}
        <div className="flex justify-center mt-sp-8">
          <Toggle
            options={[t('login.email'), t('login.qrCode')]}
            activeOption={t('login.email')}
            onToggle={(opt) => {
              if (opt === t('login.qrCode')) onNavigate?.('login-qr');
            }}
          />
        </div>

        {/* Form */}
        <div className="mt-sp-8 flex flex-col gap-sp-5">
          <Input
            label={t('login.emailLabel')}
            type="email"
            placeholder={t('login.emailPlaceholder')}
          />
          <div>
            <Input
              label={t('login.passwordLabel')}
              type="password"
              placeholder="••••••••••••••••"
            />
            <p className="text-sm text-text-link text-right mt-sp-2 cursor-pointer hover:underline">
              {t('login.forgotPassword')}
            </p>
          </div>
        </div>

        {/* Sign In — primary, navigates to role-selection */}
        <div className="mt-sp-6">
          <Button onClick={() => onNavigate?.('role-selection')}>
            {t('common.signIn')}
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-sp-4 my-sp-4">
          <div className="flex-1 h-px bg-divider" />
          <span className="text-sm text-text-tertiary">{t('common.or')}</span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        {/* Scan QR Code — secondary, navigates to login-qr */}
        <Button variant="secondary" onClick={() => onNavigate?.('login-qr')}>
          {t('login.scanQrCode')}
        </Button>

        {/* Footer */}
        <p className="text-sm text-text-secondary text-center mt-sp-6 mb-sp-6">
          {t('login.newUser')}
        </p>
      </div>
    </div>
  );
}
