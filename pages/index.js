// pages/index.js
import Head from "next/head"
import { motion } from "framer-motion"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import FeaturedProjects from "../components/FeaturedProjects"
import Publications from "../components/Publications"
import Coursework from "../components/Coursework"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chiranjeevi Joshi — Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chiranjeevi Joshi — Software Engineer, AI/ML & Full-Stack"
        />
      </Head>

      <main className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
        <Navbar /> 

        {/* Hero */}
        <section id="home" className="py-20 px-6">
          <Hero />
        </section>

        {/* About Me */}
        <section id="aboutme" className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 glass-card p-6">
            {/* Avatar */}
            <motion.img
              src="/Chiranjeevi.png"
              alt="Chiranjeevi Avatar"
              className="w-40 h-40 rounded-full p-1 ring-2 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div>
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m <strong>Chiranjeevi Joshi</strong> — a Software Engineer with
                hands-on experience in AI/ML and full-stack development. I build
                production-ready web apps and ML pipelines using Python, React, and
                modern cloud-native tools. I enjoy turning research into reliable
                products, optimizing model inference, and designing clean,
                maintainable systems.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="/Chiranjeevi_Joshi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200 font-semibold shadow-lg hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <Skills />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <FeaturedProjects />

            {/* Publications */}
            <Publications />

            {/* Coursework */}
            <Coursework />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <Experience />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <Education />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <Contact />
          </div>
        </section>

        <ScrollToTop />
        <Footer />
      </main>
    </>
  )
}
