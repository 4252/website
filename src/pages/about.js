import React from "react"

import { Container, Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Content from "../components/content"
import SEO from "../components/seo"
import mslogo from "../images/microsoft_logo.png"

const About = (props) => (
  <Content banner="About">
    <SEO title="About" />
    <Col>
      <h1 style={{ display: "inline-block", textAlign: "center", marginBottom: "50px" }}>Our goal is to earn your trust by exceeding your expectations.</h1>
      <p style={{ display: "inline-block" }}>
          4252 Concepts was founded with the intention to be creative, helpful, and inspiring. We are
          equipped with skills for everyone, from individuals to large businesses. We specialize in technology solutions
          for development operations (DevOps), networking for home and offices, integration services for products like Office 365, and cloud
          services for Microsoft Azure and Amazon Web Services (AWS). We also support clients with digital media and photography. But most
        <br />
        <br />
          It is because of our diverse background that our clients are left knowing that the solutions they
          need are the best on the market. Our years working with small and large businesses have enabled us to provide thought leadership,
          strategy assessment, and execution improvement processes in the most challenging of environments. Clients ranging from medical,
          legal, transportation, fashion, and more have benefited from the diverse perspectives we've provided and have seen growth after
          realigning their vision strategy with a clear set of goals and guiding principals.
      </p>
      <h3>Our Partners</h3>
      <span style={{ fontSize: "15px" }}>
        <img src={mslogo} alt="Microsoft" height="50px" />
        <br />
        (see our 
        <a href="https://www.microsoft.com/en-us/solution-providers/partnerdetails/4252-concepts_77de4cb6-e008-4d39-a6a0-cd30d5967d66/5695e811-0633-4832-bc8d-a9045990b928" target="_blank" rel="noopener noreferrer"> profile</a>
        )</span>
    </Col>
  </Content>
)

export default About
