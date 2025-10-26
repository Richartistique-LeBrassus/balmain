import Image from "next/image";

export default function ProductTypes() {
  return (
    /*<div className="w-full px-2 min-h-fit mb-4
    lg:px-3
    xl:px-4
    2xl:px-5">
      <div className="w-full h-full flex flex-col gap-2
      lg:gap-3
      xl:gap-4
      2xl:gap-5
      md:grid md:grid-cols-2">*/
      <div className="w-full min-h-fit mb-4">
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2">
        <div className="relative w-full overflow-hidden 
        h-[50vh] sm:h-[84vh] md:h-[75vh] xl:h-[101vh] cursor-pointer
        ">
          <Image
            src="/imgs/natalie.webp"
            //src="/imgs/jb-1.webp"
            alt="Eyewear"
            fill
            priority              
            className="absolute inset-0 w-full h-full object-cover md:object-top 
            brightness-125"
          />

          <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
          tracking-widest bottom-1
          text-white uppercase p-4 text-xs drop-shadow-2xl">
            <h2 className="font-bold mb-4">
              Headwear
            </h2>
            <h3 className="">
              Women
            </h3>
          </div>
        </div>  
        <div className="relative w-full overflow-hidden 
        h-[50vh] sm:h-[84vh] md:h-[75vh] xl:h-[101vh] cursor-pointer">
          <Image
            src="/imgs/2madels.webp"
            //src="/imgs/fragrance.jpg"      
            alt="Eyewear"
            unoptimized
            priority  
            width={584}
            height={727}
            className="absolute inset-0 w-full h-full object-cover md:object-top brightness-110"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
          tracking-widest bottom-1
          text-white uppercase p-4 text-xs drop-shadow-2xl">
            <h2 className="font-bold mb-4">
              Fragarnce
            </h2>
            <h3 className="">
              Flora Gardenia
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}