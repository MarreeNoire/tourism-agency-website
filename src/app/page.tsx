import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const featured = [
  {
    n: '01',
    name: 'Santorin',
    country: 'Grèce',
    slug: 'santorin',
    desc: 'Les maisons blanches et les dômes bleus surplombant la mer Égée, au coucher du soleil.',
    tone: 'from-pine-500 via-pine-300 to-sand-100',
  },
  {
    n: '02',
    name: 'Kyoto',
    country: 'Japon',
    slug: 'kyoto',
    desc: 'Temples anciens, forêts de bambous et cérémonies du thé au cœur du Japon traditionnel.',
    tone: 'from-terracotta-700 via-terracotta-500 to-terracotta-100',
  },
  {
    n: '03',
    name: 'Marrakech',
    country: 'Maroc',
    slug: 'marrakech',
    desc: "L'atmosphère vibrante des souks, des palais et des jardins luxuriants de la ville ocre.",
    tone: 'from-ink-800 via-terracotta-600 to-terracotta-100',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-ink-900/10 bg-sand-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          {/* Text column */}
          <div>
            <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
              N° 01 — L&apos;évasion sur mesure
            </span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] font-medium text-ink-900 lg:text-7xl">
              Découvrez le monde{' '}
              <span className="italic text-terracotta-600">avec TourEase</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600">
              Des voyages sur mesure, des destinations de rêve et des souvenirs inoubliables, imaginés avec des experts qui connaissent chaque adresse.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/destinations">
                <Button
                  className="flex items-center gap-2 rounded-full bg-terracotta-600 px-7 py-3 text-base text-sand-50 hover:bg-terracotta-700"
                  variant="default"
                >
                  Explorer les destinations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  className="flex items-center gap-2 rounded-full border-ink-900/20 px-7 py-3 text-base text-ink-900 hover:bg-ink-900/5"
                  variant="outline"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex gap-10 border-t border-ink-900/10 pt-6 text-sm text-ink-600">
              <div>
                <span className="font-display text-2xl text-ink-900">5+</span>
                <p className="mt-1">destinations phares</p>
              </div>
              <div>
                <span className="font-display text-2xl text-ink-900">2020</span>
                <p className="mt-1">année de fondation</p>
              </div>
              <div>
                <span className="font-display text-2xl text-ink-900">24/7</span>
                <p className="mt-1">assistance voyageurs</p>
              </div>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative">
            <div className="bg-grain relative h-[420px] overflow-hidden rounded-sm bg-gradient-to-br from-terracotta-600 via-terracotta-500 to-pine-700 lg:h-[560px]">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <span className="self-end text-[11px] tracking-[0.25em] text-sand-50/80 uppercase">
                  Collection printemps
                </span>
                <div>
                  <p className="font-display text-4xl italic text-sand-50">Santorin</p>
                  <p className="mt-1 text-sm tracking-wide text-sand-50/80 uppercase">Grèce — Cyclades</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-sm border border-ink-900/10 bg-sand-50 p-4 shadow-xl shadow-ink-900/10 sm:block">
              <p className="text-xs tracking-wide text-ink-400 uppercase">Prochain départ</p>
              <p className="mt-1 font-display text-lg text-ink-900">Kyoto, Japon</p>
              <p className="text-xs text-ink-600">dès 1 490 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-ink-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
                Sélection éditoriale
              </span>
              <h2 className="mt-3 font-display text-4xl text-ink-900">Destinations phares</h2>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink-700 uppercase hover:text-terracotta-600"
            >
              Toutes les destinations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-ink-900/10">
            {featured.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:items-center lg:grid-cols-[80px_220px_1fr_auto]"
              >
                <span className="font-display text-2xl text-ink-400 group-hover:text-terracotta-600">
                  {d.n}
                </span>
                <div className={`bg-grain h-40 w-full overflow-hidden rounded-sm bg-gradient-to-br ${d.tone} sm:w-56 lg:h-32`} />
                <div>
                  <h3 className="font-display text-2xl text-ink-900 group-hover:text-terracotta-600">
                    {d.name}, {d.country}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">{d.desc}</p>
                </div>
                <span className="hidden items-center gap-2 text-sm font-medium tracking-wide text-ink-700 uppercase group-hover:text-terracotta-600 lg:flex">
                  Découvrir
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-grain bg-pine-900 py-20">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-300 uppercase">
            Prêt à partir ?
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl text-sand-50 lg:text-5xl">
            Votre prochaine aventure <span className="italic">commence ici</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-200/80">
            Laissez-nous vous guider vers des expériences uniques et des souvenirs qui dureront toute une vie.
          </p>
          <Link href="/contact">
            <Button
              className="mt-9 rounded-full bg-terracotta-600 px-8 py-3 text-base text-sand-50 hover:bg-terracotta-500"
              variant="default"
            >
              Commencer à planifier
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
