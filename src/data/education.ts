import type { Bilingual } from '../context/LanguageContext';

export const educationItems: { title: Bilingual<string>; sub: Bilingual<string> }[] = [
  {
    title: { es: 'Universidad ORT Uruguay', en: 'Universidad ORT Uruguay' },
    sub: { es: 'Analista en Tecnologías de la Información · 2023 – 2026', en: 'Information Technology Analyst · 2023 – 2026' },
  },
  {
    title: {
      es: 'Máster en Java — Programación funcional en Java 8 (Lambda, API Stream)',
      en: 'Java Masterclass — Functional programming in Java 8 (Lambda, Stream API)',
    },
    sub: { es: 'Udemy · 2023', en: 'Udemy · 2023' },
  },
  {
    title: {
      es: 'iOS & Swift — Desarrollo en Swift, UI iOS, gestión de datos, integración API',
      en: 'iOS & Swift — Swift development, iOS UI, data management, API integration',
    },
    sub: { es: 'Udemy · 2023', en: 'Udemy · 2023' },
  },
];

export const languages: { title: Bilingual<string>; sub: Bilingual<string> }[] = [
  { title: { es: 'Español', en: 'Spanish' }, sub: { es: 'Nativo', en: 'Native' } },
  { title: { es: 'Inglés', en: 'English' }, sub: { es: 'Intermedio alto', en: 'Upper intermediate' } },
];
