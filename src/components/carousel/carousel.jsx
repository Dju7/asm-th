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
    <div className="h-[700px] w-[85%] flex flex-col b overflow-hidden"  onClick={onClick}>
      <motion.div
        className='h-full w-[200%]  flex flex-row'
        initial={{ x: '0', opacity: 1 }}
        animate={controls}
        onClick={onClick}
      >
        <div className="w-full">
          <h2>Div 1 Title</h2>
          <p>Content of Div 1</p>
        </div>
        <div className="w-full">
          <h2>Div 2 Title</h2>
          <p>Content of Div 2</p>
        </div>
      </motion.div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CarouselAbout;