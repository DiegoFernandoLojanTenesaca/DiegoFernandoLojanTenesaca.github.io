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
    name: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "React Native", icon: "react" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Pyramid", icon: "pyramid" },
      { name: "SQLAlchemy", icon: "sqlalchemy" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    name: "Data & AI",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "NLP", icon: "nlp" },
      { name: "Groq", icon: "groq" },
      { name: "Embeddings", icon: "embeddings" },
    ],
  },
  {
    name: "Bases de Datos & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Cloudflare", icon: "cloudflare" },
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
      { name: "VS Code", icon: "vscode" },
      { name: "DataGrip", icon: "datagrip" },
      { name: "Antigravity", icon: "antigravity" },
    ],
  },
];