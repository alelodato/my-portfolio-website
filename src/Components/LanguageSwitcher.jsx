import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale('en')}
        className={`h-6 w-10 rounded-sm border border-white/40 bg-[url('/assets/images/gb-icon.png')] bg-cover bg-center transition ${
          locale === 'en' ? 'ring-2 ring-white shadow' : 'opacity-80 hover:opacity-100'
        }`}
        aria-label="Switch to English"
      />
      <button
        onClick={() => setLocale('it')}
        className={`h-6 w-10 rounded-sm border border-white/40 bg-[url('/assets/images/it-icon.png')] bg-cover bg-center transition ${
          locale === 'it' ? 'ring-2 ring-white shadow' : 'opacity-80 hover:opacity-100'
        }`}
        aria-label="Passa all’italiano"
      />
    </div>
  );
}
