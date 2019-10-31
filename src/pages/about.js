import React from "react"

import { graphql } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import mslogo from "../images/microsoft_logo.png"

const About = (props) => (
  <Layout>
    <SEO title="About" />
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white", height: "100vh", display: "flex", flexFlow: "column" }}>
      <Row noGutters style={{ flexGrow: "1" }}>
        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} style={{ display: "block", padding: "15px", margin: "auto", marginTop: "0", marginBottom: "50px", textAlign: "left" }}>
          <p style={{ display: "inline-block", textAlign: "center", marginBottom: "50px", marginTop: "30px", borderBottom: "3px solid #4588ba" }}>
            <span style={{ fontSize: "60px", lineHeight: "50px" }}>
              Our Values Put the Customer First
              </span>
          </p>
          <p style={{ display: "inline-block", textAlign: "center", marginBottom: "10px", backgroundColor: "navy", height:"3px" }}></p>
          <p style={{ display: "inline-block", textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "60px", lineHeight: "50px" }}>
              Our goal is to earn your trust by exceeding your expectations.
            </span>
          </p>
          <p style={{ display: "inline-block" }}>
            <span style={{ fontSize: "20px" }}>4252 Concepts was founded with the intention to be creative, helpful, and inspiring. We are
              equipped with skills for everyone, from individuals to large businesses. We specialize in technology solutions
              for development operations (DevOps), networking for home and offices, integration services for products like Office 365, and cloud
              services for Microsoft Azure and Amazon Web Services (AWS). We also support clients with digital media and photography. But most
              importantly, we work with all of our clients to ensure they achieve their full potential.</span>
            <br />
            <br />
            <span style={{ fontSize: "20px" }}>It is because of our diverse background that our clients are left knowing that the solutions they
              need are the best on the market. Our years working with small and large businesses have enabled us to provide thought leadership,
              strategy assessment, and execution improvement processes in the most challenging of environments. Clients ranging from medical,
              legal, transportation, fashion, and more have benefited from the diverse perspectives we've provided and have seen growth after
              realigning their vision strategy with a clear set of goals and guiding principals.</span>
            <br />
            <br />
            <span style={{ fontStyle: "bold", fontSize: "20px" }}>Our Partners</span>
            <br />
            <span style={{ fontSize: "15px" }}>
              <img src={mslogo} alt="Microsoft" height="50px" />
              <br />
              (see our 
              <a href="https://www.microsoft.com/en-us/solution-providers/partnerdetails/4252-concepts_77de4cb6-e008-4d39-a6a0-cd30d5967d66/5695e811-0633-4832-bc8d-a9045990b928" target="_blank" rel="noopener noreferrer"> profile</a>
              )</span>
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} style={{ display: "block", minHeight: "200px" }}>
          <BackgroundImage
              Tag="div"
              className="gatsbyBackgroundImageCss"
              fluid={props.data.aboutImg.childImageSharp.fluid}
            ></BackgroundImage>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    aboutImg: file(relativePath: { eq: "about_splash.png" }) {
      ...fluidImageCss
    }
  }
`
