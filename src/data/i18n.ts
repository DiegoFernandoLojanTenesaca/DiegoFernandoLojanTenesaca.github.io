export const translations: Record<string, Record<string, string>> = {
  // Navbar
  "nav.inicio": { es: "Inicio", en: "Home" },
  "nav.tecnologias": { es: "Tecnologías", en: "Technologies" },
  "nav.sobre": { es: "Sobre Mí", en: "About Me" },
  "nav.experiencia": { es: "Experiencia", en: "Experience" },
  "nav.proyectos": { es: "Proyectos", en: "Projects" },
  "nav.contacto": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.greeting": { es: "<developer />", en: "<developer />" },
  "hero.subtitle": { es: "Full Stack Developer | Data & AI Engineer", en: "Full Stack Developer | Data & AI Engineer" },
  "hero.tagline": {
    es: "De la arquitectura de software a los modelos de IA — diseño, construyo y despliego sistemas completos que resuelven problemas reales en producción.",
    en: "From software architecture to AI models — I design, build and deploy complete systems that solve real problems in production.",
  },
  "hero.cta.projects": { es: "Ver Proyectos", en: "View Projects" },
  "hero.cta.contact": { es: "Contáctame", en: "Contact Me" },
  "hero.cta.cv": { es: "Descargar CV", en: "Download CV" },

  // Technologies
  "tech.title": { es: "Tecnologías", en: "Technologies" },
  "tech.subtitle": { es: "Mi stack tecnológico en constante evolución", en: "My ever-evolving tech stack" },
  "tech.cat.frontend": { es: "Frontend", en: "Frontend" },
  "tech.cat.backend": { es: "Backend", en: "Backend" },
  "tech.cat.dataai": { es: "Data & AI", en: "Data & AI" },
  "tech.cat.dbdevops": { es: "Bases de Datos & DevOps", en: "Databases & DevOps" },
  "tech.cat.realtime": { es: "Tiempo Real", en: "Real Time" },
  "tech.cat.tools": { es: "Herramientas", en: "Tools" },

  // About
  "about.title": { es: "Sobre Mí", en: "About Me" },
  "about.p1": {
    es: "Ingeniero en Ciencias de la Computación con experiencia académica internacional (Ecuador y Perú) y formación en metodologías de enseñanza. Trabajo en la intersección entre el desarrollo full stack y la ingeniería de datos e IA, transformando problemas complejos en soluciones eficientes y escalables.",
    en: "Computer Science Engineer with international academic experience (Ecuador and Peru) and teaching methodology training. I work at the intersection of full stack development and data & AI engineering, turning complex problems into efficient, scalable solutions.",
  },
  "about.p2": {
    es: "Actualmente en DataGlov S.A.S., donde desarrollo microservicios de IA, pipelines de datos y sistemas de búsqueda semántica en producción. Previamente construí Sudial, una plataforma SaaS multi-tenant con backoffice web y app móvil. También creo productos propios como Kumbre (SaaS para construcción).",
    en: "Currently at DataGlov S.A.S., where I build AI microservices, data pipelines and semantic search systems in production. Previously built Sudial, a multi-tenant SaaS platform with web backoffice and mobile app. I also create my own products like Kumbre (construction SaaS).",
  },
  "about.p3": {
    es: "Mi enfoque combina ingeniería de software con análisis de datos, buscando construir soluciones que generen valor real. Desde plataformas SaaS hasta detección de anomalías energéticas con ML — diseño, construyo y despliego.",
    en: "My approach combines software engineering with data analysis, building solutions that generate real value. From SaaS platforms to energy anomaly detection with ML — I design, build and deploy.",
  },
  "about.edu.title": { es: "Ing. en Ciencias de la Computación", en: "B.S. Computer Science" },
  "about.edu.school": { es: "Universidad Nacional de Loja · 2020 - 2025", en: "Universidad Nacional de Loja · 2020 - 2025" },
  "about.edu2.title": { es: "Estudios Internacionales en Ing. de Sistemas", en: "International Studies in Systems Engineering" },
  "about.edu2.school": { es: "Universidad Tecnológica del Perú (UTP) · Lima, Perú", en: "Universidad Tecnológica del Perú (UTP) · Lima, Peru" },
  "about.edu3.title": { es: "Diplomado en Aprendizaje Basado en Proyectos", en: "Diploma in Project-Based Learning" },
  "about.edu3.school": { es: "Politécnico de Colombia · 120h · 2026", en: "Politécnico de Colombia · 120h · 2026" },
  "about.linkedin": { es: "Ver LinkedIn", en: "View LinkedIn" },

  // About - Status card
  "status.title": { es: "Estado actual", en: "Current Status" },
  "status.role.label": { es: "Rol actual", en: "Current Role" },
  "status.location.label": { es: "Ubicación", en: "Location" },
  "status.availability.label": { es: "Disponibilidad", en: "Availability" },
  "status.availability.value": { es: "Disponible para proyectos remotos", en: "Available for remote projects" },
  "status.working": { es: "Actualmente trabajando con:", en: "Currently working with:" },

  // Experience
  "exp.title": { es: "Experiencia", en: "Experience" },
  "exp.subtitle": { es: "Mi trayectoria profesional en desarrollo de software e IA.", en: "My professional journey in software development and AI." },
  "exp.current": { es: "ACTUAL", en: "CURRENT" },

  // Experience - DataGlov
  "exp.dg.1": {
    es: "Desarrollo microservicios backend con FastAPI con diseño por dominios (router/service/repository) y arquitectura multi-tenant aislada por esquemas en PostgreSQL",
    en: "I build backend microservices with FastAPI using domain-driven design (router/service/repository) and multi-tenant architecture with schema isolation in PostgreSQL",
  },
  "exp.dg.2": {
    es: "Pipelines ETL para ingestión, limpieza y enriquecimiento de datos conversacionales a gran escala, con jobs asíncronos y workers en background",
    en: "ETL pipelines for large-scale conversational data ingestion, cleaning and enrichment, with async jobs and background workers",
  },
  "exp.dg.3": {
    es: "Búsqueda semántica e indexación vectorial con embeddings BGE-M3 y pgvector (HNSW) sobre cientos de miles de registros",
    en: "Semantic search and vector indexing with BGE-M3 embeddings and pgvector (HNSW) over hundreds of thousands of records",
  },
  "exp.dg.4": {
    es: "18 dominios funcionales y un agente conversacional con +15 herramientas, control de bucles, caché normalizado y enmascaramiento de PII",
    en: "18 functional domains and a conversational agent with 15+ tools, loop control, normalized cache and PII masking",
  },
  "exp.dg.5": {
    es: "Orquestación de LLMs con LangChain y LangGraph; servicios complementarios: clasificación zero-shot, OCR + extracción estructurada, transcripción local de audio, traducción offline y moderación de contenido",
    en: "LLM orchestration with LangChain and LangGraph; complementary services: zero-shot classification, OCR + structured extraction, local audio transcription, offline translation and content moderation",
  },
  "exp.dg.6": {
    es: "Pipelines de Vision-Language Models (Qwen-VL, InternVL) self-hosted en GPU NVIDIA A6000 con batch processing, checkpoints y retries para extracción y análisis de documentos a gran escala",
    en: "Self-hosted Vision-Language Model pipelines (Qwen-VL, InternVL) on NVIDIA A6000 GPU with batch processing, checkpoints and retries for large-scale document extraction and analysis",
  },
  "exp.dg.7": {
    es: "Sistema de migraciones reversibles con checksums, observabilidad de modelos (tracing de tokens y latencia) y rate limiting por tenant",
    en: "Reversible migration system with checksums, model observability (token and latency tracing) and per-tenant rate limiting",
  },
  "exp.dg.8": {
    es: "CI/CD con GitLab y despliegue contenerizado con Docker Compose",
    en: "CI/CD with GitLab and containerized deployment with Docker Compose",
  },

  // Experience - Serviestudios
  "exp.sv.1": {
    es: "Construí interfaces web con React y Next.js (App Router): chatbot builder visual, calendario, sistema de citas y panel administrativo multi-organización",
    en: "Built web interfaces with React and Next.js (App Router): visual chatbot builder, calendar, appointment system and multi-org admin panel",
  },
  "exp.sv.2": {
    es: "API REST con Python (Pyramid), autenticación JWT y arquitectura multi-tenant con control granular de roles y permisos",
    en: "REST API with Python (Pyramid), JWT authentication and multi-tenant architecture with granular role and permission control",
  },
  "exp.sv.3": {
    es: "Modelado de datos en PostgreSQL con SQLAlchemy y sistema de migraciones",
    en: "Data modeling in PostgreSQL with SQLAlchemy and a migrations system",
  },
  "exp.sv.4": {
    es: "Comunicación en tiempo real con WebSockets (Twisted/Autobahn) y Redis Pub/Sub",
    en: "Real-time communication with WebSockets (Twisted/Autobahn) and Redis Pub/Sub",
  },
  "exp.sv.5": {
    es: "Integración con WhatsApp Business API, Google Calendar (OAuth 2.0) y pasarelas de pago",
    en: "Integration with WhatsApp Business API, Google Calendar (OAuth 2.0) and payment gateways",
  },
  "exp.sv.6": {
    es: "Pipeline OCR + LLM para clasificación y extracción automática de datos de documentos",
    en: "OCR + LLM pipeline for automatic document data classification and extraction",
  },
  "exp.sv.7": {
    es: "App móvil multiplataforma con React Native: chat en tiempo real, notificaciones push y almacenamiento local de alto desempeño",
    en: "Cross-platform mobile app with React Native: real-time chat, push notifications and high-performance local storage",
  },

  // Experience - Freelance
  "exp.fr.1": {
    es: "Desarrollé landing pages profesionales con Astro y Tailwind CSS para clientes reales (LeaderGym, desplegado en Vercel)",
    en: "Built professional landing pages with Astro and Tailwind CSS for real clients (LeaderGym, deployed on Vercel)",
  },
  "exp.fr.2": {
    es: "Creé Kumbre, MVP SaaS de conversión de PDFs de construcción a Excel con parsing inteligente y fuzzy matching",
    en: "Created Kumbre, a SaaS MVP for converting construction PDFs to Excel with intelligent parsing and fuzzy matching",
  },
  "exp.fr.3": {
    es: "Diseñé arquitectura distribuida para procesamiento de datos en tiempo real en sector entretenimiento digital",
    en: "Designed distributed architecture for real-time data processing in digital entertainment sector",
  },
  "exp.fr.4": {
    es: "Implementé scraping en paralelo con deduplicación y panel admin con métricas en vivo",
    en: "Implemented parallel scraping with deduplication and admin panel with live metrics",
  },
  "exp.fr.5": {
    es: "Optimicé sistemas reduciendo significativamente el consumo de memoria y costos operativos",
    en: "Optimized systems significantly reducing memory consumption and operational costs",
  },

  // Projects
  "proj.title": { es: "Proyectos", en: "Projects" },
  "proj.subtitle": { es: "Proyectos profesionales y personales en los que he trabajado", en: "Professional and personal projects I've worked on" },
  "proj.private": { es: "Privado", en: "Private" },
  "proj.other": { es: "Otros proyectos", en: "Other projects" },
  "proj.sudial.desc": {
    es: "Plataforma SaaS multi-tenant para gestión de comunicaciones empresariales vía WhatsApp. Incluye chatbot builder visual, sistema de citas, CRM, inventario y app móvil multiplataforma con chat en tiempo real y notificaciones push.",
    en: "Multi-tenant SaaS platform for business communication via WhatsApp. Includes visual chatbot builder, appointments, CRM, inventory and a cross-platform mobile app with real-time chat and push notifications.",
  },
  "proj.sudialai.desc": {
    es: "Plataforma de IA para atención al cliente con búsqueda semántica (BGE-M3 + pgvector), clasificación zero-shot, sugerencias de respuestas, OCR inteligente y agente de IA con múltiples herramientas. Arquitectura multi-tenant en producción.",
    en: "AI platform for customer service with semantic search (BGE-M3 + pgvector), zero-shot classification, response suggestions, intelligent OCR and multi-tool AI agent. Multi-tenant architecture in production.",
  },
  "proj.energy.desc": {
    es: "Detección multi-técnica de crisis energéticas en 8 países de LATAM. Consenso de 3 algoritmos (Isolation Forest + STL + CUSUM) con F1=0.750. Validado contra la crisis real de Ecuador 2024 (Decreto 229). 784 meses de datos, 9 modelos comparados.",
    en: "Multi-technique energy crisis detection across 8 LATAM countries. 3-algorithm consensus (Isolation Forest + STL + CUSUM) with F1=0.750. Validated against Ecuador's real 2024 crisis (Decree 229). 784 months of data, 9 models compared.",
  },
  "proj.kumbre.desc": {
    es: "MVP SaaS para el sector construcción: convierte PDFs de presupuestos (APUs) a Excel con parsing inteligente y fuzzy matching. Sistema de planes (Free/Silver/Gold/Platinum), watermarks y almacenamiento en Cloudflare.",
    en: "Construction sector SaaS MVP: converts budget PDFs (APUs) to Excel with intelligent parsing and fuzzy matching. Plan system (Free/Silver/Gold/Platinum), watermarks and Cloudflare storage.",
  },
  "proj.leadergym.desc": {
    es: "Landing page profesional para gimnasio real en Loja, Ecuador. Diseño mobile-first con animaciones scroll, carrusel de servicios, reels del equipo, horarios interactivos, planes de membresía y WhatsApp Business. SEO optimizado.",
    en: "Professional landing page for a real gym in Loja, Ecuador. Mobile-first design with scroll animations, service carousel, team reels, interactive schedules, membership plans and WhatsApp Business. SEO optimized.",
  },
  "proj.mlhub.desc": {
    es: "Portafolio de proyectos aplicados de ML: detección de phishing, clasificación de spam, detección de fraude financiero, visión por computadora y predicción deportiva. Demos interactivos con Jupyter.",
    en: "Applied ML project portfolio: phishing detection, spam classification, financial fraud detection, computer vision and sports prediction. Interactive Jupyter demos.",
  },
  "proj.electoral.desc": {
    es: "Análisis exploratorio de datos y modelos predictivos aplicados a datos electorales oficiales del CNE. Web scraping automatizado con Selenium y dataset publicado en Kaggle con 227+ vistas.",
    en: "Exploratory data analysis and predictive models applied to official CNE electoral data. Automated web scraping with Selenium and dataset published on Kaggle with 227+ views.",
  },
  "proj.stress.desc": {
    es: "Proyecto de integración curricular: análisis de sentimientos para detectar estrés en tweets usando SVM optimizado con Optuna TPE. Embeddings FastText, Playwright/Selenium para scraping. Metodología CRISP-DM.",
    en: "Capstone project: sentiment analysis to detect stress in tweets using SVM optimized with Optuna TPE. FastText embeddings, Playwright/Selenium scraping. CRISP-DM methodology.",
  },
  "proj.vosk.desc": {
    es: "Sistema de reconocimiento de voz utilizando el modelo VOSK para transcripción automática en aplicaciones de campo. Exportación a PDF, Word y Excel.",
    en: "Voice recognition system using the VOSK model for automatic transcription in field applications. Export to PDF, Word and Excel.",
  },
  "proj.aisladores.desc": {
    es: "Pipeline numérico para tesis de Ingeniería Civil: análisis modal-espectral, integración de Newmark-β, diseño de aisladores NRB y verificaciones de estabilidad y volcamiento. Comparativa de 3 edificios (2/5/10 pisos), tests unitarios y portabilidad a MATLAB.",
    en: "Numerical pipeline for a Civil Engineering thesis: modal-spectral analysis, Newmark-β integration, NRB isolator design and stability/overturning checks. Comparison of 3 buildings (2/5/10 stories), unit tests and MATLAB portability.",
  },

  // Certifications
  "cert.title": { es: "Certificaciones", en: "Certifications" },
  "cert.subtitle": { es: "Formación continua en tecnología, datos e inteligencia artificial.", en: "Continuous learning in technology, data and artificial intelligence." },

  // Nav - Certifications
  "nav.certificaciones": { es: "Certificaciones", en: "Certifications" },

  // Contact
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.subtitle": { es: "¿Tienes un proyecto en mente o quieres colaborar? Hablemos.", en: "Have a project in mind or want to collaborate? Let's talk." },
  "contact.location": { es: "Loja, Ecuador · Disponible para trabajo remoto", en: "Loja, Ecuador · Available for remote work" },
  "contact.connections": { es: "Conexiones", en: "Connections" },

  // Connections
  "conn.jahir": { es: "Developer", en: "Developer" },
  "conn.xavier": { es: "Ingeniero de Software", en: "Software Engineer" },
  "conn.maria": { es: "Ing. Computación & Docente", en: "Computer Science Eng. & Lecturer" },

  // Footer
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "footer.made": { es: "Hecho con", en: "Made with" },
};
