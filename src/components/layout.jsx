import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import { Outlet }  from 'react-router-dom'

export default function Layout({children}){
    return(
        <div className='layout'>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </div>
    )
}