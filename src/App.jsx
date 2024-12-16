import React from 'react'
import firebaseConfig from './components/Authentication/firebase.config';


import { Navigate, Route, Routes } from 'react-router-dom'
import Registertion from './components/Registertion/Registertion';
import Login from './components/Login/Login';
import Home from './components/pages/Home/Home';
import ForgotPassword from './components/ForgotPassword.jsx/ForgotPassword';





const App = () => {
  return (
    <Routes>
      <Route path='/Registertion' element={<Registertion />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='*' element={<Navigate to="/Registertion" replace/>} />
    </Routes>
  )
}

export default App