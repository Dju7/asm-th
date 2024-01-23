import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHands } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { PiIntersectThreeBold } from "react-icons/pi";
import visage from '../../assets/visage.png'
import Footer from '../../components/footer/footer';
import { useParallax } from 'react-scroll-parallax';
import sunset from '../../assets/sunset.webp'




export default function Home() {
  const {ref} = useParallax({
    speed: -10,
  });

  return (
    <motion.main 
    className='w-full min-h-screen flex flex-col items-center overflow-hidden'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    >
      <section className=' h-[60%] lg:h-[75%] w-[97%] mb-0 rounded-xl mt-4 bg-home bg-cover bg-center flex justify-end '>
        <div className='h-full w-24 3xl:w-32 p-2 flex flex-col items-center text-white font-bold text-[4.4rem] lg:text-[5.5rem] 3xl:text-[7.3rem] '>
          <motion.p
          initial={{opacity: 0, x:-350}}
          animate={{opacity:1, x:0}}
          transition={{delay: 0.2, duration: 0.5}}
          >
          A
          </motion.p>
          <motion.p
          initial={{opacity: 0, x:-350}}
          animate={{opacity:1, x:0}}
          transition={{delay: 0.4, duration: 0.5}}
          >
          S
          </motion.p>
          <motion.p
          initial={{opacity: 0, x:-350}}
          animate={{opacity:1, x:0}}
          transition={{delay: 0.6, duration: 0.5}}
          >
          M
          </motion.p>
          <motion.p
          initial={{opacity: 0, x:-350}}
          animate={{opacity:1, x:0}}
          transition={{delay: 0.8, duration: 0.5}}
          >
          A
          </motion.p>
          
        </div>
        
      </section>
      <section className=' h-[40%] w-[97%] flex flex-col items-center'>
        <h1 className='w-full text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7.2rem] 2xl:text-[10.1rem] 3xl:text-[13.2rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 inline p-0 m-0 leading-none tracking-wide'>THERAPIE HOLISTIQUE</h1>
        <motion.div 
        className='flex justify-between w-[95%]  h-10 text-xl md:text-4xl  3xl:text-6xl mt-2 font-bold text-sky-500'
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{delay: 1, duration:0.7}}
        >
          <Link to='/about' className='hover:text-amber-400'>A PROPOS</Link>
          <Link to='/session' className='hover:text-amber-400'>SEANCES</Link>
          <Link to="/tarif" className='hover:text-amber-400'>TARIFS</Link>  
        </motion.div> 
      </section>
      <p className='text-xl md:text-4xl text-sky-500 p-4 text-center mt-6  home'>Retrouvons ensemble le chemin de votre sérénité, de votre joie et de votre force</p>
      <section className='mt-6 min-h-[350px] w-[90%] flex flex-col md:flex-row justify-center items-center text-sky-500 gap-6 md:gap-10 mb-14'>
        <div className='min-h-[350px] w-[95%] md:w-[35%] lg:w-[25%]  bg-gradient-to-t from-white to-sky-100 hover:bg-gradient-to-b from-white to-sky-100 flex flex-col justify-center items-center text-center rounded-2xl'>
         <FaHands className='text-8xl' />
         <p className='text-3xl mb-4'>Soin</p>
         <p>Psycho-emotionnel, physique et énérgétique</p>
         <p>Retrouver l'harmonie avec soi<br/>et avec les autres</p>
        </div>
        <div className='min-h-[350px] w-[95%] md:w-[35%] lg:w-[25%] bg-gradient-to-t from-white to-amber-200 hover:bg-gradient-to-b from-white to-amber-200 flex flex-col justify-center items-center rounded-2xl text-center'>
         <GiThreeLeaves className='text-8xl' />
         <p className='text-3xl mb-4'>Coaching</p>
         <p>Situation qui semble bloquée</p>
         <p>Manque de confiance en soi</p>
         <p>Stress examen, audition, autres...</p>

        </div>
        <div className='min-h-[350px] w-[95%] md:w-[35%] lg:w-[25%] bg-gradient-to-t from-white to-pink-100 hover:bg-gradient-to-b from-white to-pink-100 flex flex-col justify-center rounded-2xl items-center text-center'>
         <PiIntersectThreeBold className='text-8xl'/>
         <p className='text-3xl mb-4'>Suivi</p>
         <p>accompagnement femme enceinte</p>
         <p>Accompagnement mourant, décès</p>
         <p>Aide perte de poids...</p>
        </div>
      </section>
      <section className=' relative w-full h-[400px] mb-20 flex justify-center items-center overflow-hidden' >
        <img src={sunset} alt="coucher de soleil sur la plage" className='absolute z-0 h-full w-full object-cover' ref={ref}/>
       <div className=' z-10 w-[95%] md:w-[65%] h-[50%] text-center text-xl md:text-2xl lg:text-4xl text-amber-100'>
        <p className='italic  rounded-xl p-2 txtShadow'> Dénouer les problèmatiques inscrites dans le vécu<br/><br/>Soulager douleurs physiques et psychologiques<br/><br/>Reprennez les rennes de votre vie</p>
       </div>
      
      </section>
      <section className='min-h-[650px] w-[70%] mb-20 flex flex-col lg:flex-row items-center'>
        <div className='min-h-full w-[90%] md:w-[50%]'>
        <motion.img src={visage} className='object-cover mb-6 '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{delay: 0.4, duration:1.5}}
        />
        </div>
        <div className='min-h-full w-full lg:w-[50%] flex justify-center text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 italic home '>
         <p>Souviens-toi d'une sauvage,<br/>
            Bien avant les temps<br/>
            Ses humeurs etaient rages<br/>
            Et ses bonheurs printemps.<br/><br/>
            On apprend avec l'âge<br/>
            A être une fille bien sage<br/>
            De ce savoir naît l'oubli.<br/>
            Là, c'est le vide de ce que d'autres<br/>
            appelle la vie.<br/><br/>
            Voulant t'apprivoiser<br/>
            J'ai terni mes rêves et ma vie,<br/>
            Il ne faut vouloir maîtriser<br/>
            ce qui d'une étincelle jaillit<br/><br/>
            Maintenant plus d'amnésie<br/>
            Te voilà revenue, sortie de ta cage<br/>
            Ne te caches plus ma sauvage<br/>
            J'accèpte d'être qui je suis.<br/>
            Reunient, l'amour et la vie n'ont plus d'âge...
         </p>
        </div>

      </section>
      <Footer/>
    </motion.main>
  )
}
