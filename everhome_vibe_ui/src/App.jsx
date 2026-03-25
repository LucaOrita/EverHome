import { useState, useCallback, useEffect } from 'react';
import MobileFrame from './components/layout/MobileFrame';
import LanguageToggle from './components/ui/LanguageToggle';

import SplashScreen from './screens/SplashScreen';
import LoginEmail from './screens/LoginEmail';
import LoginQRCode from './screens/LoginQRCode';
import RoleSelection from './screens/RoleSelection';
import HowItWorks from './screens/HowItWorks';
import SeniorDashboard from './screens/SeniorDashboard';
import CaregiverDashboard from './screens/CaregiverDashboard';
import AlertScreen from './screens/AlertScreen';
import EmergencyConfirmed from './screens/EmergencyConfirmed';
import SubscriptionPlans from './screens/SubscriptionPlans';
import Maintenance from './screens/Maintenance';
import Support from './screens/Support';

const screens = [
  { id: 'splash', label: 'Splash', component: SplashScreen },
  { id: 'login-email', label: 'Login – Email', component: LoginEmail },
  { id: 'login-qr', label: 'Login – QR Code', component: LoginQRCode },
  { id: 'role-selection', label: 'Role Selection', component: RoleSelection },
  { id: 'how-it-works', label: 'How It Works', component: HowItWorks },
  { id: 'senior-dashboard', label: 'Senior Dashboard', component: SeniorDashboard },
  { id: 'caregiver-dashboard', label: 'Caregiver Dashboard', component: CaregiverDashboard },
  { id: 'alert-screen', label: 'Alert Screen', component: AlertScreen },
  { id: 'emergency-confirmed', label: 'Emergency Confirmed', component: EmergencyConfirmed },
  { id: 'subscription-plans', label: 'Subscription Plans', component: SubscriptionPlans },
  { id: 'maintenance', label: 'Maintenance', component: Maintenance },
  { id: 'support', label: 'Support', component: Support },
];

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function getGalleryScale(width) {
  if (width >= 1024) return 0.55;
  if (width >= 768) return 0.5;
  return 0.8;
}

function getGalleryColumns(width) {
  if (width >= 1024) return 'grid-cols-3';
  if (width >= 768) return 'grid-cols-2';
  return 'grid-cols-1';
}

export default function App() {
  const [mode, setMode] = useState('gallery');
  const [activeScreen, setActiveScreen] = useState('splash');
  const [modalScreen, setModalScreen] = useState(null);
  const width = useWindowWidth();

  const handleNavigate = useCallback((screenId) => {
    setActiveScreen(screenId);
  }, []);

  const scale = getGalleryScale(width);
  const columns = getGalleryColumns(width);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      {/* Header */}
      <header className="text-center pt-sp-10 pb-sp-6 px-sp-6">
        <h1 className="text-display text-primary-dark font-heading">EverHome</h1>
        <p className="text-body text-text-secondary mt-sp-2">
          Smart home monitoring for seniors — Design Showcase
        </p>

        {/* Mode toggle + Language toggle */}
        <div className="flex items-center justify-center gap-sp-4 mt-sp-6">
          <button
            onClick={() => setMode('gallery')}
            className={`
              px-6 py-2.5 rounded-full text-button-sm font-semibold
              transition-all duration-200 cursor-pointer
              ${mode === 'gallery'
                ? 'bg-primary-dark text-white shadow-button'
                : 'bg-white text-primary-dark border border-border-light hover:bg-bg-page'
              }
            `}
          >
            Gallery
          </button>
          <button
            onClick={() => { setMode('interactive'); setActiveScreen('splash'); }}
            className={`
              px-6 py-2.5 rounded-full text-button-sm font-semibold
              transition-all duration-200 cursor-pointer
              ${mode === 'interactive'
                ? 'bg-primary-dark text-white shadow-button'
                : 'bg-white text-primary-dark border border-border-light hover:bg-bg-page'
              }
            `}
          >
            Interactive
          </button>
          <LanguageToggle />
        </div>
      </header>

      {/* Gallery Mode */}
      {mode === 'gallery' && (
        <div className={`grid ${columns} gap-10 justify-items-center px-sp-6 pb-sp-12 max-w-[1400px] mx-auto`}>
          {screens.map((screen) => {
            const ScreenComponent = screen.component;
            return (
              <div key={screen.id} className="flex flex-col items-center gap-sp-3">
                <div
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setModalScreen(screen.id)}
                >
                  <MobileFrame scale={scale} interactive={false}>
                    <ScreenComponent onNavigate={() => {}} />
                  </MobileFrame>
                </div>
                <span className="text-sm font-semibold text-text-secondary">
                  {screen.label}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Mode */}
      {mode === 'interactive' && (
        <div className="flex flex-col items-center px-sp-6 pb-sp-12">
          <button
            onClick={() => setMode('gallery')}
            className="mb-sp-5 text-sm text-text-link font-semibold hover:underline cursor-pointer"
          >
            ← Back to Gallery
          </button>
          <MobileFrame>
            {screens.map((screen) => {
              if (screen.id !== activeScreen) return null;
              const ScreenComponent = screen.component;
              return (
                <ScreenComponent
                  key={screen.id}
                  onNavigate={handleNavigate}
                />
              );
            })}
          </MobileFrame>
          <span className="mt-sp-3 text-sm font-semibold text-text-secondary">
            {screens.find((s) => s.id === activeScreen)?.label}
          </span>
        </div>
      )}

      {/* Modal overlay for gallery click */}
      {modalScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalScreen(null)}
        >
          <div
            className="animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileFrame>
              {screens.map((screen) => {
                if (screen.id !== modalScreen) return null;
                const ScreenComponent = screen.component;
                return <ScreenComponent key={screen.id} onNavigate={() => {}} />;
              })}
            </MobileFrame>
            <div className="text-center mt-sp-4">
              <button
                onClick={() => setModalScreen(null)}
                className="text-white text-sm font-semibold hover:underline cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
