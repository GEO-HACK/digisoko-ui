import React from 'react'

import { CartProvider } from '../context/cartContext'


import { Outlet } from 'react-router-dom'

export default function ProductLayout (){
    return( 
    <main>
         <Outlet/>
    </main>

       
    )
}