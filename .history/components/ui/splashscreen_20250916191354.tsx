"use client";
import { motion } from "framer-motion";

export default function SplashScreen() {
  // Correct transition with Easing from Framer Motion
  const slideCover = {
    hidden: { opacity: 1, y: 0 }, // Cover starts fully covering the text
    visible: {
      opacity: 0,
      y: -100, // Cover slides off and fades out
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // Framer Motion ease-out curve
      },
    },
  };

  const slideFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // Use the same ease for smoothness
      },
    },
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center tracking-wider text-white">
      
      {/* Cover animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-black"
        initial="hidden"
        animate="visible"
        variants={slideCover}
      />
      
      {/* Title with fade-in animation */}
      <motion.h2
        className="uppercase text-lg font-semibold"
        initial="hidden"
        animate="visible"
        variants={slideFadeIn}
        style={{ opacity: 0 }}  // Ensuring opacity starts at 0
      >
        Signé Ríchartistry
      </motion.h2>
      
      <motion.h1
        className="text-5xl lg:text-6xl xl:text-7xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={slideFadeIn}
        style={{ opacity: 0 }}  // Ensuring opacity starts at 0
      >
        BALMAIN
      </motion.h1>
    </div>
  );
}