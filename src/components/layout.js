import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            {data.site.siteMetadata.title}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="navLink"><Link to="/services/">Services</Link></div>
            <div className="navLink"><Link to="/about/">About</Link></div>
          </Nav>
        </Navbar.Collapse>
        <div className="callUs">Free consultation; call now <a href="tel:1-509-790-0555">(509) 790-0555</a></div>
      </Navbar>
      <main>{children}</main>
      <footer>
          © {new Date().getFullYear()}, 4252 Concepts LLC
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1920) {
      ...GatsbyImageSharpFluid
    }
  }
}
`
export const fluidImageCss = graphql`
fragment fluidImageCss on File {
  childImageSharp {
    fluid(maxWidth: 1920) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
}
`
