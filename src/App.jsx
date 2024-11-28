import React from 'react'
import Registertion from './components/Registertion/Registertion'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Registertion />} />
      <Route path='/login' element={<Login />} />
      
    </Routes>
  )
}

export default App