import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { MenuIcon, CloseIcon } from './UiIcons';

const NAV_ITEMS = [
  { id: 'inicio', es: 'Inicio', en: 'Home' },
  { id: 'experience', es: 'Experiencia', en: 'Experience' },
  { id: 'skills', es: 'Tecnologías', en: 'Technologies' },
  { id: 'about', es: 'Sobre mí', en: 'About' },
  { id: 'contact', es: 'Contacto', en: 'Contact' },
];

export function Header() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between gap-4 px-5 py-4 sm:px-8 transition-colors duration-300 border-b ${
        scrolled ? 'bg-black/55 backdrop-blur-2xl border-white/10' : 'bg-transparent border-transparent'
      }`}
    >
      <a href="#inicio" className="font-serif font-bold tracking-wide text-lg shrink-0">
        <span className="sm:hidden">MV</span>
        <span className="hidden sm:inline">Maximiliano Viquez</span>
      </a>

      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex flex-wrap items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3.5 py-2 rounded-full text-sm uppercase tracking-wide transition-all ${
                  active === item.id ? 'bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item[lang]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="relative inline-flex p-1 rounded-full bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-xs font-semibold"
          aria-label="Switch language"
        >
          <motion.span
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-linear-to-br from-violet to-blue"
            style={{ left: lang === 'es' ? 4 : '50%' }}
          />
          <span className={`relative z-10 px-3 py-1.5 rounded-full ${lang === 'es' ? 'opacity-100' : 'opacity-55'}`}>ES</span>
          <span className={`relative z-10 px-3 py-1.5 rounded-full ${lang === 'en' ? 'opacity-100' : 'opacity-55'}`}>EN</span>
        </button>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute top-18 left-4 right-4 md:hidden rounded-2xl bg-black/90 backdrop-blur-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] p-3"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-center py-3 rounded-xl text-sm uppercase tracking-wide ${
                      active === item.id ? 'bg-white/10' : ''
                    }`}
                  >
                    {item[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
