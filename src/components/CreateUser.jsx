import React, { useState } from 'react'
import axios from 'axios'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Layout from './Layout'

const CreateUser = () => {
  const createUserEndpoint = 'http://localhost:4000/v1/user'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const submitForm = async (event) => {
    event.preventDefault()

    const payload = {
      name,
      email,
      city,
      country
    }

    try {
      const data = await axios.post(createUserEndpoint, payload)
      if (data) {
        console.log(data)
        toast.success('User successfully created')
        setName('')
        setEmail('')
        setCity('')
        setCountry('')
      } else {
        toast.warn('An error has occurred')
      }
    } catch (err) {
      const {
        data: {
          errors: { body }
        }
      } = err.response
      toast.error(body[0]?.message)
    }
  }
  return (
      <Layout>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitForm}>
                Add User
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
  )
}

export default CreateUser
