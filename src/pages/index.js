import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello!</h1>
      <h2>I'm Mitch, a full-stack developer in beautiful Vancouver, BC</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
