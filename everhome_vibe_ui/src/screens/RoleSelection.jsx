import StatusBar from '../components/layout/StatusBar';

export default function RoleSelection({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 flex flex-col">
        {/* Header */}
        <div className="mt-sp-8">
          <p className="text-h3 text-primary-light font-semibold">Welcome</p>
          <h1 className="text-h1 text-text-primary mt-sp-2">
            Who will be using EverHome?
          </h1>
          <p className="text-body text-text-secondary mt-sp-3">
            Choose your role to get the right experience
          </p>
        </div>

        {/* Role cards */}
        <div className="mt-sp-8 flex flex-col gap-sp-4 card-stagger">
          {/* Senior card */}
          <button
            onClick={() => onNavigate?.('senior-dashboard')}
            className="
              animate-slide-up
              bg-primary-dark rounded-xl p-sp-6
              text-left cursor-pointer
              transition-shadow duration-200 hover:shadow-card-hover
            "
            style={{ minHeight: 160 }}
          >
            <p className="text-body text-white/80">I am a</p>
            <h2 className="text-display text-white mt-sp-1">SENIOR</h2>
            <p className="text-sm text-white/70 mt-sp-3">
              Simpler interface – large buttons, big text
            </p>
          </button>

          {/* Caregiver card */}
          <button
            onClick={() => onNavigate?.('caregiver-dashboard')}
            className="
              animate-slide-up
              bg-bg-card-alt rounded-xl p-sp-6
              text-left cursor-pointer
              transition-shadow duration-200 hover:shadow-card-hover
            "
            style={{ minHeight: 160 }}
          >
            <p className="text-body text-text-secondary">I am a</p>
            <h2 className="text-display text-text-primary mt-sp-1">CAREGIVER</h2>
            <p className="text-sm text-text-secondary mt-sp-3">
              Full sensor dashboard, alerts and remote control
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
