import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main 
    className='w-full h-screen flex justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <section className=' relative z-0 h-[92%] w-[97%] rounded-xl mt-8 bg-home bg-cover'>
        <article className='absolute z-10 bottom-0 right-0 h-[70%] w-[50%] bg-white flex justify-end'>
         <div className='h-full w-[80%]'>
          
         </div>
        </article>
      </section>
    </motion.main>
  )
}
