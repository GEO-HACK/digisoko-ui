import React from 'react'
import '../Footer.css'
import image from '../assets/images/logo-color.png'
import { Link }  from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
            <div className='logo-sect'>
                <img  className="logo" src={image}alt="" />
               
            </div>
           <div className='links'>
            <h3>Quick Links</h3>
            <Link 
                to='/'
                
                >Home</Link>
                <Link 
                to='/about'
                
                >About</Link>
                <Link 
                to='/products'
                >products</Link>
            

            </div>
          <div>
            <h3>Products</h3>
            
          </div>
        </footer>
    )
}