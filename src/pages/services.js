import React from "react"

import { graphql } from 'gatsby'
import { Container, Col, Row, Tab, ListGroup, TabPane } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = (props) => (
  <Layout>
    <SEO title="Services" />
    <div style={{ backgroundColor: "#b9e5ff", paddingBottom: "20px", paddingTop: "30px", textAlign: "center", marginBottom: "0px" }}>
        <h1>Services for the most demanding needs.</h1>
        <h1>Prices that you can afford.</h1>
    </div>
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white", height: "100vh", marginTop: "60px"}}>
      <Row noGutters>
        <Col xs={12} sm={6} style={{ padding: "20px", marginBottom: "30px" }}>
            <div className="servicesHeading">Networking</div>
            <Tab.Container id="services-networking" defaultActiveKey="services-networking-1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action eventKey="services-networking-1" variant="secondary">
                          Wireless (WiFi / IEEE 802.11)
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="services-networking-2" variant="secondary">
                            Wireless (Cellular / LTE / 5G)
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <TabPane eventKey="services-networking-1">
                            Today, the need for WiFi and cellular communications is constantly increasing. Let us help you install
                            your new WiFi solution in your home or office. Although there are many choices out there, we offer
                            professional grade solutions at consumer prices.
                            <br/>
                            <br/>
                            Did you know that almost all consumer grade WiFi is easily hacked? It doesn't take much to break into a wireless
                            network that is only secured by Wi-Fi Protected Access 2 (WPA2). What is less known, is it doesn't take you much
                            to enable a WPA-Enterprise, or WPA-802.1X, that supports user names and passwords and digital certificates.
                            <br/>
                            <br/>
                            Call us today to find out what it takes to upgrade and protect your home or office with Enterprise grade security.
                            <br/>
                            <br/>
                            <ul>
                                <li>Get RADIUS authentication</li>
                                <li>Best in class roaming</li>
                                <li>Full visibility into your WiFi network</li>
                                <li>Remote management capabilities</li>
                                <li>No cables needed for remote locations on your premise</li>
                                <li>Stop buying wireless network extenders that don't fix the problem</li>
                            </ul>
                        </TabPane>
                        <Tab.Pane eventKey="services-networking-2">
                            Do you have poor cell phone reception at your home or office? Is it frustrating to have to go outside to make an
                            important call? Sure, you could look to switch your cell phone provider to solve this problem. But that might
                            get rid of it permanently.
                            <br/>
                            <br/>
                            We have worked with apartment buildings and homes to install cellular signal boosters. These devices help you
                            make the calls you want, while supporting anyone else who visits your home or office as well.
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Col>
        <Col xs={12} sm={6} style={{ padding: "20px", marginBottom: "30px" }}>
            <div className="servicesHeading">Software and Cloud</div>
            <Tab.Container id="services-software-cloud" defaultActiveKey="services-software-cloud-1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action eventKey="services-software-cloud-1" variant="secondary">
                          Office 365 (Email and More)
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="services-software-cloud-2" variant="secondary">
                            Cloud (Azure and AWS)
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="services-software-cloud-1">
                            Most people use email as a primary source of communication. Even with text messaging, Slack, Microsoft Teams, and many other
                            types of services which keep people together, email remains the default. Getting a personal email address is simple, and free!
                            Why wouldn't you want to get something for free?
                            <br/>
                            <br/>
                            What many people don't know is that, in the event that you email account gets locked out, they don't have to return access to you.
                            Although many of the large, free services have taken measures to let you get your login information back, this doesn't mean it is
                            a guarantee.
                            <br/>
                            <br/>
                            One of our biggest complaints here at 4252 Concepts, is that these free services don't provide you a vanity domain name. Have you
                            ever wanted a cool email address, like frank@rocks.com or something similar? To do that, you need a to buy into a paid service.
                            Many of these services greatly reduce your security and can leave you without some of the standard features found in the free
                            services like calendar and contact synchronization.
                            <br/>
                            <br/>
                            Contact us today to help you get your own Office 365 account with a custom domain name. Let us configure your security settings
                            and ensure you have what you need to streamline your communication.
                            <br/>
                            <br/>
                            <ul>
                                <li>Get your own domain name and custom email address!</li>
                                <li>Increase your security!</li>
                                <li>Work with partner companies and vendors as if you were enterprise size yourself</li>
                                <li>Get free conferencing abilities; buy up and get your own dial-in number</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="services-software-cloud-2">
                         words
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Services

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: { eq: "about_splash.png" }) {
      ...fluidImage
    }
  }
`
