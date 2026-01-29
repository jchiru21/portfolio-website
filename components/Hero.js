// components/Hero.js
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

// stable code sets
const codeSets = [
  [
    "def build_future(ai, code):",
    "    return ai + code + ' 🚀'",
    "print(build_future('ML', 'Engineering'))"
  ],
  [
    "class Developer:",
    "    def __init__(self, name):",
    "        self.name = 'Chiranjeevi Joshi'"
  ],
  [
    "import torch",
    "model = torch.nn.Transformer()",
    "print('Optimizing AI Inference ⚡')"
  ],
  [
    "for skill in ['Python', 'AI/ML', 'Full-Stack']:",
    "    print(f'Leveling up {skill} ✅')",
    "print('Ready for Challenges! 🔥')"
  ],
  [
    "function innovate(tech) {",
    "  return `${tech} at scale 🚀`; }",
    "console.log(innovate('AI/ML'));"
  ],
  [
    "int main() {",
    "  cout << \"Engineering the Future 🚀\" << endl;",
    "  return 0;",
    "}"
  ]
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  // each entry is a full line string
  const [textLines, setTextLines] = useState(codeSets[0].map(() => ""))
  const [setIndex, setSetIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const ttyRef = useRef(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return

    const currentSet = codeSets[setIndex % codeSets.length]
    // compute the max length among lines so typing cycles until the longest line completes
    const maxLen = Math.max(...currentSet.map((l) => l.length))
    const typeSpeed = deleting ? 30 : 55
    const holdDelay = 1200

    let timer = null

    if (!deleting && charIndex <= maxLen) {
      // type forward: for each line, reveal up to charIndex characters (safe slice)
      timer = setTimeout(() => {
        setTextLines(currentSet.map((line) => line.slice(0, Math.min(charIndex, line.length))))
        setCharIndex((ci) => ci + 1)
      }, typeSpeed)
    } else if (!deleting && charIndex > maxLen) {
      // hold before deleting
      timer = setTimeout(() => setDeleting(true), holdDelay)
    } else if (deleting && charIndex >= 0) {
      // delete backward
      timer = setTimeout(() => {
        setTextLines(currentSet.map((line) => line.slice(0, Math.min(charIndex, line.length))))
        setCharIndex((ci) => ci - 1)
      }, typeSpeed)
    } else if (deleting && charIndex < 0) {
      // move to next set
      setDeleting(false)
      setCharIndex(0)
      setSetIndex((si) => si + 1)
    }

    return () => clearTimeout(timer)
  }, [mounted, charIndex, deleting, setIndex])

  // scroll console to bottom when typing (small UX nicety)
  useEffect(() => {
    if (ttyRef.current) {
      // slight delay so element sizing settles
      ttyRef.current.scrollLeft = 0
    }
  }, [textLines])

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Heading */}
      <motion.h1
        className="text-[3.2rem] sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Hello, I&apos;m Chiranjeevi
      </motion.h1>

      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.7 }}
      >
        Co-Founder @ HealifyAI | Full-Stack AI Engineer
      </motion.p>

      {/* Typing Console */}
      <motion.div
        ref={ttyRef}
        className="mt-8 w-full max-w-3xl bg-black/40 glass-card border border-white/10 px-4 py-5 rounded-lg font-mono text-left text-sm text-blue-200 overflow-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}
      >
        {/* Use pre so indentation and spacing are preserved.
            We also set CSS to allow wrapping on very small screens but prefer horizontal scroll. */}
        <pre className="whitespace-pre-wrap sm:whitespace-pre overflow-x-auto">
          {textLines.map((line, i) => (
            <div key={i}>
              <code>{line}<span className="inline-block ml-0 text-blue-300">{" "}{i === textLines.length - 1 && (deleting ? "" : "|")}</span></code>
            </div>
          ))}
        </pre>
      </motion.div>

      <style jsx>{`
        pre { margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace; font-size: 0.95rem; }
        /* show a subtle right padding so mobile scrollable area is obvious */
        .glass-card pre { padding-right: 12px; }
        /* blinking cursor handled by CSS animation if desired */
        @media (max-width: 640px) {
          pre { font-size: 0.9rem; }
        }
      `}</style>
    </div>
  )
}
