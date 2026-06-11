// components/Hero.js
import { useState, useEffect } from "react"

// four real production snippets — typed verbatim, char-by-char
const SNIPPETS = [
  [
    "from vllm import LLM, SamplingParams",
    "llm = LLM(model='Qwen3.5-9B', quantization='fp4')",
    "out = llm.generate(prompt, SamplingParams(max_tokens=512))",
  ],
  [
    "results = harness.run(gold_standards)",
    "# 32 human-verified reports, 9 lab formats",
    "assert results.mean >= 0.971, 'regression caught'",
  ],
  [
    "findings = parser.extract(report_page)",
    "if guard.flags(findings):",
    "    escalate(findings)  # never soften a serious finding",
  ],
  [
    "text = ocr.read(page)",
    "if text.confidence < THRESHOLD:",
    "    text = vlm_fallback(page)",
  ],
]

const pad = (n) => (n < 10 ? "0" : "") + n

export default function Hero() {
  const [code, setCode] = useState("")
  const [meta, setMeta] = useState("01 / 04")

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) {
      setCode(SNIPPETS[0].join("\n"))
      setMeta("01 / 04")
      return
    }

    let si = 0
    let ci = 0
    let deleting = false
    let timer = null

    const tick = () => {
      const s = SNIPPETS[si].join("\n")
      setCode(s.slice(0, ci))
      setMeta(pad(si + 1) + " / 04")
      if (!deleting) {
        ci++
        if (ci > s.length) {
          deleting = true
          timer = setTimeout(tick, 1600)
          return
        }
        timer = setTimeout(tick, 50)
      } else {
        ci--
        if (ci < 0) {
          ci = 0
          deleting = false
          si = (si + 1) % SNIPPETS.length
          timer = setTimeout(tick, 340)
          return
        }
        timer = setTimeout(tick, 20)
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="hero" id="home" data-screen-label="Hero">
      <div className="hero-bg" aria-hidden="true" />
      <span
        className="kicker h-in d1"
        data-decode="founding engineer @ healifyai"
      >
        founding engineer @ healifyai
      </span>
      <h1>
        <span className="greet si h-in d2">Hello, I&apos;m</span>
        <span className="h-in d3" style={{ display: "block" }}>
          Chiranjeevi
        </span>
      </h1>
      <div className="hero-low">
        <div className="hero-side h-in d4">
          <p className="role-line">
            Founding Engineer <span className="at">@</span> HealifyAI
            {" | "}AI/ML Engineer
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href="/Chiranjeevi_Joshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
              View Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div
          className="term h-in d5"
          aria-label="Terminal typing real production code"
        >
          <div className="term-bar">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <div className="term-title">
              <b>production.py</b> — healify-infer
            </div>
            <div className="term-meta">{meta}</div>
          </div>
          <div className="term-body">
            <pre>
              <code>{code}</code>
              <span className="caret" aria-hidden="true" />
            </pre>
          </div>
        </div>
      </div>
    </header>
  )
}
