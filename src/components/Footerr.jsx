import React from "react";
import { useI18n } from "../i18n/I18nContext.js";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 py-8 border-t border-white/10 text-center text-white/70">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} Alessio Lodato — {t("header.title2")}
      </p>

      <div className="mt-3 flex justify-center gap-4 text-white/50">
        <a
          href="https://github.com/alelodato"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/alessio-lodato-0541411b8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="/contact"
          className="hover:text-white transition"
        >
          {t("header.contact")}
        </a>
      </div>
    </footer>
  );
}
