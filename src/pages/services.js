import React from "react"
import { Col, Row, Tab, ListGroup, TabPane } from 'react-bootstrap'

import Content from "../components/content"
import SEO from "../components/seo"

const Services = () => (
    <Content banner="Services">
        <SEO title="Services" />
        <div>
            <div className="servicesHeading">Cost Reduction</div>
            Who doesn’t want to save money? If you want to start now, give us a call. We have worked with customers of all sizes to help reduce their technology costs while increasing their productivity. Our unique background provides us with insight into where the industry is going and what tools are available that can reduce your costs.
            <br/>
            <br/>
            Even if you have a technology provider, it is often the case that they don’t take the time to understand your business and how it operates. With over 20 years of consulting experience, in much of the industry verticals, we can help you improve how technology fits in your business.
            <br/>
            <br/>
            Below is a list of items we have reviewed for customers that have led to savings and improved company performance.
            <br/>
            <br/>
            <ul>
                <li>Local Servers (file, backup, database, etc.)</li>
                <li>Virtual Private Networking</li>
                <li>Email</li>
                <li>Landlines (PSTN); Even Current VOIP Solutions</li>
                <li>Conference calling services</li>
            </ul>
        </div>
        <div>
            <div className="servicesHeading">Digital Transformation</div>
            Are you getting your money’s worth for all the technology bills you have? Do you feel like technology should be seamless instead of a constant hindrance to your workday?
            <br/>
            <br/>
            There has been an explosion of new technology business services which are “cloud-native” or have improved their focus on automation and integration. The new market has greatly enabled the ability to streamline business analytics or even internal business processes.
            <br/>
            <br/>
            Although many of the services have improved their user interface, this is often not enough to help companies access the data they need, how they need it. Even if there are some simple steps to configuring automation, many employees need special training to do this work.
            <br/>
            <br/>
            We have worked with businesses of all sizes to support their business goals and to integrate technology as a natural and fluid solution.
            <br/>
            <br/>
            <ul>
                <li>Custom Company Dashboard</li>
                <li>Automate Business-to-Business (B2B) Integrations</li>
                <li>Custom Report Generation</li>
                <li>Legacy Application Transition</li>
                <li>Data Mobility</li>
                <li>Office 365 Add-ins that Access Your Business Data</li>
            </ul>
        </div>
        <div>
            <div className="servicesHeading">Professional Email</div>
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
