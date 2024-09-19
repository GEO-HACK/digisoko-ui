import React from 'react'
import {Link,   NavLink } from 'react-router-dom'

export default function Navbar(){
    return (

        <header className='flex items-center bg-lime-300 h-15 py-5 px-4'>
            <Link className='text-black text-2xl font-extrabold uppercase italic mr-auto' to='/'>DigiSoko</Link>

            <nav className='flex space-x-4'>
                <NavLink 
                to='/'
                className="text-gray-700 font-semibold px-4 hover:text-black"
                
                >Home</NavLink>
                <NavLink 
                to='/products'
                className="text-gray-700 font-semibold px-4 hover:text-black"
                >products</NavLink>
                
                <NavLink 
                to='/about'
                className="text-gray-700 font-semibold px-4 hover:text-black"
                
                >About</NavLink>
            </nav>
        </header>
    
    )
}