import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { experience } from '../data/experience';

export function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center px-6 py-24">
      <p className="uppercase tracking-[0.18em] text-xs text-neutral-400 mb-2">
        {lang === 'es' ? 'Trayectoria' : 'Career'}
      </p>
      <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-12">
        {lang === 'es' ? 'Experiencia' : 'Experience'}
      </h2>

      <ol className="relative w-full max-w-3xl before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-4.5 before:w-0.5 before:bg-linear-to-b before:from-violet before:via-blue before:to-green before:opacity-50">
        {experience.map((job) => (
          <motion.li
            key={job.company + job.period.es}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-12 pb-10 text-left"
          >
            <span
              className="absolute left-2.25 top-2 w-4.5 h-4.5 rounded-full bg-black"
              style={{ boxShadow: `0 0 0 3px var(--color-violet), 0 0 18px 2px rgba(153,24,218,0.7)` }}
            />
            <div className="relative overflow-hidden rounded-2xl p-6 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-sm">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                <div>
                  <h3 className="font-serif font-semibold text-xl">{job.role[lang]}</h3>
                  <p className="text-neutral-400 text-sm mt-0.5">{job.company}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-white/55 whitespace-nowrap">{job.period[lang]}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {job.bullets[lang].map((bullet, bi) => (
                  <li key={bi} className="relative pl-4 text-sm leading-relaxed text-white/80">
                    <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full bg-green" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
