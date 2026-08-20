export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current: boolean;
}

// El orden importa: Experience.astro mapea cada entrada a su prefijo de
// traduccion por indice (expPrefixes). Si se agrega o reordena una entrada
// aqui, hay que actualizar ese array en el componente.
export const experiences: Experience[] = [
  {
    company: "Indaga Lab",
    role: "Fundador y Desarrollador Principal",
    period: "2025 - Actualidad",
    location: "Quito, Ecuador / Remoto",
    description: [
      "Wauto Indaga: CRM y automatización de mensajería con IA para WhatsApp, Telegram y Meta, en producción con cinco planes comerciales y respuesta del agente en menos de 2 segundos",
      "Kumbre: herramienta vertical para constructoras que convierte presupuestos PDF en formato SERCOP a Excel editable mediante parsing inteligente y fuzzy matching, con catálogo precargado e índices de precios oficiales",
      "AgentOS: aplicación Android que convierte teléfonos sin servicios de Google en un agente de IA operado por Telegram, publicada como open source",
      "Portal de servicios en indagalab.com con consultoría técnica y de IA, sistemas a medida y apoyo a investigación académica",
      "Dirección técnica del equipo, definición de producto y modelo de precios, y acreditación de colaboradores",
    ],
    tags: ["Next.js 16", "React 19", "FastAPI", "Supabase", "pgvector", "LangGraph", "MCP", "Kotlin"],
    current: true,
  },
  {
    company: "Desarrollador Freelance",
    role: "Software & Soluciones IA",
    period: "2024 - Actualidad",
    location: "Remoto",
    description: [
      "CRM para consultora de asesoría energética con gestión de clientes, formularios dinámicos, paginación y componentes reutilizables sobre repositorio privado del cliente",
      "Diseño e implementación de bots conversacionales (Telegram, WhatsApp) con orquestación LLM, failover entre proveedores, prompts versionados y validación estricta de salida. Flujos de calificación de leads, CRM y atención a clientes",
      "Plataformas de gestión de cuentas compartidas con bandeja de entrada vía webhooks de correo y pollers de scraping, extracción automática de códigos OTP, validación CAPTCHA y panel administrativo",
      "Prototipos de detección de anomalías sobre series temporales multi-país con consenso de múltiples técnicas y dashboards interactivos",
      "Estudios de viabilidad de datos con web scraping a plataformas e-commerce heterogéneas y consolidación en datasets reutilizables",
      "Landings modernas y portafolios profesionales con stack actual (Astro, Next.js, Tailwind, React Three Fiber) y despliegue con CI/CD edge",
      "Apoyo computacional a tesis e investigación académica con simulación numérica end-to-end, portabilidad a MATLAB y experimentos reproducibles en PLN",
      "Automatizaciones con n8n y workflows propios para ingestión, transformación y entrega de datos",
      "Publicación de herramientas propias open source con releases multiplataforma automatizados en GitHub Actions y documentación bilingüe",
    ],
    tags: ["Python", "FastAPI", "Astro", "Next.js", "Kotlin", "Compose Multiplatform", "LangGraph", "n8n", "Docker"],
    current: true,
  },
  {
    company: "Dataglov S.A.S.",
    role: "Ingeniero de Software Junior (Data & AI)",
    period: "Feb 2026 - Ago 2026",
    location: "Loja, Ecuador",
    description: [
      "Desarrollo y mantenimiento de un microservicio de IA con arquitectura DDD y multi-tenencia aislada por esquemas en PostgreSQL, organizado en 18 dominios funcionales servidos por una API REST única",
      "Búsqueda semántica sobre 139.000 conversaciones vectorizadas con embeddings multilingües BGE-M3 de 1.024 dimensiones e índice HNSW en pgvector",
      "Pipelines ETL para ingestión, limpieza y enriquecimiento de grandes volúmenes de conversaciones y pares cliente-agente, con jobs asíncronos y workers en background. Re-embebido de 62.000 conversaciones en menos de una hora sobre GPU NVIDIA A6000 con Text Embeddings Inference",
      "Benchmark propio de motores vectoriales sobre los 139.000 vectores reales, midiendo latencia, recall y memoria, para decidir el motor de producción",
      "Agente conversacional con 15 herramientas de tool calling, control de bucles, caché normalizado y enmascaramiento de PII",
      "Integración y orquestación de LLMs con LangChain y LangGraph. Servicios complementarios de clasificación zero-shot, OCR con extracción estructurada, transcripción local de audio, traducción offline y moderación de contenido",
      "Pipelines de Vision-Language Models self-hosted en GPU (Qwen-VL, InternVL), con batch processing, checkpoints y reintentos, para extracción y análisis de documentos a escala",
      "Migraciones reversibles con checksums, observabilidad de modelos (tracing de tokens y latencia) y rate limiting por tenant",
      "CI/CD y despliegue contenerizado",
    ],
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "pgvector", "PostgreSQL", "Docker", "DDD"],
    current: false,
  },
  {
    company: "Serviestudios Cía Ltda.",
    role: "Desarrollador Full Stack",
    period: "Oct 2025 - Feb 2026",
    location: "Loja, Ecuador",
    description: [
      "Backoffice web con Next.js y aplicación móvil multiplataforma con React Native, soporte de tema dinámico e internacionalización",
      "API REST en Python (Pyramid) organizada por dominios, autenticación JWT + OAuth y modelo granular de roles y permisos",
      "Modelado de datos en PostgreSQL con SQLAlchemy y sistema de migraciones",
      "Mensajería en tiempo real con WebSockets y Redis Pub/Sub",
      "Integraciones con servicios externos: WhatsApp Business API y webhooks, Google Calendar, pasarelas de pago y códigos OTP",
      "Constructor visual de flujos conversacionales, gestión de citas y reservas, y procesamiento de documentos con OCR",
      "Notificaciones push, almacenamiento móvil de alto desempeño y empaquetado para Android/iOS",
    ],
    tags: ["Next.js", "React Native", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets"],
    current: false,
  },
];
