"use client";
import { useState } from "react";
import React from 'react';

const Boutiques: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <section className="min-h-fit 
    bg-rose-50 text-neutral-900 text-sm w-full border-y border-rose-200">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 px-1 my-1
       uppercase tracking-widest">

        <div className="flex flex-col space-y-2 
        bg-rose-100 rounded-xs px-6 py-6
        md:py-24 md:items-center">
          <h2 className="text-lg font-semibold mb-4 tracking-wider">
            Boutiques
          </h2>
          <p className="mb-4 text-xs/6 font-semibold tracking-wide text-zinc-400
          md:text-center">
            You can also find us in one of our Balmain boutiques.
          </p>
          <button
            type="submit"
            className="bg-white text-black mt-3 rounded-xs text-[11px]
            hover:bg-rose-950 hover:text-white transition duration-500 font-bold tracking-widest
            w-fit h-fit py-2 px-4 uppercase cursor-pointer"
          >
            See our Boutiques
          </button>
        </div>  

        <div className="flex flex-col space-y-2 
        bg-rose-100 rounded-xs px-6 py-6
        md:py-24 md:items-center">
          <h2 className="text-lg font-semibold mb-4 tracking-wider">
            Customer Care
          </h2>
          <p className="mb-4 text-xs/6 font-semibold tracking-wide text-zinc-400
          md:text-center">
            Do you have any questions? We are here to help you. 
            You can contact our customer care team by email or over the phone.
          </p>
          <button
            type="submit"
            className="bg-white text-black mt-3 rounded-xs text-[11px]
            hover:bg-rose-950 hover:text-white transition duration-500 font-bold tracking-widest
            w-fit h-fit py-2 px-4 uppercase cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex flex-col space-y-2 
        bg-rose-100 rounded-xs px-6 py-6
        md:py-24 md:items-center">
          <h2 className="text-lg font-semibold mb-4 tracking-wider">
            FAQ
          </h2>
          <p className="mb-4 text-xs/6 font-semibold tracking-wide text-zinc-400
          md:text-center">
            Find all the answers to the frequently asked questions below.
          </p>
          <button
            type="submit"
            className="bg-white text-black mt-3 rounded-xs text-[11px]
            hover:bg-rose-950 hover:text-white transition duration-500 font-bold tracking-widest
            w-fit h-fit py-2 px-3 uppercase cursor-pointer"
          >
            See our FAQS
          </button>
        </div>      
      </div>

    </section>
  );
};

export default Boutiques;