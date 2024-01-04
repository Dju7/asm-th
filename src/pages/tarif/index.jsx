import React from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/header/header'
import TarifMenu from '../../components/tarifMenu/tarif'
import doula from '../../assets/doula.jpg'
import thana from '../../assets/thana.jpg'
import health from '../../assets/health.jpg'
import Card from '../../components/card/card'
import oiseau from '../../assets/envoloiso.png'

export default function Tarif() {
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
      <section className='min-h-[800px] 3xl:min-h-[1200px] w-full lg:h-[90%] md:w-[92%]  mt-8 flex flex-col lg:flex-row gap-8 justify-center items-center'>
        <article className='h-[50%] md:h-full w-[95%] lg:w-[30%] flex flex-col'>          
          <div className='min-h-[250px] lg:min-h-[350px] 3xl:min-h-[450px] w-full  flex justify-center items-center relative'>
           <h2 className=' z-10 w-[70%] text-[2.7rem] md:text-[4rem] text-center bg-clip-text text-transparent bg-gradient-to-t from-sky-500 to-amber-600'>SEANCE A L'UNITE</h2>
          </div>
          <div className='h-[50%] w-full flex justify-center'>
          <TarifMenu />
          </div>
        </article>
        <article className='h-[50%] h-full w-[95%] lg:w-[70%] flex flex-col '>
          <div className='min-h-[250px] lg:min-h-[350px] 3xl:min-h-[450px] w-full flex flex-col items-start justify-center md:items-center relative'>
          <img src={oiseau} className='absolute z-0 h-[80%] w-[90%]  opacity-60'></img>
           <h2 className=' z-10 w-full text-[2rem] sm:text-[3rem] lg:text-[4rem] text-center bg-clip-text text-transparent bg-gradient-to-t from-sky-500 to-amber-600'>ACCOMPAGNEMENT</h2>
           <h3 className='z-10 text-xl'>Pour toute situation nécéssitant une relation de suivie</h3>
          </div>
          <div className='h-[50%] w-full flex flex-col lg:flex-row gap-4 3xl:gap-8 items-center justify-center'>
            <Card img={doula}>
              <div className='flex justify-between mt-8 text-xl 3xl:text-2xl mb-6'>
                <p className='p-1'>Doula - 1h</p>
                <p className='bg-amber-200 p-1 mr-2 border border-sky-800'>50€</p>
              </div>
              <ul className='list-disc p-5'>
                <li className='mb-2'>Mieux vivre la grossesse</li>
                <li className='mb-2'>Accueillir bébé / vivre ensemble</li>
                <li className='mb-2'>Soutien allaitement / infos et conseil</li>
                <li>Soutien physique et émotionnelle (baby blues, ec...)</li>
              </ul>
            </Card>
            <Card img={thana}>
          <div className='flex justify-between mt-8 text-xl 3xl:text-2xl mb-6'>
              <p className='p-1'>ThanaDoula - 1h</p>
              <p className='bg-amber-200 p-1 mr-2 border border-sky-800'>30€</p>
            </div>
            <ul className='list-disc p-5'>
              <li className='mb-2'>Accompagner vos derniers instants de vie</li>
              <li className='mb-2'>Faire son deuil</li>
              <li className='mb-2'>Faire passer l'âme</li>
              <li>Soutien émotionnelle et conseils pratiques</li>
            </ul>
          </Card>
          <Card img={health}>
          <div className='flex justify-between mt-8 text-xl 3xl:text-2xl mb-6 '>
              <p className='p-1'>Kilos en trop ?</p>
              <p className='bg-amber-200 p-1 mr-2 border border-sky-800'>A voir</p>
            </div>
            <ul className='list-disc p-5'>
              <li className='mb-2'>séance énergétique favorisant la perte de poids</li>
              <li className='mb-2'>prise de conscience alimentaire</li>
              <li className='mb-2'>hygiène de vie</li>
              <li>Débloquage psycho-emotionnel</li>
            </ul>
          </Card>
          </div>
        </article>
      </section>
    </motion.main>
    </>
  )
}
