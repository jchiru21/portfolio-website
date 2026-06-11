// components/AllProjects.js
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { projectsData } from "../data/projectsData"

export default function AllProjects() {
  return (
    <div id="all-projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-[var(--text-primary)]">All Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive collection of my work in AI/ML, Full-Stack Development, and Computer Vision
          </p>
        </motion.div>

        <div className="space-y-8">
          {projectsData.map((proj, idx) => (
            <motion.div
              key={proj.id}
              id={proj.id}
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
                      {proj.github.includes("github.com") ? <Github size={16} /> : <ExternalLink size={16} />}
                      {proj.github.includes("github.com") ? "GitHub" : "Live Site"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
