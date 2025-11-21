import { NavLink, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.js';
import { LanguageSwitcher } from './components/LanguageSwitcher.js';

const navLinkBase =
  'px-3 py-1.5 text-xs md:text-sm uppercase tracking-[0.2em] rounded-full transition hover:bg-white/10';

export function ShellLayout({ children }) {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO + NAV */}
      <header className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-6 pt-4 md:flex-row md:items-end md:pb-8 md:pt-8">
          {/* Left: Name + title + quote */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  &lt; portfolio /&gt;
                </p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Alessio <span className="font-light opacity-90">Lodato</span>
                </h1>
                <h2 className="mt-1 text-sm font-medium text-emerald-200 md:text-base">
                  {t('header.title2')}
                </h2>
              </div>

              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="mt-4 max-w-md font-code text-xs text-emerald-100/90 md:text-sm">
              <span className="block">
                &lt; Made in Italy, <br className="hidden sm:block" /> Inspired by the world /&gt;
              </span>
            </div>
          </div>

          {/* Right: nav pills */}
          <nav className="flex flex-1 flex-wrap items-center justify-start gap-2 md:justify-end">
            <NavItem to="/" label="Home" currentPath={location.pathname} />
            <NavItem to="/about" label={t('header.about')} currentPath={location.pathname} />
            <NavItem to="/services" label={t('header.cv')} currentPath={location.pathname} />
            <NavItem to="/portfolio" label="Portfolio" currentPath={location.pathname} />
            <NavItem to="/contact" label={t('header.contact')} currentPath={location.pathname} />
            <div className="sm:hidden ml-auto">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Alessio Lodato — Built with React & Tailwind
      </footer>
    </div>
  );
}

function NavItem({ to, label, currentPath }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          navLinkBase,
          isActive
            ? 'bg-white/15 text-white shadow-sm'
            : 'text-white/75 hover:text-white border border-white/10',
        ].join(' ')
      }
      aria-current={currentPath === to ? 'page' : undefined}
    >
      {label}
    </NavLink>
  );
}
