"use client";

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const tones: Record<string, string> = {
  santorin: 'from-pine-500 via-pine-300 to-sand-100',
  kyoto: 'from-terracotta-700 via-terracotta-500 to-terracotta-100',
  marrakech: 'from-ink-800 via-terracotta-600 to-terracotta-100',
  bali: 'from-pine-700 via-terracotta-300 to-sand-100',
  quebec: 'from-terracotta-600 via-ink-700 to-pine-300',
};

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const tone = tones[destination.slug] ?? 'from-terracotta-600 via-terracotta-400 to-sand-100';

  return (
    <>
      {/* Hero Banner */}
      <section className={`bg-grain relative flex h-[420px] items-end bg-gradient-to-br ${tone}`}>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
          <Link href="/destinations" className="text-[11px] tracking-[0.25em] text-sand-50/80 uppercase hover:text-sand-50">
            ← Toutes les destinations
          </Link>
          <h1 className="mt-4 font-display text-5xl text-sand-50 lg:text-6xl">
            {destination.name}
          </h1>
          <p className="mt-2 text-sm tracking-[0.2em] text-sand-50/80 uppercase">{destination.country}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-ink-900/10 bg-sand-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-ink-600">
            {destination.description}
          </p>

          <div className="mt-12">
            <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
              À ne pas manquer
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink-900">
              Points forts
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {destination.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-4 border-b border-ink-900/10 pb-5"
                >
                  <span className="font-display text-lg text-terracotta-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-0.5 text-ink-800">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-14 rounded-sm bg-terracotta-100 p-8">
            <h2 className="font-display text-2xl text-ink-900">
              Prêt à réserver votre voyage ?
            </h2>
            <p className="mt-3 max-w-xl text-ink-700">
              Notre équipe d&apos;experts est prête à créer un itinéraire sur mesure qui correspond parfaitement à vos attentes et à votre budget.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta-600 px-6 py-3 text-sand-50 transition hover:bg-terracotta-700"
            >
              Commencer la planification
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional info section */}
      <section className="bg-sand-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl text-ink-900">
            Pourquoi choisir TourEase pour {destination.name.split(',')[0]} ?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Experts locaux', text: 'Nos partenaires sur place connaissent les meilleurs secrets et expériences authentiques.' },
              { title: 'Voyages durables', text: 'Nous privilégions les options respectueuses de l\u2019environnement et des communautés locales.' },
              { title: 'Assistance 24/7', text: 'Notre équipe est disponible avant, pendant et après votre voyage pour une tranquillité d\u2019esprit totale.' },
            ].map((item) => (
              <div key={item.title} className="rounded-sm bg-sand-50 p-6">
                <h3 className="font-display text-xl text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
