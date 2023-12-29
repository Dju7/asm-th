import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CarouselAbout = ({onClick}) => {
  const [index, setIndex] = useState(0);
  const length = 2;
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
          <p>Pourquoi ce terme holistique ? Parce qu’il signifie « tout entier », et que je suis convaincue que le bien être ou la bonne santé dépend d’un équilibre globale. 
            Trouver la cause des causes quelque soit le symptôme oriente ma démarche. Cela implique de suivre le chemin de certaines ramifications ou complexités, à travers le corps et l’esprit, 
            avant de pouvoir toucher la racine. Ce qui est également holistique c’est la pratique multidisciplinaire nécessaire pour accompagner une personne vers son équilibre. 
            Il n’y a pas un protocole pour tous, mais divers savoir-faire et méthodes pour chaque client(es). Trouver d’un regard, d’un mot, d’un geste l’ouverture et la libération, 
            est une forme d’art, un art du touché. La thérapie holistique ouvre le champ des possible d’un patient et lui offre une solution de soin complémentaire aux traitements médicaux.</p>
          <p>En plus du magnétisme transmis de main à main par ma grand-mère, je suis formée au touch for health (kinésiologie) et à la naturopathie. 
            Cela fait plus de 30 ans que je me passionne pour les domaines de la médecine au sens large du terme, de la psychologie, de la communication, 
            de l’astrologie et des techniques de thérapies comme l’hypnose ou la PNL.<br/> Mon approche se nourrit de tout cela.<br/>
            Lors des séances, mon action est déterminée au préalable par une écoute intuitive. L’attention que je porte à votre langage corporel, verbal et à mon propre sentir, 
            m’indique comment procéder.<br/> Si une thérapie holistique considère l’individu dans sa globalité, 
            l’entrée en matière varie toujours en fonction des besoins du moment et de l’inclination de la personne.<br/><br/> Le travail soulève des mémoires, contourne des résistances, 
            libère des énergies bloquées, tend à remettre de la clarté sur des conditionnements qui induisent, de par leurs natures, confusion et chaos dans nos existences.<br/>
            Pour moi, l’objectif est d’abord de vous ramener à un point de sérénité. Ensuite ? Retrouver sa vitalité, éliminer une compulsion, remettre de l’ordre dans l’esprit et le corps, bref ! 
            En un mot : soigner.
           </p>
           <p>L’effet ? Retrouver sa vitalité, éliminer une compulsion, remettre de l’ordre dans l’esprit et le corps et apaiser la chair, bref ! En un mot : soigner.</p>
          </div>
        </article>
        <article className="w-full flex justify-center items-center">
        <div className='flex flex-col'>
        <h2 className='text-3xl text-sky-600'>Quelle methode j'utilise</h2>
          <p>Comment se passe une séance ?
            Chacun d’entre nous étant unique, j’estime qu’il ne peut exister une seule méthode vraie pour tout le monde et pour toujours. 
            Toutefois, la séance est estimé à 2h. Je consacre toujours au moins 20 minutes de conversation afin de cerner la problématique, faire connaissance, 
            récolter l’évolution de la situation depuis la dernière séance, etc. C’est le temps ou je me laisse toucher par vous. 
            Me mettre au service de votre propre rythme et musique, est tout l’exercice pour moi.
          </p>
             <p>
             Après la séance ?
             Nous faisons un bilan à la fin de chaque séance, ce qui a été perçu par vous et par moi, à cela fait suite quelques conseils si nécessaire, 
             proposition de petit(s) exercice(s) pour asseoir le travail. Je prend également des nouvelles par téléphone les deux jours qui suivent la séance. 
             Bien sûr le travail peut nécessiter d’autre(s) séance(s), mais je laisse généralement le soin à chacun de revenir vers moi pour l’approfondir ou le terminer.
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