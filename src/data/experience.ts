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
      "Desarrollo microservicios backend con FastAPI para procesamiento de datos con IA en producción",
      "Implementé pipelines ETL para ingestión, limpieza y transformación de datos conversacionales a gran escala",
      "Construí búsqueda semántica con embeddings BGE-M3 y pgvector en producción",
      "Integré LLMs (Groq API, Qwen) con LangChain y LangGraph para generación de respuestas inteligentes",
      "Desarrollé clasificador zero-shot y agente de IA con múltiples herramientas",
      "Diseñé arquitectura multi-tenant con aislamiento por esquemas en PostgreSQL",
      "Configuré CI/CD con GitLab y despliegue con Docker Compose",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "Groq", "pgvector", "PostgreSQL", "Docker", "GitLab CI/CD"],
    current: true,
  },
  {
    company: "Serviestudios Cía Ltda.",
    role: "Desarrollador Full Stack",
    period: "Oct 2025 - Feb 2026",
    location: "Loja, Ecuador",
    description: [
      "Desarrollé más de 190 componentes React con TypeScript en Next.js: chatbot builder visual, calendario, sistema de citas y panel administrativo multi-organización",
      "Construí una API REST con Python (Pyramid) con más de 90 endpoints, autenticación JWT y arquitectura multi-tenant",
      "Administré una base de datos PostgreSQL con más de 80 modelos SQLAlchemy y 70 migraciones",
      "Implementé comunicación en tiempo real con WebSockets (Twisted/Autobahn) y Redis Pub/Sub",
      "Integré WhatsApp Business API, Google Calendar con OAuth 2.0 y Stripe para pagos",
      "Implementé pipeline OCR + Groq (LLM) para clasificación y extracción automática de datos",
      "Desarrollé app móvil Android con React Native: 45 pantallas, chat en tiempo real y push notifications",
    ],
    tags: ["React", "Next.js", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets", "React Native", "Stripe"],
    current: false,
  },
  {
    company: "Freelance",
    role: "Desarrollador Full Stack",
    period: "2024 - Actualidad",
    location: "Remoto",
    description: [
      "Desarrollé landing pages profesionales con Astro y Tailwind CSS para clientes reales (LeaderGym, desplegado en Vercel)",
      "Creé Kumbre, MVP SaaS de conversión de PDFs de construcción a Excel con parsing inteligente y fuzzy matching",
      "Diseñé arquitectura distribuida para procesamiento de datos en tiempo real en sector entretenimiento digital",
      "Implementé scraping en paralelo con deduplicación y panel admin con métricas en vivo",
      "Optimicé sistemas reduciendo significativamente el consumo de memoria y costos operativos",
    ],
    tags: ["Python", "FastAPI", "Astro", "Tailwind", "Docker", "PostgreSQL", "Vercel", "Cloudflare"],
    current: false,
  },
];
