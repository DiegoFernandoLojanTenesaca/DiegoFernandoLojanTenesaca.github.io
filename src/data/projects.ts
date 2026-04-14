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
      "Plataforma SaaS multi-tenant para gestión de comunicaciones empresariales vía WhatsApp. Incluye chatbot builder visual, sistema de citas, CRM, inventario, formularios dinámicos y app móvil.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Python", "Pyramid", "PostgreSQL", "Redis", "WebSockets", "React Native"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial.png",
    featured: true,
  },
  {
    title: "Sudial AI",
    description:
      "Microservicio de inteligencia artificial para procesamiento de conversaciones en tiempo real. Incluye resumen de conversaciones, sugerencias inteligentes, extracción de tareas y moderación de contenido.",
    tags: ["Python", "FastAPI", "LangChain", "LangGraph", "Groq", "Vosk", "SpaCy", "pgvector"],
    github: null,
    demo: null,
    kaggle: null,
    image: "projects/sudial.png",
    featured: true,
  },
  {
    title: "Machine Learning Hub",
    description:
      "Central de algoritmos y ejemplos de minería de datos y aprendizaje automático. Incluye KMeans, SVM, Regresión Lineal, Redes Neuronales y Web Scraping con demos interactivos.",
    tags: ["Python", "Scikit-learn", "Jupyter", "NLP"],
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
    featured: true,
  },
  {
    title: "Detección de Estrés en Redes Sociales",
    description:
      "Proyecto de integración curricular: análisis de sentimientos para detectar estrés en tweets usando SVM optimizado con Optuna TPE. Metodología CRISP-DM.",
    tags: ["Python", "SVM", "Optuna", "NLP", "CRISP-DM"],
    github: "https://github.com/DiegoFernandoLojanTenesaca/TIC_Analisis_Sentimientos_SVM_OPTUNA",
    demo: null,
    kaggle: null,
    image: "projects/sentimientos.png",
    featured: false,
  },
  {
    title: "Vosk - Reconocimiento de Voz",
    description:
      "Sistema de reconocimiento de voz utilizando el modelo VOSK para transcripción automática en aplicaciones de campo.",
    tags: ["Python", "Vosk", "Speech Recognition"],
    github: "https://github.com/jahirxtrap/GeoVoiceTranscriptor",
    demo: null,
    kaggle: null,
    image: "projects/vosk.png",
    featured: false,
  },
];
