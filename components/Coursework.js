// components/Coursework.js
const COLUMNS = [
  {
    title: "Core Computer Science",
    items: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Pattern Recognition",
    ],
  },
  {
    title: "Systems & DevOps",
    items: [
      "Cloud Computing",
      "Distributed Systems",
      "Microservices Architecture",
      "CI/CD & DevOps",
    ],
  },
]

export default function Coursework() {
  return (
    <section className="section" id="coursework" data-screen-label="Relevant Coursework">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// academics">{"// academics"}</span>
        </div>
        <div>
          <h2 className="sec-title r">
            Relevant <span className="si">Coursework</span>
          </h2>
          <p className="sec-sub r" style={{ "--d": ".08s" }}>
            Academic foundation in computer science and machine learning
          </p>
          <div className="course-cols r" style={{ "--d": ".14s" }}>
            {COLUMNS.map((col) => (
              <div className="course-col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
