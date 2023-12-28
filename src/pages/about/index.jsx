import React from 'react'
import bio from '../../assets/apropos.jpg'
import portrait from '../../assets/portrait2.jpg'
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
     <section className='h-[90%] w-[97%]  mt-8 flex flex-col gap-4 justify-center items-center'>
        <div className='h-auto w-full mt-6 lg:mt-0 flex flex-col lg:flex-row '>
          <div className='h-full w-full lg:h-[300px] lg:w-[30%] flex flex-col justify-center mt-4 mx-2 lg:mx-16  '>
            <p className='w-full text-[3rem] md:text[4rem] lg:text-[6rem] bg-clip-text text-transparent bg-gradient-to-t from-sky-400 to-amber-600 font-bold mr-72 p-0 leading-none'>QUI</p>
            <p className='text-[3rem] md:text[4rem] lg:text-[6rem] bg-clip-text text-transparent bg-gradient-to-t from-sky-400 to-amber-600 font-bold p-0  leading-none'>SUIS-JE ?</p>
          </div>
          <div className='h-[320px] w-full lg:w-[65%] mt-4 lg:mt-8 p-2 overflow-auto'>
          <p className='text-justify font-bold text-white mt-4 bg-sky-300/60 p-4 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam maxime repellendus inventore, dicta dolorum magni eaque in, tempore saepe dolor, 
            quis repudiandae? Nostrum officiis cupiditate quaerat cum veniam amet? Possimus rem in suscipit, nulla earum eligendi, ipsam, dolorum ratione repudiandae quam inventore assumenda! <br/>
            Eligendi vel recusandae magni officia error cumque sed odio, maiores numquam deleniti tempore laudantium optio quaerat! Ea iste ipsum veritatis obcaecati? Voluptates impedit 
            ad numquam labore illum odit voluptatum molestias voluptas debitis, vel sit sint, voluptate a eius. Dolorum quaerat consequuntur dolor omnis. 
            Commodi fuga dolor, porro minima voluptatum saepe veritatis ducimus perferendis, nobis dolores eveniet!<br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur saepe quis consequatur omnis minima tempora, optio dolorem dolor beatae!
          </p>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col lg:flex-row  justify-between relative '>
          <img src={bio}  alt="image de coucher de soleil" className='absolute z-0 bottom-0 h-[75%] w-full object-cover rounded-bl-2xl rounded-br-2xl '/>
          <div className="z-10 h-[450px] w-[350px] md:w-[450px] mb-10">
          <img src={portrait}  alt="image de portrait" className='ml-0 lg:ml-16 h-full w-[90%] lg:w-full object-cover'/>
          </div>
          <div className=" z-10 w-[95%] lg:w-[64%] min-h-[200px] text-justify text-white font-bold ">
            <h3 className='mt-6 text-[3rem] bg-clip-text text-transparent bg-gradient-to-t from-sky-400 to-amber-600 text-right w-full'>Pourquoi holistique ?</h3>
           <p className='text-white bg-black/50 lg:mt-12 rounded-xl p-2 mr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis fugiat quibusdam quod culpa praesentium nesciunt sit aliquid cum beatae unde quos laborum, 
            id amet iure sed sequi labore porro? Quibusdam error, voluptas, suscipit recusandae quis sunt accusamus nostrum dignissimos asperiores iste eligendi, voluptatum fugit facere consequatur? 
            Saepe consectetur minima, amet asperiores ipsum facilis suscipit eos, quas, sunt illo perspiciatis quam dolorum expedita numquam ut? Nesciunt, fugit. Corrupti eos doloribus consequuntur 
            totam nulla, ex corporis dolores facilis, animi delectus, 
            earum ullam. Id impedit laudantium fugiat. Debitis impedit suscipit minima nihil delectus! Iste porro aliquid magni rerum, vel perferendis vitae. Quis.</p>
          </div>
        </div>
      </section>
      
    </motion.main>
    </>
  )
}
