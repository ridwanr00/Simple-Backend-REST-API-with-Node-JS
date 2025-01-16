import React from 'react'
import UsersList from './components/UsersList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import RetrieveUser from './components/RetrieveUser'

function App () {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList></UsersList>}></Route>
            <Route path="/create" element={<CreateUser></CreateUser>}></Route>
            <Route path="/:userId" element={<RetrieveUser></RetrieveUser>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
