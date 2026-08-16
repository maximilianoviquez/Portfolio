import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { profile, contact } from '../data/profile';
import { Icon } from './Icon';
import { DownloadIcon } from './UiIcons';
import photo from '../assets/fotocv.jpeg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const { lang } = useLanguage();
  const t = profile[lang];

  return (
    <section id="inicio" className="min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center max-w-3xl">
        <motion.div variants={item} className="mb-5">
          <motion.img
            src={photo}
            alt="Maximiliano Viquez"
            className="w-38 h-38 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.6)] object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        <motion.p variants={item} className="uppercase tracking-[0.18em] text-xs text-neutral-400 mb-2">
          {t.eyebrow}
        </motion.p>
        <motion.h1 variants={item} className="font-serif font-semibold text-5xl sm:text-6xl leading-tight mb-1">
          {t.name}
        </motion.h1>
        <motion.h2 variants={item} className="font-serif italic text-2xl sm:text-3xl text-neutral-400 mb-6">
          {t.role}
        </motion.h2>

        <motion.ul variants={item} className="flex flex-wrap justify-center gap-2 mb-6">
          {t.pills.map((pill) => (
            <li key={pill} className="px-4 py-2 rounded-full text-sm bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
              {pill}
            </li>
          ))}
        </motion.ul>

        <motion.p variants={item} className="max-w-xl text-white/80 leading-relaxed mb-8">
          {t.lead}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
          >
            <Icon slug="github" className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
          >
            <Icon slug="linkedin" className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={contact.cv[lang]}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-linear-to-br from-violet to-blue shadow-[0_10px_30px_-8px_rgba(153,24,218,0.6)] transition-transform hover:-translate-y-0.5"
          >
            <DownloadIcon />
            {t.ctaDownload}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
