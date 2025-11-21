import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';

export function ContactPage() {
  const { t } = useI18n();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    // qui poi colleghi EmailJS o backend
    setStatus('sent');
  };

  return (
    <div className="mx-auto max-w-xl space-y-8">
      <section className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">{t('contact.title')}</h2>
        <p className="text-sm text-white/80 md:text-base">{t('contact.title2')}</p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-6 shadow-sm"
      >
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Project
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sent'}
          className="inline-flex w-full justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60"
        >
          {t('contact.button')}
        </button>

        {status === 'sent' && (
          <p className="text-center text-xs text-emerald-200">
            Messaggio inviato. Ti risponderò appena possibile.
          </p>
        )}
      </form>
    </div>
  );
}
