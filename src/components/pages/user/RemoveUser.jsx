import React from 'react'
import Layout from '../../layout/Layout'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import userService from '../../../services/user.service'
import { toast } from 'react-toastify'

const RemoveUser = () => {
  const { userId } = useParams()

  const submitForm = async () => {
    try {
      const response = await userService.removeUser(userId)

      if (response?.status) {
        toast.success(`User ${userId} has been deleted`)

        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
      } else {
        toast.warn(`User ${userId} could not be removed`)
      }
    } catch (error) {
      toast.error(`User ${userId} cannot be removed`)
      console.error(error.message)
    }
  }

  const cancelRemove = () => {
    window.location.href = '/'
  }

  return (
    <Layout>
      <h3 className="text-center">Are you sure to remove this user?</h3>
      <Row className="justify-content-center">
        <Col md={4} className='justify-content-center'>
          <Form className='mt-4 justify-content-center'>
            <Button
              variant="danger"
              as={NavLink}
              onClick={submitForm}
              className="m-1 justify-content-center"
            >
              Yes, remove user
            </Button>
            <Button variant="secondary" onClick={cancelRemove} className="m-1 justify-content-center">
              No, do not remove user
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default RemoveUser
