import { motion } from "framer-motion"
import { Code, Database, Cpu, Wrench, Cloud, Sparkles } from "lucide-react"
import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiDocker,
  SiLinux,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiOpencv,
  SiGit
} from "react-icons/si"

export default function Skills() {
  const iconSize = 18

  const skills = [
    {
      title: "Languages",
      icon: <Code size={22} />,
      list: [
        { name: "Python", logo: <SiPython size={iconSize} /> },
        { name: "JavaScript", logo: <SiJavascript size={iconSize} /> },
        { name: "TypeScript", logo: <Code size={iconSize} className="text-blue-500" /> },
        { name: "SQL", logo: <SiMysql size={iconSize} /> }
      ]
    },
    {
      title: "Web/Systems",
      icon: <Database size={22} />,
      list: [
        { name: "React", logo: <SiReact size={iconSize} /> },
        { name: "Node.js", logo: <SiNodedotjs size={iconSize} /> },
        { name: "Express", logo: <SiExpress size={iconSize} /> },
        { name: "Flask", logo: <SiFlask size={iconSize} /> },
        { name: "Docker", logo: <SiDocker size={iconSize} /> },
        { name: "AWS", logo: <Cloud size={iconSize} className="text-orange-500" /> },
        { name: "Linux", logo: <SiLinux size={iconSize} /> },
        { name: "REST APIs", logo: <SiExpress size={iconSize} /> }
      ]
    },
    {
      title: "AI/ML",
      icon: <Cpu size={22} />,
      list: [
        { name: "PyTorch", logo: <SiPytorch size={iconSize} /> },
        { name: "TensorFlow", logo: <SiTensorflow size={iconSize} /> },
        { name: "Hugging Face", logo: <SiHuggingface size={iconSize} /> },
        { name: "LLMs / GenAI", logo: <Sparkles size={iconSize} className="text-purple-500" /> },
        { name: "OpenCV", logo: <SiOpencv size={iconSize} /> },
        { name: "NLP", logo: <SiHuggingface size={iconSize} /> },
        { name: "Git", logo: <SiGit size={iconSize} /> }
      ]
    },
    {
      title: "Databases",
      icon: <Wrench size={22} />,
      list: [
        { name: "PostgreSQL", logo: <SiPostgresql size={iconSize} /> },
        { name: "Redis", logo: <SiRedis size={iconSize} /> },
        { name: "Prisma", logo: <SiPrisma size={iconSize} /> }
      ]
    }
  ]

  return (
    <div id="skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        🚀 Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((s, idx) => (
          <motion.div
            key={s.title}
            className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
              {s.icon} <span>{s.title}</span>
            </div>
            <ul className="text-gray-300 space-y-2">
              {s.list.map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <span className="text-blue-400 flex items-center">{item.logo}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
