import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="about" />
      <h1>About</h1>
      <p>This page is about the author.</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
