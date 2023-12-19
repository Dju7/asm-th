import React from 'react'
import NavBar from '../navBar'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header className='fixed top-0 left-[2%] z-50 h-12 w-[96%] flex justify-between items-center text-xl'>
        <Link to='/' className='text-pacifico'>
        ASMA
        </Link>
        <NavBar />
        <p >logo</p>
      
    </header>
  )
}
