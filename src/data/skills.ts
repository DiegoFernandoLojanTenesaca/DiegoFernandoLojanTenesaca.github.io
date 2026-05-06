export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data & AI",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "Groq", icon: "groq" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "RAG", icon: "rag" },
      { name: "Embeddings", icon: "embeddings" },
      { name: "pgvector", icon: "postgresql" },
      { name: "spaCy", icon: "spacy" },
      { name: "NLP", icon: "nlp" },
      { name: "Computer Vision", icon: "vision" },
      { name: "VLMs", icon: "vlm" },
      { name: "Vosk / Whisper", icon: "audio" },
      { name: "Optuna", icon: "optuna" },
      { name: "SHAP", icon: "shap" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Pyramid", icon: "pyramid" },
      { name: "Django", icon: "django" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "SQLAlchemy", icon: "sqlalchemy" },
      { name: "REST APIs", icon: "api" },
      { name: "Microservicios", icon: "microservices" },
      { name: "OAuth 2.0", icon: "oauth" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Astro", icon: "astro" },
      { name: "React Native", icon: "react" },
      { name: "NativeWind", icon: "tailwindcss" },
      { name: "Vue", icon: "vue" },
    ],
  },
  {
    name: "Bases de Datos & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Redis", icon: "redis" },
      { name: "Upstash", icon: "redis" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "GitLab CI/CD", icon: "gitlab" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Render", icon: "render" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    name: "Tiempo Real",
    skills: [
      { name: "WebSockets", icon: "websocket" },
      { name: "Redis Pub/Sub", icon: "redis" },
      { name: "Webhooks", icon: "webhook" },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Claude Code", icon: "claudecode" },
      { name: "Codex", icon: "codex" },
      { name: "PyCharm", icon: "pycharm" },
      { name: "IntelliJ IDEA", icon: "intellij" },
      { name: "VS Code", icon: "vscode" },
      { name: "DataGrip", icon: "datagrip" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "MATLAB", icon: "matlab" },
    ],
  },
];
