import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../../layout/Layout'

const AboutUs = () => {
  return (
        <Layout>
        <h3 className="text-center">About Us</h3>
            <Row className="justify-content-center">
                <Col md={4}>About us. Learning React, NodeJs, and ExpressJS is so fun. This project was part of the Udemy.</Col>
            </Row>
        </Layout>
  )
}

export default AboutUs
