// pages/index.js
import Head from "next/head"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import FeaturedProjects from "../components/FeaturedProjects"
import Publications from "../components/Publications"
import Coursework from "../components/Coursework"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chiranjeevi Joshi — Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chiranjeevi Joshi, AI/ML Engineer. Founding Engineer @ HealifyAI: production LLM serving, evals, and medical AI in 8 Indian languages."
        />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Publications />
        <Coursework />
        <Experience />
        <Education />
        <Contact />
      </Layout>
    </>
  )
}
