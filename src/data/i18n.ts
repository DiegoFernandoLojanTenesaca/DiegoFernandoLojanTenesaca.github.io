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
    es: "Investigo, trabajo y entrego — ciencia y producto. Sin atajos.",
    en: "I research, build and deliver — science and product. No shortcuts.",
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
    es: "Ingeniero en Ciencias de la Computación con experiencia académica internacional (Ecuador y Perú) y formación en metodologías de enseñanza. Trabajo en la intersección entre el desarrollo full stack, la ingeniería de Data & AI y la investigación aplicada, transformando problemas complejos en soluciones eficientes y escalables.",
    en: "Computer Science Engineer with international academic experience (Ecuador and Peru) and teaching methodology training. I work at the intersection of full stack development, Data & AI engineering and applied research, turning complex problems into efficient, scalable solutions.",
  },
  "about.p2": {
    es: "Actualmente en Dataglov S.A.S., donde construyo microservicios de IA, pipelines de datos y sistemas de búsqueda semántica en producción. En paralelo opero Indaga Lab, mi marca paraguas freelance, bajo la que cuelgan productos verticales como Kumbre (construcción) y la submarca de chatbots empresariales Wauto. Anteriormente construí Sudial, una plataforma SaaS multi-tenant con backoffice web y app móvil.",
    en: "Currently at Dataglov S.A.S., where I build AI microservices, data pipelines and semantic search systems in production. In parallel I run Indaga Lab, my umbrella freelance brand, with vertical products like Kumbre (construction) and the Wauto chatbot sub-brand. Previously I built Sudial, a multi-tenant SaaS platform with web backoffice and mobile app.",
  },
  "about.p3": {
    es: "Combino ingeniería de software con análisis de datos e investigación. Desde plataformas SaaS multi-tenant y agentes LLM en producción hasta detección de anomalías con ML y NLP en español — con un paper aceptado en Springer / CIT 2026. Investigo, trabajo y entrego.",
    en: "I combine software engineering with data analysis and research. From multi-tenant SaaS platforms and production LLM agents to ML anomaly detection and Spanish NLP — with a paper accepted at Springer / CIT 2026. I research, build and deliver.",
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
  "exp.subtitle": { es: "Mi trayectoria profesional en desarrollo de software, IA e investigación.", en: "My professional journey in software, AI and research." },
  "exp.current": { es: "ACTUAL", en: "CURRENT" },

  // Experience - Dataglov
  "exp.dg.1": {
    es: "Desarrollo y mantenimiento de microservicios con arquitectura DDD (Domain-Driven Design) multi-tenant aislada por esquemas en PostgreSQL",
    en: "Develop and maintain microservices with DDD (Domain-Driven Design) architecture, multi-tenant with schema isolation in PostgreSQL",
  },
  "exp.dg.2": {
    es: "Pipelines ETL para ingestión, limpieza y enriquecimiento de grandes volúmenes de conversaciones y pares cliente-agente, con jobs asíncronos y workers en background",
    en: "ETL pipelines for ingestion, cleaning and enrichment of large volumes of conversations and client-agent pairs, with async jobs and background workers",
  },
  "exp.dg.3": {
    es: "Búsqueda semántica e indexación vectorial con embeddings multilingües y pgvector sobre datasets de producción",
    en: "Semantic search and vector indexing with multilingual embeddings and pgvector over production datasets",
  },
  "exp.dg.4": {
    es: "API REST organizada por dominios funcionales y un agente conversacional con orquestación de herramientas, control de bucles, caché normalizado y enmascaramiento de PII",
    en: "REST API organized by functional domains and a conversational agent with tool orchestration, loop control, normalized cache and PII masking",
  },
  "exp.dg.5": {
    es: "Integración y orquestación de LLMs con LangChain y LangGraph; servicios complementarios: clasificación zero-shot, OCR + extracción estructurada, transcripción local de audio, traducción offline y moderación de contenido",
    en: "LLM integration and orchestration with LangChain and LangGraph; complementary services: zero-shot classification, OCR + structured extraction, local audio transcription, offline translation and content moderation",
  },
  "exp.dg.6": {
    es: "Pipelines de Vision-Language Models self-hosted en GPU, con batch processing, checkpoints y retries, para extracción y análisis de documentos a escala",
    en: "Self-hosted Vision-Language Model pipelines on GPU, with batch processing, checkpoints and retries for document extraction and analysis at scale",
  },
  "exp.dg.7": {
    es: "Sistema de migraciones reversibles con checksums, observabilidad de modelos (tracing de tokens y latencia) y rate limiting por tenant",
    en: "Reversible migration system with checksums, model observability (token and latency tracing) and per-tenant rate limiting",
  },
  "exp.dg.8": {
    es: "CI/CD y despliegue contenerizado",
    en: "CI/CD and containerized deployment",
  },

  // Experience - Serviestudios
  "exp.sv.1": {
    es: "Interfaces web con Next.js y aplicación móvil multiplataforma con React Native, soporte de tema dinámico e internacionalización",
    en: "Web interfaces with Next.js and cross-platform mobile app with React Native, with dynamic theming and internationalization",
  },
  "exp.sv.2": {
    es: "APIs REST con Python (Pyramid), autenticación JWT + OAuth y modelo granular de roles y permisos",
    en: "REST APIs with Python (Pyramid), JWT + OAuth authentication and granular role and permission model",
  },
  "exp.sv.3": {
    es: "Modelado de datos en PostgreSQL con SQLAlchemy y sistema de migraciones",
    en: "Data modeling in PostgreSQL with SQLAlchemy and a migrations system",
  },
  "exp.sv.4": {
    es: "Mensajería en tiempo real con WebSockets y Redis Pub/Sub",
    en: "Real-time messaging with WebSockets and Redis Pub/Sub",
  },
  "exp.sv.5": {
    es: "Integraciones con servicios externos: WhatsApp Business API y webhooks, Google Calendar, pasarelas de pago y códigos OTP",
    en: "Integrations with external services: WhatsApp Business API and webhooks, Google Calendar, payment gateways and OTP codes",
  },
  "exp.sv.6": {
    es: "Constructor visual de flujos conversacionales, gestión de citas y reservas, y procesamiento de documentos con OCR",
    en: "Visual conversational flow builder, appointment and booking management, and document processing with OCR",
  },
  "exp.sv.7": {
    es: "Notificaciones push, almacenamiento móvil de alto desempeño y empaquetado para Android/iOS",
    en: "Push notifications, high-performance mobile storage and packaging for Android/iOS",
  },

  // Experience - Indaga Lab (Freelance)
  "exp.fr.1": {
    es: "Landing pages y portafolios profesionales con stack moderno (Astro, Next.js, Tailwind) y despliegue con CI/CD edge",
    en: "Landing pages and professional portfolios with a modern stack (Astro, Next.js, Tailwind) and edge CI/CD deployment",
  },
  "exp.fr.2": {
    es: "Diseño e implementación de bots conversacionales (Telegram, WhatsApp) con orquestación LLM, failover entre proveedores, prompts versionados y validación estricta de salida; flujos de calificación de leads, CRM y atención a clientes",
    en: "Design and implementation of conversational bots (Telegram, WhatsApp) with LLM orchestration, provider failover, versioned prompts and strict output validation; lead qualification, CRM and customer support flows",
  },
  "exp.fr.3": {
    es: "Plataformas de gestión de cuentas compartidas con bandeja de entrada vía webhooks de correo y pollers de scraping, extracción automática de códigos OTP, validación CAPTCHA y panel administrativo",
    en: "Shared-account management platforms with inbox via email webhooks and scraping pollers, automatic OTP extraction, CAPTCHA validation and admin panel",
  },
  "exp.fr.4": {
    es: "Estudios de viabilidad de datos con web scraping a plataformas e-commerce heterogéneas y consolidación en datasets reutilizables",
    en: "Data feasibility studies with web scraping across heterogeneous e-commerce platforms and consolidation into reusable datasets",
  },
  "exp.fr.5": {
    es: "Prototipos de detección de anomalías sobre series temporales multi-país con consenso de múltiples técnicas y dashboards interactivos",
    en: "Anomaly detection prototypes over multi-country time series with multi-technique consensus and interactive dashboards",
  },
  "exp.fr.6": {
    es: "Automatizaciones con n8n y workflows propios para ingestión, transformación y entrega de datos",
    en: "Automations with n8n and custom workflows for data ingestion, transformation and delivery",
  },
  "exp.fr.7": {
    es: "Apoyo computacional a tesis e investigación académica: simulación numérica end-to-end, portabilidad a MATLAB y experimentos reproducibles en NLP",
    en: "Computational support for theses and academic research: end-to-end numerical simulation, MATLAB portability and reproducible NLP experiments",
  },

  // Projects
  "proj.title": { es: "Proyectos", en: "Projects" },
  "proj.subtitle": { es: "Proyectos profesionales, productos propios e investigación", en: "Professional projects, own products and research" },
  "proj.private": { es: "Privado", en: "Private" },
  "proj.other": { es: "Otros proyectos", en: "Other projects" },
  "proj.indagalab.desc": {
    es: "Mi marca paraguas freelance: portal de servicios técnicos y de IA (consultoría, tesis, sistemas a medida) en indagalab.com y submarca de chatbots empresariales con cotizador IA y backoffice en wauto.indagalab.com.",
    en: "My umbrella freelance brand: a portal for technical and AI services (consulting, theses, custom systems) at indagalab.com and a sub-brand for business chatbots with AI quoting and admin panel at wauto.indagalab.com.",
  },
  "proj.sudial.desc": {
    es: "Plataforma SaaS multi-tenant para chatbots WhatsApp empresariales. Backoffice web, app móvil y backend de mensajería con builder visual de flujos, CRM, citas e inventario.",
    en: "Multi-tenant SaaS platform for business WhatsApp chatbots. Web backoffice, mobile app and messaging backend with visual flow builder, CRM, appointments and inventory.",
  },
  "proj.sudialai.desc": {
    es: "Microservicio de IA en producción con arquitectura DDD multi-tenant. Búsqueda semántica con embeddings multilingües, agente conversacional con orquestación de herramientas, clasificación zero-shot, OCR estructurado, transcripción local y moderación.",
    en: "Production AI microservice with multi-tenant DDD architecture. Semantic search with multilingual embeddings, conversational agent with tool orchestration, zero-shot classification, structured OCR, local transcription and moderation.",
  },
  "proj.kumbre.desc": {
    es: "Extensión de Indaga Lab. Herramienta vertical para constructoras enfocada en la gestión de APUs (Análisis de Precios Unitarios) en cotización y obra: convierte presupuestos PDF (formato SERCOP) a Excel editable mediante parsing inteligente, fuzzy matching y catálogo precargado, con cuentas, planes y panel administrativo.",
    en: "An Indaga Lab extension. Vertical tool for construction companies focused on APU (Unit Price Analysis) management in quoting and works: converts PDF budgets (SERCOP format) to editable Excel via smart parsing, fuzzy matching and a preloaded catalog, with accounts, plans and an admin panel.",
  },
  "proj.energy.desc": {
    es: "Detección multi-técnica de crisis energéticas en países de LATAM. Consenso de algoritmos (Isolation Forest, STL, CUSUM) con validación cruzada y dashboard interactivo. Validado contra la crisis real de Ecuador 2024.",
    en: "Multi-technique energy-crisis detection across LATAM countries. Algorithm consensus (Isolation Forest, STL, CUSUM) with cross-validation and an interactive dashboard. Validated against Ecuador's real 2024 crisis.",
  },
  "proj.stress.desc": {
    es: "Investigación aplicada en NLP español: SVM optimizado vía TPE (Optuna) sobre tweets de la crisis energética 2024. Embeddings FastText, scraping con Playwright, metodología CRISP-DM. Paper aceptado en Springer / CIT 2026, en producción.",
    en: "Applied research in Spanish NLP: SVM optimized via TPE (Optuna) over tweets from the 2024 energy crisis. FastText embeddings, Playwright scraping, CRISP-DM methodology. Paper accepted at Springer / CIT 2026, in production.",
  },
  "proj.orbyn.desc": {
    es: "Bot de Telegram que califica leads contra un ICP con LLM y failover automático entre proveedores. Grafo LangGraph con prompts versionados y validación estricta de salida (JSON), persistencia en SQLite y registro en Google Sheets.",
    en: "Telegram bot that qualifies leads against an ICP with an LLM and automatic provider failover. LangGraph graph with versioned prompts and strict output validation (JSON), SQLite persistence and Google Sheets logging.",
  },
  "proj.leadergym.desc": {
    es: "Landing page profesional para gimnasio real en Loja, Ecuador. Diseño mobile-first con animaciones scroll, carrusel de servicios, horarios interactivos, planes de membresía y WhatsApp Business. SEO optimizado.",
    en: "Professional landing page for a real gym in Loja, Ecuador. Mobile-first design with scroll animations, service carousel, interactive schedules, membership plans and WhatsApp Business. SEO optimized.",
  },
  "proj.mlhub.desc": {
    es: "Portafolio de proyectos aplicados de ML: detección de phishing, clasificación de spam, detección de fraude financiero, visión por computadora y predicción deportiva. Demos interactivos con Jupyter.",
    en: "Applied ML project portfolio: phishing detection, spam classification, financial fraud detection, computer vision and sports prediction. Interactive Jupyter demos.",
  },
  "proj.electoral.desc": {
    es: "Análisis exploratorio de datos y modelos predictivos aplicados a datos electorales oficiales del CNE. Web scraping automatizado con Selenium y dataset publicado en Kaggle.",
    en: "Exploratory data analysis and predictive models applied to official CNE electoral data. Automated web scraping with Selenium and a dataset published on Kaggle.",
  },
  "proj.vosk.desc": {
    es: "Sistema de reconocimiento de voz utilizando el modelo VOSK para transcripción automática en aplicaciones de campo. Exportación a PDF, Word y Excel.",
    en: "Voice recognition system using the VOSK model for automatic transcription in field applications. Export to PDF, Word and Excel.",
  },
  "proj.aisladores.desc": {
    es: "Pipeline numérico para tesis de Ingeniería Civil: análisis modal-espectral, integración de Newmark-β, diseño de aisladores NRB y verificaciones de estabilidad y volcamiento, con tests unitarios y portabilidad a MATLAB.",
    en: "Numerical pipeline for a Civil Engineering thesis: modal-spectral analysis, Newmark-β integration, NRB isolator design and stability/overturning checks, with unit tests and MATLAB portability.",
  },

  // Certifications
  "cert.title": { es: "Certificaciones", en: "Certifications" },
  "cert.subtitle": { es: "Formación continua en tecnología, datos e inteligencia artificial.", en: "Continuous learning in technology, data and artificial intelligence." },

  // Nav - Certifications
  "nav.certificaciones": { es: "Certificaciones", en: "Certifications" },

  // Publications
  "pub.title": { es: "Publicaciones", en: "Publications" },
  "pub.subtitle": { es: "Investigación aceptada y publicada en venues con revisión por pares.", en: "Research accepted and published in peer-reviewed venues." },
  "pub.cit2026.title": {
    es: "Bayesian Hyperparameter Optimization of Support Vector Machines Using TPE for Stress Detection in Spanish Social Media During the 2024 Ecuadorian Energy Crisis",
    en: "Bayesian Hyperparameter Optimization of Support Vector Machines Using TPE for Stress Detection in Spanish Social Media During the 2024 Ecuadorian Energy Crisis",
  },
  "pub.cit2026.venue": {
    es: "Emerging Research in Intelligent Systems · Proceedings of the CIT 2026 · Springer Nature",
    en: "Emerging Research in Intelligent Systems · Proceedings of the CIT 2026 · Springer Nature",
  },
  "pub.cit2026.status": { es: "Aceptado, en producción", en: "Accepted, in production" },

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
