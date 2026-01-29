import { motion } from "framer-motion"
import { FileText, ExternalLink } from "lucide-react"

const Publications = () => {
  const publications = [
    {
      title: "Smart Toll Collection System Using RFID Technology",
      authors: "Chiranjeevi J, et al.",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      year: "2024",
      volume: "Volume 12, Issue 1",
      doi: "10.22214/ijraset.2024.58008",
      link: "https://doi.org/10.22214/ijraset.2024.58008",
      abstract:
        "Developed an automated toll collection system using RFID technology to reduce traffic congestion and improve efficiency at toll booths.",
    },
  ]

  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Research contributions and published work
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:border-blue-500/50 transition-all h-auto"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-2 break-words">{pub.title}</h3>
                  <p className="text-gray-400 mb-2 break-words">{pub.authors}</p>
                  <p className="text-sm text-gray-500 mb-3 break-words">
                    {pub.journal} • {pub.year} • {pub.volume}
                  </p>
                  <p className="text-gray-300 mb-4 break-words">{pub.abstract}</p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="font-mono text-sm">DOI: {pub.doi}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
