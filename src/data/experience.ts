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
    company: "Dataglov S.A.S.",
    role: "Ingeniero de Software Junior (Data & AI)",
    period: "Feb 2026 - Actualidad",
    location: "Loja, Ecuador",
    description: [
      "Desarrollo y mantenimiento de microservicios con arquitectura DDD (Domain-Driven Design) multi-tenant aislada por esquemas en PostgreSQL",
      "Pipelines ETL para ingestión, limpieza y enriquecimiento de grandes volúmenes de conversaciones y pares cliente-agente, con jobs asíncronos y workers en background",
      "Búsqueda semántica e indexación vectorial con embeddings multilingües y pgvector sobre datasets de producción",
      "API REST organizada por dominios funcionales y un agente conversacional con orquestación de herramientas, control de bucles, caché normalizado y enmascaramiento de PII",
      "Integración y orquestación de LLMs con LangChain y LangGraph; servicios complementarios: clasificación zero-shot, OCR + extracción estructurada, transcripción local de audio, traducción offline y moderación de contenido",
      "Pipelines de Vision-Language Models self-hosted en GPU, con batch processing, checkpoints y retries, para extracción y análisis de documentos a escala",
      "Sistema de migraciones reversibles con checksums, observabilidad de modelos (tracing de tokens y latencia) y rate limiting por tenant",
      "CI/CD y despliegue contenerizado",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "pgvector", "PostgreSQL", "Docker", "DDD"],
    current: true,
  },
  {
    company: "Serviestudios Cía Ltda.",
    role: "Desarrollador Full Stack",
    period: "Oct 2025 - Feb 2026",
    location: "Loja, Ecuador",
    description: [
      "Interfaces web con Next.js y aplicación móvil multiplataforma con React Native, soporte de tema dinámico e internacionalización",
      "APIs REST con Python (Pyramid), autenticación JWT + OAuth y modelo granular de roles y permisos",
      "Modelado de datos en PostgreSQL con SQLAlchemy y sistema de migraciones",
      "Mensajería en tiempo real con WebSockets y Redis Pub/Sub",
      "Integraciones con servicios externos: WhatsApp Business API y webhooks, Google Calendar, pasarelas de pago y códigos OTP",
      "Constructor visual de flujos conversacionales, gestión de citas y reservas, y procesamiento de documentos con OCR",
      "Notificaciones push, almacenamiento móvil de alto desempeño y empaquetado para Android/iOS",
    ],
    tags: ["Next.js", "React Native", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets"],
    current: false,
  },
  {
    company: "Indaga Lab (Freelance)",
    role: "Software & Soluciones IA",
    period: "2024 - Actualidad",
    location: "Remoto",
    description: [
      "Landing pages y portafolios profesionales con stack moderno (Astro, Next.js, Tailwind) y despliegue con CI/CD edge",
      "Diseño e implementación de bots conversacionales (Telegram, WhatsApp) con orquestación LLM, failover entre proveedores, prompts versionados y validación estricta de salida; flujos de calificación de leads, CRM y atención a clientes",
      "Plataformas de gestión de cuentas compartidas con bandeja de entrada vía webhooks de correo y pollers de scraping, extracción automática de códigos OTP, validación CAPTCHA y panel administrativo",
      "Estudios de viabilidad de datos con web scraping a plataformas e-commerce heterogéneas y consolidación en datasets reutilizables",
      "Prototipos de detección de anomalías sobre series temporales multi-país con consenso de múltiples técnicas y dashboards interactivos",
      "Automatizaciones con n8n y workflows propios para ingestión, transformación y entrega de datos",
      "Apoyo computacional a tesis e investigación académica: simulación numérica end-to-end, portabilidad a MATLAB y experimentos reproducibles en NLP",
    ],
    tags: ["Python", "FastAPI", "Astro", "Next.js", "LangGraph", "n8n", "Docker"],
    current: true,
  },
];
