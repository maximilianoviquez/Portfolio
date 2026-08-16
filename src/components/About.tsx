import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { aboutProfile, stats } from '../data/profile';
import { educationItems, languages } from '../data/education';

function StatCounter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + (suffix ?? '');
    });
  }, [spring, suffix]);

  return <span ref={ref}>0</span>;
}

export function About() {
  const { lang } = useLanguage();
  const t = aboutProfile[lang];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center px-6 py-24">
      <p className="uppercase tracking-[0.18em] text-xs text-neutral-400 mb-2">{lang === 'es' ? 'Perfil' : 'Profile'}</p>
      <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-6">{t.heading}</h2>
      <p className="max-w-2xl text-center text-white/80 leading-relaxed mb-10">{t.body}</p>

      <motion.ul
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
      >
        {stats.map((stat) => (
          <li key={stat.label.es} className="rounded-2xl py-5 px-2 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-center">
            <span className="block font-serif font-bold text-3xl sm:text-4xl bg-linear-to-br from-violet to-green bg-clip-text text-transparent">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="block text-[0.7rem] text-white/65 mt-1.5 leading-snug">{stat.label[lang]}</span>
          </li>
        ))}
      </motion.ul>

      <div className="w-full max-w-2xl grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-left"
        >
          <h4 className="font-serif italic text-neutral-400 mb-4">{lang === 'es' ? 'Formación académica' : 'Academic background'}</h4>
          <ul className="flex flex-col gap-4">
            {educationItems.map((edu) => (
              <li key={edu.title.es}>
                <p className="text-sm leading-snug">{edu.title[lang]}</p>
                <p className="text-xs text-neutral-400 mt-1">{edu.sub[lang]}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-6 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-left"
        >
          <h4 className="font-serif italic text-neutral-400 mb-4">{lang === 'es' ? 'Idiomas' : 'Languages'}</h4>
          <ul className="flex flex-col gap-4">
            {languages.map((item) => (
              <li key={item.title.es}>
                <p className="text-sm">{item.title[lang]}</p>
                <p className="text-xs text-neutral-400 mt-1">{item.sub[lang]}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
