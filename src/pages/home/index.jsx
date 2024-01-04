import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaInstagramSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



export default function Home() {
  return (
    <motion.main 
    className='w-full h-screen flex flex-col justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    >
      <section className=' h-[60%] lg:h-[75%] w-[97%] mb-0 rounded-xl mt-4 bg-home bg-cover bg-center flex justify-end '>
        <div className='h-full w-24 3xl:w-32 p-2 flex flex-col items-center text-white font-bold text-[4.4rem] lg:text-[5.5rem] 3xl:text-[7.3rem] '>
          <p>A</p>
          <p>S</p>
          <p>M</p>
          <p>A</p>
          
        </div>
        
      </section>
      <section className=' h-[40%] w-[97%] flex flex-col items-center'>
        <h1 className='text-[2.8rem] md:text-[4rem] lg:text-[7.4rem] 2xl:text-[10rem] 3xl:text-[13.2rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-600 inline p-0 m-0 leading-none tracking-wide'>THERAPIE HOLISTIQUE</h1>
        <div className='flex justify-between w-[95%] h-10 text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl mt-2 font-bold text-sky-600'>
          <Link to='/about'>A Propos</Link>
          <Link to='/session'>Séances</Link>
          <Link to="/tarif">Tarif</Link>  
        </div> 
      </section>
    </motion.main>
  )
}
