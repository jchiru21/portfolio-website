// components/Navbar.js
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Menu, X } from "lucide-react"

const LINKS = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
]

export default function Navbar() {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  // active-section tracking (home only)
  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    LINKS.forEach(({ id }) => {
      const s = document.getElementById(id)
      if (s) obs.observe(s)
    })
    return () => obs.disconnect()
  }, [isHome])

  const renderLink = (link, onClick) => {
    const cls = isHome && active === link.id ? "active" : undefined
    return isHome ? (
      <a key={link.id} href={`#${link.id}`} className={cls} onClick={onClick}>
        {link.label}
      </a>
    ) : (
      <Link key={link.id} href={`/#${link.id}`} className={cls} onClick={onClick}>
        {link.label}
      </Link>
    )
  }

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-in">
        {isHome ? (
          <a className="monogram" href="#home" aria-label="Home">
            C<b>J</b>
          </a>
        ) : (
          <Link className="monogram" href="/" aria-label="Home">
            C<b>J</b>
          </Link>
        )}

        <div className="navlinks">{LINKS.map((l) => renderLink(l))}</div>

        <a
          className="nav-cta"
          href="/Chiranjeevi_Joshi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume.pdf ↗
        </a>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <div className="drawer-in">
          {LINKS.map((l) => renderLink(l, () => setOpen(false)))}
        </div>
      </div>
    </nav>
  )
}
