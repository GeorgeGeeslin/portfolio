import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import SEO from "../components/seo"
import "../styles/layout.scss"

const Layout = ({ children, headerSolid }) => (
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
          headerSolid={window.location.pathname === "/" ? headerSolid : true}
        />
        <div
          style={
            window.location.pathname === "/"
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
