import React from 'react'
import NavPar from '../Componenets/NavPar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Componenets/Footer'


function ProjectSection() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    const [project, setProject] = React.useState([])
    const [reject_reason, setReject_reason] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [hide, setHide] = React.useState('')
    const navigate = useNavigate()

    // console.log(userData.id);


    if (!isLoggIn) {
        navigate('/SignIn')
    }

    React.useEffect(()=>{
        getData()
        
    }, [])

    console.log(reject_reason);
    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`)
        .then((res)=>{
            // console.log(res.data.id);
            setHide(res.data.hide);
            setStatus(res.data.status);
            setReject_reason(res.data.reject_reason);
            setProject(res.data.project);
        })
    }

    const del = ()=>{
        axios.put(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`, {
          project: {
            project_name: '',
            project_description: '',
            project_image: '',
            // improved: 'waiting',
          },
          reject_reason: '',
          hide: 'false',
          status: 'waiting',
      })
      .then((response)=>{
          console.log("project deleted");
          getData()
  
      })
    }


  return (
    <>
        <NavPar/>

        <div>
            
        <p class="text-left text-[#1B4242] font-extrabold uppercase p-10 mt-10">Project Details</p>

{/* <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10"> */}

{project.length === 0 || project.project_name == '' ? 


 <section class="container mx-auto my-10 py-24 bg-gray-200 rounded-lg text-center">
            <h3 class="text-5xl font-semibold">Ready to Add your project?</h3>
            {/* <p class="mt-8 text-xl font-light">Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
                fermentum dui faucibus in.
            </p> */}
            <p class="mt-8">
                <button type="button"
                    class="mt-3 py-5 px-16 text-lg bg-[#1B4242] hover:bg-[#5C8374] rounded-md text-white ">
                        <Link to='/Add'>Let's Start</Link>
                </button>
            </p>
        </section>


:  

( 
<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

<div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

    
        <img class="w-full" 
        src={project.project_image} alt="Sunset in the mountains"/>
    
    <div class="relative border -mt-16 px-10 pt-5 pb-16 bg-white m-10
    text-center">
        <div href="#"
            class="font-semibold text-lg transition duration-500 
            ease-in-out inline-block mb-2">
                {project.project_name}</div>
        <p class="text-gray-500 text-sm">
        {project.project_description}
        </p>
        {status === 'rejected' && <p className="text-gray-500 text-sm font-bold">
        Reject reason: {reject_reason}
        </p>}
       
        {hide === 'true' && <p className="text-gray-500 font-bold mt-10">
        <span className='text-red-800'>Your Project is deleted from admin.. delete your project and start again.</span>
        </p>}
       
        


    </div>

</div>

<div>
    
</div>

<div className='flex mt-10 p-10 items-center'>
<div class="text-left text-[#1B4242] font-extrabold uppercase mx-1">Project Status</div> <div className='text-left'><img src="https://cdn-icons-png.flaticon.com/128/471/471664.png" 
alt="" 
title='Every student have one project, if the admin is reject the idea or delete it
you have to delete your project and start over.' 
className="w-5 h-5 " /></div>
</div>


        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

        <div class="overflow-x-auto">
            <table class="w-full table-fixed">
            <thead>
                <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Project Name</th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Options</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr>
                    <td class="py-4 px-6 border-b border-gray-200 max-sm:text-[13px]">{project.project_name}</td>
                    <td class="py-4 px-6 border-b border-gray-200">
                        {status === 'waiting' && <span class="bg-yellow-500 text-white py-1 px-2 rounded-full text-xs">Waiting</span>}
                        {status === 'approved' && <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Approved</span>}
                        {status === 'rejected' && <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Rejected</span>}
                        
                    </td>
                    <td class="py-4 px-6 border-b border-gray-200 flex flex-col gap-y-2 justify-center items-start">
                        <button className='bg-red-500 p-1 rounded-md w-16 text-white' onClick={del}>Delete</button>
                        <button className='bg-gray-500 p-1 rounded-md w-16 text-white' onClick={()=>{navigate(`/Edit/${userData.id}`)}}>Edit</button></td>
                </tr>

            </tbody>
            </table>
    </div>

</div>
</div>

)
}

        </div>

    <Footer/>

    {/* <div className='h-screen'>


<div className='p-10'>
    Add a project first! <span 
    className='font-medium text-[rgb(92,131,116)] hover:text-[#1B4242] focus:outline-none focus:underline transition 
    ease-in-out duration-150'>
        <Link to='/Add'></Link></span>
</div>
</div> */}


    </>
  )
}

export default ProjectSection