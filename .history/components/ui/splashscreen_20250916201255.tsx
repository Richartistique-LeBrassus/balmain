"use client";

import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling when splash screen is visible
    document.body.style.overflow = "hidden";
    
    // Enable scrolling after 2.5 seconds (or when splash screen disappears)
    const timeout = setTimeout(() => {
      setIsVisible(false); // Hide the splash screen
    }, 2500);

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when splash is hidden
      clearTimeout(timeout); // Clean up the timeout
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