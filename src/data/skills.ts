import type { Bilingual } from '../context/LanguageContext';

export type SkillCategoryKey =
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'cloud'
  | 'devops'
  | 'integrations'
  | 'testing'
  | 'tools';

export const skillCategories: { key: SkillCategoryKey; label: Bilingual<string>; accent: string }[] = [
  { key: 'backend', label: { es: 'Backend', en: 'Backend' }, accent: 'var(--color-violet)' },
  { key: 'frontend', label: { es: 'Frontend', en: 'Frontend' }, accent: 'var(--color-yellow)' },
  { key: 'databases', label: { es: 'Bases de datos', en: 'Databases' }, accent: 'var(--color-green)' },
  { key: 'cloud', label: { es: 'Cloud', en: 'Cloud' }, accent: 'var(--color-blue)' },
  { key: 'devops', label: { es: 'DevOps', en: 'DevOps' }, accent: 'var(--color-violet)' },
  { key: 'integrations', label: { es: 'Integraciones', en: 'Integrations' }, accent: 'var(--color-yellow)' },
  { key: 'testing', label: { es: 'Testing', en: 'Testing' }, accent: 'var(--color-green)' },
  { key: 'tools', label: { es: 'Herramientas', en: 'Tools' }, accent: 'var(--color-blue)' },
];

export interface Skill {
  name: string;
  slug: string | null;
  category: SkillCategoryKey;
}

// Add new skills here as you pick them up — { name, slug, category } is all it takes.
// `slug` must match a filename in src/assets/icons/ (Simple Icons slug); use null if no icon exists.
export const skills: Skill[] = [
  { name: 'C#', slug: 'csharp', category: 'backend' },
  { name: 'Node.js', slug: 'nodedotjs', category: 'backend' },
  { name: 'JavaScript', slug: 'javascript', category: 'backend' },
  { name: 'TypeScript', slug: 'typescript', category: 'backend' },
  { name: '.NET', slug: 'dotnet', category: 'backend' },
  { name: 'Java', slug: 'java', category: 'backend' },
  { name: 'Express.js', slug: 'express', category: 'backend' },
  { name: 'NestJS', slug: 'nestjs', category: 'backend' },
  { name: 'InversifyJS', slug: null, category: 'backend' },

  { name: 'HTML5', slug: 'html5', category: 'frontend' },
  { name: 'CSS3', slug: 'css3', category: 'frontend' },
  { name: 'React', slug: 'react', category: 'frontend' },
  { name: 'React Native', slug: 'react', category: 'frontend' },
  { name: 'Expo', slug: 'expo', category: 'frontend' },
  { name: 'Vite', slug: 'vite', category: 'frontend' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend' },
  { name: 'Redux Toolkit', slug: 'redux', category: 'frontend' },

  { name: 'SQL Server', slug: 'microsoftsqlserver', category: 'databases' },
  { name: 'PostgreSQL', slug: 'postgresql', category: 'databases' },
  { name: 'MongoDB', slug: 'mongodb', category: 'databases' },
  { name: 'Firebase', slug: 'firebase', category: 'databases' },
  { name: 'Firestore', slug: 'firebase', category: 'databases' },
  { name: 'Redis', slug: 'redis', category: 'databases' },

  { name: 'AWS', slug: 'amazonaws', category: 'cloud' },
  { name: 'GCP', slug: 'googlecloud', category: 'cloud' },
  { name: 'Cloudflare R2', slug: 'cloudflare', category: 'cloud' },

  { name: 'Docker', slug: 'docker', category: 'devops' },
  { name: 'Docker Compose', slug: 'docker', category: 'devops' },
  { name: 'RabbitMQ', slug: 'rabbitmq', category: 'devops' },
  { name: 'BullMQ', slug: null, category: 'devops' },
  { name: 'GitHub Actions', slug: 'githubactions', category: 'devops' },
  { name: 'Azure DevOps', slug: 'azuredevops', category: 'devops' },
  { name: 'PM2', slug: 'pm2', category: 'devops' },
  { name: 'EAS', slug: 'expo', category: 'devops' },

  { name: 'Twilio', slug: 'twilio', category: 'integrations' },
  { name: 'SendGrid', slug: 'sendgrid', category: 'integrations' },
  { name: 'FCM', slug: 'firebase', category: 'integrations' },
  { name: 'Google Play', slug: 'googleplay', category: 'integrations' },
  { name: 'Apple IAP', slug: 'apple', category: 'integrations' },
  { name: 'Mapbox', slug: 'mapbox', category: 'integrations' },
  { name: 'OSRM', slug: 'openstreetmap', category: 'integrations' },
  { name: 'Elasticsearch', slug: 'elasticsearch', category: 'integrations' },

  { name: 'Jest', slug: 'jest', category: 'testing' },
  { name: 'Cypress', slug: 'cypress', category: 'testing' },

  { name: 'Swagger', slug: 'swagger', category: 'tools' },
  { name: 'Postman', slug: 'postman', category: 'tools' },
  { name: 'Astah', slug: null, category: 'tools' },
  { name: 'Prisma', slug: 'prisma', category: 'tools' },
];

export const patternGroups: { title: Bilingual<string>; items: string[] }[] = [
  {
    title: { es: 'Arquitecturas y patrones', en: 'Architectures & Patterns' },
    items: [
      'Clean Architecture',
      'Microservices',
      'MVC',
      'SOLID',
      'Repository Pattern',
      'Strategy',
      'Observer',
      'Expert',
      'Pipes and Filters',
    ],
  },
  {
    title: { es: 'Metodologías', en: 'Methodologies' },
    items: ['Scrum'],
  },
];
