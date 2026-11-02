import type { Bilingual } from '../context/LanguageContext';

export interface Job {
  company: Bilingual<string>;
  role: Bilingual<string>;
  period: Bilingual<string>;
  bullets: Bilingual<string[]>;
  links?: { label: string; href: string }[];
}

export const experience: Job[] = [
  {
    company: { es: 'Pinealage · Freelance', en: 'Pinealage · Freelance' },
    role: { es: 'Desarrollador Full Stack Senior', en: 'Senior Full Stack Engineer' },
    period: { es: 'Ene 2026 – Actualidad', en: 'Jan 2026 – Present' },
    bullets: {
      es: [
        'Construí, como desarrollador principal, una app social de encuentros grupales en iOS y Android con más de 3.700 usuarios, sobre cuatro microservicios en NestJS, React Native y un panel de administración en React.',
        'Reduje cerca de un 70% los costos de infraestructura al migrar la plataforma de GCP a AWS (EC2, RDS, Secrets Manager), con CI/CD en GitHub Actions y observabilidad con OpenTelemetry y Grafana.',
        'Diseñé un motor de matchmaking que forma grupos por ubicación, disponibilidad y zona horaria (BullMQ, PostgreSQL, MongoDB geoespacial).',
        'Implementé suscripciones in-app con validación de recibos en el servidor, webhooks de App Store y Google Play y conciliación automática.',
      ],
      en: [
        'Built, as primary engineer, a social group-meetup app on iOS and Android with 3,700+ users, on four NestJS microservices, React Native and a React admin console.',
        'Cut infrastructure costs by roughly 70% by migrating the platform from GCP to AWS (EC2, RDS, Secrets Manager), with CI/CD on GitHub Actions and observability with OpenTelemetry and Grafana.',
        'Designed a matchmaking engine that forms groups by location, availability and time zone (BullMQ, PostgreSQL, MongoDB geospatial).',
        'Implemented in-app subscriptions with server-side receipt validation, App Store and Google Play webhooks and automated reconciliation.',
      ],
    },
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/es/app/pinealage-meditaci%C3%B3n-en-grupo/id6744828001' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pinealage.app&hl=es_UY' },
    ],
  },
  {
    company: { es: 'SoyDelivery', en: 'SoyDelivery' },
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Engineer' },
    period: { es: 'Abr 2025 – Sep 2026', en: 'Apr 2025 – Sep 2026' },
    bullets: {
      es: [
        'Reduje la planificación de rutas de horas a segundos con un motor propio de optimización que procesa miles de pedidos diarios.',
        'Desarrollé un servicio propio de geocodificación y una capa de ruteo autoalojada (OSRM, con respaldo en Mapbox), independiente del proveedor.',
        'Automaticé cientos de conversaciones diarias de soporte por SMS y voz con un servicio basado en LLM (Twilio) que deriva a agentes solo los casos complejos.',
        'Construí la plataforma de gestión de entregas con seguimiento en tiempo real, integraciones con APIs de clientes y sincronización con un sistema financiero legado en GeneXus.',
      ],
      en: [
        'Reduced route planning from hours to seconds with an in-house optimization engine processing thousands of orders per day.',
        'Built an in-house geocoding service and a self-hosted, provider-agnostic routing layer (OSRM with Mapbox failover).',
        'Automated hundreds of daily SMS and voice support conversations with an LLM-based service (Twilio) that escalates only complex cases to agents.',
        'Built the delivery-management platform with real-time tracking, client API integrations and synchronization with a legacy GeneXus financial system.',
      ],
    },
  },
  // Project (not an employer): ConViven appears under "Proyectos" in the CV.
  {
    company: { es: 'ConViven · Proyecto propio', en: 'ConViven · Own venture' },
    role: { es: 'Cofundador y Líder Técnico', en: 'Co-founder & Technical Lead' },
    period: { es: 'Mar 2024 – Actualidad', en: 'Mar 2024 – Present' },
    bullets: {
      // TODO: agregar los links de ConViven cuando estén disponibles.
      es: [
        'Llevé una plataforma para encontrar compañeros de vivienda de MVP a versión de producción con un equipo de 4 personas (React Native, React, Node.js).',
      ],
      en: [
        'Took a roommate-matching platform from MVP to production release with a team of 4 (React Native, React, Node.js).',
      ],
    },
  },
  {
    company: { es: 'Consultor independiente · Freelance', en: 'Independent Consultant · Freelance' },
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Engineer' },
    period: { es: 'Ene 2024 – Abr 2025', en: 'Jan 2024 – Apr 2025' },
    bullets: {
      es: ['Desarrollé sistemas de gestión y reservas a medida para pymes de gastronomía y servicios.'],
      en: ['Built custom management and booking systems for small businesses in food service and personal services.'],
    },
  },
  {
    company: { es: 'IBERTRANS SRL', en: 'IBERTRANS SRL' },
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    period: { es: 'Mar 2020 – Dic 2023', en: 'Mar 2020 – Dec 2023' },
    bullets: {
      es: [
        'Reemplacé la gestión en planillas por una plataforma propia (C#/.NET, SQL Server) para flota, choferes, viajes, combustible y mantenimiento, con reportes a demanda para unas 130 entregas mensuales.',
      ],
      en: [
        'Replaced spreadsheet-based management with an in-house platform (C#/.NET, SQL Server) for fleet, drivers, trips, fuel and maintenance, with on-demand reporting for ~130 deliveries per month.',
      ],
    },
  },
];
