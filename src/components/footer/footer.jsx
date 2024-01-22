import React from 'react'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className='min-h-40 w-full bg-black/80 flex justify-center items-center'>
      <div className='w-[70%] h-full flex flex-col md:flex-row  justify-between items-center'>
        
        <div className='m-10 text-amber-100 text-lg md-text-xl'>
        <p className='text-lg md:text-2xl'>Asma Brun Ben-Cheikh</p>
        <p>93500 Pantin</p>
        <p>06.73.90.33.54</p>
        <p>asma.bbc.pro@gmail.com</p>
        </div>
        <div className=' h-full w-full md:w-[40%] flex flex-col items-center gap-2 mb-6 md:mb-0'>
           <img src={logo} className=' h-28 opacity-70'/>
           <p className='text-[10px] text-amber-100 opacity-90 leading-none'>©2022-Asma Therapie</p>
        </div>
    </div>
    </footer>
  )
}
