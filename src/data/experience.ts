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
      "Desarrollo microservicios backend con FastAPI con diseño por dominios (router/service/repository) y arquitectura multi-tenant aislada por esquemas en PostgreSQL",
      "Pipelines ETL para ingestión, limpieza y enriquecimiento de datos conversacionales a gran escala, con jobs asíncronos y workers en background",
      "Búsqueda semántica e indexación vectorial con embeddings BGE-M3 y pgvector (HNSW) sobre cientos de miles de registros",
      "18 dominios funcionales y un agente conversacional con +15 herramientas, control de bucles, caché normalizado y enmascaramiento de PII",
      "Orquestación de LLMs con LangChain y LangGraph; servicios complementarios: clasificación zero-shot, OCR + extracción estructurada, transcripción local de audio, traducción offline y moderación de contenido",
      "Pipelines de Vision-Language Models (Qwen-VL, InternVL) self-hosted en GPU NVIDIA A6000 con batch processing, checkpoints y retries para extracción y análisis de documentos a gran escala",
      "Sistema de migraciones reversibles con checksums, observabilidad de modelos (tracing de tokens y latencia) y rate limiting por tenant",
      "CI/CD con GitLab y despliegue contenerizado con Docker Compose",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "Groq", "pgvector", "PostgreSQL", "Docker", "GPU/CUDA", "GitLab CI/CD"],
    current: true,
  },
  {
    company: "Serviestudios Cía Ltda.",
    role: "Desarrollador Full Stack",
    period: "Oct 2025 - Feb 2026",
    location: "Loja, Ecuador",
    description: [
      "Construí interfaces web con React y Next.js (App Router): chatbot builder visual, calendario, sistema de citas y panel administrativo multi-organización",
      "API REST con Python (Pyramid), autenticación JWT y arquitectura multi-tenant con control granular de roles y permisos",
      "Modelado de datos en PostgreSQL con SQLAlchemy y sistema de migraciones",
      "Comunicación en tiempo real con WebSockets (Twisted/Autobahn) y Redis Pub/Sub",
      "Integración con WhatsApp Business API, Google Calendar (OAuth 2.0) y pasarelas de pago",
      "Pipeline OCR + LLM para clasificación y extracción automática de datos de documentos",
      "App móvil multiplataforma con React Native: chat en tiempo real, notificaciones push y almacenamiento local de alto desempeño",
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
