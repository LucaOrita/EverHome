import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Toggle from '../components/ui/Toggle';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function LoginEmail({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mt-sp-10">
          <EverHomeLogo size={80} variant="dark" />
        </div>

        {/* App name */}
        <h1 className="text-h1 text-primary-dark text-center mt-sp-4">
          EverHome
        </h1>

        {/* Toggle */}
        <div className="flex justify-center mt-sp-8">
          <Toggle
            options={['Email', 'QR Code']}
            activeOption="Email"
            onToggle={(opt) => {
              if (opt === 'QR Code') onNavigate?.('login-qr');
            }}
          />
        </div>

        {/* Form */}
        <div className="mt-sp-8 flex flex-col gap-sp-5">
          <Input
            label="Email address:"
            type="email"
            placeholder="email@domain.com"
          />
          <div>
            <Input
              label="Password:"
              type="password"
              placeholder="••••••••••••••••"
            />
            <p className="text-sm text-text-link text-right mt-sp-2 cursor-pointer hover:underline">
              Forgot password?
            </p>
          </div>
        </div>

        {/* Sign In */}
        <div className="mt-sp-6">
          <Button onClick={() => onNavigate?.('role-selection')}>
            Sign in
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-sp-4 my-sp-4">
          <div className="flex-1 h-px bg-divider" />
          <span className="text-sm text-text-tertiary">or</span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        {/* Scan QR Code */}
        <Button variant="secondary" onClick={() => onNavigate?.('login-qr')}>
          Scan QR Code
        </Button>

        {/* Footer */}
        <p className="text-sm text-text-secondary text-center mt-sp-6 mb-sp-6">
          New? Contact your EverHome Installer
        </p>
      </div>
    </div>
  );
}
