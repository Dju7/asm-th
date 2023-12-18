import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='w-50% h-full flex justify-center items-center gap-10'>
        <Link to='/about'>A Propos</Link>
        <Link to='/session'>Séances</Link>
        <Link to="/contact">Contact</Link>  
    </nav>
  )
}
