import React from "react"

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Col, Row } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => (
  <Layout>
    <SEO title="About" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white"}}>
      <Row noGutters>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} style={{ display: "flex", fontSize: "30px" }}>
          <p style={{ marginTop:"15px", marginBottom:"auto", marginLeft: "15px", marginRight: "15px", textAlign: "left", lineHeight: "30px" }}>
            <span style={{ fontSize: "20px" }}>4252 Concepts was founded with the intention to be creative, helpful, and inspiring. We are focused on helping individuals to large businesses with various services which include technology, photography, graphic arts, video creation, and, most importantly, achieving their potential.</span>
            <br />
            <br />
            <span style={{ fontSize: "20px" }}>Over the years, we have provided thought leadership, strategy assessment, and execution improvement processes. Clients ranging from medical, legal, transportation, fashion, and more have benefited from the diverse perspectives provided and have seen growth after realigning their vision strategy with a clear set of goals and guiding principals.</span>
            <br />
            <br />
            <span style={{ fontStyle: "bold", fontSize: "20px" }}>Our Partners</span>
            <br />
            <span style={{ fontSize: "15px" }}>Microsoft Partner <a href="https://www.microsoft.com/en-us/solution-providers/partnerdetails/4252-concepts_77de4cb6-e008-4d39-a6a0-cd30d5967d66/5695e811-0633-4832-bc8d-a9045990b928" target="_blank" rel="noopener noreferrer">profile</a></span>
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} >
          <Img fluid={props.data.homeImg.childImageSharp.fluid}/>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: { eq: "about_splash.png" }) {
      ...fluidImage
    }
  }
`
