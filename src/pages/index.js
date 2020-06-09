import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="home" />
      <h1>Hello!</h1>
      <h2>I'm Mitch, a full-stack developer in beautiful Vancouver, BC</h2>
    </Layout>
  )
}

export default IndexPage
