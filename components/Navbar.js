// components/Navbar.js
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollLinks = ["Home", "About Me", "Skills", "Experience", "Education", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "backdrop-blur-sm bg-[var(--bg-secondary)]/30"
          : "bg-transparent"
      }`}
      aria-label="Primary Navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        {isHomePage ? (
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={600}
            className="w-12 h-12 flex items-center justify-center rounded-full 
                       bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg 
                       cursor-pointer shadow-md transition"
          >
            CJ
          </ScrollLink>
        ) : (
          <Link
            href="/"
            className="w-12 h-12 flex items-center justify-center rounded-full 
                       bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg 
                       cursor-pointer shadow-md transition"
          >
            CJ
          </Link>
        )}

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-[var(--text-primary)]">
          {scrollLinks.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase().replace(/\s+/g, "")}
              spy={true}
              activeClass="text-blue-600 dark:text-blue-300 border-b-2 border-blue-400"
              smooth={true}
              offset={-70}
              duration={600}
              className="cursor-pointer text-sm font-medium hover:text-blue-600 dark:hover:text-blue-300 transition"
            >
              {item}
            </ScrollLink>
          ))}
          
          {/* Projects Link - Routes to separate page */}
          <Link
            href="/projects"
            className="cursor-pointer text-sm font-medium hover:text-blue-600 dark:hover:text-blue-300 transition"
          >
            Projects
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:opacity-80 transition"
          title={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
        >
          {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <Sun size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-primary)] hover:text-blue-600 dark:hover:text-blue-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bg-secondary)]/60 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-[var(--text-primary)]">
              {scrollLinks.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase().replace(/\s+/g, "")}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="cursor-pointer text-lg font-medium hover:text-blue-600 dark:hover:text-blue-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              ))}
              
              {/* Projects Link */}
              <Link
                href="/projects"
                className="cursor-pointer text-lg font-medium hover:text-blue-600 dark:hover:text-blue-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>

              {/* Mobile Theme Toggle */}
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-secondary)]/40 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/30 transition"
                title={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
              >
                {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <Sun size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
