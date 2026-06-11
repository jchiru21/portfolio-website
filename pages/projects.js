// pages/projects.js
import Head from "next/head"
import Layout from "../components/Layout"
import AllProjects from "../components/AllProjects"

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

      <Layout>
        <AllProjects />
      </Layout>
    </>
  )
}
