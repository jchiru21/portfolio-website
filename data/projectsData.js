// data/projectsData.js
// Centralized projects data for reuse across pages

export const projectsData = [
  {
    id: "healifyai",
    title: "HealifyAI (Medical Intelligence Platform)",
    subtitle: "AI/ML & Full-Stack",
    tech: ["React", "Flask", "Docker", "LLMs", "PostgreSQL"],
    year: "2025",
    image: "/images/healifyai.png",
    github: "https://github.com/healifyai/healifyai",
    achievements: [
      "A comprehensive AI platform for processing unstructured medical reports.",
      "Features a custom consistency-check pipeline to prevent hallucinations and ensure clinical accuracy.",
      "Currently in Stealth/Beta with production-ready deployment infrastructure."
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
      "Improved CI reliability to 95% by resolving dependency issues and stabilizing builds across environments.",
      "Deployed API and services on AWS EC2 using Docker Compose, enabling one-command releases and reliable uptime.",
      "Increased observability with monitoring hooks, cutting debugging effort and accelerating issue resolution by nearly 3x."
    ]
  },
  {
    id: "text-processing",
    title: "Multi-Language NLP Engine",
    subtitle: "ML & NLP",
    tech: ["Python", "PyTorch", "Hugging Face", "Flask"],
    year: "2024",
    image: "/images/project2.png",
    github: "https://github.com/jchiru21/intelligent-text-processor",
    achievements: [
      "Improved summary accuracy with 15% fewer unsupported entities by training a triplet-based reranker with BM25 negatives.",
      "Developed a Flask API and web UI integrated with GPU workflows, accelerating experiment turnaround times.",
      "Tuned entailment thresholds (0.8 vs 0.9), reducing fallback cases by 10% in Conservative presets."
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
      "Achieved 50% mIoU on Indian driving scenes by fine-tuning SegFormer on the IDD dataset with a small research team.",
      "Built 7k+ training and 900+ validation samples by converting polygon annotations to pixel masks for large-scale experiments.",
      "Doubled GPU throughput with mixed precision training and automated evaluation, streamlining workflows and boosting efficiency."
    ]
  },
  {
    id: "text-summarization",
    title: "Abstractive Summariser",
    subtitle: "NLP",
    tech: ["Python", "BERT", "Flask"],
    year: "2023",
    image: "/images/project4.png",
    github: "https://github.com/jchiru21/abstractive-summarizer",
    achievements: [
      "Built multilingual summarization system using BERT for accurate text condensation.",
      "Developed Flask API with interactive web UI for easy access and experimentation.",
      "Supports multiple languages with consistent performance across different text domains."
    ]
  }
]
