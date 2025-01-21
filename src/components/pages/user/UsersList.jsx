import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Layout from '../../layout/Layout'
import userService from '../../../services/user.service'

const UsersList = () => {
  const [users, setUsers] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)

  const fetchUsers = async () => {
    try {
      const users = await userService.retrieveAllUsers()
      setUsers(users)
    } catch (error) {
      const message = error?.response?.data?.message
      if (message) {
        setErrorMessage(message)
      } else {
        setErrorMessage('Error connecting to server. No users found.')
      }
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Layout>
      {errorMessage
        ? (
        <h3 className="text-center text-danger fw-bold">{errorMessage}</h3>
          )
        : (
        <>
          <h3 className="text-center mb-3 fw-bold">Users</h3>
          {Object.values(users).map((user) => (
            <Row className="justify-content-center" key={user.id}>
              <Col lg={4}>
                <Card>
                  <Card.Body>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    {user.city && user.country && (
                      <p>
                        {user.city} - {user.country}
                      </p>
                    )}
                    <Button
                      variant="secondary"
                      as={NavLink}
                      to={`edit/${user.id}`}
                    >
                      Edit User
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </>
          )}
    </Layout>
  )
}

export default UsersList
