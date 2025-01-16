import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Layout from './Layout'

const RetrieveUser = () => {
  const { userId } = useParams()
  const getUserEndpoint = `http://localhost:4000/v1/user/${userId}`

  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchUser () {
      try {
        const { data } = await axios.get(getUserEndpoint)
        if (data) {
          setUser(data.user)
        } else {
          setUser({})
        }
      } catch (err) {
        setUser(null)
      }
    }
    fetchUser()
  }, [getUserEndpoint, userId])

  return (
      <Layout>
        {user
          ? (
            <>
              <Col className='justify-content-center'>
                <h3 className="text-center mb-3">{user.name}</h3>
                <Col lg={6}>
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
              </Col>
            </>
            )
          : (
              <p className='text-center text-danger fw-bold'>User {userId} is not found</p>
            )}
      </Layout>
  )
}

export default RetrieveUser
