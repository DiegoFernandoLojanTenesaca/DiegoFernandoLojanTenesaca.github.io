export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  kaggle: string | null;
  image: string | null;
  imageFit?: "cover" | "contain";
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "CConnect",
    description:
      "Cliente móvil, de escritorio y web para operar un agente de código que corre en tu PC. Puente FastAPI sobre el Agent SDK con HTTP/WebSocket, sesiones y edición de archivos en vivo, permisos interactivos y acceso remoto seguro por Tailscale. Una sola base Compose Multiplatform compila a Android, escritorio (Windows/Linux/macOS) y web con WebAssembly.",
    tags: ["Kotlin", "Jetpack Compose", "Compose Multiplatform", "WebAssembly", "Python", "FastAPI", "WebSockets"],
    github: "https://github.com/jahirxtrap/cconnect",
    demo: "https://cconnect.pages.dev/",
    kaggle: null,
    image: "projects/cconnect.png",
    imageFit: "contain",
    featured: true,
  },
  {
    title: "Wauto Indaga",
    description:
      "CRM y automatización de mensajería con IA para WhatsApp, Telegram y Meta. Bandeja compartida multiagente, embudos Kanban, difusiones con plantillas, builder visual de automatizaciones no-code, base de conocimiento con recuperación híbrida (full-text + pgvector), cascada de modelos con failover, API pública versionada con API keys y servidor MCP para asistentes de código.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "MCP", "i18n"],
    github: null,
    demo: "https://wauto.indagalab.com",
    kaggle: null,
    image: "projects/wauto.png",
    featured: true,
  },
  {
    title: "Reps",
    description:
      "SaaS multi-tenant para gimnasios y academias. Cada negocio es un espacio aislado con roles personalizados y permisos CRUD por módulo, planes por niveles, reservas, asistencia, cobros y rutinas de entrenamiento. Panel web de gestión y portal del alumno en móvil sobre la misma API, con tema por negocio.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Expo", "React Native", "Multi-tenant"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/reps.jpg",
    imageFit: "contain",
    featured: true,
  },
  {
    title: "AgentOS",
    description:
      "App Android nativa que convierte teléfonos sin servicios de Google en un agente de IA 24/7 controlado por Telegram: Python embebido en el dispositivo, multi-proveedor de LLMs con failover automático, control de hardware vía bridge HTTP local y servicio persistente con watchdog.",
    tags: ["Kotlin", "Jetpack Compose", "Chaquopy", "Python", "Telegram", "LLMs"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/indaga-agentOS",
    demo: null,
    kaggle: null,
    image: "projects/agentos.png",
    imageFit: "contain",
    featured: true,
  },
  {
    title: "OfficeGo",
    description:
      "Instalador de Microsoft Office para Windows con interfaz gráfica, hecho junto a M. Salazar. Perfila el equipo (versión de Windows, RAM, disco) para recomendar la edición viable, genera el configuration.xml de la Office Deployment Tool y admite modo desatendido por parámetros. Dos interfaces sobre un mismo motor (PowerShell/WinForms y Tauri), con 44 pruebas y un validador de layout que corre en cada compilación.",
    tags: ["PowerShell", "WinForms", "Tauri", "Rust", "C#", "CI"],
    github: "https://github.com/MariaDSalazar/officego",
    demo: null,
    kaggle: null,
    image: "projects/officego.png",
    featured: false,
  },
  {
    title: "Claude Session Guard",
    description:
      "Utilidad que respalda, vigila y mantiene viva la sesión OAuth de Claude Code: snapshot en cada rotación de token, restauración segura que nunca sobrescribe un respaldo bueno con uno roto, y renovación headless antes de que expire. Python sin dependencias, con CI en Linux, macOS y Windows.",
    tags: ["Python", "CLI", "OAuth", "GitHub Actions", "Cross-platform"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/claude-session-guard",
    demo: null,
    kaggle: null,
    image: "projects/session-guard.png",
    featured: false,
  },
  {
    title: "CuadreKit",
    description:
      "El kit del micronegocio: más de 20 herramientas gratuitas para micronegocios y freelancers de Ecuador (proformas, recibos, contratos, pagarés, liquidaciones, rol de pagos y horas extra según el Código del Trabajo). PWA instalable que funciona sin internet, sin registro y sin que los datos salgan del equipo.",
    tags: ["Nuxt", "Vue", "PWA", "TypeScript", "Offline-first"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/cuadrekit.png",
    featured: false,
  },
  {
    title: "Directorio y comunidad multi-país",
    description:
      "Plataforma de perfiles con reservas y disponibilidad en tiempo real, contenido comunitario anónimo y moderación administrativa, para 20 países y más de 100 ciudades. PWA instalable más APK Android de distribución directa, con registro anónimo y wizard de publicación por pasos.",
    tags: ["Nuxt 4", "PrimeVue", "FastAPI", "Supabase", "PWA", "Android"],
    github: null,
    demo: null,
    kaggle: null,
    image: null,
    featured: false,
  },
  {
    title: "BugOpoly",
    description:
      "Juego de mesa digital en 3D con temática de QA de software: comprás módulos, construís cobertura de tests hacia CI/CD, cazás bugs y esquivás la deuda técnica. Tablero de 40 casillas con fichas animadas, multijugador local hot-seat con bots y modo autoplay.",
    tags: ["Godot 4.6", "GDScript", "3D", "Game Design"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/BugOpoly",
    demo: null,
    kaggle: null,
    image: "projects/bugopoly.png",
    featured: false,
  },
  {
    title: "Indaga Lab",
    description:
      "Mi marca paraguas freelance: portal de servicios técnicos y de IA (consultoría, tesis, sistemas a medida) en indagalab.com y submarca de chatbots empresariales con cotizador IA y backoffice en wauto.indagalab.com.",
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "i18n"],
    github: null,
    demo: "https://www.indagalab.com",
    kaggle: null,
    image: "projects/indagalab.png",
    featured: true,
  },
  {
    title: "Sudial",
    description:
      "Plataforma SaaS multi-tenant para chatbots WhatsApp empresariales. Backoffice web, app móvil y backend de mensajería con builder visual de flujos, CRM, citas e inventario.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets", "React Native"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial.jpg",
    featured: true,
  },
  {
    title: "Sudial AI",
    description:
      "Microservicio de IA en producción con arquitectura DDD multi-tenant. Búsqueda semántica con embeddings multilingües, agente conversacional con orquestación de herramientas, clasificación zero-shot, OCR estructurado, transcripción local y moderación.",
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "pgvector", "Docker"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial-ai.jpg",
    featured: true,
  },
  {
    title: "Kumbre",
    description:
      "Extensión de Indaga Lab. Herramienta vertical para constructoras enfocada en la gestión de APUs (Análisis de Precios Unitarios) en cotización y obra: convierte presupuestos PDF (formato SERCOP) a Excel editable mediante parsing inteligente, fuzzy matching y catálogo precargado, con cuentas, planes y panel administrativo.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    github: null,
    demo: "https://kumbre.onrender.com/",
    kaggle: null,
    image: "projects/kumbre.png",
    featured: true,
  },
  {
    title: "Ecuador Energy Anomalies",
    description:
      "Detección multi-técnica de crisis energéticas en países de LATAM. Consenso de algoritmos (Isolation Forest, STL, CUSUM) con validación cruzada y dashboard interactivo. Validado contra la crisis real de Ecuador 2024.",
    tags: ["Python", "Scikit-learn", "Optuna", "SHAP", "Plotly", "Streamlit"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/ecuador-energy-anomalies",
    demo: null,
    kaggle: null,
    image: "projects/energy.png",
    featured: true,
  },
  {
    title: "Detección de Estrés en Redes Sociales",
    description:
      "Investigación aplicada en NLP español: SVM optimizado vía TPE (Optuna) sobre tweets de la crisis energética 2024. Embeddings FastText, scraping con Playwright, metodología CRISP-DM. Paper aceptado en Springer / CIT 2026, en producción. Segundo estudio en preparación: comparación fastText vs. BETO con pruebas de McNemar e interpretabilidad SHAP.",
    tags: ["Python", "SVM", "Optuna", "NLP", "FastText", "BETO", "SHAP", "CRISP-DM"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/TIC_Analisis_Sentimientos_SVM_OPTUNA",
    demo: null,
    kaggle: null,
    image: "projects/sentimientos.png",
    featured: true,
  },
  {
    title: "Orbyn Lead Qualifier",
    description:
      "Bot de Telegram que califica leads contra un ICP con LLM y failover automático entre proveedores. Grafo LangGraph con prompts versionados y validación estricta de salida (JSON), persistencia en SQLite y registro en Google Sheets.",
    tags: ["Python", "LangGraph", "Telegram", "SQLite", "Google Sheets"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/orbyn-lead-qualifier",
    demo: null,
    kaggle: null,
    image: "projects/orbyn.png",
    imageFit: "contain",
    featured: true,
  },
  {
    title: "LeaderGym",
    description:
      "Landing page profesional para gimnasio real en Loja, Ecuador. Diseño mobile-first con animaciones scroll, carrusel de servicios, horarios interactivos, planes de membresía y WhatsApp Business. SEO optimizado.",
    tags: ["Astro", "Tailwind CSS", "SEO"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/LeaderGym",
    demo: "https://leader-gym.vercel.app",
    kaggle: null,
    image: "projects/leadergym.png",
    featured: true,
  },
  {
    title: "Óptica Martínez",
    description:
      "Landing page para una óptica real en Loja, Ecuador. Hero 3D interactivo con gafas que siguen el cursor (React Three Fiber), reels de TikTok con lazy loading, reseñas reales de Google, animación de carta optométrica al hacer scroll y SEO local con datos estructurados Schema.org. SSR con TanStack Start y React 19.",
    tags: ["TanStack Start", "React 19", "Three.js", "React Three Fiber", "Tailwind CSS v4", "Framer Motion"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/optica-martinez",
    demo: "https://optica-martinez.vercel.app",
    kaggle: null,
    image: "projects/optica.png",
    featured: true,
  },
  {
    title: "ADBox",
    description:
      "Consola ADB libre y multiplataforma (Windows, Linux, macOS) para mantenimiento y reparación de Android. +80 acciones en 15 categorías: debloating por marca (Samsung, Xiaomi, Motorola, OPPO), análisis real de salud de batería, logcat en vivo, diagnóstico de crashes/ANR y mantenimiento automático en un clic. App de escritorio de ~10MB sin necesidad de la terminal.",
    tags: ["Tauri 2", "Rust", "React", "TypeScript", "Zustand", "GitHub Actions"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/ADBox",
    demo: "https://github.com/DiegoFernandoLojanTenesaca/ADBox/releases",
    kaggle: null,
    image: "projects/adbox-banner.png",
    featured: true,
  },
  {
    title: "Machine Learning Hub",
    description:
      "Portafolio de proyectos aplicados de ML: detección de phishing, clasificación de spam, detección de fraude financiero, visión por computadora y predicción deportiva. Demos interactivos con Jupyter.",
    tags: ["Python", "Scikit-learn", "Jupyter", "NLP", "Pandas"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/MachineLearning_Hub",
    demo: null,
    kaggle: null,
    image: "projects/mlhub.png",
    featured: false,
  },
  {
    title: "Análisis Electoral Ecuador 2025",
    description:
      "Análisis exploratorio de datos y modelos predictivos aplicados a datos electorales oficiales del CNE. Web scraping automatizado con Selenium y dataset publicado en Kaggle.",
    tags: ["Python", "Selenium", "Jupyter", "Pandas", "Análisis de Datos"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/Elecciones-ecuador-2025-analisis",
    demo: null,
    kaggle: "https://www.kaggle.com/datasets/diegofernandoljtn/elecciones-presidenciales-de-ecuador-2025-json",
    image: "projects/elecciones.png",
    featured: false,
  },
  {
    title: "Vosk - Reconocimiento de Voz",
    description:
      "Sistema de reconocimiento de voz utilizando el modelo VOSK para transcripción automática en aplicaciones de campo. Exportación a PDF, Word y Excel.",
    tags: ["Python", "Vosk", "Speech Recognition"],
    github: "https://github.com/jahirxtrap/GeoVoiceTranscriptor",
    demo: null,
    kaggle: null,
    image: "projects/vosk.png",
    featured: false,
  },
  {
    title: "Aisladores Sísmicos Elastoméricos",
    description:
      "Pipeline numérico para tesis de Ingeniería Civil: análisis modal-espectral, integración de Newmark-β, diseño de aisladores NRB (Natural Rubber Bearing) y verificaciones de estabilidad y volcamiento, con tests unitarios y portabilidad a MATLAB.",
    tags: ["Python", "NumPy", "SciPy", "MATLAB", "Pytest"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/aisladores.jpg",
    featured: false,
  },
];
