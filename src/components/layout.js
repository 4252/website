import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'
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
        <div>
          <Link to="/">
            <Navbar.Brand>
              {data.site.siteMetadata.title}
            </Navbar.Brand>
          </Link>
        </div>
        <div className="navbarLinks order-lg-2 order-md-4 order-sm-4 order-4">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div className="navLink"><Link to="/services/">Services</Link></div>
              <div className="navLink"><Link to="/about/">About</Link></div>
              <div className="navLink"><a href="https://x52.fyi/bookings" target="_blank" rel="noopener noreferrer">BOOK NOW!</a></div>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="callUs order-md-2 order-sm-3 order-3">
          Free consultation; call now <a href="tel:1-509-790-0555">(509) 790-0555</a>
        </div>
        <div className="order-md-3 order-sm-2 order-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
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
