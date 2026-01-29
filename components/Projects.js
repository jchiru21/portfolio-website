// components/Projects.js
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "HealifyAI (Medical Intelligence Platform)",
      subtitle: "AI/ML & Full-Stack",
      tech: ["React", "Flask", "Docker", "LLMs", "PostgreSQL"],
      year: "2025",
      image: "/images/project3.png",
      github: "https://github.com/HealifyAI",
      achievements: [
        "A comprehensive AI platform for processing unstructured medical reports.",
        "Features a custom consistency-check pipeline to prevent hallucinations and ensure clinical accuracy.",
        "Currently in Stealth/Beta with production-ready deployment infrastructure."
      ]
    },
    {
      title: "Ecom Chat — API",
      subtitle: "Dev Tooling & Networking",
      tech: ["Node.js", "TypeScript", "Docker", "Prisma", "PostgreSQL", "Redis"],
      year: "2025",
      image: "/images/project3.png",
      github: "https://github.com/jchiru21/ecom-chat-monorepo",
      achievements: [
        "Improved CI reliability to 95% by resolving dependency issues and stabilizing builds across environments.",
        "Deployed API and services on AWS EC2 using Docker Compose, enabling one-command releases and reliable uptime.",
        "Increased observability with monitoring hooks, cutting debugging effort and accelerating issue resolution by nearly 3x."
      ]
    },
    {
      title: "Intelligent Text Processing Platform",
      subtitle: "ML & NLP",
      tech: ["Python", "PyTorch", "Hugging Face", "Flask"],
      year: "2024",
      image: "/images/project2.png",
      github: "https://github.com/jchiru21",
      achievements: [
        "Improved summary accuracy with 15% fewer unsupported entities by training a triplet-based reranker with BM25 negatives.",
        "Developed a Flask API and web UI integrated with GPU workflows, accelerating experiment turnaround times.",
        "Tuned entailment thresholds (0.8 vs 0.9), reducing fallback cases by 10% in Conservative presets."
      ]
    },
    {
      title: "Road Scene Understanding With Segmentation",
      subtitle: "Computer Vision & Deep Learning",
      tech: ["Python", "PyTorch", "Transformers", "SegFormer", "IDD Dataset"],
      year: "2025",
      image: "/images/project1.png",
      github: "https://github.com/jchiru21",
      achievements: [
        "Achieved 50% mIoU on Indian driving scenes by fine-tuning SegFormer on the IDD dataset with a small research team.",
        "Built 7k+ training and 900+ validation samples by converting polygon annotations to pixel masks for large-scale experiments.",
        "Doubled GPU throughput with mixed precision training and automated evaluation, streamlining workflows and boosting efficiency."
      ]
    },
    {
      title: "Text Summarization & Translation",
      subtitle: "NLP",
      tech: ["Python", "BERT", "Flask"],
      year: "2023",
      image: "/images/project4.png",
      github: "https://github.com/jchiru21",
      achievements: [
        "Built multilingual summarization system using BERT for accurate text condensation.",
        "Developed Flask API with interactive web UI for easy access and experimentation.",
        "Supports multiple languages with consistent performance across different text domains."
      ]
    }
  ]

  return (
    <div id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">📂 Projects</h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {/* Image */}
              <div className="md:col-span-1 relative h-48 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{proj.title}</h3>
                    <span className="text-sm text-blue-500 dark:text-blue-400 font-semibold">{proj.year}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 italic">{proj.subtitle}</p>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {proj.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-600 dark:text-blue-400 transition font-medium text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
