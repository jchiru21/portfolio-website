import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: formData.message,
          to_email: "joshichiranjeevi9@gmail.com",
        }
      )
      setSubmitted(true)
      setFormData({ email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div id="contact" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">📬 Let’s Connect</h2>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Direct Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 h-auto flex flex-col"
        >
          <h3 className="text-xl font-bold mb-4">Direct</h3>
          {submitted ? (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <p className="text-green-400 font-semibold">✓ Message sent successfully!</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 flex-1">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 h-auto flex flex-col"
        >
          <h3 className="text-xl font-bold mb-4">Social</h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <a href="https://github.com/jchiru21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <Github size={18} className="text-white" />
              <span className="text-gray-200 text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/chiranjeevijoshi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <Linkedin size={18} className="text-blue-400" />
              <span className="text-gray-200 text-sm">LinkedIn</span>
            </a>
            <a href="https://x.com/Chiranj43820149?s=08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] transition">
              <span className="inline-block w-4 h-4 rounded-full bg-sky-400" />
              <span className="text-gray-200 text-sm">Twitter/X</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
