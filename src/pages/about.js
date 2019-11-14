import React from "react"

import { Col } from 'react-bootstrap'

import Content from "../components/content"
import SEO from "../components/seo"
import brianProfile from '../images/brian-rogers.png'
import mslogo from "../images/microsoft_logo.png"

const About = (props) => (
  <Content banner="About">
    <SEO title="About" />
    <Col>
      <h1 style={{ display: "inline-block", textAlign: "center", marginBottom: "50px" }}>Our goal is to earn your trust by exceeding your expectations.</h1>
      <div className="aboutServing">
        <h3>Serving</h3>
        <ul>
          <li>Bellevue, WA</li>
          <li>Redmond, WA</li>
          <li>Kirkland, WA</li>
          <li>Issaquah, WA</li>
          <li>Bothell, WA</li>
          <li>Seattle, WA</li>
          <li>Cle Elum, WA</li>
          <li>and more...</li>
        </ul>
      </div>
      <p style={{ display: "block" }}>
          4252 Concepts was founded with the intention to be creative, helpful, and inspiring. We are
          equipped with skills for everyone, from individuals to large businesses. We specialize in technology solutions
          for software development, development operations (DevOps), networking for home and offices, integration services for products like Office 365,
          and cloud services for Microsoft Azure and Amazon Web Services (AWS). We also support clients with digital media and photography.
        <br />
        <br />
          It is because of our diverse background of over 20 years in the technology industry that our clients are left knowing that the solutions they
          need are the best on the market. Our years working with small and large businesses have enabled us to provide thought leadership,
          strategy assessment, and execution improvement processes in the most challenging of environments. Clients ranging from medical, aviation,
          legal, transportation, fashion, financial (banking, equity trading, etc.), and more have benefited from the diverse perspectives we've provided
          and have seen growth after realigning their vision strategy with a clear set of goals and guiding principals.
        <br />
        <br />
          We support customer's throughout the United States. But if you want same day, on-site service, please be in the state of Washington. Our home
          territory is Bellevue, Redmond, Kirkland, Issaquah, and Seattle. We do support customers in Cle Elum as well.
      </p>
      <h3>Our Team</h3>
      <div className="teamProfile">
        <div className="teamProfilePicture">
          <img
            src={brianProfile}
            width="100"
            height="100"
            alt="Brian Rogers profile"
          />
          <span>Brian Rogers</span>
          <span>Owner</span>
        </div>
        <p>
          Brian Rogers is results-orientated, hands-on professional with over 21 years in the industry providing technical and business leadership with a
          "listen first" approach. His work with executive customers in Fortune 500 companies has helped shape their business strategies to meet their
          company goals. Brian's ability to put concepts into execution using repeatable business processes, clear messaging, strong collaboration and
          ecosystem awareness has been a competitive advantage for his clients.
        </p>
        <p>
          Brian brings a diverse background, providing him unique ability to see the big picture and to build action plans to address the gaps. He has
          enjoyed working with a diverse set of people throughout his career - individuals ranging from small business entrepreneurs to non-profit
          organization contributors and everyone else in-between. His work in various industries such as financial, high-tech, medical, transportation,
          aviation, and others have increased his breadth of knowledge to address any challenge that could occur.
        </p>
        <p>
          Originally from the East coast of the United States, Brian came from a family of small business entrepreneurs. He is not afraid of hard work
          and enjoys the challenge of any business problem.
        </p>
      </div>
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
