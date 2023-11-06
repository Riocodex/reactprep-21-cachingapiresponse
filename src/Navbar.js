import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
       <Link to='/'>Normal Call</Link> 
       <Link to='/cachedcall'>Cached Call</Link> 

    </nav>
  )
}
