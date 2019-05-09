import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { /*tagColors,*/ getTagsWithCounts } from "../constants.js"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let tagList = getTagsWithCounts(posts)
    tagList.sort((a, b) => (a.count < b.count ? 1 : -1))

    return (
      <Layout title={siteTitle}>
        <div className={["page-wrapper", "projects"].join(" ")}>
          <div className="content-list-container" style={{ margin: "auto" }}>
            <div className="content-list">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const tags = node.frontmatter.tags
                return (
                  <div className="blog-preview-item" key={node.fields.slug}>
                    <hr />
                    <Link to={"projects" + node.fields.slug}>
                      <Img
                        fluid={
                          node.frontmatter.coverImage.childImageSharp.fluid
                        }
                      />

                      <h2>{title}</h2>
                      {tags && (
                        <ul className="tags">
                          {tags.map(tag => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      )}
                      <p
                        style={{ maxWidth: "650px" }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Link>
                    {(node.frontmatter.github || node.frontmatter.launch) && (
                      <ul className="project-links">
                        {node.frontmatter.github && (
                          <li>
                            <a href={node.frontmatter.github}>GitHub</a>
                          </li>
                        )}
                        {node.frontmatter.launch && (
                          <li>
                            <a href={node.frontmatter.launch}>Launch</a>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(content/projects)/.*.md$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            github
            launch
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
