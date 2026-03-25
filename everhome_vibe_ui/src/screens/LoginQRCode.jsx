import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Toggle from '../components/ui/Toggle';
import Button from '../components/ui/Button';

export default function LoginQRCode({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Compact header */}
        <div className="flex items-center justify-between mt-sp-4">
          <span className="text-h3 text-primary-dark font-bold">EverHome</span>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-sp-6">
          <Toggle
            options={['Email', 'QR Code']}
            activeOption="QR Code"
            onToggle={(opt) => {
              if (opt === 'Email') onNavigate?.('login-email');
            }}
          />
        </div>

        {/* QR Scanner area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-body text-text-secondary text-center mb-sp-8">
            Point camera at the QR code on the alarm system
          </p>

          {/* QR placeholder */}
          <div className="w-48 h-48 rounded-xl border-2 border-dashed border-border-light flex items-center justify-center bg-bg-card-alt">
            <div className="w-32 h-32 bg-bg-page rounded-lg flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="5" y="5" width="25" height="25" rx="3" stroke="#0D3B66" strokeWidth="3" />
                <rect x="50" y="5" width="25" height="25" rx="3" stroke="#0D3B66" strokeWidth="3" />
                <rect x="5" y="50" width="25" height="25" rx="3" stroke="#0D3B66" strokeWidth="3" />
                <rect x="12" y="12" width="11" height="11" rx="2" fill="#0D3B66" />
                <rect x="57" y="12" width="11" height="11" rx="2" fill="#0D3B66" />
                <rect x="12" y="57" width="11" height="11" rx="2" fill="#0D3B66" />
                <rect x="50" y="50" width="5" height="5" fill="#0D3B66" />
                <rect x="60" y="50" width="5" height="5" fill="#0D3B66" />
                <rect x="70" y="50" width="5" height="5" fill="#0D3B66" />
                <rect x="50" y="60" width="5" height="5" fill="#0D3B66" />
                <rect x="60" y="60" width="5" height="5" fill="#0D3B66" />
                <rect x="50" y="70" width="5" height="5" fill="#0D3B66" />
                <rect x="70" y="70" width="5" height="5" fill="#0D3B66" />
              </svg>
            </div>
          </div>
        </div>

        {/* Done button */}
        <div className="mb-sp-8">
          <Button onClick={() => onNavigate?.('role-selection')}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
