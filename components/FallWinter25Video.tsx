const FallWinter25Video = () => {
  return (
    <div className="min-h-fit w-full cursor-pointer
    px-2
    lg:px-3
    xl:px-4
    2xl:px-5">
      <div className="relative w-full rounded-xl overflow-hidden
      h-[98vh] lg:h-[97vh] 2xl:h-[65vh]">
        <img 
          src="/imgs/hero.avif" 
          className="absolute inset-0 w-full h-full object-cover grayscale
          object-[20%] 2xl:object-center"
          alt="background-image" 
        />
        <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
        tracking-widest bottom-1
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-4">
            Dark Elegance Winter 25
          </h2>
          <h3 className="">
            Discover
          </h3>
        </div>
      </div>
    </div>
  )
}

export default FallWinter25Video