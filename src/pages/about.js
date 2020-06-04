import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>This page is about the author.</p>
      <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
