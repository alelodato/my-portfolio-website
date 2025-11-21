import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export function PortfolioPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold md:text-3xl">
          {t('portfolio.hero.title')}
        </h2>
        <p className="text-sm leading-relaxed md:text-base">
          {t('portfolio.hero.lead')}
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-10">
        <ProjectRow
          title="Sneakers Vault"
          tagline={t('portfolio.projects.sv.tagline')}
          desc={t('portfolio.projects.sv.desc')}
          highlights={[
            t('portfolio.projects.sv.hl1'),
            t('portfolio.projects.sv.hl2'),
            t('portfolio.projects.sv.hl3'),
          ]}
          images={[
            {
              src: '/assets/images/sneakersportfolio.webp',
              alt: t('portfolio.projects.sv.img1Alt'),
            },
            {
              src: '/assets/images/sneakers-portfolio2.webp',
              alt: t('portfolio.projects.sv.img2Alt'),
            },
          ]}
          live="https://sneakers-vault-jet.vercel.app"
          github="https://github.com/alelodato/sneakers-vault/tree/main/sneakers-vault"
        />

        <ProjectRow
          title="Sapore di Mare"
          tagline={t('portfolio.projects.sdm.tagline')}
          desc={t('portfolio.projects.sdm.desc')}
          highlights={[
            t('portfolio.projects.sdm.hl1'),
            t('portfolio.projects.sdm.hl2'),
            t('portfolio.projects.sdm.hl3'),
          ]}
          images={[
            {
              src: '/assets/images/saporeportfolio.webp',
              alt: t('portfolio.projects.sdm.img1Alt'),
            },
            {
              src: '/assets/images/saporeportfolio2.webp',
              alt: t('portfolio.projects.sdm.img2Alt'),
            },
          ]}
          live="https://sapore-di-mare-0503ed908911.herokuapp.com/"
          github="https://github.com/alelodato/sapore-di-mare"
        />
      </section>

      {/* Other work */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
          {t('portfolio.highlights.title')}
        </h3>

        <ProjectRow
          title="Future Frames"
          tagline=""
          desc={t('portfolio.highlights.ff.desc')}
          images={[
            {
              src: '/assets/images/future-portfolio.png',
              alt: t('portfolio.highlights.ff.img1Alt'),
            },
            {
              src: '/assets/images/future-portfolio2.png',
              alt: t('portfolio.highlights.ff.img2Alt'),
            },
          ]}
          contactLabel={t('portfolio.common.contact')}
        />
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm">
        <h3 className="text-lg font-semibold md:text-xl">{t('portfolio.cta.title')}</h3>
        <p className="mt-2 leading-relaxed md:text-base">
          {t('portfolio.cta.lead')}
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400"
          >
            {t('portfolio.cta.contact')}
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectRow({ title, tagline, desc, highlights, images, live, github, contactLabel }) {
  return (
    <article className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
      <div className="grid gap-3 md:grid-cols-2">
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-44 w-full object-cover transition duration-300 hover:scale-[1.03] md:h-52"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        {tagline && <p className="mt-1 text-xs font-semibold text-emerald-100/90">{tagline}</p>}
        <p className="mt-3 text-sm leading-relaxed">{desc}</p>

        {highlights && (
          <ul className="mt-3 space-y-1 text-xs md:text-sm">
            {highlights.map((h, idx) => (
              <li key={idx} className="relative pl-4">
                <span className="absolute left-0 top-1 text-[0.6rem] text-emerald-300">•</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              GitHub
            </a>
          )}
          {contactLabel && (
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-emerald-400 bg-emerald-500/10 px-3 py-1 text-emerald-200 hover:bg-emerald-500/20"
            >
              {contactLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
