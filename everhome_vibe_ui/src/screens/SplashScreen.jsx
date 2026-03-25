import StatusBar from '../components/layout/StatusBar';
import EverHomeLogo from '../components/icons/EverHomeLogo';
import Button from '../components/ui/Button';

export default function SplashScreen({ onNavigate }) {
  return (
    <div
      className="flex flex-col min-h-full"
      style={{
        background: 'linear-gradient(180deg, #0D3B66 0%, #0A2D4D 100%)',
      }}
    >
      <StatusBar variant="light" />

      <div className="flex-1 flex flex-col items-center justify-center px-sp-6">
        {/* Logo in white circle */}
        <div className="animate-logo-scale bg-white rounded-full flex items-center justify-center" style={{ width: 140, height: 140 }}>
          <EverHomeLogo size={90} variant="dark" />
        </div>

        {/* App name */}
        <h1 className="text-display text-white mt-sp-6">EverHome</h1>

        {/* Tagline */}
        <p className="text-body text-white/80 italic mt-sp-3 text-center">
          Because home is where life continues
        </p>
      </div>

      {/* Get Started button */}
      <div className="px-sp-6 mb-sp-12">
        <Button
          variant="secondary"
          onClick={() => onNavigate?.('login-email')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
