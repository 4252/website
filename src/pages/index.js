import React from 'react'
import { graphql } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white", height: "96vh", display: "flex", flexFlow: "column" }}>
      <Row noGutters style={{ flexGrow: "1" }}>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} style={{ display: "block", margin: "auto", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>
            <span style={{ fontSize: "40px", lineHeight: "50px" }}>Effective solutions for the most complex home office and small business needs.</span>
          </p>
          <p style={{ display: "inline-block" }}>
            <span style={{ fontSize: "20px", lineHeight: "10px" }}>We support customer's throughout the United States. But if you want same day, on-site service, please be in
            the state of Washington. Our home territory is Bellevue, Redmond, Kirkland, Issaquah, and Seattle. We do support customers in Cle Elum
            as well.</span>
          </p>
          <p style={{ display: "inline-block" }}>
            <span style={{ fontSize: "20px", color: "darkgray" }}>Book time with us: <a href="https://x52.fyi/bookings" target="_blank" rel="noopener noreferrer">bookings page</a></span>
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
