import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const CarouselAbout = ({onClick}) => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const controls = useAnimation();

  const handlePrevious = () => {
    const newIndex = (index - 1 + length) % length;
    setIndex(newIndex);
 
    controls.start({ x: `-${newIndex * 33}%`, opacity: 1, transition: { duration: 0.8 } });
  };

  const handleNext = () => {
    const newIndex = (index + 1) % length;
    setIndex(newIndex);
   
    controls.start({ x: `-${newIndex * 33}%`, transition: {  duration: 0.8} });
  };

  

  return (
    <div className="min-h-[500px] lg:min-h-[800px] 3xl:h-[950px] w-full md:w-[90%] flex flex-col-reverse lg:flex-col overflow-hidden">
      <motion.div
        className='h-[90%] w-[300%] flex flex-row'
        initial={{ x: `-${index * 100}%`, opacity: 1 }}
        animate={controls}
        >
        <article className="w-full h-full flex justify-center p-2 mb-4">
          <div className='flex flex-col items-start w-[98%]'>
          <h2 className='text-[2rem] md:text-[3rem] lg:text-[3rem] 3xl:text-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 mb-10 mt-2 lg:mt-16'>SOIN HOLISTIQUE</h2>
          <p className='min-h-[450px] text-sky-800 text-lg 3xl:text-2xl'>Pourquoi ce terme <span className='font-bold'>holistique</span>?<br/> Parce qu’il signifie « tout entier », et que je suis convaincue que le bien être ou la bonne santé dépend d’un équilibre globale. 
            Trouver la cause des causes, quel que soit le symptôme, oriente ma démarche. Cela implique de suivre le chemin de certaines ramifications ou complexités, à travers le corps et l’esprit, 
            avant de pouvoir toucher la racine.<br/><br/> Ce qui est également holistique c’est la <span className='font-bold'>pratique multidisciplinaire</span> nécessaire pour accompagner une personne vers son équilibre. 
            Il n’y a pas un protocole pour tous, mais divers savoir-faire et méthodes pour chaque client(es). Trouver d’un regard, d’un mot, d’un geste l’ouverture et la libération, 
            est une forme d’art, <span className='font-bold'>un art du toucher</span>.<br/><br/>La thérapie holistique ouvre le champ des possibles d’un patient et lui offre une solution de soin complémentaire aux traitements médicaux.<br/><br/>
            <span className='font-bold'>Ces méthodes ne se substituent pas à un avis médicale</span> . 
          </p>
          </div>
        </article>
        <article className="w-full h-full flex justify-center p-2">
        <div className='flex flex-col items-start w-[98%]'>
        <h2 className='text-[2rem] md:text-[3rem] lg:text-[3rem] 3xl:text-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 mb-10 mt-2 lg:mt-16'>MA METHODE</h2>
          <p className='min-h-[450px] text-sky-800 text-lg 3xl:text-2xl '>En plus du magnétisme transmis de main à main par ma grand-mère, je suis formée au <span className='font-bold'>Touch for Health</span> (kinésiologie) et à la <span className='font-bold'>naturopathie</span>. <br/>
            Cela fait plus de 30 ans que je me passionne pour les domaines de la médecine (au sens large du terme), de la psychologie, de la communication, 
            de l’astrologie et des techniques de thérapies comme l’hypnose ou la PNL. Mon approche se nourrit de tout cela.<br/><br/>
            Lors des séances, mon action est déterminée au préalable par une <span className='font-bold'>écoute intuitive</span>. L’attention que je porte à votre langage corporel, verbal et à mon propre sentir, 
            m’indique comment procéder. Si une thérapie holistique considère l’individu dans sa globalité, l’entrée en matière varie toujours en fonction des besoins du moment 
            et de l’inclination de la personne.<br/> Le travail soulève des mémoires, contourne des résistances, libère des énergies bloquées, 
              tend à remettre de la clarté sur des conditionnements qui induisent, de par leurs natures, confusion et chaos dans nos existences.<br/>
               Pour moi, l’objectif est d’abord de vous ramener à un point de sérénité. Ensuite ? Retrouver sa vitalité, éliminer une compulsion, 
               remettre de l’ordre dans l’esprit et le corps, bref ! En un mot : <span className='font-bold'>soigner</span>.
            </p>
          </div>
        </article>
        <article className="w-full h-full flex justify-center p-2">
          <div className='flex flex-col items-start w-[98%]'>
          <h2 className='text-[2rem] md:text-[3rem] lg:text-[3rem] 3xl:text-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-amber-500 mb-10 mt-2 lg:mt-16'>DEROULEMENT</h2>
          <p className='min-h-[450px] text-sky-800  text-lg 3xl:text-2xl'>
            Chacun d’entre nous étant unique, j’estime qu’il ne peut exister une seule méthode vraie pour tout le monde et pour toujours. 
            Toutefois, la séance est estimé à <span className='font-bold'>2h</span>. Je consacre toujours au moins 20 minutes de conversation afin de cerner la problématique, faire connaissance, 
            récolter l’évolution de la situation depuis la dernière séance, etc. C’est le temps ou je me laisse toucher par vous. 
            Me mettre au service de votre propre rythme et musique, est tout l’exercice pour moi.
            <br/><br/>
             Après la séance ?<br/>
             Nous faisons un bilan à la fin de chaque séance, ce qui a été perçu par vous et par moi. À cela fait suite quelques conseils si nécessaire, 
             proposition de petit(s) exercice(s) pour asseoir le travail. Je prend également des nouvelles par téléphone les deux jours qui suivent la séance. 
             Bien sûr le travail peut nécessiter d’autre(s) séance(s), mais je laisse généralement le soin à chacun de revenir vers moi pour l’approfondir ou le terminer.
          </p>
          </div>
        </article>
        
      </motion.div>
      <div  className='flex justify-center gap-6 h-16 lg:h-20 text-sky-800 3xl:text-2xl' onClick={onClick}>
      <button onClick={handlePrevious} className='flex items-center'><MdArrowBackIos className='text-xl'/>  Precédent</button>
      <button onClick={handleNext} className='flex items-center gap-2'>Suivant  <MdArrowForwardIos className='text-xl'/></button>
      </div>
    </div>
  );
};

export default CarouselAbout;