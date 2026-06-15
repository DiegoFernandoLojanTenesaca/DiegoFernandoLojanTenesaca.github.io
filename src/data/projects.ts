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
      "Investigación aplicada en NLP español: SVM optimizado vía TPE (Optuna) sobre tweets de la crisis energética 2024. Embeddings FastText, scraping con Playwright, metodología CRISP-DM. Paper aceptado en Springer / CIT 2026, en producción.",
    tags: ["Python", "SVM", "Optuna", "NLP", "FastText", "CRISP-DM"],
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
