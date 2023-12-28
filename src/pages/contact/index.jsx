import React from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/header/header'

export default function Contact() {
  return (
    <>
    <Header />
    <motion.main
    className='w-full h-screen flex justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <h1>contact</h1>
    </motion.main>
    </>
  )
}
