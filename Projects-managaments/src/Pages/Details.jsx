import React from 'react'
import NavPar from '../Componenets/NavPar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Details() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    const [project, setProject] = React.useState([])
    const [status, setStatus] = React.useState('')
    const [reject_reason, setReject_reason] = React.useState('')
    const navigate = useNavigate()

    React.useEffect(()=>{
        getData()
        
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`)
        .then((res)=>{
            // console.log(res.data.status);
            setStatus(res.data.status);
            setReject_reason(res.data.reject_reason);
            setProject(res.data.project);
        })
    }



  return (
    <>
        <NavPar/>

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Project Details
        </h2>
        
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div style={{backgroundImage: `url(${project.project_image})`}}
                    className='h-60 w-72 border bg-no-repeat bg-center bg-cover mb-5'>
                    </div>
                    <div className='w-72'><span className='font-bold'>Project name:</span> {project.project_name}</div>
                    <div className='w-72'><span className='font-bold'>Project description:</span> {project.project_description}</div>
                    <div></div>
                    </div>

                    
                     
                   
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button
                onClick={()=>{navigate('/ProjectSection')}} 
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
                text-white bg-[#1B4242] hover:bg-[#5C8374] focus:outline-none focus:border-gray-950 focus:shadow-outline-indigo
                active:bg-gray-900 transition duration-150 ease-in-out">
                Back
            </button>
                    </span>
                </div>
            

        </div>
    </>
  )
}

export default Details