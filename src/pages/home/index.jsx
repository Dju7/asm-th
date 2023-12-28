import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Home() {
  return (
    <motion.main 
    className='w-full h-screen flex flex-col justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    >
      <section className=' h-[60%] w-[97%] mb-0 rounded-xl mt-4 bg-home bg-cover bg-center flex justify-end '>
        <div className='h-full w-24 p-2 flex flex-col items-center text-white font-bold text-[5rem] '>
          <p>A</p>
          <p>S</p>
          <p>M</p>
          <p>A</p>
          
        </div>
        
      </section>
      <section className=' h-[40%] w-[97%] flex flex-col items-center'>
        <h1 className='text-[3rem] md:text-[4rem] lg:text-[9.3rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-600 inline p-0 m-0 leading-none tracking-wide'>THERAPIE HOLISTIQUE</h1>
        <div className='flex justify-between w-[96%] h-10 text-2xl lg:text-5xl mt-2 font-bold text-sky-600'>
          <Link to='/about'>A Propos</Link>
          <Link to='/session'>Séances</Link>
          <Link to="/contact">Contact</Link>  
        </div>
        <div className='w-[97%] h-32 flex justify-center mt-10'>
          <img src={logo} alt="elige oriental" className='object-cover h-20 w-20 ' />

        </div>
        

      </section>
    </motion.main>
  )
}
