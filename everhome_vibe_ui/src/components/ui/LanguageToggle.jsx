import { useTranslation } from '../../i18n/LanguageContext';

const options = ['EN', 'RO'];

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div
      className="inline-flex items-center bg-white border border-border-light rounded-full p-0.5"
      style={{ width: 100 }}
    >
      {options.map((option) => {
        const isActive = language === option.toLowerCase();
        return (
          <button
            key={option}
            onClick={() => setLanguage(option.toLowerCase())}
            className={`
              flex-1 text-center py-1.5 rounded-full text-xs font-semibold
              transition-all duration-200 cursor-pointer
              ${isActive
                ? 'bg-primary-dark text-white'
                : 'bg-transparent text-primary-dark'
              }
            `}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
