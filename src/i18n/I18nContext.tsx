import React, { createContext, useContext, useMemo, useState } from 'react';
import { messages, defaultLocale } from './translations';

const I18nContext = createContext(null);

function get(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (path) => {
        const msg = get(messages[locale], path);
        if (msg == null) return path;
        return String(msg);
      },
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
