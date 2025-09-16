"use client";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsVisible(false); 
    }, 2500);

    return () => {
      document.body.style.overflow = "auto"; 
      clearTimeout(timeout); 
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col gap-1 
      items-center justify-center animate-fade tracking-wider text-white">
      
      <h2 
        className="uppercase text-lg font-semibold 
        opacity-0 animate-fade-in [animation-delay:0.5s]">
        Signé Ríchartistry
      </h2>
      
      <h1 
        className="text-5xl lg:text-6xl xl:text-7xl font-semibold 
        opacity-0 animate-fade-in [animation-delay:0.5s]">
        BALMAIN
      </h1>
    </div>
  );
}