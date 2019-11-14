import React from 'react'
import { graphql } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white", height: "92vh", display: "flex", flexFlow: "column" }}>
      <Row noGutters style={{ flexGrow: "1" }}>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} style={{ display: "block", margin: "auto", textAlign: "center" }}>
          <h2>Effective technology solutions for the most complex office needs. What concept can we help you with today?</h2>
          <p style={{ display: "inline-block" }}>
            <span style={{ fontSize: "20px" }}>Book time with us: <a href="https://x52.fyi/bookings" target="_blank" rel="noopener noreferrer">bookings page</a></span>
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }}>
          <BackgroundImage
            Tag="div"
            className="gatsbyBackgroundImageCss"
            fluid={props.data.homeImg.childImageSharp.fluid}
          ></BackgroundImage>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: { eq: "home_splash.jpg" }) {
      ...fluidImageCss
    }
  }
`
