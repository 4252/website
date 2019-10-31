import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Col, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white"}}>
      <Row noGutters>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} style={{ display: "flex", fontSize: "30px" }}>
          <p style={{ margin: "auto", textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>Effective solutions for the most complex home office and business needs.</span>
          <br /><br />
          <span style={{ fontSize: "20px", color: "darkgray" }}>Book time with us: <a href="https://x52.fyi/bookings" target="_blank" rel="noopener noreferrer">bookings page</a></span></p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }} >
          <Img fluid={props.data.homeImg.childImageSharp.fluid}/>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: { eq: "home_splash.jpg" }) {
      ...fluidImage
    }
  }
`
