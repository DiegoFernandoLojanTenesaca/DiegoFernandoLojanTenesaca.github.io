export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    company: "DataGlov S.A.S.",
    role: "Ingeniero de Software Junior (Data & AI)",
    period: "Feb 2026 - Actualidad",
    location: "Loja, Ecuador",
    description: [
      "Construyo los servicios que mantienen los sistemas de IA funcionando en producción, desde el procesamiento hasta la entrega de datos",
      "Armé los pipelines que alimentan todo el sistema de IA — desde la ingestión hasta el análisis",
      "Integro modelos de ML e IA generativa directamente en productos que ya usan clientes reales",
      "Implementé búsqueda semántica para que el sistema encuentre información relevante de verdad, no solo coincidencias de texto",
      "Desarrollé servicios que clasifican datos automáticamente y generan respuestas inteligentes sin intervención manual",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "Groq", "pgvector", "PostgreSQL"],
    current: true,
  },
  {
    company: "Serviestudios Cía Ltda.",
    role: "Desarrollador Full Stack",
    period: "Oct 2025 - Feb 2026",
    location: "Loja, Ecuador",
    description: [
      "Desarrollé componentes frontend para una plataforma SaaS donde conviven múltiples organizaciones en un mismo sistema",
      "Diseñé y construí la API desde cero con arquitectura multi-tenant — cada organización con sus datos aislados",
      "Monté toda la comunicación en tiempo real con WebSockets para que los datos se sincronicen al instante",
      "Conecté servicios externos como WhatsApp API, Google Calendar y Stripe para que todo funcione integrado",
      "Participé en el desarrollo de la app móvil, llevando las funcionalidades de tiempo real al celular",
    ],
    tags: ["React", "Next.js", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets", "React Native"],
    current: false,
  },
  {
    company: "Freelance",
    role: "Desarrollador Full Stack",
    period: "Abril 2026",
    location: "Remoto",
    description: [
      "Diseñé una arquitectura distribuida que procesa datos en tiempo real desde múltiples fuentes",
      "Construí el sistema que recolecta y procesa información de varias fuentes externas de forma automática",
      "Implementé scraping en paralelo con deduplicación para no repetir datos ni desperdiciar recursos",
      "Armé un panel admin completo con métricas en vivo, monitoreo y controles operativos",
      "Optimicé todo el sistema hasta reducir drásticamente el consumo de memoria y los costos de operación",
    ],
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis"],
    current: false,
  },
];
