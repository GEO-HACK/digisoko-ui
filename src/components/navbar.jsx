import React from 'react'
import {Link,   NavLink } from 'react-router-dom'

export default function Navbar(){
    return (

        <header className='navbar'>
            <Link className='logo' to='/'>DigiSoko</Link>

            <nav>
                <NavLink 
                to='/'
                
                >Home</NavLink>
                <NavLink 
                to='/products'
                >products</NavLink>
                
                <NavLink 
                to='/about'
                
                >About</NavLink>
            </nav>
        </header>
    
    )
}