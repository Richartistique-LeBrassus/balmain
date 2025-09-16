"use client"
import { useState, useEffect } from "react";
import Image from "next/image"; // Assuming you're using Next.js, if not, adjust the import for the image

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  // Timeout is commented out to keep it visible indefinitely for now
  useEffect(() => {
    // const timeout = setTimeout(() => setIsVisible(false), 2500); // 2.5 sec splash
    // return () => clearTimeout(timeout);
  }, []); // Empty dependency array to run only on mount

  if (!isVisible) return null; // Splash screen won't disappear until you manually set it to false

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center animate-fade
    tracking-wider text-white">
      <h2 className="uppercase
      text-xl font-semibold opacity-0 animate-fade-in [animation-delay:0.5s]">Signé Ríchartistry</h2>
      <h1 className="text-2xl font-semibold opacity-0 animate-fade-in [animation-delay:0.5s]">
        BALMAIN
      </h1>
    </div>
  );
}


{/*import SplashScreen from "@/components/ui/splashscreen";

function Loading() {
  return <SplashScreen />;    
}

export default Loading;*/}