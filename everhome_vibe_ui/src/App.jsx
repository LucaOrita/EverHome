import { useState, useCallback, useEffect } from 'react';
import MobileFrame from './components/layout/MobileFrame';
import LanguageToggle from './components/ui/LanguageToggle';
import { ArrowDown, Bell, ShieldAlert, ChevronRight } from 'lucide-react';

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

/* Wrapper components for each onboarding step (gallery/grid render without extra props) */
function HowItWorksStep1(props) { return <HowItWorks {...props} initialStep={0} />; }
function HowItWorksStep2(props) { return <HowItWorks {...props} initialStep={1} />; }
function HowItWorksStep3(props) { return <HowItWorks {...props} initialStep={2} />; }

const screens = [
  { id: 'splash', label: 'Splash', component: SplashScreen },
  { id: 'login-email', label: 'Login – Email', component: LoginEmail },
  { id: 'login-qr', label: 'Login – QR Code', component: LoginQRCode },
  { id: 'role-selection', label: 'Role Selection', component: RoleSelection },
  { id: 'how-it-works-1', label: 'Onboarding – Assess', component: HowItWorksStep1 },
  { id: 'how-it-works-2', label: 'Onboarding – Adapt', component: HowItWorksStep2 },
  { id: 'how-it-works-3', label: 'Onboarding – Assure', component: HowItWorksStep3 },
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
    screens: ['how-it-works-1', 'how-it-works-2', 'how-it-works-3'],
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

/* ─── Flow definitions for the showcase ─── */
const alertFlows = [
  {
    id: 'senior-emergency',
    title: 'Senior Emergency Flow',
    description: 'When a senior presses the emergency button, help is dispatched instantly and caregivers are notified.',
    color: 'var(--color-status-error)',
    icon: ShieldAlert,
    steps: [
      { screenId: 'senior-dashboard', label: 'Senior Dashboard', note: 'Senior presses emergency button' },
      { screenId: 'emergency-confirmed', label: 'Emergency Confirmed', note: 'Help is on the way, caregiver notified' },
      { screenId: 'alert-screen', label: 'Caregiver Alert', note: 'Caregiver receives real-time alert' },
    ],
  },
  {
    id: 'caregiver-alert',
    title: 'Caregiver Alert Flow',
    description: 'When a fall is detected, caregivers see real-time alerts with location details and quick action buttons.',
    color: 'var(--color-primary-medium)',
    icon: Bell,
    steps: [
      { screenId: 'caregiver-dashboard', label: 'Dashboard + Alert Banner', note: 'Fall detected notification appears' },
      { screenId: 'alert-screen', label: 'Alert Details', note: 'Full alert with timeline and actions' },
      { screenId: 'caregiver-dashboard', label: 'Resolved', note: 'Person marked safe, status updated' },
    ],
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

function getFlowScale(width) {
  if (width >= 1200) return 0.38;
  if (width >= 1024) return 0.35;
  if (width >= 768) return 0.32;
  return 0.55;
}

/* ─── Flow Showcase Component ─── */
function FlowShowcase({ flow, flowScale, onScreenClick }) {
  const Icon = flow.icon;

  return (
    <div className="bg-white rounded-2xl shadow-card p-sp-6 md:p-sp-8">
      {/* Flow Header */}
      <div className="flex items-center gap-sp-3 mb-sp-2">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: flow.color + '18' }}
        >
          <Icon size={22} style={{ color: flow.color }} />
        </div>
        <div>
          <h3 className="text-h3 font-bold text-text-primary">{flow.title}</h3>
        </div>
      </div>
      <p className="text-sm text-text-secondary mb-sp-6 ml-[52px]">
        {flow.description}
      </p>

      {/* Flow Steps — horizontal on desktop, vertical on mobile */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-sp-4 lg:gap-sp-2 justify-center">
        {flow.steps.map((step, i) => {
          const screen = screens.find((s) => s.id === step.screenId);
          const ScreenComponent = screen.component;

          return (
            <div key={`${step.screenId}-${i}`} className="flex flex-col lg:flex-row items-center gap-sp-4 lg:gap-sp-2">
              {/* Step */}
              <div className="flex flex-col items-center gap-sp-2">
                {/* Step number */}
                <div className="flex items-center gap-sp-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: flow.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                    {step.label}
                  </span>
                </div>

                {/* Phone frame */}
                <div
                  className="cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover rounded-phone"
                  onClick={() => onScreenClick(step.screenId)}
                >
                  <MobileFrame scale={flowScale} interactive={false}>
                    <ScreenComponent onNavigate={() => {}} />
                  </MobileFrame>
                </div>

                {/* Step note */}
                <p className="text-xs text-text-tertiary text-center max-w-[180px] italic">
                  {step.note}
                </p>
              </div>

              {/* Arrow between steps */}
              {i < flow.steps.length - 1 && (
                <div className="flex items-center justify-center py-sp-1 lg:py-0 lg:px-sp-1 lg:mt-[120px]">
                  <div className="hidden lg:flex items-center gap-1">
                    <div className="w-8 h-0.5 rounded" style={{ backgroundColor: flow.color + '40' }} />
                    <ChevronRight size={20} style={{ color: flow.color }} />
                  </div>
                  <div className="lg:hidden flex flex-col items-center gap-1">
                    <div className="h-6 w-0.5 rounded" style={{ backgroundColor: flow.color + '40' }} />
                    <ArrowDown size={20} style={{ color: flow.color }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Mode Toggle Button ─── */
function ModeButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-button-sm font-semibold
        transition-all duration-200 cursor-pointer
        ${isActive
          ? 'bg-primary-dark text-white shadow-button'
          : 'bg-white text-primary-dark border border-border-light hover:bg-bg-page'
        }
      `}
    >
      {label}
    </button>
  );
}

export default function App() {
  const [mode, setMode] = useState('gallery');
  const [activeScreen, setActiveScreen] = useState('splash');
  const [modalScreen, setModalScreen] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [flowPreviewScreen, setFlowPreviewScreen] = useState('senior-dashboard');
  const width = useWindowWidth();

  const handleNavigate = useCallback((screenId) => {
    if (screenId === 'how-it-works-senior') {
      setSelectedRole('senior');
      setActiveScreen('how-it-works-1');
    } else if (screenId === 'how-it-works-caregiver') {
      setSelectedRole('caregiver');
      setActiveScreen('how-it-works-1');
    } else if (screenId === 'dashboard-from-onboarding') {
      setActiveScreen(selectedRole === 'senior' ? 'senior-dashboard' : 'caregiver-dashboard');
    } else {
      setActiveScreen(screenId);
    }
  }, [selectedRole]);

  const scale = getGalleryScale(width);
  const columns = getGalleryColumns(width);
  const flowScale = getFlowScale(width);

  const activeScreenData = screens.find((s) => s.id === activeScreen);
  const ActiveComponent = activeScreenData?.component;

  const flowPreviewData = screens.find((s) => s.id === flowPreviewScreen);
  const FlowPreviewComponent = flowPreviewData?.component;

  const handleFlowScreenClick = (screenId) => {
    setFlowPreviewScreen(screenId);
  };

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
        <div className="flex items-center justify-center gap-sp-3 mt-sp-6 flex-wrap">
          <ModeButton label="Gallery" isActive={mode === 'gallery'} onClick={() => setMode('gallery')} />
          <ModeButton label="Grid" isActive={mode === 'grid'} onClick={() => setMode('grid')} />
          <ModeButton
            label="Interactive"
            isActive={mode === 'interactive'}
            onClick={() => { setMode('interactive'); setActiveScreen('splash'); setSelectedRole(null); }}
          />
          <ModeButton label="Key Flows" isActive={mode === 'flows'} onClick={() => setMode('flows')} />
          <LanguageToggle />
        </div>
      </header>

      {/* ═══ Gallery Mode — All screens flat ═══ */}
      {mode === 'gallery' && (
        <div className="px-sp-6 pb-sp-12 pt-sp-8">
          <div className="w-full max-w-[1400px] mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-sp-6 px-sp-2">
              All Screens
            </h2>
            <div className={`grid ${columns} gap-10 justify-items-center`}>
              {screens.map((screen) => {
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
        </div>
      )}

      {/* ═══ Grid Mode — Sectioned layout ═══ */}
      {mode === 'grid' && (
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

      {/* ═══ Interactive Mode — old style with big phone ═══ */}
      {mode === 'interactive' && (
        <div className="flex flex-col items-center px-sp-6 pb-sp-12 pt-sp-6">
          <button
            onClick={() => setMode('gallery')}
            className="mb-sp-5 text-sm text-text-link font-semibold hover:underline cursor-pointer"
          >
            &larr; Back to Gallery
          </button>
          <MobileFrame>
            <div key={activeScreen} className="animate-fade-in h-full">
              <ActiveComponent onNavigate={handleNavigate} />
            </div>
          </MobileFrame>
          <span className="mt-sp-3 text-sm font-semibold text-text-secondary">
            {activeScreenData?.label}
          </span>
        </div>
      )}

      {/* ═══ Key Flows Mode ═══ */}
      {mode === 'flows' && (
        <div className="pb-sp-12 pt-sp-6">
          {/* ── Flow Showcase Section ── */}
          <div className="px-sp-6 mb-sp-10">
            <div className="w-full max-w-[1400px] mx-auto">
              <div className="text-center mb-sp-8">
                <h2 className="text-h1 font-bold text-primary-dark">
                  Key Flows & Notifications
                </h2>
                <p className="text-body text-text-secondary mt-sp-2 max-w-[600px] mx-auto">
                  See how EverHome connects seniors and caregivers through real-time alerts and emergency response flows.
                </p>
              </div>

              <div className="flex flex-col gap-sp-8">
                {alertFlows.map((flow) => (
                  <FlowShowcase
                    key={flow.id}
                    flow={flow}
                    flowScale={flowScale}
                    onScreenClick={handleFlowScreenClick}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-sp-4 px-sp-6 max-w-[1400px] mx-auto mb-sp-8">
            <div className="flex-1 h-px bg-divider" />
            <span className="text-xs uppercase tracking-widest text-text-secondary font-semibold">
              Screen Preview
            </span>
            <div className="flex-1 h-px bg-divider" />
          </div>

          {/* ── Preview Phone ── */}
          <div className="flex flex-col items-center px-sp-6">
            <MobileFrame>
              <div key={flowPreviewScreen} className="animate-fade-in h-full">
                <FlowPreviewComponent onNavigate={() => {}} />
              </div>
            </MobileFrame>
            <span className="mt-sp-3 text-sm font-semibold text-text-secondary">
              {flowPreviewData?.label}
            </span>
          </div>
        </div>
      )}

      {/* Modal overlay for gallery/grid click */}
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
