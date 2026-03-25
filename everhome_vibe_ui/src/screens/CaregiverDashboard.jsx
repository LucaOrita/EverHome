import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';

export default function CaregiverDashboard({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Header */}
        <div className="mt-sp-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Monitoring</p>
            <h1 className="text-h1 text-text-primary">Margaret&apos;s Home</h1>
            <StatusBadge label="All Safe" color="safe" className="mt-sp-2" />
          </div>
          <Button variant="badge">CARE plan</Button>
        </div>

        {/* Feature cards row */}
        <div className="mt-sp-5 grid grid-cols-2 gap-sp-3 card-stagger">
          <Card variant="feature" className="animate-slide-up">
            <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold">
              Motion In
            </p>
            <h3 className="text-h3 font-bold text-text-primary mt-sp-1">Bedroom</h3>
            <p className="text-sm text-text-tertiary mt-sp-1">now</p>
          </Card>

          <Card variant="feature" className="animate-slide-up">
            <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold">
              Front Door
            </p>
            <h3 className="text-h3 font-bold text-status-safe mt-sp-1">Locked</h3>
            <p className="text-sm text-text-tertiary mt-sp-1">Since 8:12 AM</p>
          </Card>
        </div>

        {/* Sensors label */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-5">
          Sensors
        </p>

        {/* Sensor list */}
        <div className="mt-sp-3 flex flex-col gap-sp-3 card-stagger">
          <Card borderColor="#1A5F9E" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  Fall Detector – Bedroom
                </h3>
                <p className="text-sm text-text-secondary">7 days clear</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card borderColor="#1A5F9E" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  Motion – Living Room
                </h3>
                <p className="text-sm text-text-secondary">Active – normal pattern</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card variant="warning" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  Smoke Alarm – Kitchen
                </h3>
                <p className="text-sm text-status-warning">
                  Low battery – replace soon
                </p>
              </div>
              <StatusBadge color="warning" />
            </div>
          </Card>

          <Card borderColor="#1A5F9E" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  Panic Button – Bath
                </h3>
                <p className="text-sm text-text-secondary">Ready – not triggered</p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>

          <Card borderColor="#1A5F9E" className="animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-body-bold text-text-primary">
                  Sleep Sensor – Bedroom
                </h3>
                <p className="text-sm text-text-secondary">
                  8h 20m last night – good
                </p>
              </div>
              <StatusBadge color="info" />
            </div>
          </Card>
        </div>
      </div>

      <BottomNav
        activeTab="home"
        onTabChange={(tab) => {
          if (tab === 'maintenance') onNavigate?.('maintenance');
          if (tab === 'support') onNavigate?.('support');
        }}
      />
    </div>
  );
}
