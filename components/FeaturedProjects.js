// components/FeaturedProjects.js
import Image from "next/image"
import Link from "next/link"
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

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 4)

  return (
    <section className="section" id="projects" data-screen-label="Featured Projects">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// work">{"// work"}</span>
        </div>
        <div>
          <h2 className="sec-title r">
            Featured <span className="si">Projects</span>
          </h2>

          {featured.map((proj, idx) => {
            const isLive = !proj.github.includes("github.com")
            return (
              <article
                className={`proj${idx % 2 === 1 ? " flip" : ""}`}
                key={proj.id}
              >
                <div className="info r">
                  <span className="num">proj / {pad(idx + 1)}</span>
                  <span className="ptag">{proj.subtitle}</span>
                  <h3>{proj.title}</h3>
                  <p className="desc">{proj.achievements[0]}</p>
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

          <div className="proj-foot r">
            <Link className="btn btn-ghost" href="/projects">
              View All Projects
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
