import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Add() {

    const navigate = useNavigate();
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    // const [project, setProject] = React.useState([])

    const [errorMes, setErrorMes] = React.useState('')
    const [err, setErr] = React.useState(false)
    const [inputs, setInputs] = React.useState({
      name: '',
      description: '',
      image: '',
      
    });
  
    const addInputs = (event)=>{
      setInputs({...inputs,
          [event.target.name]: event.target.value
      })
  }
  
  const Add_Project = ()=>{
  
    if (inputs.name.length < 3) {
      setErrorMes('Project Name should be at least 3 characters long');
      setErr(true)
      return;
    }
  
    if (!inputs.description) {
      setErrorMes('Project should have a description');
      setErr(true)
      return;
    }

    if (!inputs.image) {
        setErrorMes('Please enter an image');
        setErr(true)
        return;
      }
  
  
      axios.put(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`, {
          project: {
            project_name: inputs.name,
            project_description: inputs.description,
            project_image: inputs.image,
            // improved: 'waiting',
          }
      })
      .then((response)=>{
          console.log("project added");
          navigate('/ProjectSection')
  
      })
  }

    // axios.put(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`)
    //     .then((res)=>{
    //         console.log(res.data.project);
    //         setProject(res.data.project);
    //     })

  return (
    <>
        
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Add Your Project Idea
        </h2>

        {err ? (<div className="flex justify-center bg-red-100 border 
        border-red-400 text-red-700 px-4 py-3 my-2 rounded"
        role="alert">
        <span className="block sm:inline pl-2">
            <strong className="font-bold">{errorMes}</strong>
        </span>
        </div> )
        : ''}
        
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
                <div className='flex items-center justify-center'>
                    <div style={{backgroundImage: `url(${inputs.image})`}}
                    className='h-60 w-full border bg-no-repeat bg-center bg-cover mb-5'>

                    </div></div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5  
                    text-gray-700">Project Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="name" 
                        name="name" 
                        placeholder="Project Name" 
                        type="text" 
                        required="" 
                        value={inputs.name}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue 
                        focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                </div>

                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium leading-5  
                    text-gray-700">
                    Project description
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="description" 
                        name="description" 
                        placeholder="Project description" 
                        type="text" 
                        required="" 
                        value={inputs.description}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none 
                        focus:shadow-outline-blue focus:border-blue-300 transition duration-150 
                        ease-in-out sm:text-sm sm:leading-5
                "/>
                        
                    </div>
                </div>

                <div className="mt-6">

                    <label htmlFor="image" className="block text-sm font-medium leading-5 text-gray-700">
                        Project Image
                    </label>

                    <div className="mt-1 rounded-md shadow-sm">
                        
                    <input 
                        id="image" 
                        name="image" 
                        type="text" 
                        placeholder='URL images only'
                        required="" 
                        value={inputs.image}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                        placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition 
                        duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button
                onClick={Add_Project} 
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
                text-white bg-[#1B4242] hover:bg-[#5C8374] focus:outline-none focus:border-gray-950 focus:shadow-outline-indigo
                active:bg-gray-900 transition duration-150 ease-in-out">
                Add Project
            </button>
                    </span>
                </div>
            

        </div>
    </div>
</div>

    </>
  )
}

export default Add