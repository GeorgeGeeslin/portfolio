import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div>
          <h1 align="center">Get in touch</h1>
          <div
            style={{
              maxWidth: "650px",

              margin: "auto",
              boxShadow: "0 0 4px grey",
            }}
          >
            <form
              method="POST"
              action="https://formspree.io/george.geeslin@gmail.com"
            >
              <div style={{ width: "90%", margin: "auto" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={{
                    width: "100%",
                    margin: "auto",
                    display: "inline-block",
                    marginTop: "1rem",
                    lineHeight: "2em",
                    fontSize: "1em",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  style={{
                    width: "100%",
                    margin: "auto",
                    display: "inline-block",
                    marginTop: "1rem",
                    lineHeight: "2em",
                    fontSize: "1em",
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                style={{
                  width: "90%",
                  margin: "auto",
                  display: "block",
                  marginTop: "1rem",
                  height: "10em",
                  fontSize: "1em",
                }}
              />
              <div
                style={{
                  width: "90%",
                  margin: "auto",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <button type="submit" className="form-submit">
                  Send Me A Message!
                </button>
              </div>
            </form>
            <p style={{ width: "90%", margin: "auto" }}>
              Or send me an email at{" "}
              <a href="mailto:george.geeslin@gmail.com">
                george.geeslin@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
