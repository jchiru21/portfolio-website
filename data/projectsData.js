// data/projectsData.js
// Centralized projects data for reuse across pages

export const projectsData = [
  {
    id: "healifyai",
    title: "HealifyAI (Medical Intelligence Platform)",
    subtitle: "AI/ML & Full-Stack",
    tech: ["FastAPI", "vLLM", "React Native", "PostgreSQL", "Docker"],
    year: "2025",
    image: "/images/healifyai-dark.png",
    github: "https://healifyai.in",
    achievements: [
      "A medical AI platform that explains lab reports in 8 Indian languages. Live in production with external users.",
      "Clinical evaluation harness with human-verified gold standards and automated regression on every change; template-based medical logic that cannot hallucinate.",
      "Built on vLLM serving Qwen3.5-9B, an OCR pipeline for messy Indian lab formats, a FastAPI backend, and a React Native mobile app."
    ]
  },
  {
    id: "tech-debt-assassin",
    title: "TechDebtAssassin",
    subtitle: "AI Agents & Dev Tooling",
    tech: ["Python", "Claude API", "MCP", "Streamlit"],
    year: "2026",
    image: "/images/tech-debt-assassin.png",
    github: "https://github.com/jchiru21/tech-debt-assassin",
    achievements: [
      "Autonomous code-maintenance agent: scans Python codebases via AST, builds global project context for cross-file type inference, and patches missing type hints.",
      "Self-verifies every patch by running mypy and pytest before re-scanning.",
      "Ships as a CLI, a Streamlit dashboard, and an MCP server; CI on every push."
    ]
  },
  {
    id: "ecom-chat",
    title: "Ecom Chat — API",
    subtitle: "Dev Tooling & Networking",
    tech: ["Node.js", "TypeScript", "Docker", "Prisma", "PostgreSQL", "Redis"],
    year: "2025",
    image: "/images/project3.png",
    github: "https://github.com/jchiru21/ecommerce-chat-platform",
    achievements: [
      "Multi-service e-commerce chat platform: TypeScript, Prisma, and PostgreSQL backend with live WebSocket messaging.",
      "Deployed API and services on AWS EC2 using Docker Compose for one-command releases.",
      "Containerized the full stack with monitoring hooks for easier debugging across environments."
    ]
  },
  {
    id: "road-segmentation",
    title: "Road Scene Understanding With Segmentation",
    subtitle: "Computer Vision & Deep Learning",
    tech: ["Python", "PyTorch", "Transformers", "SegFormer", "IDD Dataset"],
    year: "2025",
    image: "/images/project1.png",
    github: "https://github.com/jchiru21/idd-segformer-segmentation",
    achievements: [
      "Fine-tuned SegFormer (MiT-B5) on the IDD dataset, reaching ~50% mIoU on unstructured Indian driving scenes.",
      "Built 7k+ training and 900+ validation samples by converting polygon annotations to pixel masks.",
      "Used mixed-precision training and automated evaluation to roughly double GPU throughput."
    ]
  },
  {
    id: "text-summarization",
    title: "Abstractive Summariser",
    subtitle: "NLP",
    tech: ["Python", "T5", "Hugging Face", "Flask"],
    year: "2025",
    image: "/images/project4.png",
    github: "https://github.com/jchiru21/abstractive-summarizer",
    achievements: [
      "Fine-tuned T5 for abstractive summarization and translation across multiple languages.",
      "Served via Flask REST APIs with an interactive web UI."
    ]
  }
]
