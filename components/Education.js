// components/Education.js
const EDUCATION = [
  {
    degree: "B.E in Artificial Intelligence & Machine Learning",
    school: "Ballari Institute of Technology and Management",
    year: "2020 – 2024",
  },
  {
    degree: "Class XII (KSEEB)",
    school: "Best PU College",
    year: "2018 – 2020",
  },
]

export default function Education() {
  return (
    <section className="section" id="education" data-screen-label="Education">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// education">{"// education"}</span>
        </div>
        <div>
          <h2 className="sec-title r">Education</h2>
          {EDUCATION.map((edu, i) => (
            <div
              className="edu-row r"
              key={edu.degree}
              style={i ? { "--d": ".1s" } : undefined}
            >
              <div>
                <div className="deg">{edu.degree}</div>
                <div className="sch">{edu.school}</div>
              </div>
              <div className="yr">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
