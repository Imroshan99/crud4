import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import { AllUser } from './components/AllUser'
import EditUser from './components/EditUser'
import { NavBar } from './components/NavBar'

const App = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AllUser/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
    </>
  )
}

export default App