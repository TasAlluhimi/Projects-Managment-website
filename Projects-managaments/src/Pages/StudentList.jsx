import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AdminNav from '../Componenets/AdminNav'

function StudentList() {

    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const navigate = useNavigate()

    const filterBySearch = data.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()))

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users`)
        .then((res)=>{
            // console.log(res.data);
            const allStudents = res.data.filter((item)=>item.name !== 'admin')
            console.log(allStudents);
            setData(allStudents);
        })
    }

    const del = (id)=>{
        axios.delete(`https://65730c11192318b7db417733.mockapi.io/users/${id}`, {
      })
      .then((response)=>{
          console.log("student deleted");
          getData()
  
      })
    }

  return (
    <>
        
<AdminNav/>
<p class="text-left text-[#1B4242] font-extrabold uppercase p-10 mt-10">Students List</p>

<div>
    {/* <input 
    type="search" 
    name="" 
    id="" 
    className=' '/> */}

                        <input 
                        id="search" 
                        name="search" 
                        placeholder="search by name" 
                        type="search" 
                        required="" 
                        value={search}
                        onChange={(event)=>{setSearch(event.target.value)}}
                        className="appearance-none block px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue 
                        focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                        text-left text-[#1B4242] mb-10 ml-10 "/>

</div>

<div className='mb-20'>
        <div class="shadow-lg rounded-lg mx-4 md:mx-10">
    
    <div class="overflow-x-auto">
        <table class="table-fixed w-full">
            
                <thead>
                    <tr class="bg-gray-100">
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Student Name</th>
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Student Email</th>
                        <th class=" py-4 px-6 text-left text-gray-600 font-bold uppercase">Options</th>
                    </tr>
                </thead>


                {filterBySearch.length === 0 ? (
    <tbody className="bg-white">
        <tr>
            <td 
            className='text-center p-5'
            colSpan="3">No Result.</td>
        </tr>
    </tbody>
) : (
    <tbody className="bg-white">
        {filterBySearch.map((student) => (
            <tr key={student.id}>
                <td className="py-4 px-6 border-b border-gray-200 max-sm:text-[13px]">{student.name}</td>
                <td className="py-4 px-6 border-b border-gray-200 max-sm:text-[13px]">{student.email}</td>
                <td className="py-4 px-6 border-b border-gray-200 flex flex-col gap-y-2 justify-center items-start">
                    <button
                        className='bg-red-500 p-1 rounded-md w-16 text-white'
                        onClick={() => del(student.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
)}

        </table>
    </div>
    
            </div>
            </div>
    </>
  )
}

export default StudentList