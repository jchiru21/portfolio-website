// components/AllProjects.js
import Image from "next/image"
import { projectsData } from "../data/projectsData"

const pad = (n) => (n < 10 ? "0" : "") + n
const ArrowOut = () => (
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
)

export default function AllProjects() {
  return (
    <section className="section" id="all-projects" data-screen-label="All Projects">
      <div className="projects-head">
        <span className="eyebrow" data-decode="// work">{"// work"}</span>
        <h1 className="sec-title r">
          All <span className="si">Projects</span>
        </h1>
        <p className="sec-sub r" style={{ "--d": ".08s", marginTop: 0 }}>
          A comprehensive collection of my work in AI/ML, Full-Stack
          Development, and Computer Vision
        </p>
      </div>

      {projectsData.map((proj, idx) => {
        const isLive = !proj.github.includes("github.com")
        return (
          <article
            className={`proj${idx % 2 === 1 ? " flip" : ""}`}
            id={proj.id}
            key={proj.id}
          >
            <div className="info r">
              <span className="num">proj / {pad(idx + 1)}</span>
              <span className="ptag">{proj.subtitle}</span>
              <h3>{proj.title}</h3>
              <p className="desc">{proj.achievements[0]}</p>
              {proj.achievements.length > 1 && (
                <ul className="pdetail">
                  {proj.achievements.slice(1).map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
              <div className="tech">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="action">
                <a
                  className={`plink${isLive ? " live" : ""}`}
                  href={proj.github}
                  target="_blank"
                  rel="noopener"
                >
                  {isLive ? "Live Site" : "GitHub"}
                  <ArrowOut />
                </a>
              </div>
            </div>
            <div className="media">
              <div className="shot" style={{ aspectRatio: "16 / 9.6" }}>
                <span className="yr">{proj.year}</span>
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  priority={idx === 0}
                  loading={idx === 0 ? undefined : "eager"}
                  sizes="(max-width: 880px) 100vw, 58vw"
                />
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
