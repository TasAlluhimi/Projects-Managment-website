import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AdminNav from '../Componenets/AdminNav';
import axios from 'axios';
import Footer from '../Componenets/Footer';

function Dashboard() {

    // const [isAdmin, setIsAdmin] = React.useState(localStorage.getItem('isAdmin'))

    // console.log(isAdmin);
    
    // if (isAdmin === null || !isAdmin) {
    //     navigate('/SignIn')
    // }
    
    // else{
    //     navigate('/SignIn')
    // }

    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users`)
        .then((res)=>{
            // console.log(res.data);
            const Projects = res.data.filter((item)=>item.status === 'approved')
            // console.log(Projects);
            setData(Projects);
        })
    }

  return (
    <>
       <AdminNav/>

            {/* Content Body  */}
            <div className="flex-1 overflow-auto p-4 bg-[#9ec8b92e]">
              {/* <h1 className="text-2xl font-semibold text-center mt-10">Manage the students list and projects list</h1> */}
              
              {/* animated cards */}

        <div className='flex justify-center flex-wrap lg:gap-80 md:gap-10 max-sm:gap-10 lg:h-[70vh] max-sm:h-screen '>

        <div class="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
        <Link to='/ProjectsList'>
    <div
        class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 h-60 w-96 max-sm:w-80">

        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#5C8374] transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-[#5C8374] transition-all duration-300 group-hover:bg-[#9EC8B9]">
                <img 
                src="https://cdn-icons-png.flaticon.com/128/5956/5956597.png" 
                className='h-12 w-12 transition-all'
                alt="" />
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>View the projects list.</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
                
            </div>
        </div>
    </div>
    </Link>
</div>

<div class="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12 ">
  <Link to='/StudentList'>
    <div
        class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 h-60 w-96 max-sm:w-80">

        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#5C8374] transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-[#5C8374] transition-all duration-300 group-hover:bg-[#9EC8B9]">
            <img 
                src="https://cdn-icons-png.flaticon.com/128/2995/2995390.png" 
                className='h-12 w-12 transition-all'
                alt="" />
            </span>
            <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>View the students list.</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
                
            </div>
        </div>
    </div>
    </Link>
</div>
        </div>

            
            
            </div>
           
          <Footer/>
    </>
  )
}

export default Dashboard