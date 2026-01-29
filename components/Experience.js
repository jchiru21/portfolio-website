import { motion } from "framer-motion"

export default function Experience() {
  const experience = [
    {
      role: "Co-Founder & Lead Engineer",
      company: "HealifyAI (Bootstrapped Venture)",
      duration: "Nov 2025 – Present",
      details: [
        "Architected a scalable AI medical intelligence platform using React, Flask, and LLMs.",
        "Engineered a custom NLP pipeline with automated consistency checks to validate unstructured medical reports.",
        "Containerized the full stack with Docker for reproducible, cloud-ready deployment."
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Codegnan Destination",
      duration: "Feb 2024 – Mar 2024",
      details: [
        "Developed SGPA Calculator using Java, Servlets, JDBC, SQL, and Apache Maven.",
        "Built RESTful APIs with secure backend integration for smooth client-server communication."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "LANGUIFY (Coincent)",
      duration: "Sep 2022 – Nov 2022",
      details: [
        "Trained digit classification model (MNIST) with TensorFlow, achieving 92% accuracy.",
        "Performed hyperparameter tuning and deployed live demo for real-time predictions."
      ]
    }
  ]

  return (
    <div id="experience" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        💼 Experience
      </h2>
      <div className="relative border-l border-gray-700 ml-4">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.role}
            className="mb-10 ml-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            ransition={{ duration: 0.6, delay: idx * 0.2 }}

            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-gray-900" />

            {/* Card */}
            <div className="p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition">
              <h3 className="font-bold text-lg text-white">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} — {exp.duration}</p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                {exp.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
