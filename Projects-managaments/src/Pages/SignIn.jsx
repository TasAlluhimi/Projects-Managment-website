import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

// Reminder fo me
// mockapi new account 
// email: projects@gmail.com
// password: 123456a

function SignIn() {

    const navigate = useNavigate()
    const [errorMes, setErrorMes] = React.useState('')
    const [err, setErr] = React.useState(false)

    const [user, setUser] = React.useState({
      email: '',
      password: '',
    });
  
    const addUser = (event)=>{
      setUser({...user,
          [event.target.name]: event.target.value
      })
  }

  
  const Sign_in = ()=>{

    if (!user.email) {
        setErrorMes('Please enter a valid email (Tuwaiq domain only)');
        setErr(true)
        return;
      }
  
      if (!user.password) {
        setErrorMes('Please enter your Password');
        setErr(true)
        return;
      }

    //   axios.get('https://65730c11192318b7db417733.mockapi.io/users')
    // .then((response) => {
    //   console.log(response.data);
    //   setUsers(response.data);
      
    //   const result = users.find(
    //     (item) => item.email === user.email && item.password === user.password
    //   );
    //   console.log(result);

    //   if (result) {
    //     if (user.email === 'admin@admin.com' && user.password === 'admin1admin') {
    //       localStorage.setItem('admin', JSON.stringify(user));
    //       localStorage.setItem('isLoggIn', true);
    //       localStorage.setItem('isAdmin', true);
    //       navigate('/Dashboard');

    //     } else if (user.email === result.email && user.password === result.password) {
    //       localStorage.setItem('user', JSON.stringify(user));
    //       localStorage.setItem('isLoggIn', true);
    //       localStorage.setItem('userId', result.id)
    //       navigate('/');

    //     } 

    //   } else {
    //     setErrorMes('Email or Password is incorrect');
    //     setErr(true);
    //   }
      
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   setErrorMes('Something went wrong.. try again later');
    //   setErr(true)
    // });

    axios
    .get('https://65730c11192318b7db417733.mockapi.io/users')
    .then((response) => {
      console.log(response.data);
      const result = response.data.find(
        (item) => item.email === user.email && item.password === user.password
      );
      console.log(result);

      if (result) {
        if (user.email === 'admin@tuwaiq.com' && user.password === 'admin1admin') {
          localStorage.setItem('admin', JSON.stringify(result));
          localStorage.setItem('isLoggIn', true);
          localStorage.setItem('isAdmin', true);
          navigate('/Dashboard');

        } else if (user.email === result.email && user.password === result.password) {
          localStorage.setItem('user', JSON.stringify(result));
          localStorage.setItem('isLoggIn', true);
        //   localStorage.setItem('userId', result.id);
          navigate('/');
        }
      } else {
        setErrorMes('Email or Password is incorrect');
        setErr(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setErrorMes('Something went wrong.. try again later');
      setErr(true);
    });

  }


  return (
    <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or <Link to="/SignUp"
                className="font-medium text-[rgb(92,131,116)] hover:text-[#1B4242] focus:outline-none focus:underline transition 
                ease-in-out duration-150">
                 Create new account now
            </Link>
        </p>

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

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="email" 
                        name="email" 
                        placeholder="user@Tuwaiq.com" 
                        type="email" 
                        required="" 
                        value={user.email}
                        onChange={addUser}
                        className="appearance-none block w-full px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none 
                        focus:shadow-outline-blue focus:border-blue-300 transition duration-150 
                        ease-in-out sm:text-sm sm:leading-5
                "/>
                        
                    </div>
                </div>

                <div className="mt-6">

                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>

                    <div className="mt-1 rounded-md shadow-sm">
                        
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required="" 
                        value={user.password}
                        onChange={addUser}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                        placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition 
                        duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button
                onClick={Sign_in} 
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
                text-white bg-[#1B4242] hover:bg-[#5C8374] focus:outline-none focus:border-gray-950 focus:shadow-outline-indigo
                active:bg-gray-900 transition duration-150 ease-in-out">
                Sign in
            </button>
                    </span>
                </div>
            

        </div>
    </div>
</div>

    </>
  )
}

export default SignIn