// components/ScrollToTop.js
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", toggle, { passive: true })
    toggle()
    return () => window.removeEventListener("scroll", toggle)
  }, [])

  if (!visible) return null
  return (
    <button
      className="to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
