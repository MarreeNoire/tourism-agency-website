"use client";

import { motion } from 'framer-motion';

const values = [
  { title: 'Personnalisation', text: 'Chaque voyageur est unique. Nous écoutons attentivement vos désirs pour créer des itinéraires qui vous ressemblent vraiment.' },
  { title: 'Qualité', text: 'Nous sélectionnons rigoureusement nos partenaires et hébergements pour garantir l\u2019excellence à chaque étape de votre voyage.' },
  { title: 'Durabilité', text: 'Nous nous engageons à promouvoir un tourisme responsable qui profite aux communautés locales et préserve l\u2019environnement.' },
  { title: 'Innovation', text: 'Nous utilisons les dernières technologies pour simplifier la planification de voyage tout en maintenant une touche humaine essentielle.' },
];

const team = [
  { name: 'Marie Dubois', role: 'Conseillère Voyage Senior', bio: 'Avec plus de 10 ans d\u2019expérience dans l\u2019industrie du voyage, Marie se spécialise dans les destinations européennes et les voyages culturels immersifs.', tags: ['Europe', 'Culture', 'Langues'], tone: 'from-pine-500 via-pine-300 to-sand-100' },
  { name: 'Jean Martin', role: 'Expert Destinations Exotiques', bio: 'Passionné par l\u2019Asie et l\u2019Amérique latine, Jean crée des aventures uniques qui sortent des sentiers battus tout en assurant confort et sécurité.', tags: ['Asie', 'Amérique Latine', 'Aventure'], tone: 'from-terracotta-700 via-terracotta-500 to-terracotta-100' },
  { name: 'Sophie Lambert', role: 'Spécialiste Voyages de Luxe', bio: 'Sophie excelle dans la création d\u2019expériences de voyage haut de gamme, des hébergements cinq étoiles aux expériences privées exclusives.', tags: ['Luxe', 'Hébergement', 'Expériences Privées'], tone: 'from-ink-800 via-terracotta-600 to-terracotta-100' },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-900/10 bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
            Qui sommes-nous
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl text-ink-900 lg:text-6xl">
            À propos de TourEase
          </h1>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="border-t border-ink-900/10 pt-6"
            >
              <span className="font-display text-lg text-terracotta-600">01</span>
              <h2 className="mt-2 font-display text-2xl text-ink-900">Notre Histoire</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Fondée en 2020 par des passionnés de voyage, TourEase est née d&apos;une simple idée : rendre l&apos;organisation de voyages aussi agréable que le voyage lui-même. Nous avons commencé avec une petite équipe dédiée à créer des expériences personnalisées pour nos clients, et nous avons grandi pour devenir une agence de voyage de confiance qui sert des voyageurs du monde entier.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-ink-900/10 pt-6"
            >
              <span className="font-display text-lg text-terracotta-600">02</span>
              <h2 className="mt-2 font-display text-2xl text-ink-900">Notre Mission</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Nous croyons que chaque voyage devrait être une histoire qui mérite d&apos;être racontée. Notre mission est de créer des expériences de voyage sur mesure qui inspirent, éduquent et créent des souvenirs durables, tout en respectant les communautés locales et l&apos;environnement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-4xl text-ink-900">
            Nos Valeurs
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t border-ink-900/15 pt-5"
              >
                <span className="font-display text-lg text-terracotta-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl text-ink-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[11px] font-medium tracking-[0.25em] text-terracotta-600 uppercase">
            L&apos;équipe
          </span>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-ink-900">
            Derrière chaque voyage parfait
          </h2>
          <p className="mt-4 max-w-xl text-ink-600">
            Une équipe dévouée d&apos;experts qui partagent une même passion : faire découvrir le monde sous son meilleur jour.
          </p>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`bg-grain relative h-56 w-full overflow-hidden rounded-sm bg-gradient-to-br ${member.tone}`}>
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="font-display text-xl text-sand-50">{member.name}</h3>
                    <p className="text-sm text-sand-50/80">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-terracotta-100 px-3 py-1 text-xs font-medium text-terracotta-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
