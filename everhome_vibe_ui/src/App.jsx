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

const screenSections = [
  {
    label: 'Auth Flow',
    screens: ['splash', 'login-email', 'login-qr', 'role-selection'],
  },
  {
    label: 'Onboarding',
    screens: ['how-it-works'],
  },
  {
    label: 'Senior Experience',
    screens: ['senior-dashboard', 'emergency-confirmed'],
  },
  {
    label: 'Caregiver Experience',
    screens: ['caregiver-dashboard', 'alert-screen', 'subscription-plans'],
  },
  {
    label: 'Shared',
    screens: ['maintenance', 'support'],
  },
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
  if (width >= 1200) return 0.48;
  if (width >= 1024) return 0.5;
  if (width >= 768) return 0.5;
  return 0.75;
}

function getGalleryColumns(width) {
  if (width >= 1200) return 'grid-cols-4';
  if (width >= 1024) return 'grid-cols-3';
  if (width >= 768) return 'grid-cols-2';
  return 'grid-cols-1';
}

export default function App() {
  const [mode, setMode] = useState('gallery');
  const [activeScreen, setActiveScreen] = useState('splash');
  const [modalScreen, setModalScreen] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const width = useWindowWidth();

  const handleNavigate = useCallback((screenId) => {
    if (screenId === 'how-it-works-senior') {
      setSelectedRole('senior');
      setActiveScreen('how-it-works');
    } else if (screenId === 'how-it-works-caregiver') {
      setSelectedRole('caregiver');
      setActiveScreen('how-it-works');
    } else if (screenId === 'dashboard-from-onboarding') {
      setActiveScreen(selectedRole === 'senior' ? 'senior-dashboard' : 'caregiver-dashboard');
    } else {
      setActiveScreen(screenId);
    }
  }, [selectedRole]);

  const scale = getGalleryScale(width);
  const columns = getGalleryColumns(width);

  const activeScreenData = screens.find((s) => s.id === activeScreen);
  const ActiveComponent = activeScreenData?.component;

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'radial-gradient(circle, var(--color-border-light) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        backgroundColor: 'var(--color-bg-gallery)',
      }}
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-divider text-center pt-sp-6 pb-sp-4 px-sp-6">
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
            onClick={() => { setMode('interactive'); setActiveScreen('splash'); setSelectedRole(null); }}
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
        <div className="px-sp-6 pb-sp-12 pt-sp-8">
          {screenSections.map((section) => (
            <div key={section.label} className="w-full max-w-[1400px] mx-auto mb-sp-8">
              <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-sp-4 px-sp-2">
                {section.label}
              </h2>
              <div className={`grid ${columns} gap-10 justify-items-center`}>
                {section.screens.map((screenId) => {
                  const screen = screens.find((s) => s.id === screenId);
                  const ScreenComponent = screen.component;
                  return (
                    <div key={screen.id} className="flex flex-col items-center gap-sp-3">
                      <div
                        className="cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover rounded-phone"
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
            </div>
          ))}
        </div>
      )}

      {/* Interactive Mode */}
      {mode === 'interactive' && (
        <div className="flex flex-col items-center px-sp-6 pb-sp-12 pt-sp-6">
          <button
            onClick={() => setMode('gallery')}
            className="mb-sp-5 text-sm text-text-link font-semibold hover:underline cursor-pointer"
          >
            ← Back to Gallery
          </button>
          <MobileFrame>
            <div key={activeScreen} className="animate-fade-in">
              <ActiveComponent onNavigate={handleNavigate} />
            </div>
          </MobileFrame>
          <span className="mt-sp-3 text-sm font-semibold text-text-secondary">
            {activeScreenData?.label}
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

      {/* Footer */}
      <footer className="text-center py-sp-8 text-sm text-text-tertiary border-t border-divider mt-sp-8">
        EverHome — Smart Home Monitoring for Seniors | Design Showcase
      </footer>
    </div>
  );
}
