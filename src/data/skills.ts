import type { Bilingual } from '../context/LanguageContext';

export type SkillCategoryKey = 'backend' | 'databases' | 'frontend' | 'cloud' | 'testing' | 'ai';

export const skillCategories: { key: SkillCategoryKey; label: Bilingual<string>; accent: string }[] = [
  { key: 'backend', label: { es: 'Backend', en: 'Backend' }, accent: 'var(--color-violet)' },
  { key: 'databases', label: { es: 'Bases de datos', en: 'Databases' }, accent: 'var(--color-green)' },
  { key: 'frontend', label: { es: 'Frontend y mobile', en: 'Frontend & Mobile' }, accent: 'var(--color-yellow)' },
  { key: 'cloud', label: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' }, accent: 'var(--color-blue)' },
  { key: 'testing', label: { es: 'Testing y observabilidad', en: 'Testing & Observability' }, accent: 'var(--color-green)' },
  { key: 'ai', label: { es: 'IA', en: 'AI' }, accent: 'var(--color-violet)' },
];

export interface Skill {
  name: string | Bilingual<string>;
  slug: string | null;
  category: SkillCategoryKey;
}

// Add new skills here as you pick them up — { name, slug, category } is all it takes.
// `name` can be a plain string or { es, en } when it needs translating.
// `slug` must match a filename in src/assets/icons/ (Simple Icons slug); use null if no icon exists.
export const skills: Skill[] = [
  { name: 'Node.js', slug: 'nodedotjs', category: 'backend' },
  { name: 'NestJS', slug: 'nestjs', category: 'backend' },
  { name: 'Express', slug: 'express', category: 'backend' },
  { name: 'REST', slug: null, category: 'backend' },
  { name: 'WebSockets', slug: null, category: 'backend' },
  { name: 'Socket.IO', slug: null, category: 'backend' },
  { name: 'JWT', slug: null, category: 'backend' },
  { name: 'OAuth 2.0', slug: null, category: 'backend' },
  { name: 'BullMQ', slug: null, category: 'backend' },
  { name: 'RabbitMQ', slug: 'rabbitmq', category: 'backend' },

  { name: 'PostgreSQL', slug: 'postgresql', category: 'databases' },
  { name: 'Prisma', slug: 'prisma', category: 'databases' },
  { name: 'MongoDB', slug: 'mongodb', category: 'databases' },
  { name: 'Redis', slug: 'redis', category: 'databases' },
  { name: 'SQL Server', slug: 'microsoftsqlserver', category: 'databases' },

  { name: 'React', slug: 'react', category: 'frontend' },
  { name: 'Next.js', slug: null, category: 'frontend' },
  { name: 'React Native', slug: 'react', category: 'frontend' },
  { name: 'Expo', slug: 'expo', category: 'frontend' },
  { name: 'Redux Toolkit', slug: 'redux', category: 'frontend' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend' },

  { name: 'AWS (EC2, RDS, S3, Lambda, Secrets Manager)', slug: 'amazonaws', category: 'cloud' },
  { name: 'GCP', slug: 'googlecloud', category: 'cloud' },
  { name: 'Docker', slug: 'docker', category: 'cloud' },
  { name: 'Nginx', slug: null, category: 'cloud' },
  { name: 'Cloudflare', slug: 'cloudflare', category: 'cloud' },
  { name: 'GitHub Actions', slug: 'githubactions', category: 'cloud' },

  { name: 'Jest', slug: 'jest', category: 'testing' },
  { name: 'Supertest', slug: null, category: 'testing' },
  { name: 'Testcontainers', slug: null, category: 'testing' },
  { name: 'OpenTelemetry', slug: null, category: 'testing' },
  { name: 'Grafana', slug: null, category: 'testing' },
  { name: 'Sentry', slug: null, category: 'testing' },

  { name: { es: 'Integración de LLM', en: 'LLM integration' }, slug: null, category: 'ai' },
  { name: 'Claude Code', slug: null, category: 'ai' },
  { name: 'GitHub Copilot', slug: null, category: 'ai' },
  { name: 'Cursor', slug: null, category: 'ai' },
];
