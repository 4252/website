import React from "react"
import { Col, Row, Tab, ListGroup, TabPane } from 'react-bootstrap'

import Content from "../components/content"
import SEO from "../components/seo"

const Services = () => (
    <Content banner="Services">
        <SEO title="Services" />
        <div>
            <div className="servicesHeading">Software and Cloud</div>
            Most people use email as a primary source of communication. Even with text messaging, Slack, Microsoft Teams, and many other types of services that keep people together, email remains the default. Getting a personal email address is simple and free! Why wouldn't you want to get something for free?
            <br/>
            <br/>
            What many people don't know is that, if your email account gets locked out, they don't have to return access to you. Although many of the large, free services have taken measures to let you get your login information back, this doesn't mean it is a guarantee.
            <br/>
            <br/>
            One of our biggest complaints here at 4252 Concepts is that these free services don't provide you a vanity domain name. Have you ever wanted a remarkable email address, like frank@rocks.com or something similar? To do that, you need to buy into a paid service. Many of these services significantly reduce your security and can leave you without some of the standard features found in the free services like calendar and contact synchronization.
            <br/>
            <br/>
            Contact us today to help you get your own Office 365 account with a custom domain name. Let us configure your security settings and ensure you have what you need to streamline your communication.
            <br/>
            <br/>
            <ul>
                <li>Get your own domain name and custom email address!</li>
                <li>Increase your security!</li>
                <li>Work with partner companies and vendors as if you were enterprise size yourself</li>
                <li>Get free conferencing abilities; buy up and get your dial-in number</li>
            </ul>
        </div>
        <div>
            <div className="servicesHeading">Networking</div>
            Today, the need for Wi-Fi and cellular communications is continuously increasing. Let us help you install your new Wi-Fi solution in your home or office. Although there are many choices out there, we offer professional-grade solutions at consumer prices.
            <br/>
            <br/>
            Did you know that almost all consumer-grade Wi-Fi networks are hacked easily? It doesn't take much to break into a wireless network that is only secured by Wi-Fi Protected Access 2 (WPA2). What is less known, is it doesn't take you much to enable a WPA-Enterprise, or WPA-802.1X, that supports user names and passwords and digital certificates.
            <br/>
            <br/>
            Call us today to find out what it takes to upgrade and protect your home or office with Enterprise-grade security.
            <br/>
            <br/>
            <ul>
                <li>Stop buying wireless network extenders that don't fix the problem</li>
                <li>Full visibility into your WiFi network</li>
                <li>Remote management capabilities</li>
                <li>No cables needed for remote locations on your premise</li>
                <li>Best in class roaming</li>
                <li>Get RADIUS authentication</li>
            </ul>

            Do you have poor cell phone reception at your home or office? Is it frustrating to have to go outside to make an
            important call? Sure, you could look to switch your cell phone provider to solve this problem. But that might
            get rid of it permanently.
            <br/>
            <br/>
            We have worked with apartment buildings and homes to install cellular signal boosters. These devices help you
            make the calls you want, while supporting anyone else who visits your home or office as well.
        </div>
    </Content>
)

export default Services
