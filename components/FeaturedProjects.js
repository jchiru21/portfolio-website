// components/FeaturedProjects.js
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projectsData } from "../data/projectsData"

export default function FeaturedProjects() {
  // Show only first 4 projects
  const featuredProjects = projectsData.slice(0, 4)

  return (
    <div id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">
          📂 Featured Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((proj, idx) => (
            <Link key={proj.id} href="/projects" scroll={true}>
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Project Image Card */}
                <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer mb-4 transition-all duration-500 group-hover:blur-sm">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />
                </div>

                {/* Hover Effect - Corner Indicator on Image */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Project Title & Subtitle - Outside Card */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{proj.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group">
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
