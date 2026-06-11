// components/Experience.js
const EXPERIENCE = [
  {
    role: "Founding Engineer",
    org: "HealifyAI",
    when: "Nov 2025 – Present",
    details: [
      "Building HealifyAI, a medical AI platform that explains lab reports in 8 Indian languages. Live in production with real users.",
      "Co-built the inference and extraction pipeline (vLLM serving Qwen3.5-9B, OCR for messy Indian lab formats) and the clinical eval harness with automated regression on every change.",
      "Built the React Native + Expo mobile app and own patient safety: guardrails that catch the model softening serious findings into reassurance.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Codegnan Destination",
    when: "Feb 2024 – Mar 2024",
    details: [
      "Developed SGPA Calculator using Java, Servlets, JDBC, SQL, and Apache Maven.",
      "Built RESTful APIs with secure backend integration for smooth client-server communication.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "LANGUIFY (Coincent)",
    when: "Sep 2022 – Nov 2022",
    details: [
      "Trained and evaluated image classification models with TensorFlow; first hands-on exposure to the full ML workflow.",
      "Performed hyperparameter tuning and deployed a live demo for real-time predictions.",
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience" data-screen-label="Experience">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// experience">{"// experience"}</span>
        </div>
        <div>
          <h2 className="sec-title r">Experience</h2>
          {EXPERIENCE.map((xp) => (
            <div className="xp r" key={xp.role}>
              <div className="when">{xp.when}</div>
              <div className="railc">
                <span className="node" />
              </div>
              <div>
                <h3>{xp.role}</h3>
                <div className="org">{xp.org}</div>
                <ul>
                  {xp.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
