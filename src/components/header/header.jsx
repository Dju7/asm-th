import React from 'react'
import NavBar from '../navBar'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className='fixed top-0 left-[2%] z-50 h-12 w-[96%] flex justify-between items-center text-lg lg:text-xl'>
        
        <Link to='/' className='text-pacifico'>
        <img src={logo} className='w-10 h-10' />
        </Link>
        <NavBar />
      
    </header>
  )
}
