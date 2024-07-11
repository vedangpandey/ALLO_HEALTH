import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/login/Login'
import SignUp from './page/signup/SignUp'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
      
      <div>

      </div>
    </>
  )
}

export default App
