import { Home, Wrench, CalendarDays } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'support', label: 'Support', icon: CalendarDays },
];

export default function BottomNav({ activeTab = 'home', onTabChange }) {
  return (
    <div
      className="flex items-center justify-around bg-bg-card border-t border-divider shadow-nav"
      style={{ height: 64, paddingBottom: 8 }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`flex items-center justify-center transition-all duration-200 ${
              isActive
                ? 'bg-primary-dark rounded-md px-5 py-2'
                : 'px-4 py-2'
            }`}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icon
              size={24}
              className={isActive ? 'text-white' : 'text-text-secondary'}
            />
          </button>
        );
      })}
    </div>
  );
}
