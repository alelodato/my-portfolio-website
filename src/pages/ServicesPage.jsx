import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

export function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold md:text-3xl">{t('services.hero.title')}</h2>
        <p className="text-sm leading-relaxed md:text-base">
          {t('services.hero.lead')}
        </p>
      </section>

      {/* Overview cards */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
          {t('services.overview.title')}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed md:text-base">
          {t('services.overview.lead')}
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            title={t('services.cards.landing.title')}
            desc={t('services.cards.landing.desc')}
            items={[
              t('services.cards.landing.item1'),
              t('services.cards.landing.item2'),
              t('services.cards.landing.item3'),
            ]}
            timeline={t('services.cards.common.timeline')}
          />
          <ServiceCard
            title={t('services.cards.dynamic.title')}
            desc={t('services.cards.dynamic.desc')}
            items={[
              t('services.cards.dynamic.item1'),
              t('services.cards.dynamic.item2'),
              t('services.cards.dynamic.item3'),
            ]}
            timeline={t('services.cards.common.timeline')}
          />
          <ServiceCard
            title={t('services.cards.custom.title')}
            desc={t('services.cards.custom.desc')}
            items={[
              t('services.cards.custom.item1'),
              t('services.cards.custom.item2'),
              t('services.cards.custom.item3'),
            ]}
            timeline={t('services.cards.common.timeline')}
            note={t('services.cards.custom.note_external')}
          />
        </div>
      </section>

      {/* Extras (uso solo chiavi sicure presenti in EN/IT) */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
          {t('services.extras.title')}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed md:text-base">
          {t('services.extras.lead')}
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <CheckItem>{t('services.extras.booking')}</CheckItem>
          <CheckItem>{t('services.extras.payments')}</CheckItem>
          {messagesHas(t, 'services.extras.forms') && (
            <CheckItem>{t('services.extras.forms')}</CheckItem>
          )}
          {messagesHas(t, 'services.extras.seo_analytics') && (
            <CheckItem>{t('services.extras.seo_analytics')}</CheckItem>
          )}
          {messagesHas(t, 'services.extras.i18n') && (
            <CheckItem>{t('services.extras.i18n')}</CheckItem>
          )}
        </ul>
        <p className="mt-2 text-xs text-white/70">{t('services.extras.note_costs')}</p>
      </section>

      {/* Delivery */}
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
          {t('services.delivery.title')}
        </h3>
        <ul className="mt-3 space-y-1 text-sm">
          <CheckItem>{t('services.delivery.item1')}</CheckItem>
          <CheckItem>{t('services.delivery.item2')}</CheckItem>
          <CheckItem>{t('services.delivery.item3')}</CheckItem>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <h3 className="text-lg font-semibold md:text-xl">{t('services.cta.title')}</h3>
        <p className="mt-2 text-sm leading-relaxed md:text-base">
          {t('services.cta.lead')}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400"
          >
            {t('services.cta.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}

function messagesHas(t, path) {
  // se la chiave manca, t(path) restituisce la stringa path => controllo grezzo
  return t(path) !== path;
}

function ServiceCard({ title, desc, items, timeline, note }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
      <h4 className="text-sm font-semibold md:text-base">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed">{desc}</p>
      <ul className="mt-3 space-y-1 text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="relative pl-5">
            <span className="absolute left-0 top-1 text-xs text-emerald-300">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-white/70">{timeline}</p>
      {note && <p className="mt-1 text-xs text-white/60">{note}</p>}
    </article>
  );
}

function CheckItem({ children }) {
  return (
    <li className="relative pl-5">
      <span className="absolute left-0 top-1 text-xs text-emerald-300">✓</span>
      {children}
    </li>
  );
}
