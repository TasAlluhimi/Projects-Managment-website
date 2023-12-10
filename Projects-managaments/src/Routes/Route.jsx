import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Dashboard from '../Pages/Dashboard'
import Error from '../Errors/Error'
import ProjectSection from '../Pages/ProjectSection'
import Add from '../Pages/Add'
import Details from '../Pages/Details'
import StudentList from '../Pages/StudentList'
import ProjectsList from '../Pages/ProjectsList'
import ProjectDetails from '../Pages/ProjectDetails'
import Edit from '../Pages/Edit'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/Dashboard' element={<Dashboard/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/ProjectSection' element={<ProjectSection/>}></R>
            <R path='/Add' element={<Add/>}></R>
            <R path='/Details' element={<Details/>}></R>
            <R path='/StudentList' element={<StudentList/>}></R>
            <R path='/ProjectsList' element={<ProjectsList/>}></R>
            <R path='/ProjectsList/:id' element={<ProjectDetails/>}></R>
            <R path='/Edit/:id' element={<Edit/>}></R>
            <R path='/*' element={<Error/>}></R>
        </Routes>
    </>
  )
}

export default Route