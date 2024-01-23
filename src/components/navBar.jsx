import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='w-50% h-full flex justify-center items-center gap-8 md:gap-16 font-bold text-sky-500'>
        <Link to='/about' className='hover:text-amber-400'>A PROPOS</Link>
        <Link to='/session' className='hover:text-amber-400'>SEANCES</Link>
        <Link to="/tarif" className='hover:text-amber-400'>TARIFS</Link>  
    </nav>
  )
}
