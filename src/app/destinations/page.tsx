"use client";

import Link from 'next/link';
import { destinations } from '@/data/destinations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const tones = [
  'from-pine-500 via-pine-300 to-sand-100',
  'from-terracotta-700 via-terracotta-500 to-terracotta-100',
  'from-ink-800 via-terracotta-600 to-terracotta-100',
  'from-pine-700 via-terracotta-300 to-sand-100',
  'from-terracotta-600 via-ink-700 to-pine-300',
];

export default function DestinationsPage() {
  return (
    <>
      <section className="border-b border-ink-900/10 bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
            Le catalogue
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl text-ink-900 lg:text-6xl">
            Nos destinations
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Une sélection soigneusement choisie de destinations exceptionnelles à travers le monde.
          </p>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={`/destinations/${destination.slug}`} className="group block">
                  <div
                    className={`bg-grain relative h-64 w-full overflow-hidden rounded-sm bg-gradient-to-br ${tones[index % tones.length]} transition-transform duration-300 group-hover:scale-[1.01]`}
                  >
                    <span className="absolute top-4 left-4 font-display text-lg text-sand-50/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="absolute right-5 bottom-5 left-5">
                      <h3 className="font-display text-2xl text-sand-50">
                        {destination.name.split(',')[0]}
                      </h3>
                      <p className="text-sm tracking-wide text-sand-50/80 uppercase">{destination.country}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink-600 line-clamp-3">
                    {destination.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink-700 uppercase group-hover:text-terracotta-600">
                    Découvrir
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-grain bg-pine-900 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl text-sand-50 lg:text-4xl">
            Vous avez une destination en tête ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-sand-200/80">
            Notre équipe d&apos;experts est prête à créer le voyage parfait selon vos envies et votre budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta-600 px-8 py-3 text-base text-sand-50 transition hover:bg-terracotta-500"
          >
            Parler à un conseiller
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
