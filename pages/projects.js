// pages/projects.js
import Head from "next/head"
import Navbar from "../components/Navbar"
import AllProjects from "../components/AllProjects"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects — Chiranjeevi Joshi</title>
        <meta
          name="description"
          content="Explore all projects by Chiranjeevi Joshi — AI/ML, Full-Stack Development, and Computer Vision"
        />
      </Head>

      <main className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
        <Navbar />
        
        {/* Add padding to account for fixed navbar */}
        <div className="pt-20">
          <AllProjects />
        </div>

        <ScrollToTop />
        <Footer />
      </main>
    </>
  )
}
