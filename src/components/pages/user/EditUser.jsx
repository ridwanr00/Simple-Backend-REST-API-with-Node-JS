import React, { useEffect, useState } from 'react'
import userService from '../../../services/user.service'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Col, Form, Row, Button } from 'react-bootstrap'
import Layout from '../../layout/Layout'
import { firstUpperCase } from '../../../helpers/string.helper'

const EditUser = () => {
  const { userId } = useParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const populateUserFields = async () => {
    try {
      const { user } = await userService.retrieveUser(userId)
      setName(user.name)
      setEmail(user.email)
      setCity(user.city)
      setCountry(user.country)
    } catch (error) {
      console.error(error.message)
      toast.error(`User ${userId} is not found`)
      window.location.href = '/'
    }
  }

  const submitForm = async (event) => {
    event.preventDefault()

    const payload = {
      name,
      email,
      city,
      country
    }

    try {
      const response = await userService.editUser(userId, payload)

      if (response?.status) {
        toast.success('User successfully updated')
        setName('')
        setEmail('')
        setCity('')
        setCountry('')
      } else {
        toast.warn('An error has occurred')
      }
    } catch (error) {
      const {
        data: {
          errors: { body }
        }
      } = error.response
      const message = body[0]?.message
      toast.error(firstUpperCase(message))
    }
  }

  useEffect(() => {
    populateUserFields()
  }, [userId])

  return (
    <Layout>
      <h3 className='text-center'>Edit User</h3>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(fieldElement) => setName(fieldElement.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(fieldElement) => setCity(fieldElement.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                onChange={(fieldElement) => setCountry(fieldElement.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={submitForm} className='m-1' type='submit'>
              Update
            </Button>
            <Button variant='danger' as={NavLink} to={`/remove/${userId}`} className='m-1'>
                Remove
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default EditUser
