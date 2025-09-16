"use client";
import { motion } from "framer-motion";

export default function SplashScreen() {
  // Animation variants for slide and fade
  const slideFadeIn = {
    hidden: { opacity: 0, y: -100 },  // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const slideFadeInHorizontal = {
    hidden: { opacity: 0, x: -100 },  // Start from the left
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col gap-1 items-center justify-center tracking-wider text-white">
      
      {/* Slide-in for 'Signé Ríchartistry' with vertical motion */}
      <motion.h2 
        className="uppercase text-lg font-semibold"
        initial="hidden" 
        animate="visible"
        variants={slideFadeIn}
        style={{ opacity: 0 }} // Ensure opacity starts at 0
      >
        Signé Ríchartistry
      </motion.h2>
      
      {/* Slide-in for 'BALMAIN' with vertical motion */}
      <motion.h1 
        className="text-5xl lg:text-6xl xl:text-7xl font-semibold"
        initial="hidden" 
        animate="visible"
        variants={slideFadeIn}
        style={{ opacity: 0 }} // Ensure opacity starts at 0
      >
        BALMAIN
      </motion.h1>
    </div>
  );
}