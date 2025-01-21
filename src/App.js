import React from 'react'
import UsersList from './components/pages/user/UsersList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './components/pages/user/CreateUser'
import RetrieveUser from './components/pages/user/RetrieveUser'
import EditUser from './components/pages/user/EditUser'
import RemoveUser from './components/pages/user/RemoveUser'
import Contact from './components/pages/static/Contact'
import AboutUs from './components/pages/static/AboutUs'

function App () {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList></UsersList>}></Route>
            <Route path="/create" element={<CreateUser></CreateUser>}></Route>
            <Route path="/:userId" element={<RetrieveUser></RetrieveUser>}></Route>
            <Route path='/edit/:userId' element={<EditUser></EditUser>}></Route>
            <Route path='/remove/:userId' element={<RemoveUser></RemoveUser>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
