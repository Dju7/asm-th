import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import aboutPic2 from '../../assets/about.jpg'
import aboutPic3 from '../../assets/caval.jpg'
import aboutPic from '../../assets/visage.jpg'
import Header from '../../components/header/header'
import CarouselAbout from '../../components/carousel/carousel'

export default function Session() {
  const [currentImage, setCurrentImage] = useState(aboutPic);

  const handleClick = () => {
    if (currentImage === aboutPic) {
      setCurrentImage(aboutPic2);
    } else if (currentImage === aboutPic2) {
      setCurrentImage(aboutPic3);
    } else {
      setCurrentImage(aboutPic);
    }
  };
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
    <section className='h-[92%] w-[92%] mt-8 flex justify-center items-center'>
      <div className='h-full w-full flex flex-col-reverse lg:flex-row rounded-2xl'>
        <article className='w-full lg:w-[60%] h-full flex flex-col justify-center items-center'>
          <div className='h-[90%] w-[94%]'>
          <CarouselAbout onClick={handleClick} />
          </div>
        </article>
        <article className='h-[350px] lg:h-[750px] 3xl:h-[900px] w-[90%] lg:w-[40%] rounded-tr-2xl rounded-br-2xl overflow-hidden mt-8 lg:mt-10 lg:mt-0 ml-4 lg:ml-0'>
          <motion.img src={currentImage} 
          key={currentImage}
          alt="images de femmes" 
          className='h-full w-full object-cover mask-image' 
          initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0,}}
                    transition={{ duration: 0.8, type:"spring"}}
          />
        </article>
      </div>
    </section>
    </motion.main>
    </>
  )
}
