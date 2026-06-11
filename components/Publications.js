// components/Publications.js
export default function Publications() {
  return (
    <section className="section" id="publications" data-screen-label="Publications">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// research">{"// research"}</span>
        </div>
        <div>
          <h2 className="sec-title r">Publications</h2>
          <p className="sec-sub r" style={{ "--d": ".08s" }}>
            Research contributions and published work
          </p>
          <div className="pub-row r" style={{ "--d": ".14s" }}>
            <div>
              <h3>
                Summarization and Translation using <span className="si">NLP</span>
              </h3>
              <div className="authors">Chiranjeevi J, et al.</div>
              <div className="venue">
                International Journal for Research in Applied Science &amp;
                Engineering Technology (IJRASET) • 2024 • Volume 12, Issue 5
              </div>
              <p className="abstract">
                Reviewed and implemented transformer-based models for text
                summarization. Analyzed the efficiency of attention mechanisms
                in processing large-scale language datasets.
              </p>
            </div>
            <a
              className="doi"
              href="https://doi.org/10.22214/ijraset.2024.61391"
              target="_blank"
              rel="noopener"
            >
              DOI: 10.22214/ijraset.2024.61391
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
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
