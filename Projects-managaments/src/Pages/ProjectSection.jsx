import React from 'react'
import NavPar from '../Componenets/NavPar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function ProjectSection() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    const [project, setProject] = React.useState([])
    const [status, setStatus] = React.useState('')
    const navigate = useNavigate()

    // console.log(userData.id);

    React.useEffect(()=>{
        getData()
        
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users/${userData.id}`)
        .then((res)=>{
            // console.log(res.data.status);
            setStatus(res.data.status);
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
          }
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
        
        <p class="text-left text-[#1B4242] font-extrabold uppercase p-10 mt-10">Project</p>
        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

        {project.length === 0 || project.project_name == '' ? 
        <div className='p-10'>
            There is no project yet.. <span 
            className='font-medium text-[rgb(92,131,116)] hover:text-[#1B4242] focus:outline-none focus:underline transition 
            ease-in-out duration-150'>
                <Link to='/Add'>Click here to add</Link></span>
        </div>

        :    

        <div class="overflow-x-auto">
            <table class="w-full table-fixed">
            <thead>
                <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Project Name</th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Details</th>
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
                    <td class="py-4 px-6 border-b border-gray-200">
                        <button className='bg-gray-500 p-1 rounded-md w-16 text-white' onClick={()=>{navigate('/Details')}}>Details</button></td>
                    <td class="py-4 px-6 border-b border-gray-200 flex flex-col gap-y-2 justify-center items-start">
                        <button className='bg-red-500 p-1 rounded-md w-16 text-white' onClick={del}>Delete</button>
                        <button className='bg-gray-500 p-1 rounded-md w-16 text-white'>Edit</button></td>
                </tr>

                {/* <tr>
                    <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                    <td class="py-4 px-6 border-b border-gray-200">
                        <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                    </td>
                    <td class="py-4 px-6 border-b border-gray-200">d</td>
                </tr> */}

            </tbody>
            </table>
    </div>}

</div>

        </div>
    </>
  )
}

export default ProjectSection