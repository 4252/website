import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Col, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
      <Row noGutters>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} >sm=8</Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }} ><Img fluid={props.data.homeImg.childImageSharp.fluid} /></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1920) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: { eq: "home_splash.jpg" }) {
      ...fluidImage
    }
  }
`
