import { createContext, useContext, useState, useCallback } from 'react';
import en from './en';
import ro from './ro';

const translations = { en, ro };

const LanguageContext = createContext(null);

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = useCallback((key) => {
    const value = getNestedValue(translations[language], key);
    if (value !== undefined) return value;
    return getNestedValue(translations.en, key) ?? key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
