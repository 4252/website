import React from "react"

import { graphql } from 'gatsby'
import { Container, Col, Row, Tab, ListGroup, TabPane } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = (props) => (
  <Layout>
    <SEO title="Services" />
    <div style={{ backgroundColor: "#b9e5ff", paddingBottom: "30px", paddingTop: "30px" }}>
        <p style={{textAlign: "center", marginBottom: "0px"}}>
            <span style={{ fontSize: "60px", lineHeight: "70px" }}>
                Services for the most demanding needs.
            </span>
            <br />
            <span style={{ fontSize: "60px", lineHeight: "70px" }}>Prices that you can afford.</span>
        </p>
    </div>
    <Container fluid style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "white", height: "100%", marginTop: "60px"}}>
      <Row noGutters>
        <Col xs={12} sm={6} style={{ padding: "20px" }}>
            <div style={{ display: "block", fontSize: "30px", marginBottom: "30px", textAlign: "center", borderBottom: "3px", borderBottomColor: "#b9e5ff", borderBottomStyle: "double"}}>Networking</div>
            <Tab.Container id="services-networking" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                          Wireless (WiFi / IEEE 802.11)
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Wireless (Cellular / LTE / 5G)
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <TabPane eventKey="#link1">
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
                            </ul>
                        </TabPane>
                        <Tab.Pane eventKey="#link2">
                         words
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Col>
        <Col xs={12} sm={6} style={{ padding: "20px" }}>
            <div style={{ display: "block", fontSize: "30px", marginBottom: "30px", textAlign: "center", borderBottom: "3px", borderBottomColor: "#b9e5ff", borderBottomStyle: "double"}}>Software and Cloud</div>
            <Tab.Container id="services-networking" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                          Office 365
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Wireless (Cellular / LTE / 5G)
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
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
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
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
