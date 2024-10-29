import React,{ useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    const { logout } = useAuth();//access to the logout function

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    };
    const handleLogout = async () => {
        try {
            await logout(); //calling the logout function
            console.log('logged out of the site');

        }catch (error) {
            console.error('Error logging out:', error);

        }finally {
            setDropdownOpen(false); //close dropdown after logout
        }
       
    };
  return (
    <header className='flex items-center justify-between bg-lime-300 h-13 py-5 px-4'>
      <Link className='text-black text-2xl font-extrabold uppercase italic' to='/'>
        DigiSoko
      </Link>

      <nav className='flex-grow flex justify-center'>
        <NavLink 
          to='/'
          className="text-gray-700 font-semibold px-4 hover:text-black hover:underline"
        >
          Home
        </NavLink>
        <NavLink 
          to='/products'
          className="text-gray-700 font-semibold px-4 hover:text-black hover:underline"
        >
          Products
        </NavLink>
        <NavLink 
          to='/about'
          className="text-gray-700 font-semibold px-4 hover:text-black hover:underline"
        >
          About
        </NavLink>
        <NavLink
        to='/products/cart'
        className="px-3"
        
        >
          <BsCart4  className='text-2xl text-gray-700'/>

        </NavLink>
      </nav>
      <div className='relative'>
        <button 
         onClick={handleToggleDropdown}
         className='text-2xl text-gray-700 hover:text-black'>
             <FaUserCircle className='text-3xl text-gray-700 hover:text-black'/>

        </button>
        {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10'>

                <Link
                to="/profile"
                className='block px-4 py-2 text-gray-700 hover:bg-lime-300'
                onClick={() => setDropdownOpen(false)}//close dropdown on click
               >
                profile
               </Link>
               <button
               onClick={handleLogout}
               className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-lime-300'
               
               >
                logout
               </button>
            </div>
        )}
        

      </div>
    </header>
  );
}
