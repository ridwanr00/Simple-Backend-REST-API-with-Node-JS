import React from 'react'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import TopNavigation from './TopNavigation'
import { createGlobalStyle } from 'styled-components'
import Footer from './Footer'

const BackgroundColor = createGlobalStyle`
  body{
    background-color: ${(prop) => (prop?.light ? '#f2f2f2' : 'white')}
  }
`

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
        <>
            <Container fluid className='mb-5'>
                <BackgroundColor light></BackgroundColor>
                <ToastContainer></ToastContainer>
                <TopNavigation></TopNavigation>
                <Container className='mt-5'>{children}</Container>
            </Container>
            <Footer></Footer>
        </>
  )
}

export default Layout
