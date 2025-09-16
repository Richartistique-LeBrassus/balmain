"use client"
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  // Timeout is commented out, splash screen will stay visible indefinitely
  useEffect(() => {
    // No timeout logic anymore, splash screen stays visible permanently
  }, []); // Empty dependency array to run only on mount

  if (!isVisible) return null;  // This won't be triggered now

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col 
      items-center justify-center animate-fade
      tracking-wider text-white">
      <h2 className="uppercase
      text-xl font-semibold opacity-0 animate-fade-in [animation-delay:0.5s]">Signé Ríchartistry</h2>
      <h1 className="text-2xl font-semibold opacity-0 animate-fade-in [animation-delay:0.5s]">
        BALMAIN
      </h1>
    </div>
  );
}