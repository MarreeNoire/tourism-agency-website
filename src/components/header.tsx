"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/blog', label: 'Journal' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-sand-50/90 backdrop-blur">
      {/* Editorial top strip */}
      <div className="hidden border-b border-ink-900/10 bg-pine-900 text-sand-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[11px] tracking-[0.2em] uppercase lg:px-8">
          <span>Établie à Paris — depuis 2020</span>
          <span>Voyages sur mesure &amp; durables</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold italic text-ink-900">TourEase</span>
          <span className="hidden text-[11px] tracking-[0.2em] text-ink-400 uppercase sm:inline">Agence de voyage</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative py-1 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors hover:text-terracotta-600',
                pathname === link.href ? 'text-terracotta-600' : 'text-ink-700'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-terracotta-600" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 text-ink-700 transition hover:bg-ink-900/5"
            aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-terracotta-600 px-5 py-2 text-[13px] font-medium tracking-wide text-sand-50 transition hover:bg-terracotta-700 md:inline-flex"
          >
            Planifier un voyage
          </Link>
          <button
            className="rounded-full p-2 text-ink-700 transition hover:bg-ink-900/5 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu mobile"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-ink-900/10 bg-sand-50 lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase',
                  pathname === link.href ? 'bg-terracotta-100 text-terracotta-700' : 'text-ink-800 hover:bg-ink-900/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 block rounded-full bg-terracotta-600 px-3 py-2.5 text-center text-sm font-medium text-sand-50"
            >
              Planifier un voyage
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
