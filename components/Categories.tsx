import React from 'react'

const Categories = () => {
  return (
    <div className="min-h-fit w-full grid grid-cols-1 lg:grid-cols-3 text-white 
    uppercase tracking-widest font-extrabold text-2xl
    px-2 lg:px-3 xl:px-4 2xl:px-5
    gap-3">
      <div 
        className="relative w-full h-[50vh] lg:h-[40vh] xl:h-[60vh] cursor-pointer"
      >
        <img
          src="/imgs/boots.avif"
          alt="womens shoes"
          className="absolute w-full h-full object-cover rounded-xl grayscale object-bottom" 
        />
        <div className="flex flex-col items-end h-full justify-end text-center 
        tracking-widest top-1
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-1">
            Shoes
          </h2>
          <button className='bg-stone-50 text-black
            uppercase rounded-3xl px-7 py-2 mt-3 duration-300
            hover:cursor-pointer hover:bg-stone-200'>
              For Women
          </button>
        </div>
      </div>
      <div 
        className="relative w-full h-[50vh] lg:h-[40vh] xl:h-[60vh] cursor-pointer"
      >
        <img
          src="/imgs/centre.avif"
          alt="womens shoes"
          className="absolute w-full h-full object-cover rounded-xl grayscale
          object-top" 
        />
        <div className="inset-0 flex flex-col items-end h-full justify-end text-center 
        tracking-widest
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-1">
            Anthem Bags
          </h2>
          <button className='bg-stone-50 text-black
            uppercase rounded-3xl px-7 py-2 mt-3 duration-300
            hover:cursor-pointer hover:bg-stone-200'>
              Shop Now
          </button>
        </div>        
      </div>
      <div 
        className="relative w-full h-[50vh] lg:h-[40vh] xl:h-[60vh] cursor-pointer"
      >
        <img
          src="/imgs/ac.avif"
          alt="womens shoes"
          className="absolute w-full h-full object-cover rounded-xl grayscale" 
        />        
        <div className="inset-0 flex flex-col items-end h-full justify-end text-center 
        tracking-widest
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-1">
            Accessories 
          </h2>
          <button className='bg-stone-50 text-black
            uppercase rounded-3xl px-7 py-2 mt-3 duration-300
            hover:cursor-pointer hover:bg-stone-200'>
              For Women
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories