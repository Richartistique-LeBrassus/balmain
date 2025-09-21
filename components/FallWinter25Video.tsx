"use client";
import { Pause, Play } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const FallWinter25Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
    }
    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  return (
    <div className="min-h-fit w-full cursor-pointer
    px-2
    lg:px-3
    xl:px-4
    2xl:px-5">
      <div className="relative w-full rounded-xl overflow-hidden
      h-[98vh] lg:h-[97vh] 2xl:h-[65vh]">
        <video
          ref={videoRef}
          src="/vids/blk.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale 2xl:object-top"
        />
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute bottom-10 left-12 z-20 flex items-center justify-center 
          w-12 h-12 bg-transparent hover:cursor-pointer
          transition"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-black" />
          ) : (
            <Play className="w-4 h-4 text-black ml-[2px]" />
          )}
        </button>
        <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
        tracking-widest bottom-1
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h2 className="font-bold mb-4">
            Fall/ Winter 25
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