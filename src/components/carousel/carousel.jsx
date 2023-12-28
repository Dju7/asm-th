import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CarouselAbout = ({onClick}) => {
  const [index, setIndex] = useState(0);
  const length = 2; // Nombre de divs dans le carousel
  const controls = useAnimation();

  const handlePrevious = () => {
    const newIndex = (index - 1 + length) % length;
    setIndex(newIndex);
    controls.start({ x: '0', opacity: 1 });
    controls.start({ x: '0', transition: {  duration: 0.8 } });
  };

  const handleNext = () => {
    const newIndex = (index + 1) % length;
    setIndex(newIndex);
    controls.start({ x: '-50%', opacity: 1,  });
    controls.start({ x: '-50%',  transition: {  duration: 0.8} });
  };

  

  return (
    <div className="h-[800px] w-[90%] flex flex-col overflow-hidden">
      <motion.div
        className='h-full w-[200%] flex flex-row'
        initial={{ x: '0', opacity: 1 }}
        animate={controls}
      >
        <article className="w-full h-full flex justify-center items-center p-4">
          <div className='flex flex-col items-end'>
          <h2 className='text-3xl text-sky-600 mb-8'>Soin Holistique</h2>
          <p>Difficile de produire une liste exhaustive de toutes les choses que nous portons parfois comme une habitude, et de celles qui semblent apparaître suite à la rencontre inéluctable 
            du quotidien avec notre histoire personnelle.<br/>
            Stress, angoisse, dépression, fatigue physique et mentale, dérégulation émotionnelle, conflit relationnel, phobie… Et encore ? Mal de dos, douleurs persistantes, insomnie, problèmes digestifs, migraine, eczéma… </p>
          <p>Pour moi, l’objectif est d’abord de vous soulager, vous ramener à un point de sérénité.<br/>
            Le travail soulève des mémoires, contourne des résistances, libère des énergies bloquées, 
            tend à remettre de la clarté sur des conditionnements qui induisent, de par leurs natures, confusion et chaos dans nos existences.
           </p>
           <p>L’effet ? Retrouver sa vitalité, éliminer une compulsion, remettre de l’ordre dans l’esprit et le corps et apaiser la chair, bref ! En un mot : soigner.</p>
          </div>
        </article>
        <article className="w-full flex justify-center items-center">
        <div className='flex flex-col'>
        <h2 className='text-3xl text-sky-600'>Quelle methode j'utilise</h2>
          <p>En plus de mon héritage familiale comprenant le magnétisme transmis de main à main par ma grand-mère, je suis formée au touch for health (kinésiologie) et à la naturopathie.
             Cela fait plus de 30 ans que je me passionne pour les domaines de la médecine au sens large du terme (occidentale et traditionnelle), de la psychologie, de la communication, 
             de l’astrologie et des techniques de thérapies comme l’hypnose ou la PNL.<br/>
             Mon approche se nourrit de tout cela.</p>
             <p>
             Lors des séances, mon action est déterminée au préalable par une écoute intuitive. L’attention que je porte à votre langage corporel, verbal et à mon propre sentir, 
             m’indique comment procéder.<br/>
             Si une thérapie holistique considère l’individu dans sa globalité, l’entrée en matière varie toujours en fonction des besoins du moment et de l’inclination de la personne. 
             De la sphère psycho-affective à celle du corps, les instruments sont différents, pour autant, tout ces champs sont intimement liés et aborder l’un agit sur l’autre.
             </p>
          </div>
        </article>
        
      </motion.div>
      <div  className='flex justify-between h-24' onClick={onClick}>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CarouselAbout;