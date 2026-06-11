import { motion } from "framer-motion"

export default function About() {
  return (
    <div id="about me" className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.img
        src="/Chiranjeevi.png"   // add your avatar image in /public
        alt="Chiranjeevi Avatar"
        className="w-32 h-32 mx-auto rounded-full glass-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <h2 className="text-4xl font-bold mt-6">About Me</h2>
      <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
        I&apos;m Chiranjeevi Joshi, an AI/ML engineer. I&apos;m the Founding Engineer at HealifyAI, where I build production medical AI: LLM serving, OCR extraction, clinical eval harnesses, and the mobile app. I enjoy turning research into reliable products, optimizing model inference, and designing clean, maintainable systems.
      </p>
    </div>
  )
}
