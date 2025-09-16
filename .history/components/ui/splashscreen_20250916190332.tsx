"use client";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col 
      items-center justify-center animate-fade
      tracking-wider text-white">
      <h2 
        className="uppercase text-xl font-semibold 
        opacity-0 animate-fade-in [animation-delay:0.5s]"
      >
        Signé Ríchartistry
      </h2>
      <h1 
        className="text-2xl font-semibold 
        opacity-0 animate-fade-in [animation-delay:0.5s]"
      >
        BALMAIN
      </h1>
    </div>
  );
}