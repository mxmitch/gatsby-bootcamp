import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact" />
      <h1>Contact Me</h1>
      <p>
        You can reach me at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/mxmitch/"
        >
          @mxmitch
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
