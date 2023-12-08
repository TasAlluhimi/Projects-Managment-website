import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Dashboard from '../Pages/Dashboard'
import Error from '../Errors/Error'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/Dashboard' element={<Dashboard/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/*' element={<Error/>}></R>
        </Routes>
    </>
  )
}

export default Route