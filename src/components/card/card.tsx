import React from "react";

export default function Card({img, children }) {
    return (
      <article className='w-[95%] lg:w-[30%] h-[30%] md:h-full bg-blanc flex flex-col rounded-xl overflow-hidden text-sky-800 transition-transform hover:scale-105 border border-sky-800'>
        <div className='h-28 3xl:h-36 w-full overflow-hidden'><img src={img} className=' h-full w-full object-cover' /></div>
        <div className='w-full h-[350px] 3xl:h-[400px] p-4'>
            {children}
          </div>
      </article>
    );
  }