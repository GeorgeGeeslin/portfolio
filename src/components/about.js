import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image"

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const {
          author /*, social*/,
        } = data.site.siteMetadata /*TODO: implement social media items*/
        return (
          <div
            id="about"
            className="post-wrapper"
            style={{ minHeight: "100vh" }}
          >
            <h1 style={{ paddingTop: "1em" }} align="center">
              About Me
            </h1>
            <div className="about-image-container">
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt={author}
                style={{
                  marginRight: "2rem",
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </div>
            <p>
              Hi, my name is George Geeslin, and I'm a Full Stack developer from Austin, TX.
              I'm currently working at eStrategy Solutions, 
              before that I was a senior Report Developer at Frontline Education.
            </p>
            <p>
              I have a passion for web development,
              which will be the focus of content I post here.
            </p>
            <p>
              I created this site as a place to display some of my personal
              projects and to blog about what I’m working on and what I’ve
              learned along the way. Hopefully writing about the challenges I’ve
              encountered and how I solved them will not only be useful to my
              own growth as a developer, but also to others who may come across
              my writings.
            </p>
            <p>
              After initially creating this site, I let it fall dormant for awhile. I guess I just got busy 
              with life and other projects. I'll be adding a few things here and there and hopefully 
              will do a better job keeping things current.
            </p>
            <p>
              I'm always interested to talk shop to and work with enthusiastic
              people. So, if you like what you see here head over to the{" "}
              <Link to="/contact">Contact</Link> page and send me a message!
            </p>
            <p>
              Feel free to checkout my{" "}
              <a href="https://github.com/GeorgeGeeslin">github</a> for the code
              to this site and my other projects.
            </p>
            <div
              style={{
                display: `flex`,
                marginBottom: "2rem",
              }}
            />
          </div>
        )
      }}
    />
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/codecat.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default About
