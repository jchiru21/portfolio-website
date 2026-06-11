import { Github, Linkedin, Mail } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const iconClass =
    "text-gray-400 hover:text-blue-400 transition-colors duration-200"

  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
      <div className="flex items-center justify-center gap-6 mb-4">
        <a
          href="https://github.com/jchiru21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={iconClass}
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/chiranjeevijoshi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={iconClass}
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/Chiru_Josh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className={iconClass}
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="mailto:joshichiranjeevi9@gmail.com"
          aria-label="Email"
          className={iconClass}
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Chiranjeevi Joshi. All rights reserved.
      </p>
    </footer>
  )
}
