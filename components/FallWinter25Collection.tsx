import React from 'react';
import Image from "next/image";

const FallWinter25Collection = () => {
  return (
        <div className="w-full px-2 min-h-fit mb-4">
          <div className="w-full h-full flex flex-col gap-2
          lg:gap-3
          xl:gap-4
          2xl:gap-5
          md:grid md:grid-cols-2">
            <div className="relative w-full overflow-hidden 
              h-[30vh] lg:h-[60vh] xl:h-[70vh]">
              <Image
                src="/imgs/70s-1.avif"
                alt="winter wear line"
                //fill
                priority
                width={1800}
                height={1200}
                className="absolute inset-0 w-full h-full object-top
                object-cover brightness-125"
              />
            </div> 
            <div className="w-full overflow-hidden 
            p-2 md:p-4 lg:p-6 xl:p-10 2xl:p-12
            h-full 
            font-bold">
              <div className="uppercase flex flex-col items-start align-center text-start 
              tracking-wider h-full gap-3 justify-center
              text-stone-950 p-1 text-xs drop-shadow-2xl">
                <h2 className="text-lg">
                  Fall/ Winter 25
                </h2>
                <p className="leading-5 text-xs tracking-widest"> 
                  A new icon takes the stage as a symbol of BALMAIN’s 
                  audacious aesthetic and timeless romance with the world of +music. 
                  Blending heritage and modernity, 
                  the Fall/ Winter 25 Collection features a distinctive 
                  tribute to boldness: an
                  Evocation of the house’s signature silhouettes 
                  from the 1970s.
                </p>
                <button className='bg-stone-50 text-black
                uppercase rounded-3xl px-7 py-2 mt-3 duration-300
                hover:cursor-pointer hover:bg-stone-200'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FallWinter25Collection