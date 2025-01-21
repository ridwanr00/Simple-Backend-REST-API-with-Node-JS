import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from '../../layout/Layout'

const Contact = () => {
  return (
        <Layout>
        <h3 className='text-center'>Contact Us</h3>
        <Row className="justify-content-center">
            <Col md={4}>
                Contact me at <span className='fst-italic'>MY EMAIL ADDRESS</span>
            </Col>
        </Row>
        </Layout>
  )
}

export default Contact
