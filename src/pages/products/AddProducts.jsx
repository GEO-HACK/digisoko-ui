import React from 'react'
import { Link } from 'react-router-dom'

export default function AddProducts(){
    return (
        <>
        <Link to='..'>&larr;<span>Back to all products</span></Link>
        <div className='cont'>this is a new product addition page</div>
        </>
    )
}