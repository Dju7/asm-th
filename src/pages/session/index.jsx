import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import aboutPic from '../../assets/about.jpg'
import aboutPic2 from '../../assets/caval.jpg'
import Header from '../../components/header/header'
import CarouselAbout from '../../components/carousel/carousel'

export default function Session() {
  const [currentImage, setCurrentImage] = useState(aboutPic2);

  const handleClick = () => {
    setCurrentImage(currentImage === aboutPic2 ? aboutPic : aboutPic2);
  }
  return (
    <>
    <Header />
    <motion.main
    className='w-full min-h-screen flex justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
    <section className='h-[92%] w-[97%]  mt-8 flex justify-center items-center'>
      <div className='h-full w-full flex flex-col md:flex-row rounded-2xl'>
        <article className='w-full md:w-[60%] h-full flex flex-col justify-center items-center '>
          <div className='h-[90%] w-[90%]'>
          <CarouselAbout onClick={handleClick} />
          </div>
        </article>
        <article className=' w-[90%] md:w-[40%] h-full rounded-tr-2xl rounded-br-2xl overflow-hidden'>
        <motion.img src={currentImage} 
        key={currentImage}
        alt="images de femmes" 
        className=' h-full w-full object-cover mask-image' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        />
        </article>
      </div>
    </section>
    </motion.main>
    </>
  )
}
