export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  kaggle: string | null;
  image: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Sudial",
    description:
      "Plataforma SaaS multi-tenant para gestión de comunicaciones empresariales vía WhatsApp. 190+ componentes React, 90+ endpoints API, 80+ modelos de BD. Incluye chatbot builder visual, sistema de citas, CRM, inventario y app móvil de 45 pantallas.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets", "React Native"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial.svg",
    featured: true,
  },
  {
    title: "Sudial AI",
    description:
      "Plataforma de IA para atención al cliente con búsqueda semántica (BGE-M3 + pgvector), clasificación zero-shot, sugerencias de respuestas, OCR inteligente y agente de IA con múltiples herramientas. Arquitectura multi-tenant en producción.",
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "Groq", "pgvector", "BGE-M3", "Docker"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial-ai.svg",
    featured: true,
  },
  {
    title: "Ecuador Energy Anomalies",
    description:
      "Detección multi-técnica de crisis energéticas en 8 países de LATAM. Consenso de 3 algoritmos (Isolation Forest + STL + CUSUM) con F1=0.750. Validado contra la crisis real de Ecuador 2024 (Decreto 229). 784 meses de datos, 9 modelos comparados.",
    tags: ["Python", "Scikit-learn", "Optuna", "SHAP", "Plotly", "Streamlit", "GitHub Actions"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/ecuador-energy-anomalies",
    demo: null,
    kaggle: null,
    image: "projects/energy.png",
    featured: true,
  },
  {
    title: "Kumbre",
    description:
      "MVP SaaS para el sector construcción: convierte PDFs de presupuestos (APUs) a Excel con parsing inteligente y fuzzy matching. Sistema de planes (Free/Silver/Gold/Platinum), watermarks y almacenamiento en Cloudflare.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Cloudflare", "OpenPyXL"],
    github: null,
    demo: "https://kumbre.onrender.com/",
    kaggle: null,
    image: "projects/kumbre.png",
    featured: true,
  },
  {
    title: "LeaderGym",
    description:
      "Landing page profesional para gimnasio real en Loja, Ecuador. Diseño mobile-first con animaciones scroll, carrusel de servicios, reels del equipo, horarios interactivos, planes de membresía y WhatsApp Business. SEO optimizado.",
    tags: ["Astro", "Tailwind CSS", "Vercel", "Google Analytics", "SEO"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/LeaderGym",
    demo: "https://leader-gym.vercel.app",
    kaggle: null,
    image: "projects/leadergym.png",
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
    featured: true,
  },
  {
    title: "Análisis Electoral Ecuador 2025",
    description:
      "Análisis exploratorio de datos y modelos predictivos aplicados a datos electorales oficiales del CNE. Web scraping automatizado con Selenium y dataset publicado en Kaggle con 227+ vistas.",
    tags: ["Python", "Selenium", "Jupyter", "Pandas", "Análisis de Datos"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/Elecciones-ecuador-2025-analisis",
    demo: null,
    kaggle: "https://www.kaggle.com/datasets/diegofernandoljtn/elecciones-presidenciales-de-ecuador-2025-json",
    image: "projects/elecciones.png",
    featured: false,
  },
  {
    title: "Detección de Estrés en Redes Sociales",
    description:
      "Proyecto de integración curricular: análisis de sentimientos para detectar estrés en tweets usando SVM optimizado con Optuna TPE. Embeddings FastText, Playwright/Selenium para scraping. Metodología CRISP-DM.",
    tags: ["Python", "SVM", "Optuna", "NLP", "FastText", "CRISP-DM"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/TIC_Analisis_Sentimientos_SVM_OPTUNA",
    demo: null,
    kaggle: null,
    image: "projects/sentimientos.png",
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
];
