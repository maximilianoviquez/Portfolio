import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories, skills, patternGroups } from '../data/skills';
import { Icon } from './Icon';

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center px-6 py-24">
      <p className="uppercase tracking-[0.18em] text-xs text-neutral-400 mb-2">Stack</p>
      <h2 className="font-serif font-semibold text-4xl sm:text-5xl mb-4">
        {lang === 'es' ? 'Tecnologías' : 'Technologies'}
      </h2>
      <p className="max-w-xl text-center text-white/80 mb-12">
        {lang === 'es'
          ? 'Herramientas y tecnologías que uso día a día — esta lista la voy actualizando a medida que sumo skills nuevas.'
          : 'Tools and technologies I use day to day — this list keeps growing as I pick up new skills.'}
      </p>

      <div className="w-full max-w-5xl flex flex-col gap-10 text-left">
        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category.key);
          if (!items.length) return null;

          return (
            <div key={category.key}>
              <h3 className="flex items-center gap-2 font-serif italic text-lg mb-4">
                <span className="w-3 h-3 rounded-full" style={{ background: category.accent }} />
                {category.label[lang]}
              </h3>
              <motion.ul
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-3.5"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(6.5rem, 1fr))' }}
              >
                {items.map((skill, i) => (
                  <motion.li
                    key={skill.name + i}
                    variants={tileVariants}
                    whileHover={{ y: -5, scale: 1.04 }}
                    style={{ '--accent': category.accent } as React.CSSProperties}
                    className="flex flex-col items-center gap-2.5 py-4.5 px-2.5 rounded-2xl bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-center text-white/85 transition-colors hover:text-(--accent) hover:shadow-[inset_0_0_0_1px_var(--accent)]"
                  >
                    {skill.slug ? (
                      <Icon slug={skill.slug} className="w-8 h-8" />
                    ) : (
                      <span className="w-8 h-8 flex items-center justify-center font-serif italic text-lg">
                        {skill.name.slice(0, 2)}
                      </span>
                    )}
                    <span className="text-[0.78rem] leading-tight">{skill.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-5xl grid gap-6 mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))' }}>
        {patternGroups.map((group) => (
          <div key={group.title.es}>
            <h4 className="font-serif italic text-neutral-400 mb-3">{group.title[lang]}</h4>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tag) => (
                <li key={tag} className="px-3.5 py-1.5 rounded-full text-sm bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
