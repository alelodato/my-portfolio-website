import React from "react";
import { useI18n } from "../i18n/I18nContext.js";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const changeLang = (lang) => {
    setLocale(lang);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => changeLang("en")}
        className={`px-2 py-1 rounded ${locale === "en" ? "border border-white shadow" : ""}`}
      >
        🇬🇧
      </button>

      <button
        onClick={() => changeLang("it")}
        className={`px-2 py-1 rounded ${locale === "it" ? "border border-white shadow" : ""}`}
      >
        🇮🇹
      </button>
    </div>
  );
}
