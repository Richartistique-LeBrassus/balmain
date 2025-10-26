import React from 'react'

const Mens = () => {
  return (
    <div className="min-h-fit w-full cursor-pointer">
      <div className="relative w-full overflow-hidden
        h-[101vh]"
      >
        <img  
          src="/imgs/couple.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[12%]"
          alt="background-image" 
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black 
        to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
        tracking-widest bottom-1
        text-white uppercase p-4 md:p-8 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-4">
            Fall 2025
          </h2>
          <h3 className="">
            Explore
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Mens