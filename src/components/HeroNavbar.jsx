import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext.js";
import { LanguageSwitcher } from "./LanguageSwitch.jsx";
import Footer from "./Footerr.jsx";

export function ShellLayout({ children }) {
  const { t } = useI18n();
  const location = useLocation();

  const navLinkBase =
    "px-3 py-1.5 text-xs md:text-sm uppercase tracking-[0.2em] rounded-full transition hover:bg-white/10";

  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 pb-4 md:pb-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4 md:pt-8">

          {/* Left: Name + Subtitle */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Alessio Lodato</h1>
            <span className="font-light opacity-90">{t("header.title2")}</span>
          </div>

          {/* Right: Language Switch */}
          <div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* NAV */}
        <nav className="mt-4 flex justify-center gap-4 md:gap-8">
          <NavLink
            to="/"
            className={`${navLinkBase} ${location.pathname === "/" ? "bg-white/20" : ""}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={`${navLinkBase} ${location.pathname === "/about" ? "bg-white/20" : ""}`}
          >
            {t("header.about")}
          </NavLink>

          <NavLink
            to="/services"
            className={`${navLinkBase} ${location.pathname === "/services" ? "bg-white/20" : ""}`}
          >
            {t("header.cv")}
          </NavLink>

          <NavLink
            to="/portfolio"
            className={`${navLinkBase} ${location.pathname === "/portfolio" ? "bg-white/20" : ""}`}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={`${navLinkBase} ${location.pathname === "/contact" ? "bg-white/20" : ""}`}
          >
            {t("header.contact")}
          </NavLink>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
