import React from 'react'
import firebaseConfig from './components/Authentication/firebase.config';
import { Route, Routes } from 'react-router-dom'
import Registration from './components/Registertion/Registertion';
import Login from './components/Login/Login';
import Home from './components/pages/Home/Home';





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App