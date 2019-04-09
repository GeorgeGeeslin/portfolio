import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { tagColors } from "../constants.js"

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

    if (
      scrolled > 0 &&
      !sidebar.classList.contains("fade-in-sidebar") &&
      !sidebar.classList.contains("fullscreen")
    ) {
      sidebar.classList.add("fade-in-sidebar")
    }

    if (
      scrolled === 0 &&
      sidebar.classList.contains("fade-in-sidebar") &&
      !sidebar.classList.contains("fullscreen")
    ) {
      sidebar.classList.remove("fade-in-sidebar")
    }
  }

  expandSidebar = () => {
    let icon = document.querySelector(".sidebar-expand-icon")
    let sidebar = document.querySelector(".sidebar")

    if (icon.classList.contains("rotate")) {
      icon.classList.remove("rotate")
      sidebar.classList.remove("expand")
    } else {
      icon.classList.add("rotate")
      sidebar.classList.add("expand")
    }
  }

  openFullscreenSidebar = () => {
    let sidebar = document.querySelector(".sidebar")
    if (!sidebar.classList.contains("fullscreen")) {
      sidebar.classList.add("fullscreen")
      sidebar.classList.remove("expand")
    }
  }

  closeFullscreenSidebar = () => {
    let sidebar = document.querySelector(".sidebar")
    let icon = document.querySelector(".sidebar-expand-icon")
    if (sidebar.classList.contains("fullscreen")) {
      sidebar.classList.remove("fullscreen")
      icon.classList.remove("rotate")
    }
  }

  getTagsWithCounts = posts => {
    let tagList = []
    let allTags = []
    let count, prev, listLength
    const numColors = tagColors.length

    posts.forEach(post => {
      if (post.node.frontmatter.hasOwnProperty("tags")) {
        const tags = post.node.frontmatter.tags
        allTags.push(...tags)
      }
    })

    allTags.sort()

    allTags.forEach(function(tag, index) {
      listLength = tagList.length
      if (listLength === 0 || tag !== prev) {
        tagList.push({ tag: tag, count: 1 })
        count = 1
      } else {
        count++
        tagList[listLength - 1].count = count
      }
      prev = tag
    })

    tagList.forEach(function(tag, index) {
      if (index < numColors) {
        tag.color = tagColors[index]
      } else {
        tag.color = tagColors[index - numColors]
      }
    })

    return tagList
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let tagList = this.getTagsWithCounts(posts)
    tagList.sort((a, b) => (a.count < b.count ? 1 : -1))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="blog-index">
          <div className="blog-list-container">
            <div className="blog-post-list">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div className="blog-preview-item" key={node.fields.slug}>
                    <hr />
                    <Link to={node.fields.slug}>
                      <Img
                        fluid={
                          node.frontmatter.coverImage.childImageSharp.fluid
                        }
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
                      <ul className="tags">
                        {node.frontmatter.tags.map((tag, index) => {
                          let color
                          for (let i = 0; i < tagList.length; i++) {
                            if (tagList[i].tag === tag) {
                              color = tagList[i].color
                              break
                            } else {
                              color = "#ed5131"
                            }
                          }
                          return (
                            <li
                              key={index}
                              style={{
                                backgroundColor: color,
                              }}
                            >
                              {tag}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <aside className="sidebar">
            <div
              className="expand-icon-positioner"
              onClick={this.expandSidebar}
            >
              <div className="expand-icon-container">
                <span className="material-icons sidebar-expand-icon">
                  arrow_drop_up
                </span>
              </div>
            </div>
            <div className="sidebar-content">
              <div
                className="close-fullscreen"
                onClick={this.closeFullscreenSidebar}
              >
                <span className="material-icons">close</span>
              </div>
              <div className="recent-articles">
                <h2>Recent Articles</h2>
                <hr />
                <ul>
                  {posts.slice(0, 5).map(({ node }, index) => (
                    <li key={index} className="recent-article">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="sidebar-nav">
                <li>
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="tags-headline">
                <h2>Tags</h2>
                <hr />
              </div>
              <ul className="tags tags-row1">
                {tagList.slice(0, 4).map(tagDef => {
                  let color
                  for (let i = 0; i < tagList.length; i++) {
                    if (tagList[i].tag === tagDef.tag) {
                      color = tagList[i].color
                      break
                    } else {
                      color = "#ed5131"
                    }
                  }
                  return (
                    <li key={tagDef.tag} style={{ backgroundColor: color }}>{`${
                      tagDef.tag
                    } (${tagDef.count})`}</li>
                  )
                })}
              </ul>
              <ul className="tags tags-row2">
                {tagList.slice(4, 7).map(tagDef => {
                  let color
                  for (let i = 0; i < tagList.length; i++) {
                    if (tagList[i].tag === tagDef.tag) {
                      color = tagList[i].color
                      break
                    } else {
                      color = "#ed5131"
                    }
                  }
                  return (
                    <li key={tagDef.tag} style={{ backgroundColor: color }}>{`${
                      tagDef.tag
                    } (${tagDef.count})`}</li>
                  )
                })}
                <li
                  style={{
                    paddingLeft: "1.5em",
                    paddingRight: "1.5em",
                    fontWeight: "bold",
                    cursor: "default",
                    padding: 0,
                  }}
                  onClick={this.openFullscreenSidebar}
                >
                  <span className="material-icons">more</span>
                </li>
              </ul>
              <ul className="tags all-tags">
                {tagList.map(tag => (
                  <li key={tag.tag} style={{ backgroundColor: tag.color }}>{`${
                    tag.tag
                  } (${tag.count})`}</li>
                ))}
              </ul>
            </div>
            <div className="left-sidebar-insert" />
            <div className="right-sidebar-insert" />
          </aside>
        </div>
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
