import React from 'react'
import logo from '../../assets/logo.webp'

export default function Footer() {
  return (
    <footer className='min-h-40 w-full bg-black/80 flex justify-center items-center'>
      <div className='w-[70%] h-full flex flex-col md:flex-row  justify-between items-center'>
        
        <div className='m-10 text-amber-100 text-lg md-text-xl'>
        <p className='text-xl md:text-3xl home'>Asma Thérapie</p>
        <p>93500 Pantin</p>
        <p>06.73.90.33.54</p>
        <a href='mailto:asma.bbc.pro@gmail.com'><p className='underline'>asma.bbc.pro@gmail.com</p></a>
        </div>
        <div className=' h-full w-full md:w-[40%] flex flex-col items-center gap-2 mb-6 md:mb-0'>
           <img src={logo} className=' h-24 w-24 opacity-50' alt='etoile orientale'/>
           <p className='text-[10px] text-amber-100 opacity-90 leading-none'>©2022-Asma Therapie</p>
        </div>
    </div>
    </footer>
  )
}
