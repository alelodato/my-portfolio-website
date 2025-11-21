import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

export function HomePage() {
  const { t } = useI18n();

  return (
    <div className="space-y-12">
      {/* Intro + GitHub preview */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-center">
        <div>
          <h2 className="text-xl font-semibold tracking-wide text-emerald-100/90 uppercase">
            {t('body.home2-title')}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed md:text-base">
            {t('body.home')}
          </p>
          <div
            className="mt-4 text-sm text-emerald-100/90"
            dangerouslySetInnerHTML={{ __html: t('body.homep') }}
          />
        </div>

        <div className="relative">
          <a
            href="https://github.com/alelodato"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg"
          >
            <img
              src="/assets/images/github-img2.webp"
              alt="GitHub portfolio preview"
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-110 md:h-64"
              loading="lazy"
            />
            <div className="p-4 text-center text-xs font-medium tracking-wide text-white/80">
              {t('body.desktop-github')}
            </div>
          </a>
        </div>
      </section>

      {/* What I do: 4 card */}
      <section className="space-y-8">
        <h3 className="text-lg font-semibold text-emerald-100/90 uppercase tracking-[0.25em]">
          {t('body.home2-title')}
        </h3>

        <div className="grid gap-6 lg:grid-cols-2">
          <SkillCard
            title={t('body.home2-subtitle')}
            desc={t('body.home2-paragraph')}
            pills={['React', 'JavaScript', 'HTML/CSS', 'Responsive UI', 'Accessibility', 'Animations']}
          />
          <SkillCard
            title={t('body.home2-subtitle2')}
            desc={t('body.home2-paragraph2')}
            pills={['Django / DRF', 'Express', 'Node.js', 'PostgreSQL', 'REST APIs', 'Auth / CRUD']}
          />
          <SkillCard
            title={t('body.home2-subtitle3')}
            desc={t('body.home2-paragraph3')}
            pills={['GitHub', 'Vercel', 'Railway', 'Heroku', 'Render']}
          />
          <SkillCard
            title={t('body.home2-subtitle4')}
            desc={t('body.home2-paragraph4')}
            pills={['Performance', 'Lighthouse', 'Mobile-first', 'Best practices']}
          />
        </div>
      </section>

      {/* Portfolio + Services CTA */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm mb-2">{t('body.portfolio-intro')}</p>
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-emerald-200 underline-offset-4 hover:underline"
          >
            {t('body.portfolio-link')}
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <h4 className="text-sm font-semibold text-emerald-100/90">{t('body.services-title')}</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>{t('body.services-line1')}</li>
            <li>{t('body.services-line2')}</li>
            <li>{t('body.services-line3')}</li>
            <li>{t('body.services-line4')}</li>
          </ul>
          <Link
            to="/services"
            className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 underline-offset-4 hover:underline"
          >
            {t('body.services-btn')}
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center text-sm">
        <div
          dangerouslySetInnerHTML={{ __html: t('body.contact-me') }}
          className="[&>a]:text-emerald-200 [&>a]:font-semibold [&>a]:underline-offset-4 [&>a:hover]:underline"
        />
      </section>
    </div>
  );
}

function SkillCard({ title, desc, pills }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-sm backdrop-blur">
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem]"
          >
            {p}
          </span>
        ))}
      </div>
    </article>
  );
}
