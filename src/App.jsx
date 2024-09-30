import React from 'react';
import Home from './pages/Home'
import Products from './pages/products/viewProducts'
import AddProducts from './pages/products/AddProducts';
import ProductLayout from './components/productLayout';
import Cart from './pages/products/cart'
import About from './pages/About';
import LoginRegister from './components/Authentication/LoginRegistration'
import Layout from './components/layout';
import {Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { CartProvider  } from './context/cartContext';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/'  element={<Layout />}>
      
          <Route index  element={<Home />}/>
          <Route path='/login' element={<LoginRegister/>}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/products' element={<ProductLayout/>}>
              <Route index  element={<Products />}/>
              <Route path='AddProduct' element={<AddProducts/>}/>
              <Route path='cart' element={<Cart/>}/>


          </Route>
           

    </Route>



  )
)


export default function App(){
  return(
    <CartProvider>
      <RouterProvider router={router}/>

    </CartProvider>
  )
}