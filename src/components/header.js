import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerSolid }) => (
  <nav className={headerSolid ? "solid" : undefined}>
    <div className="logo">
      <div className="circle">
        <div className="circle-text">
          G<div id="second-G">G</div>
        </div>
      </div>
      <div className="name">{siteTitle}</div>
    </div>
    <div className="collapsible-menu">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" />
      <ul className="nav-content">
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
        <li>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
