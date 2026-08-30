import Link from 'next/link';
import { destinations } from '@/data/destinations';
import { Mail, Phone, MapPin, Camera, MessageCircle, Share, PlayCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'À propos' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Camera },
  { href: '#', label: 'Facebook', icon: MessageCircle },
  { href: '#', label: 'Twitter', icon: Share },
  { href: '#', label: 'YouTube', icon: PlayCircle },
];

export default function Footer() {
  return (
    <footer className="bg-pine-900 text-sand-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold italic text-sand-50">TourEase</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200/70">
              Votre agence de voyage sur mesure. Nous créons des expériences authentiques et inoubliables, partout dans le monde.
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-50/15 text-sand-100 transition hover:border-terracotta-300 hover:bg-terracotta-600 hover:text-sand-50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm italic text-sand-50">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sand-200/70 transition hover:text-terracotta-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular destinations */}
          <div>
            <h3 className="font-display text-sm italic text-sand-50">Destinations populaires</h3>
            <ul className="mt-4 space-y-3">
              {destinations.slice(0, 5).map((destination) => (
                <li key={destination.id}>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="text-sm text-sand-200/70 transition hover:text-terracotta-300"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm italic text-sand-50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-sand-200/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                <span>123 Avenue des Voyages, 75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-terracotta-300" />
                <a href="tel:+33123456789" className="transition hover:text-terracotta-300">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-terracotta-300" />
                <a href="mailto:contact@tourease.com" className="transition hover:text-terracotta-300">contact@tourease.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs tracking-wide text-sand-200/60 uppercase lg:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} TourEase. Tous droits réservés.</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-terracotta-300">Mentions légales</a>
            <a href="#" className="transition hover:text-terracotta-300">Confidentialité</a>
            <a href="#" className="transition hover:text-terracotta-300">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
