import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import SEO from "../components/seo"
import "../styles/layout.scss"

const Layout = ({ children, headerSolid, path }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title={data.site.siteMetadata.title}
          keywords={[
            `blog`,
            `portfolio`,
            `George Geeslin`,
            `gatsby`,
            `javascript`,
            `react`,
            `webdev`,
            `web development`,
            `fullstack`,
            `front-end`,
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          headerSolid={path === "index" ? headerSolid : true}
        />
        <div
          style={
            path === "index"
              ? {
                  paddingTop: 0,
                }
              : { paddingTop: "8rem" }
          }
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
