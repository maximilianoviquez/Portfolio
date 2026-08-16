import type { Bilingual } from '../context/LanguageContext';

export interface Job {
  company: string;
  role: Bilingual<string>;
  period: Bilingual<string>;
  bullets: Bilingual<string[]>;
}

export const experience: Job[] = [
  {
    company: 'Pinealage',
    role: { es: 'Full-stack Developer, Líder de IT', en: 'Full-stack Developer, IT Lead' },
    period: { es: 'Junio 2025 – Actualidad', en: 'June 2025 – Present' },
    bullets: {
      es: [
        'Diseño e implementación de 3 microservicios independientes: Usuarios/Suscripciones (PostgreSQL + Prisma), Matchmaking/Gamificación (MongoDB + Redis/Bull) y Notificaciones (FCM + SendGrid vía BullMQ).',
        'Comunicación bidireccional en tiempo real mediante WebSockets/Socket.IO para chat y eventos en vivo.',
        'Lógica de emparejamiento geolocalizado, pagos nativos in-app (Expo IAP) con validación de recibos (Google Play/Apple), y formularios complejos con React Hook Form + Zod.',
        'Autenticación híbrida Firebase Auth + JWT, gestión de tokens con interceptores Axios, y persistencia de estado con Redux Toolkit + Redux Persist.',
        'Pipeline de CI/CD automatizado hacia App Store y Play Store vía EAS.',
        'Infraestructura cloud en GCP: VMs, Storage, PostgreSQL 15, MongoDB Atlas y gestión de procesos en producción con PM2.',
        'Panel administrativo (React 18 + Vite) con métricas en tiempo real (Recharts) para seguimiento de usuarios, conversión y análisis de negocio.',
        'Definición del stack tecnológico, patrones de diseño, tipado estricto y buenas prácticas de seguridad para el equipo completo.',
      ],
      en: [
        'Design and implementation of 3 independent microservices: Users/Subscriptions (PostgreSQL + Prisma), Matchmaking/Gamification (MongoDB + Redis/Bull), and Notifications (FCM + SendGrid via BullMQ).',
        'Bidirectional real-time communication via WebSockets/Socket.IO for chat and live events.',
        'Geolocation-based matchmaking logic, native in-app payments (Expo IAP) with receipt validation (Google Play/Apple), and complex forms using React Hook Form + Zod.',
        'Hybrid Firebase Auth + JWT authentication, token management with Axios interceptors, and state persistence with Redux Toolkit + Redux Persist.',
        'Automated CI/CD pipeline to App Store and Play Store via EAS.',
        'Cloud infrastructure on GCP: VMs, Storage, PostgreSQL 15, MongoDB Atlas, and production process management with PM2.',
        'Admin dashboard (React 18 + Vite) with real-time metrics (Recharts) for user tracking, conversion rates, and business analytics.',
        'Definition of the technology stack, design patterns, strict typing, and security best practices for the entire team.',
      ],
    },
  },
  {
    company: 'SoyDelivery',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    period: { es: 'Abril 2025 – Actualidad', en: 'April 2025 – Present' },
    bullets: {
      es: [
        'Arquitectura e implementación de un motor geoespacial propio para la optimización de rutas de entrega, con soporte para cientos de pedidos simultáneos, multi-backend de routing (OSRM local/remoto + Mapbox) y geocodificación vía Nominatim/Overpass API, incluyendo cálculo de matrices de distancia.',
        'Desarrollo end-to-end de un sistema de gestión del ciclo de vida de entregas: asignación y creación de rutas, monitoreo en tiempo real de estados y conductores, e integración con APIs de múltiples clientes. Conectado con el área financiera y el sistema legado GeneXus (Programación Orientada a Eventos), con exportación a Excel y notificaciones por email.',
        'Orquestación de flujos conversacionales automatizados mediante un backend con IA, orientado a atención al cliente. El sistema identifica intenciones, genera respuestas automáticas y gestiona la derivación a agentes humanos a través de canales de SMS y voz (Twilio).',
        'Monitoreo en tiempo real del flujo de clientes en centros de distribución: gestión de estados de cola, integración con tótems físicos y asignación de slots de retiro por franja horaria.',
        'Construcción de infraestructura de mensajería con RabbitMQ, persistencia distribuida y centralización de logs mediante Elasticsearch.',
        'Diseño e implementación de interfaces modulares en React orientadas a entornos de alta operatividad.',
      ],
      en: [
        'Architecture and implementation of a custom geospatial engine for delivery route optimization, supporting hundreds of simultaneous orders, multi-backend routing (local/remote OSRM + Mapbox), and geocoding via Nominatim/Overpass API, including distance matrix calculation.',
        'End-to-end development of a delivery lifecycle management system: route assignment and creation, real-time tracking of statuses and drivers, and integration with multiple client APIs. Connected to the financial area and the legacy GeneXus system (Event-Driven Programming), with Excel export and email notifications.',
        'Orchestration of automated conversational flows through an AI-powered backend focused on customer service. The system identifies user intents, generates automated responses, and manages escalation to human agents via SMS and voice channels (Twilio).',
        'Real-time monitoring of customer flow at distribution centers: queue state management, integration with physical kiosks, and time-slot assignment for order pickup.',
        'Messaging infrastructure built with RabbitMQ, distributed persistence, and centralized log management via Elasticsearch.',
        'Design and implementation of modular React interfaces built for high-operability environments.',
      ],
    },
  },
  {
    company: 'ConViven',
    role: { es: 'Líder de Proyecto y Co-Fundador', en: 'Project Lead & Co-Founder' },
    period: { es: 'Marzo 2024 – Junio 2025', en: 'March 2024 – June 2025' },
    bullets: {
      es: [
        'Desarrollo completo del producto, que incluye una aplicación móvil (React Native/Expo), un panel web (React/Vite) y el backend.',
        'Planificación y optimización de procesos.',
        'Coordinación del equipo, compuesto por 2 programadores y 2 diseñadores.',
        'Supervisión del desarrollo y aseguramiento del cumplimiento de plazos y entregables.',
        'Diseño e implementación de soluciones escalables.',
      ],
      en: [
        'Full product development, including a mobile application (React Native/Expo), a web panel (React/Vite), and the backend.',
        'Process planning and optimization.',
        'Team coordination, consisting of 2 developers and 2 designers.',
        'Development oversight and delivery of milestones on schedule.',
        'Design and implementation of scalable solutions.',
      ],
    },
  },
  {
    company: 'Freelancer',
    role: { es: 'Freelancer', en: 'Freelancer' },
    period: { es: 'Diciembre 2023 – Abril 2025', en: 'December 2023 – April 2025' },
    bullets: {
      es: [
        'Creación y desarrollo de proyectos tecnológicos escalables.',
        'Desarrollo de aplicaciones a medida.',
        'Mejora de código y arquitectura aplicando principios SOLID.',
        'Optimización de rendimiento y tiempos de carga.',
        'Proyectos destacados: Red Social (C#, .NET, ASP.NET 7.0 MVC), Gestión de Inventario (C#, MVC, .NET, SQL, WebAPI REST), Juego de Poker (Java, Experto, Observer, MVC, Strategy).',
      ],
      en: [
        'Development of scalable technology projects.',
        'Custom application development.',
        'Code and architecture improvements applying SOLID principles.',
        'Performance and load time optimization.',
        'Notable projects: Social Network (C#, .NET, ASP.NET 7.0 MVC), Inventory Management (C#, MVC, .NET, SQL, REST WebAPI), Poker Game (Java, Expert, Observer, MVC, Strategy).',
      ],
    },
  },
  {
    company: 'IBERTRANS SRL',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    period: { es: 'Marzo 2020 – Diciembre 2023', en: 'March 2020 – December 2023' },
    bullets: {
      es: [
        'Desarrollo y diseño de aplicaciones web.',
        'Mantenimiento y soporte.',
        'Desarrollo de diagramas y planificación técnica.',
        'Gestión de documentación.',
      ],
      en: [
        'Web application development and design.',
        'Maintenance and support.',
        'Diagram creation and technical planning.',
        'Documentation management.',
      ],
    },
  },
];
