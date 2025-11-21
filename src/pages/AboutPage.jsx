import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export function AboutPage() {
  const { t } = useI18n();

  const timelineItems = [
    { titleKey: 'about.timeline-title1', bodyKey: 'about.timeline-p1', icon: '/assets/images/ci-logo.jpg' },
    { titleKey: 'about.timeline-title2', bodyKey: 'about.timeline-p2', icon: '/assets/images/html-5.png' },
    { titleKey: 'about.timeline-title3', bodyKey: 'about.timeline-p3', icon: '/assets/images/js.png' },
    { titleKey: 'about.timeline-title4', bodyKey: 'about.timeline-p4', icon: '/assets/images/django.png' },
    { titleKey: 'about.timeline-title5', bodyKey: 'about.timeline-p5', icon: '/assets/images/physics.png' },
    { titleKey: 'about.timeline-title6', bodyKey: 'about.timeline-p6', icon: '/assets/images/checked.png' },
    { titleKey: 'about.timeline-title7', bodyKey: 'about.timeline-p7', icon: '/assets/images/networking.png' },
  ];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed md:text-base">{t('about.about-p')}</p>
          <p
            className="mt-3 text-sm leading-relaxed md:text-base"
            dangerouslySetInnerHTML={{ __html: t('about.about-p2') }}
          />
          <p
            className="mt-3 text-sm leading-relaxed md:text-base"
            dangerouslySetInnerHTML={{ __html: t('about.about-p3') }}
          />
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/images/aleportfolio.webp"
            alt="Portrait of Alessio Lodato"
            className="h-64 w-64 rounded-2xl border border-white/10 object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-l border-white/20 pl-6">
        <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-emerald-300 shadow" />
        <div className="space-y-8">
          {timelineItems.map((item, idx) => (
            <article key={idx} className="relative flex gap-4">
              <div className="mt-1 h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                <img
                  src={item.icon}
                  alt=""
                  className="h-full w-full object-contain p-1"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold md:text-base">
                  {t(item.titleKey)}
                </h3>
                <p
                  className="mt-1 text-xs leading-relaxed md:text-sm"
                  dangerouslySetInnerHTML={{ __html: t(item.bodyKey) }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Collab */}
      <section className="text-sm leading-relaxed">
        <p
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: t('about.collab2') }}
        />
      </section>
    </div>
  );
}
