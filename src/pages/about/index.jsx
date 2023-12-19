import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import aboutPic from '../../assets/portrait2.jpg'
import aboutPic2 from '../../assets/caval.jpg'
import CarouselAbout from '../../components/carousel/carousel'

export default function About() {
  const [currentImage, setCurrentImage] = useState(aboutPic);

  const handleClick = () => {
    console.log("click")
    setCurrentImage(currentImage === aboutPic ? aboutPic2 : aboutPic);
  }
  return (
    <motion.main
    className='w-full h-screen flex justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
     <section className='h-[92%] w-[97%]  mt-8 flex justify-center items-center'>
      <div className='h-full w-full flex flex-col md:flex-row rounded-2xl'>
      <article className=' w-full md:w-[40%] h-full'>
      <motion.img src={currentImage} 
       key={currentImage}
      alt="image de portrait" 
      className='h-full w-full object-cover'
      initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
      />
      </article>
      <article className='w-full md:w-[60%] h-full bg-gray-200 flex flex-col justify-center items-center '>
      <CarouselAbout onClick={handleClick} />
      </article>

      </div>

      </section>
    </motion.main>
  )
}
