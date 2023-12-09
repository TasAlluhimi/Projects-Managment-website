import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AdminNav from '../Componenets/AdminNav'

function ProjectsList() {

    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    const [data, setData] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users`)
        .then((res)=>{
            // console.log(res.data);
            const allProjects = res.data.filter((item)=>item.hide === 'false')
            // console.log(allProjects);
            setData(allProjects);
        })
    }

    const del = (id)=>{
        axios.put(`https://65730c11192318b7db417733.mockapi.io/users/${id}`, {
            hide: 'true',
      })
      .then((response)=>{
          console.log("project deleted");
          getData()
  
      })
    }


  return (
    <>

<AdminNav/>

    
<p class="text-left text-[#1B4242] font-extrabold uppercase p-10 mt-10">Projects List</p>
            
<div className='mb-20'>
        <div class="shadow-lg rounded-lg mx-4 md:mx-10">
    
    <div class="overflow-x-auto">
        <table class="table-fixed w-full">
            
                <thead>
                    <tr class="bg-gray-100">
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Project Name</th>
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Options</th>
                    </tr>
                </thead>

        {data.map((item)=>(
            
                <tbody class="bg-white">
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200 max-sm:text-[13px]">{item.project.project_name}</td>
                        <td class="py-4 px-6 border-b border-gray-200">
                            {item.status === 'waiting' && <span class="bg-yellow-500 text-white py-1 px-2 rounded-full text-xs">Waiting</span>}
                            {item.status === 'approved' && <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Approved</span>}
                            {item.status === 'rejected' && <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Rejected</span>}
                            
                        </td>
                        <td class="py-4 px-6 border-b border-gray-200 flex flex-col gap-y-2 justify-center items-start">
                            <button className='bg-red-500 p-1 rounded-md w-16 text-white' onClick={()=>{del(item.id)}}>Delete</button>
                            <button className='bg-gray-500 p-1 rounded-md w-16 text-white' onClick={()=>{navigate(`/ProjectsList/${item.id}`)}}>Details</button></td>
                    </tr>
    
                </tbody>
                
        ))}
        </table>
    </div>
    
            </div>
            </div>
       
    </>
  )
}

export default ProjectsList