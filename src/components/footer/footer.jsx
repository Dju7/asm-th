import React from 'react'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className='h-40 w-full bg-black/80 flex justify-between items-center relative'>
      <img src={logo} className=' h-[70%] opacity-70 ml-10'/>
     <div className='m-10 text-amber-100'>
        <p className='text-2xl'>Asma Thérapie</p>
        <p>93500 Pantin</p>
        <p>06.73.90.33.54</p>
        <p>asma.bbc.pro@gmail.com</p>
    </div>
    </footer>
  )
}
