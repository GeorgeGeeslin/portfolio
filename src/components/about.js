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
            <h1 align="center">About Me</h1>
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
              My name is George Geeslin. I’m a web and software developer living
              and working in Austin, Texas. I have a passion for making useful
              things and learning the technologies, tools, and techniques to
              make that possible.
            </p>
            <p>
              In my professional life I am a senior report developer at
              Frontline Education, but I have a passion for web development,
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
              My personal philosophy as a developer is to cultivate the mindset
              of a lifelong student. By this, I mean an open minded approach
              that is willing to consider new ideas, learn new things, and be
              honest about the things I don’t understand. This also means having
              the humility to ask for help, but balancing that with the tenacity
              to try and figure it out first.
            </p>
            <p>
              It also means recognizing that the tools we use are less important
              than the problem we’re trying to solve.
            </p>
            <p>
              When I’m not writing code I like to spend my time with my wife and
              son, watching Netflix, going on hikes and enjoying those precious
              moments away from the text editor. When time and life allows I
              enjoy getting away to New Mexico for some snow boarding or
              noodling on my guitar.
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
    avatar: file(absolutePath: { regex: "/us.jpg/" }) {
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
