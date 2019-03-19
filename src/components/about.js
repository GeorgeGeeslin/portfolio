import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            id="about"
            style={{
              /*height: "100vh",*/ paddingLeft: "5em",
              paddingRight: "5em",
            }}
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
              In my professional life I work for Frontline Education as part of
              the reporting and data analytics team building tools to help our
              clients in the K-12 education sector view and understand their
              data.
            </p>
            <p>
              I love web development, especially getting my hands dirty in the
              front-end. The pace at which it evolves is challenging and
              exciting. My front-end experience lies in HTML, CSS, and
              JavaScript and in JavaScript libraries like React.js and jQuery.
              I’m currently doing most of my front-end development with React
              (and building this site with Gatsby, a static site generator based
              on React and GraphQL with an amazing plug-in ecosystem).
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
              moments away from the text editor, and when time and life alows I
              enjoy getting away to New Mexico for some snow boarding. I also
              play some guitar.
            </p>

            <div
              style={{
                display: `flex`,
                marginBottom: "2rem",
              }}
            >
              <p>
                Written by <strong>{author}</strong> who lives and works in
                Austin Texas. I might add some kinda social media footer here.
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
