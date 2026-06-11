import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "B.E in Artificial Intelligence & Machine Learning",
      school: "Ballari Institute of Technology and Management",
      year: "2020 – 2024"
    },
    {
      degree: "Class XII (KSEEB)",
      school: "Best PU College",
      year: "2018 – 2020"
    }
  ]

  return (
    <div id="education" className="bg-gray-950 py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Education
      </h2>

      <div className="max-w-3xl mx-auto grid gap-8 text-center">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            className="p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl text-white">{edu.degree}</h3>
            <p className="text-gray-400">{edu.school}</p>
            <p className="text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
