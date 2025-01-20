import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Layout from '../layout/Layout'
import userService from '../../services/user.service'

const UsersList = () => {
  const [users, setUsers] = useState({})

  const fetchUsers = async () => {
    const users = await userService.retrieveAllUsers()
    setUsers(users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Layout>
      <h3 className="text-center mb-3">Users</h3>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  )
}

export default UsersList
