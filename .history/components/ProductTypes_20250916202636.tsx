import Image from "next/image";

export default function ProductTypes() {
  return (
    <div className="w-full px-2 min-h-fit mb-4
    lg:px-3
    xl:px-4
    2xl:px-5">
      <div className="w-full h-full flex flex-col gap-2
      lg:gap-3
      xl:gap-4
      2xl:gap-5
      md:grid md:grid-cols-2">
        <div className="relative w-full rounded-xl overflow-hidden 
        h-[50vh] lg:h-[60vh] xl:h-[70vh] cursor-pointer
        ">
          <Image
            src="/imgs/eyewear.avif"
            alt="Eyewear"
            fill
            priority  
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
          tracking-widest bottom-1
          text-white uppercase p-4 text-xs drop-shadow-2xl">
            <h2 className="font-bold mb-4">
              Eyewear
            </h2>
            <h3 className="">
              Women
            </h3>
          </div>
        </div>  
        <div className="relative w-full rounded-xl overflow-hidden 
        h-[50vh] lg:h-[60vh] xl:h-[70vh] cursor-pointer">
          <Image
            src="/imgs/dress.avif"
            alt="Eyewear"
            fill
            priority  
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover grayscale object-top"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
          tracking-widest bottom-1
          text-white uppercase p-4 text-xs drop-shadow-2xl">
            <h2 className="font-bold mb-4">
              Ready to wear
            </h2>
            <h3 className="">
              Dresses
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}