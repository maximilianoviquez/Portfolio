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
    eyebrow: 'Analista Programador · Montevideo, Uruguay',
    name: 'Maximiliano Viquez',
    role: 'Full Stack Developer',
    pills: ['Node.js & Microservicios', 'Mobile · Web · Backend', 'Clean Architecture', 'Líder Técnico'],
    lead: 'Desarrollador Full Stack con más de 5 años de experiencia diseñando y manteniendo sistemas distribuidos basados en microservicios y Node.js. Experto en construir productos completos (Mobile/Web/Backend) enfocados en escalabilidad, Clean Architecture, rendimiento y buenas prácticas de seguridad.',
    ctaDownload: 'Descargar CV',
  },
  en: {
    eyebrow: 'Programmer Analyst · Montevideo, Uruguay',
    name: 'Maximiliano Viquez',
    role: 'Full Stack Developer',
    pills: ['Node.js & Microservices', 'Mobile · Web · Backend', 'Clean Architecture', 'Technical Lead'],
    lead: 'Full Stack Developer with over 5 years of experience designing and maintaining distributed systems based on microservices and Node.js. Expert in building complete products (Mobile/Web/Backend) focused on scalability, Clean Architecture, performance, and security best practices.',
    ctaDownload: 'Download CV',
  },
};

export const aboutProfile: Bilingual<{ heading: string; body: string }> = {
  es: {
    heading: 'Sobre mí',
    body: 'Desarrollador Full Stack con más de 5 años de experiencia en el diseño y mantenimiento de sistemas distribuidos basados en microservicios y Node.js. Experto en la creación de productos completos (Mobile/Web/Backend) enfocados en escalabilidad, Clean Architecture, optimización de rendimiento y buenas prácticas de seguridad. Experiencia liderando equipos técnicos, centrado en entregar soluciones robustas, eficientes y alineadas a los objetivos del negocio. Apasionado por resolver problemas con el uso de la tecnología.',
  },
  en: {
    heading: 'About me',
    body: 'Full Stack Developer with over 5 years of experience designing and maintaining distributed systems based on microservices and Node.js. Expert in building complete products (Mobile/Web/Backend) focused on scalability, Clean Architecture, performance optimization, and security best practices. Experienced in leading technical teams, committed to delivering robust, efficient solutions aligned with business objectives. Passionate about solving problems through technology.',
  },
};

export const stats: { value: number; suffix?: string; label: Bilingual<string> }[] = [
  { value: 5, suffix: '+', label: { es: 'Años de experiencia', en: 'Years of experience' } },
  { value: 3, label: { es: 'Microservicios en producción', en: 'Microservices in production' } },
  { value: 5, label: { es: 'Roles / proyectos liderados', en: 'Roles / projects led' } },
  { value: 40, suffix: '+', label: { es: 'Tecnologías dominadas', en: 'Technologies mastered' } },
];

export const contact = {
  email: 'viquez.ti@gmail.com',
  phone: '+598 95 456 888',
  phoneHref: '+59895456888',
  location: 'Montevideo, Uruguay',
  github: 'https://github.com/maximilianoviquez',
  githubLabel: '/maximilianoviquez',
  linkedin: 'https://www.linkedin.com/in/maximilianoviquez/',
  linkedinLabel: '/in/maximilianoviquez',
  cv: {
    es: `${import.meta.env.BASE_URL}cv/Maximiliano-Viquez-CV-ES.pdf`,
    en: `${import.meta.env.BASE_URL}cv/Maximiliano-Viquez-CV-EN.pdf`,
  },
};
