import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHands } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { PiIntersectThreeBold } from "react-icons/pi";
import visage from '../../assets/visage.png'
import Footer from '../../components/footer/footer';



export default function Home() {
  return (
    <motion.main 
    className='w-full min-h-screen flex flex-col items-center'
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
        <h1 className='text-[2.8rem] md:text-[4rem] lg:text-[7.4rem] 2xl:text-[10.4rem] 3xl:text-[13.2rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 inline p-0 m-0 leading-none tracking-wide'>THERAPIE HOLISTIQUE</h1>
        <div className='flex justify-between w-[95%]  h-10 text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl mt-2 font-bold text-sky-500'>
          <Link to='/about' className='hover:text-amber-400'>A Propos</Link>
          <Link to='/session' className='hover:text-amber-400'>Séances</Link>
          <Link to="/tarif" className='hover:text-amber-400'>Tarif</Link>  
        </div> 
      </section>
      <p className='text-4xl text-sky-500 p-4 text-center mt-10 italic'>Retrouvons ensemble le chemin de votre sérénité, de votre joie et de votre force</p>
      <section className='mt-20 min-h-[350px] w-[90%] flex flex-col md:flex-row justify-center text-sky-500 gap-6 md:gap-8 mb-10 '>
        <div className='min-h-full w-[95%] md:[35%] lg:w-[25%]  bg-gradient-to-b from-white to-sky-100 hover:bg-gradient-to-t from-white to-sky-100 flex flex-col justify-center items-center text-center rounded-2xl'>
         <FaHands className='text-8xl' />
         <p className='text-3xl mb-4'>Soin</p>
         <p>Psycho-emotionnel, physique et énérgétique</p>
         <p>Retrouver l'harmonie avec soi<br/>et avec les autres</p>

        </div>
        <div className='min-h-full w-[95%] md:[35%] lg:w-[25%] bg-gradient-to-b from-white to-amber-200 hover:bg-gradient-to-t from-white to-amber-200 flex flex-col justify-center items-center rounded-2xl text-center'>
         <GiThreeLeaves className='text-8xl' />
         <p className='text-3xl mb-4'>Coaching</p>
         <p>Situation qui semble bloquée</p>
         <p>Manque de confiance en soi</p>
         <p>Stress examen, audition, autres...</p>

        </div>
        <div className='min-h-full w-[95%] md:[35%] lg:w-[25%] bg-gradient-to-b from-white to-pink-100 hover:bg-gradient-to-t from-white to-pink-100 flex flex-col justify-center rounded-2xl items-center text-center'>
         <PiIntersectThreeBold className='text-8xl'/>
         <p className='text-3xl mb-4'>Suivi</p>
         <p>accompagnement femme enceinte</p>
         <p>Accompagnement mourant, décès</p>
         <p>Aide perte de poids...</p>
        </div>
      </section>
      <section className='w-full h-[250px] bg-sunset bg-cover bg-center mb-20 flex justify-center items-center'>
       <div className='w-[70%] h-[50%] text-center text-2xl md:text-4xl text-white mt-16'>
        <p> Pour reprendre les rennes de votre vie<br/>Retrouvons ensemble le chemin de votre sérénité et de votre force</p>
       </div>
      </section>
      <section className='min-h-[650px] w-[70%] mb-20 flex flex-col md:flex-row'>
        <div className='min-h-full w-[50%]'>
        <img src={visage} className='object-cover' />
        </div>
        <div className='min-h-full w-[50%] flex justify-center text-3xl text-center text-amber-900'>
         <p>Souviens-toi d'une sauvage,<br/>
            Bien avant les temps<br/>
            Ses humeurs etaient rages<br/>
            Et ses bonheurs printemps.<br/><br/>
         </p>
        </div>

      </section>
      <Footer/>
    </motion.main>
  )
}
