import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Toggle from '../components/ui/Toggle';
import Button from '../components/ui/Button';
import { useTranslation } from '../i18n/LanguageContext';

export default function LoginQRCode({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Logo + large EverHome title */}
        <div className="flex flex-col items-center mt-sp-6">
          <EverHomeLogo size={60} variant="dark" />
          <h1
            className="text-h1 text-primary-dark mt-sp-3 font-medium"
          >
            {t('common.appName')}
          </h1>
        </div>

        {/* Toggle — QR Code active */}
        <div className="flex justify-center mt-sp-6">
          <Toggle
            options={[t('login.email'), t('login.qrCode')]}
            activeOption={t('login.qrCode')}
            onToggle={(opt) => {
              if (opt === t('login.email')) onNavigate?.('login-email');
            }}
          />
        </div>

        {/* QR Scanner area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Instruction — blue text */}
          <p className="text-body text-primary-medium text-center mb-sp-8">
            {t('login.qrInstruction')}
          </p>

          {/* Scanner container with corner brackets and glow */}
          <div
            className="animate-scan-glow relative rounded-xl bg-bg-page flex items-center justify-center w-[260px] h-[260px]"
          >
            {/* Top-left corner bracket */}
            <div className="animate-corner-pulse absolute top-0 left-0 border-t-4 border-l-4 border-primary-medium rounded-tl-xl w-10 h-10" />
            {/* Top-right corner bracket */}
            <div className="animate-corner-pulse absolute top-0 right-0 border-t-4 border-r-4 border-primary-medium rounded-tr-xl w-10 h-10" />
            {/* Bottom-left corner bracket */}
            <div className="animate-corner-pulse absolute bottom-0 left-0 border-b-4 border-l-4 border-primary-medium rounded-bl-xl w-10 h-10" />
            {/* Bottom-right corner bracket */}
            <div className="animate-corner-pulse absolute bottom-0 right-0 border-b-4 border-r-4 border-primary-medium rounded-br-xl w-10 h-10" />

            {/* QR code icon */}
            <svg width="100" height="100" viewBox="0 0 80 80" fill="none" className="text-primary-dark">
              <rect x="5" y="5" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="3" />
              <rect x="50" y="5" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="3" />
              <rect x="5" y="50" width="25" height="25" rx="3" stroke="currentColor" strokeWidth="3" />
              <rect x="12" y="12" width="11" height="11" rx="2" fill="currentColor" />
              <rect x="57" y="12" width="11" height="11" rx="2" fill="currentColor" />
              <rect x="12" y="57" width="11" height="11" rx="2" fill="currentColor" />
              <rect x="50" y="50" width="5" height="5" fill="currentColor" />
              <rect x="60" y="50" width="5" height="5" fill="currentColor" />
              <rect x="70" y="50" width="5" height="5" fill="currentColor" />
              <rect x="50" y="60" width="5" height="5" fill="currentColor" />
              <rect x="60" y="60" width="5" height="5" fill="currentColor" />
              <rect x="50" y="70" width="5" height="5" fill="currentColor" />
              <rect x="70" y="70" width="5" height="5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Done button — primary, full-width */}
        <div className="mb-sp-8">
          <Button onClick={() => onNavigate?.('role-selection')}>
            {t('common.done')}
          </Button>
        </div>
      </div>
    </div>
  );
}
