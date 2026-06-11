// components/Skills.js
const GROUPS = [
  { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  {
    name: "Web/Systems",
    items: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "Docker",
      "AWS",
      "Linux",
      "REST APIs",
    ],
  },
  {
    name: "AI/ML",
    items: [
      "PyTorch",
      "vLLM / LLM Serving",
      "Hugging Face",
      "LLMs / GenAI",
      "OpenCV",
      "NLP",
      "Git",
    ],
  },
  { name: "Databases", items: ["PostgreSQL", "Neo4j", "Prisma"] },
]

export default function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// skills">{"// skills"}</span>
        </div>
        <div>
          <h2 className="sec-title r">
            Skills &amp; <span className="si">Technologies</span>
          </h2>
          {GROUPS.map((g, i) => (
            <div
              className="skill-row r"
              key={g.name}
              style={i ? { "--d": `${i * 0.08}s` } : undefined}
            >
              <div className="grp">{g.name}</div>
              <div className="items">
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
