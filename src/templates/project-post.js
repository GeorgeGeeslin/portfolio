import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="post-wrapper">
          <div className="post-container">
            {post.frontmatter.launch ? (
              <h1>
                <a className="title-link" href={post.frontmatter.launch}>
                  {post.frontmatter.title}
                </a>
              </h1>
            ) : (
              <h1>{post.frontmatter.title}</h1>
            )}

            <hr style={{ width: "100%" }} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {(post.frontmatter.github || post.frontmatter.launch) && (
              <ul className="project-links">
                {post.frontmatter.github && (
                  <li>
                    <a href={post.frontmatter.github}>GitHub</a>
                  </li>
                )}
                {post.frontmatter.launch && (
                  <li>
                    <a href={post.frontmatter.launch}>Launch</a>
                  </li>
                )}
              </ul>
            )}
            <hr />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={"projects/" + previous.fields.slug} rel="prev">
                    &larr; {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={"projects/" + next.fields.slug} rel="next">
                    {next.frontmatter.title} &rarr;
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        launch
        github
      }
    }
  }
`
