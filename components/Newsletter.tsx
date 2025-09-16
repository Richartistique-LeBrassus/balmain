"use client";
import { useState } from "react";
import React from 'react';
import Link from 'next/link';

const options = [
  { id: "Female", label: "Female" },
  { id: "Male", label: "Male" },
  { id: "Fluid", label: "Fluid" },
];

const Newsletter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <section className="min-h-fit 
     w-full px-2
     lg:px-3
     xl:px-4
     2xl:px-5
    ">
      <div className="bg-zinc-900 uppercase tracking-widest
      text-white text-sm font-light w-full min-h-fit
      grid grid-cols-1 md:grid-cols-3 gap-7 rounded-xl
      md:gap-16
      lg:gap-20
      xl:gap-24
      px-6 py-6
      md:px-12 md:py-12
      xl:px-17 xl:py-17">

  {/* Left side (intro + privacy) */}
  <div className="md:col-span-2 flex flex-col justify-between">
    {/* Intro text */}
    <div>
      <h3 className="text-lg font-semibold mb-4 tracking-wider">
        Sign up for Balmain updates
      </h3>
      <p className="mb-4 text-xs/6 font-semibold">
        Be in the know about what's happening at the Parisian Maison: 
        never miss out on the latest trends, 
        newest collections and exciting special projects from Balmain.
      </p>
    </div>

    {/* Privacy text */}
    <div className="text-zinc-400 mt-8 md:mt-0">
      <p className="mb-4 text-[11px]/5 tracking-wide">
        Pierre Balmain processes the data collected to send you our newsletter. 
        To find out more about how we manage your personal data and to exercise your rights, 
        please refer to our <span className="underline text-white"> privacy policy</span>.
      </p>

      <p className="mb-4 text-[11px]/5 tracking-wide">
        *Mandatory information: 
        If you choose not to give your consent for the collection of 
        mandatory data you will not be able to 
        subscribe to the newsletter.
      </p>
    </div>
  </div>

  {/* Right side (form) */}
  <div className="flex flex-col gap-6 md:col-span-1">
    <fieldset className="flex flex-wrap gap-11">
      <legend className="w-full text-base font-semibold mb-6">Gender *</legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            id={option.id}
            name="custom-radio"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)}
            className="peer hidden"
          />
          <label htmlFor={option.id} className="flex items-center cursor-pointer">
            <span className="w-[13px] h-[13px] inline-block mr-2 rounded-full border
             border-gray-400 peer-checked:border-black peer-checked:bg-white transition-colors duration-200" />
            <span className="text-sm">{option.label}</span>
          </label>
        </div>
      ))}
    </fieldset>

    <form className="flex flex-col space-y-2 mt-1 mb-2">
      <h3 className="font-semibold mb-5 tracking-widest text-[13px]">Email Sign-Up*</h3>
      <input
        type="email"
        placeholder="Email"
        className="p-2 text-white border-b border-white mb-12 placeholder:uppercase uppercase"
      />
      <button
        type="submit"
        className="w-fit h-fit py-4 px-8 bg-white text-black rounded-4xl 
        text-[11px] hover:bg-gray-200 transition duration-500 uppercase font-bold tracking-widest
        cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  </div>

</div>

    </section>
  );
};

export default Newsletter;