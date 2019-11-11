import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"


const Content = ({ children, banner }) => {
    const data = useStaticQuery(graphql`
    query {
        topBanner: file(relativePath: { eq: "top_banner.jpg" }) {
        ...fluidImageCss
        }
    }
    `)

  return (
    <Layout>
        <div className="contentBannerContainer">
            <BackgroundImage
                Tag="div"
                className="contentBanner"
                fluid={data.topBanner.childImageSharp.fluid}>
                { banner }
            </BackgroundImage>
        </div>
        <Container className="contentBody" fluid>
            <Row>
                <Col className="contentBody">
                    { children }
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
    banner: PropTypes.string.isRequired
}

export default Content
