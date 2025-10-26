export default async function HomeSection() {
  return (
    <div className="min-h-fit w-full cursor-pointer bg-rose-950"> 
      <div className="relative w-full overflow-hidden
      h-[101vh] px-4 md:px-8">
        <img
          src="/imgs/oscars.avif"
          className="absolute inset-0 w-full h-full object-cover object-[50%] 2xl:object-center"
          alt="background-image" 
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black 
        to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
        tracking-widest bottom-1
        text-amber-50 uppercase text-xs drop-shadow-2xl p-4 md:p-8">
          <h1 className="font-bold mb-4">
            70's Women's Winter
          </h1>
          <h3 className="">
            Explore The Campaign
          </h3>
        </div>
      </div>
    </div>
  );
}