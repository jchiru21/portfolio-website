// components/ScrollChrome.js
// Fixed chrome (scroll-progress bar + left rail) plus the global motion engine:
// IntersectionObserver reveals, eyebrow decode effect, scroll progress + rail %,
// and the hard-settle fallbacks so content can never be stuck invisible.
// Ported from the handoff portfolio-v2.js (terminal/form/tweaks intentionally excluded).
import { useEffect, useRef } from "react"

const GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789_/<>="

function pad(n) {
  return (n < 10 ? "0" : "") + n
}

export default function ScrollChrome() {
  const barRef = useRef(null)
  const pctRef = useRef(null)

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const motionFull = () =>
      document.body.dataset.motion !== "minimal" && !reduce

    /* ---------- hero load orchestration ---------- */
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => document.body.classList.add("loaded"))
    })
    const settleTimer = setTimeout(
      () => document.body.classList.add("settled"),
      1900
    )

    /* ---------- decode (scramble) effect for eyebrows ---------- */
    function decode(el) {
      if (el.dataset.done) return
      el.dataset.done = "1"
      const target = el.getAttribute("data-decode")
      if (!motionFull()) {
        el.textContent = target
        return
      }
      let frame = 0
      const settle = 2.2
      function step() {
        let out = ""
        for (let i = 0; i < target.length; i++) {
          if (i < frame / settle) out += target[i]
          else if (target[i] === " ") out += " "
          else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
        el.textContent = out
        frame++
        if (frame / settle <= target.length) requestAnimationFrame(step)
        else el.textContent = target
      }
      step()
    }

    /* ---------- scroll reveals ---------- */
    let io = null
    let ioFired = false
    const revealEls = document.querySelectorAll(".r, .shot, [data-decode]")
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          ioFired = true
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in")
              setTimeout(() => e.target.classList.add("done"), 1500)
              if (e.target.hasAttribute("data-decode")) decode(e.target)
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      )
      revealEls.forEach((el) => io.observe(el))
    } else {
      document
        .querySelectorAll(".r, .shot")
        .forEach((el) => el.classList.add("in"))
      document
        .querySelectorAll("[data-decode]")
        .forEach((el) => (el.textContent = el.getAttribute("data-decode")))
    }
    // safety net: if the observer never delivers, settle everything
    const safetyTimer = setTimeout(() => {
      if (!ioFired) {
        document
          .querySelectorAll(".r, .shot")
          .forEach((el) => el.classList.add("in", "done"))
      }
    }, 1600)

    /* ---------- scroll progress + rail % ---------- */
    function onScroll() {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (barRef.current) barRef.current.style.width = (p * 100).toFixed(1) + "%"
      if (pctRef.current) pctRef.current.textContent = pad(Math.round(p * 100)) + "%"
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      cancelAnimationFrame(raf1)
      clearTimeout(settleTimer)
      clearTimeout(safetyTimer)
      window.removeEventListener("scroll", onScroll)
      if (io) io.disconnect()
    }
  }, [])

  return (
    <>
      <div className="progress" aria-hidden="true" ref={barRef} />
      <aside className="rail" aria-hidden="true">
        <span className="vtxt">
          Chiranjeevi Joshi <b>{"//"}</b> AI/ML Engineer
        </span>
        <span className="pct" ref={pctRef}>
          00%
        </span>
      </aside>
    </>
  )
}
