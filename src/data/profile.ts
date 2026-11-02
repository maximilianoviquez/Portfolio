import type { Bilingual } from '../context/LanguageContext';

export const profile: Bilingual<{
  eyebrow: string;
  name: string;
  role: string;
  pills: string[];
  lead: string;
  ctaDownload: string;
}> = {
  es: {
    eyebrow: 'Montevideo, Uruguay',
    name: 'Maximiliano Viquez',
    role: 'Desarrollador Full Stack Senior',
    pills: ['Node.js', 'TypeScript', 'NestJS', 'React', 'PostgreSQL', 'AWS'],
    lead: 'Desarrollador Full Stack Senior con más de 5 años llevando productos a producción con Node.js, TypeScript, React y AWS.',
    ctaDownload: 'Descargar CV',
  },
  en: {
    eyebrow: 'Montevideo, Uruguay',
    name: 'Maximiliano Viquez',
    role: 'Senior Full Stack Engineer',
    pills: ['Node.js', 'TypeScript', 'NestJS', 'React', 'PostgreSQL', 'AWS'],
    lead: 'Senior Full Stack Engineer with 5+ years taking products to production with Node.js, TypeScript, React and AWS.',
    ctaDownload: 'Download CV',
  },
};

export const aboutProfile: Bilingual<{ heading: string; body: string }> = {
  es: {
    heading: 'Sobre mí',
    body: 'Desarrollador Full Stack Senior con más de 5 años llevando productos a producción con Node.js, TypeScript, React y AWS. Construí motores de matchmaking y de ruteo, y una migración cloud que redujo cerca de un 70% los costos de infraestructura.',
  },
  en: {
    heading: 'About me',
    body: 'Senior Full Stack Engineer with 5+ years taking products to production with Node.js, TypeScript, React and AWS. Built matchmaking and routing engines, and a cloud migration that cut infrastructure costs by roughly 70%.',
  },
};

export const contact = {
  email: 'viquezmaximiliano@gmail.com',
  phone: '+598 95 456 888',
  phoneHref: '+59895456888',
  location: 'Montevideo, Uruguay',
  linkedin: 'https://www.linkedin.com/in/maximilianoviquez',
  linkedinLabel: '/in/maximilianoviquez',
  cv: {
    es: `${import.meta.env.BASE_URL}cv/Maximiliano-Viquez-CV-ES.pdf`,
    en: `${import.meta.env.BASE_URL}cv/Maximiliano-Viquez-CV-EN.pdf`,
  },
};
