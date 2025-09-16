"use client";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center animate-fade tracking-wider text-white px-6 py-8">
      <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold opacity-0 animate-fade-in delay-150 transition-all ease-in-out duration-1000 tracking-wide">
        Signé Ríchartistry
      </h2>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold opacity-0 animate-fade-in delay-300 transition-all ease-in-out duration-1200 tracking-widest mt-4">
        BALMAIN
      </h1>
    </div>
  );
}