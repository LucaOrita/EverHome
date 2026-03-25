import { useState } from 'react';
import StatusBar from '../components/layout/StatusBar';
import BottomNav from '../components/layout/BottomNav';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import RadioOption from '../components/ui/RadioOption';
import Dropdown from '../components/ui/Dropdown';
import { Info } from 'lucide-react';

const sensorOptions = [
  { value: 'smoke-kitchen', label: 'Smoke alarm – Kitchen' },
  { value: 'motion-living', label: 'Motion – Living Room' },
  { value: 'fall-bedroom', label: 'Fall Detector – Bedroom' },
  { value: 'panic-bath', label: 'Panic Button – Bath' },
];

const issueTypes = [
  'Low battery / needs replacement',
  'Sensor not responding',
  'False alerts triggering',
  'Physical damage',
];

export default function Maintenance({ onNavigate }) {
  const [selectedSensor, setSelectedSensor] = useState('smoke-kitchen');
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0]);

  return (
    <div className="flex flex-col min-h-full bg-bg-card">
      <StatusBar variant="dark" />

      <div className="flex-1 px-sp-6 pb-sp-4 overflow-y-auto">
        {/* Title */}
        <h1 className="text-h1 text-primary-medium mt-sp-6">Maintenance</h1>

        {/* Info banner */}
        <Card variant="info" className="mt-sp-5">
          <div className="flex gap-sp-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center">
              <Info size={20} className="text-white" />
            </div>
            <p className="text-body text-text-primary">
              Our team handles all repairs and replacements. Just tell us what is
              wrong and we will schedule a visit.
            </p>
          </div>
        </Card>

        {/* Which sensor */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-6">
          Which sensor?
        </p>
        <Dropdown
          value={selectedSensor}
          options={sensorOptions}
          onChange={setSelectedSensor}
          className="mt-sp-3"
        />

        {/* Issue type */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold mt-sp-6">
          Issue type
        </p>
        <div className="mt-sp-3 flex flex-col gap-sp-3">
          {issueTypes.map((issue) => (
            <RadioOption
              key={issue}
              label={issue}
              selected={selectedIssue === issue}
              onSelect={() => setSelectedIssue(issue)}
            />
          ))}
        </div>

        {/* Help button */}
        <div className="flex justify-center mt-sp-6 mb-sp-4">
          <Button variant="help">HELP</Button>
        </div>
      </div>

      <BottomNav
        activeTab="maintenance"
        onTabChange={(tab) => {
          if (tab === 'home') onNavigate?.('caregiver-dashboard');
          if (tab === 'support') onNavigate?.('support');
        }}
      />
    </div>
  );
}
