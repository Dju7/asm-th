import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='w-50% h-full flex justify-center items-center gap-8 md:gap-16 font-bold text-sky-600'>
        <Link to='/about'>A PROPOS</Link>
        <Link to='/session'>SEANCES</Link>
        <Link to="/tarif">TARIF</Link>  
    </nav>
  )
}
