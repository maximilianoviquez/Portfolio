import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { contact } from '../data/profile';
import { Icon } from './Icon';
import { MailIcon } from './UiIcons';

export function Contact() {
  const { lang } = useLanguage();

  const cards = [
    { label: lang === 'es' ? 'Email' : 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: lang === 'es' ? 'Teléfono' : 'Phone', value: contact.phone, href: `tel:${contact.phoneHref}` },
    { label: lang === 'es' ? 'Ubicación' : 'Location', value: contact.location, href: undefined },
    { label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin },
  ];

  return (
    <section id="contact" className="min-h-[70vh] flex flex-col items-center px-6 py-24">
      <p className="uppercase tracking-[0.18em] text-xs text-neutral-400 mb-2">{lang === 'es' ? 'Hablemos' : "Let's talk"}</p>
      <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-4">{lang === 'es' ? 'Contacto' : 'Contact'}</h2>
      <p className="max-w-xl text-center text-white/80 mb-10">
        {lang === 'es'
          ? '¿Tenés un proyecto en mente o una posición para un perfil Full Stack senior? Escribime.'
          : 'Have a project in mind or a role for a senior Full Stack profile? Reach out.'}
      </p>

      <motion.ul
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl grid gap-4 mb-10"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))' }}
      >
        {cards.map((card) => (
          <li key={card.label + card.value} className="rounded-2xl p-5 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-left">
            <p className="text-[0.7rem] uppercase tracking-wide text-neutral-400 mb-2">{card.label}</p>
            {card.href ? (
              <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-serif text-lg break-words hover:underline">
                {card.value}
              </a>
            ) : (
              <p className="font-serif text-lg break-words">{card.value}</p>
            )}
          </li>
        ))}
      </motion.ul>

      <ul className="flex items-center gap-6">
        <li>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="block transition-transform hover:-translate-y-0.5 hover:text-violet">
            <Icon slug="github" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="block transition-transform hover:-translate-y-0.5 hover:text-violet">
            <Icon slug="linkedin" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="block transition-transform hover:-translate-y-0.5 hover:text-violet">
            <MailIcon className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </section>
  );
}
