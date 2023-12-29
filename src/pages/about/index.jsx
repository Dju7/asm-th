import React from 'react'
import bio from '../../assets/bottom.jpg'
import portrait from '../../assets/portrait2.jpg'
import oiseau from '../../assets/envoloiso.png'
import { motion } from 'framer-motion'
import Header from '../../components/header/header'



export default function About() {
 
  return (
    <>
    <Header />
    <motion.main
    className='w-full min-h-screen flex flex-col gap-2 justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
     <section className='h-[95%] w-[97%]  mt-8 flex flex-col gap-4 justify-center items-center '>
        <div className='min-h-[430px] w-full mt-6 lg:mt-0 flex flex-col lg:flex-row'>
          <div className='h-full w-full lg:h-[300px] lg:w-[30%] flex flex-col justify-end mt-8 mx-2 lg:mx-16 relative'>
            <img src={oiseau} className='absolute z-0 h-[90%] w-[90%] object-cover' alt="oiseau" />
            <p className=' z-10 w-full text-[3rem] md:text[4rem] lg:text-[6rem] 3xl:text-[8rem] bg-clip-text text-transparent bg-gradient-to-t from-sky-500 to-amber-600 font-bold mr-72 p-0 leading-none'>QUI</p>
            <p className=' z-10 text-[3rem] md:text[4rem] lg:text-[6rem] bg-clip-text text-transparent bg-gradient-to-t from-sky-500 to-amber-600 font-bold p-0  leading-none'>SUIS-JE ?</p>
          </div>
          <div className='h-[400px] w-full lg:w-[60%] mt-3 lg:mt-8 p-2 overflow-auto '>
          <p className='text-justify text-[1rem] 3xl:text-2xl text-sky-900 h-[350px] mt-8 '>Je m’appelle Asma, issue d’une famille Tunisienne au sein de laquelle était naturellement pratiquée une médecine traditionnelle et holistique. 
          J’ai reçu et appris de ma lignée maternelle l’apposition des mains et le bienfait de leur magnétisme, l’utilisation des plantes et comment les lier à une intention de guérison. 
          Egalement l’art du rêve et leur interprétations et bien d’autres choses pour lesquelles il faudrait un livre pour en parler vraiment.<br/> J’ai la chance d’avoir un double héritage. 
          De ma famille paternelle j’ai reçu « la parole », descendant d’un Cheikh, 
          c’est le regard incisif, clair et précis de cette lignée du désert. Ici on ne s’encombre pas, la connexion recherchée est à l’esprit pur et sur cet aspect je suis toujours en chemin ...
          pour toujours. Je suis le fruit de ces polarités, le chaud et le froid, le feu et la glace. <br/>
          J’offre aujourd’hui mes services car je sais combien je peux soulager et aider dans bien des domaines que je détaillerai plus loin.<br/><br/>
          Côté CV, j’ai eu plusieurs casquettes pour lesquelles je suis diplômée : j’ai soigné en blouse blanche, j’ai peint des décors, j’ai enseigné aussi, élevé deux enfants et obtenu d’autres certifications. 
          Mais quelque fut mon métier en fond de trame j’étais toujours en train d’exercer ma fonction animique qui est: prendre soin. Ce n’est pas un savoir, c’est une disposition naturelle.
           </p>
          </div>
        </div>
        <div className='w-full min-h-[400px] flex flex-col lg:flex-row justify-between relative'>
          <img src={bio}  alt="image de coucher de soleil" className='absolute z-0 bottom-0 h-[70%] w-full object-cover boject-center rounded-bl-2xl rounded-br-2xl '/>
          <div className="z-10 h-[370px] w-[370px] mb-10 ml-4">
          <img src={portrait}  alt="image de portrait" className='ml-0 lg:ml-16 h-full w-[90%] lg:w-full object-cover'/>
          </div>
          <div className=" z-10 w-[95%] lg:w-[64%] min-h-[200px] text-justify text-white font-bold">
            <h3 className='lg:w-[95%] text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-sky-600 to-amber-900 text-right w-full border-t-2 border-gray-800 '>ME CONTACTER</h3>
           <div className='bg-black/50 lg:w-[95%] text-white text-2xl rounded-2xl lg:mt-20 p-4 flex justify-between mr-4 '>
            <p>
            Asma Brun Ben-Cheikh
            </p>
            <p>
            93500 Pantin
            </p>
           </div>
           <div className='bg-black/50 lg:w-[95%] text-white text-2xl rounded-2xl lg:mt-10 p-4 flex justify-between mr-4 '>
            <p>
            AsmaBrun@gmail.com
            </p>
            <p>
            0645224270
            </p>
           </div>
          </div>
        </div>
      </section>
      
    </motion.main>
    </>
  )
}
