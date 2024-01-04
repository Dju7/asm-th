import React from 'react'
import NavBar from '../navBar'
import { Link } from 'react-router-dom'
import logo from '../../assets/ab.png'

export default function Header() {
  return (
    <header className='fixed top-0 left-[5%] z-50 h-16 w-[90%] flex justify-between items-center text-md md:text-lg lg:text-xl 3xl:text-2xl'>
        
        <Link to='/' className='text-pacifico'>
        <p className='text-sky-600 ml-0 md:ml-4 home font-bold'>AB</p>
        </Link>
        <NavBar />
      
    </header>
  )
}
