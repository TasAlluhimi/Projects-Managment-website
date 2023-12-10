import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

    const [inputs, setInputs] = React.useState({
        project_name: '',
        project_description: '',
        project_image: '',
        
      });
      const [student, setStudent] = React.useState('')
      const [reject_reason, setReject_reason] = React.useState('')
      const [status, setStatus] = React.useState('')
    
      const addInputs = (event)=>{
        setInputs({...inputs,
            [event.target.name]: event.target.value
        })
    }
    
    const [isLoggIn, setIsLoggIn] = React.useState(localStorage.getItem('isLoggIn'))
    // const [data, setData] = React.useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get(`https://65730c11192318b7db417733.mockapi.io/users/${id}`)
        .then((res)=>{
            console.log(res.data);
            setStudent(res.data.name);
            setInputs(res.data.project);
        })
    }

    const update_project = ()=>{
        axios.put(`https://65730c11192318b7db417733.mockapi.io/users/${id}`, {
          project: {
            project_name: inputs.project_name,
            project_description: inputs.project_description,
            project_image: inputs.project_image,
          }
      })
      .then((response)=>{
          console.log("project updated by user");
          navigate('/ProjectSection')
  
      })
    }


  return (
    <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
           Edit Project details 
        </h2>

        
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
                <div className='flex items-center justify-center'>
                    <div style={{backgroundImage: `url(${inputs.project_image})`}}
                    className='h-60 w-full border bg-no-repeat bg-center bg-cover mb-5'>

                    </div></div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5  
                    text-gray-700">Project Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="name" 
                        name="project_name" 
                        placeholder="Project Name" 
                        type="text" 
                        required="" 
                        value={inputs.project_name}
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
                        name="project_description" 
                        placeholder="Project description" 
                        type="text" 
                        required="" 
                        value={inputs.project_description}
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
                        name="project_image" 
                        type="text" 
                        placeholder='URL images only'
                        required="" 
                        value={inputs.project_image}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                        placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition 
                        duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button
                onClick={update_project} 
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
                text-white bg-[#1B4242] hover:bg-[#5C8374] focus:outline-none focus:border-gray-950 focus:shadow-outline-indigo
                active:bg-gray-900 transition duration-150 ease-in-out">
                Update Project
            </button>
                    </span>
                </div>
            

        </div>
    </div>
</div>
  
    </>
  )
}

export default Edit