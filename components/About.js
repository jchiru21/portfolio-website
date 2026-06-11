// components/About.js
import Image from "next/image"

export default function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// about">{"// about"}</span>
        </div>
        <div>
          <h2 className="sec-title r">
            About <span className="si">Me</span>
          </h2>
          <div className="about-flow">
            <div className="r" style={{ "--d": ".1s" }}>
              <p className="statement">
                I&apos;m <strong>Chiranjeevi Joshi</strong>, an AI/ML engineer.
                {" "}
                I&apos;m the Founding Engineer at HealifyAI, where I build production medical AI: LLM serving, OCR extraction, clinical eval harnesses, and the mobile app.
                {" "}
                I enjoy turning research into reliable products, optimizing model inference, and designing clean, maintainable systems.
              </p>
              <div className="about-cta">
                <a
                  className="btn btn-primary"
                  href="/Chiranjeevi_Joshi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <figure className="photo r" style={{ "--d": ".22s" }}>
              <Image
                src="/images/chiranjeevi.png"
                alt="Chiranjeevi Joshi"
                width={250}
                height={250}
                style={{ width: "100%", height: "auto" }}
              />
              <span className="corner tl" />
              <span className="corner br" />
              <figcaption>fig. 01 — chiranjeevi joshi</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
