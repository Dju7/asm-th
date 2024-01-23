import React from 'react'
import bio from '../../assets/bottom.webp'
import portrait from '../../assets/portrait2.webp'
import { motion } from 'framer-motion'
import Header from '../../components/header/header'
import { FaInstagramSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";





export default function About() {
 
  return (
    <>
    <Header />
    <motion.main
    className='w-full min-h-screen flex flex-col gap-2 justify-center items-center overflow-hidden'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
     <section className='h-[95%] w-[95%] flex flex-col justify-center items-center '>
        <div className='min-h-[430px] 3xl:min-h-[640px] w-full mt-6 lg:mt-0 flex flex-col lg:flex-row'>
          <div className='h-full w-full lg:h-[340px] lg:w-[30%] flex flex-col justify-center items-start mt-14 3xl:mt-32 mx-2 lg:mx-16'>
            <p className=' text-[3rem] md:text[4rem] lg:text-[5.5rem] 3xl:text-[8.5rem] bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 font-bold leading-none'>QUI</p>
            <p className='text-[3rem] md:text[4rem] lg:text-[5.5rem] 3xl:text-[8.5rem] bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 font-bold leading-none'>SUIS-JE ?</p>
          </div>
          <div className='h-[400px] 3xl:h-[590px] w-full lg:w-[60%] 3xl:w-[62%]  mt-1 3xl:mt-10 lg:mt-8 p-2 overflow-auto'>
          <p className='text-justify text-[1rem] 3xl:text-2xl text-sky-800 h-[320px] 3xl:h-[500px] mt-12'>Je m’appelle Asma, issue d’une famille Tunisienne au sein de laquelle était naturellement pratiquée une médecine traditionnelle et holistique. 
          J’ai reçu et appris de ma lignée maternelle l’apposition des mains et le bienfait de leur magnétisme, l’utilisation des plantes et comment les lier à une intention de guérison. 
          Egalement l’art du rêve et leur interprétations et bien d’autres choses pour lesquelles il faudrait un livre pour en parler vraiment.<br/> J’ai la chance d’avoir un double héritage. 
          De ma famille paternelle j’ai reçu « la parole », descendant d’un Cheikh, 
          c’est le regard incisif, clair et précis de cette lignée du désert. Ici on ne s’encombre pas, la connexion recherchée est à l’esprit pur et sur cet aspect je suis toujours en chemin ...
          pour toujours. Je suis le fruit de ces polarités, le chaud et le froid, le feu et la glace. <br/>
          J’offre aujourd’hui mes services car je sais combien je peux soulager et aider dans bien des domaines que je détaillerai plus loin.<br/><br/>
          Côté CV, j’ai eu plusieurs casquettes pour lesquelles je suis diplômée : j’ai soigné en blouse blanche, j’ai peint des décors, j’ai enseigné aussi, élevé deux enfants et obtenu d’autres certifications. 
          Mais quel que fut mon métier en fond de trame j’étais toujours en train d’exercer ma fonction animique qui est: prendre soin. Ce n’est pas un savoir, c’est une disposition naturelle.
           </p>
          </div>
        </div>
        <div className='w-full min-h-[430px] 3xl:min-h-[650px] flex flex-col lg:flex-row justify-between relative'>
          <img src={bio}  alt="image de coucher de soleil" className='absolute z-0 bottom-0 left-0 h-[80%] w-full object-cover object-center rounded-bl-2xl rounded-br-2xl '/>
          <div className="z-10 h-[400px] 3xl:h-[560px] w-[320px] md:w-[380px] 3xl:w-[540px] mb-4 ml-6 md:ml-14">
          <img src={portrait}  alt="image de portrait" className=' h-full w-full w-full object-contain'/>
          </div>
          <div className=" z-10 w-[95%] lg:w-[64%] min-h-[200px] text-justify text-white font-bold">
            <div className='ml-8 w-[92%] flex flex-col lg:flex-row justify-end md:justify-between items-center h-24 mt-0 border-t border-sky-900 3xl:pt-8'>
            <div className='text-3xl md:text-4xl 3xl:text-7xl text-black/80 w-full lg:w-[30%]  flex justify-end lg:justify-start items-center gap-10 3xl:gap-20'>
              <a href='https://www.facebook.com/profile.php?id=100078419194025' target="_blank"><FaFacebook className='hover:text-amber-500'/></a>
              <a href='https://www.instagram.com/asmatherapie/' target="_blank"><FaInstagramSquare className='hover:text-amber-500' /></a>
              <a href='https://www.youtube.com/@lasmala2145' target="_blank"><FaYoutube className='hover:text-amber-500' /></a>
             
            </div>
            <h3 className='w-full lg:w-[60%] text-[2rem] md:text-[2.5rem] lg:text-[3rem] 3xl:text-[6rem] text-right bg-clip-text text-transparent bg-gradient-to-b from-black/90 to-amber-600 '>ME CONTACTER</h3>
            </div>
           <div className=' rounded-xl flex flex-col items-end w-[95%] mt-4 lg:mt-8 3xl:mt-24 text-2xl 3xl:text-5xl ml-4 lg:ml-0'>
           <motion.a 
             href='mailto:asma.bbc.pro@gmail.com' 
             className='bg-black/60 hover:bg-amber-500 w-[97%] lg:w-[47%] lg:p-3 rounded-xl mb-4 mr-2'
             initial={{opacity:0, y: 200}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.5}}
           >
            <p className='flex justify-between w-full'>
            <IoMail />
            asma.bbc.pro@gmail.com
           </p> 
          </motion.a>
          <motion.p 
          className='bg-black/60 hover:bg-amber-500 flex justify-between w-[97%] lg:w-[47%] lg:p-3 rounded-xl mb-4 mr-2'
          initial={{opacity:0, y: 200}}
             animate={{opacity:1, y: 0}}
             transition={{delay:0.5, duration: 0.5}}
          >
            <BsFillTelephoneFill />
            06 45 22 42 70
            </motion.p> 
           </div>
          </div>
        </div>
      </section>
      
    </motion.main>
    </>
  )
}
