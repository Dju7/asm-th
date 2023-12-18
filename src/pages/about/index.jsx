import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.main
    className='w-full h-screen flex justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <h1>About</h1>
    </motion.main>
  )
}
