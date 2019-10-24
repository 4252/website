import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">
              {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
      <footer className="">
          © {new Date().getFullYear()}, 4252 Concepts LLC
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
