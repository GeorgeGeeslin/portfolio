import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let scrolled = document.documentElement.scrollTop
    let sidebar = document.querySelector(".sidebar")

    if (scrolled > 0 && !sidebar.classList.contains("fade-in-sidebar")) {
      sidebar.classList.add("fade-in-sidebar")
    }

    if (scrolled === 0 && sidebar.classList.contains("fade-in-sidebar")) {
      sidebar.classList.remove("fade-in-sidebar")
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="blog-list-container">
          <div className="blog-post-list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="blog-preview-item" key={node.fields.slug}>
                  <hr />
                  <Link to={node.fields.slug}>
                    <Img
                      fluid={node.frontmatter.coverImage.childImageSharp.fluid}
                    />

                    <h2>{title}</h2>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Link>
                  {node.frontmatter.tags && (
                    <ul>
                      {node.frontmatter.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <aside className="sidebar">
          <div className="sidebar-expand-container">
            <span className="material-icons sidebar-expand">arrow_drop_up</span>
          </div>
          <p>sidebar</p>
          <div className="left-sidebar-insert" />
          <div className="right-sidebar-insert" />
        </aside>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            coverImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 260) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
