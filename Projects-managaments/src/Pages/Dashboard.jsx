import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = (e) => {
      if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  const sign_out = ()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
        <div className="bg-gray-100">
        <div className="h-screen flex overflow-hidden bg-gray-200">
          {/* Sidebar */}
          <div
            className={`absolute bg-[#092635] text-white w-56 min-h-screen overflow-y-auto 
            transition-transform ${isSidebarOpen ? 'transform translate-x-0' 
            : 'transform -translate-x-full'
            } ease-in-out duration-300`}
            id="sidebar"
          >
            {/* Your Sidebar Content */}
            <div className="p-4">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <ul className="mt-4">
                <li className="mb-2">
                  <Link to="/Dashboard" 
                  className="block hover:text-[#5C8374]">
                    Home
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <a href="#" className="block hover:text-[#5C8374]">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-[#5C8374]">
                    Services
                  </a>
                </li> */}

                <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7"/>
                <li className="mb-2">
                  <button 
                      onClick={sign_out}
                      className="block hover:text-[#5C8374]">
                        Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content  */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar  */}
            <div className="bg-white shadow">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-2">
                  <h1 className="text-xl font-semibold">Welcome Back <span className='text-[#5C8374]'>Admin</span>!</h1>

                  <button className="text-gray-500 hover:text-gray-600" id="open-sidebar" onClick={toggleSidebar}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Body  */}
            <div className="flex-1 overflow-auto p-4">
              <h1 className="text-2xl font-semibold">Welcome to our website</h1>
              <p>... Content goes here ...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard