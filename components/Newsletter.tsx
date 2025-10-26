"use client";
import { useState } from "react";
import React from 'react';

const options = [
  { id: "Female", label: "Female" },
  { id: "Male", label: "Male" },
  { id: "Fluid", label: "Fluid" },
];

const Newsletter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <section className="min-h-fit 
      w-full
    ">
      <div className="bg-rose-100 text-neutral-900 uppercase tracking-widest
      text-sm font-light w-full min-h-fit
      grid grid-cols-1 md:grid-cols-3 gap-7
      md:gap-16
      lg:gap-20
      xl:gap-24
      px-6 py-6
      md:px-12 md:py-12
      xl:px-17 xl:py-17">

  <div className="md:col-span-2 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold mb-4 tracking-wider">
        Sign up for Balmain updates
      </h3>
      <p className="mb-4 text-xs/6 font-semibold">
        Be in the know about what&apos;s happening at the Parisian Maison: 
        never miss out on the latest trends, 
        newest collections and exciting special projects from Balmain.
      </p>
    </div>

    <div className="text-neutral-400 mt-8 md:mt-0">
      <p className="mb-4 text-[11px]/5 tracking-wide font-bold">
        Pierre Balmain processes the data collected to send you our newsletter. 
        To find out more about how we manage your personal data and to exercise your rights, 
        please refer to our <span className="underline text-neutral-600"> privacy policy</span>.
      </p>

      <p className="mb-4 text-[11px]/5 tracking-wide font-bold">
        *Mandatory information: 
        If you choose not to give your consent for the collection of 
        mandatory data you will not be able to 
        subscribe to the newsletter.
      </p>
    </div>
  </div>

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
            <span className="text-sm font-bold">{option.label}</span>
          </label>
        </div>
      ))}
    </fieldset>

    <form className="flex flex-col space-y-2 mt-1 mb-2">
      <h3 className="font-semibold mb-5 tracking-widest text-[13px]">Email Sign-Up*</h3>
      <input
        type="email"
        placeholder="Email"
        className="p-2 neutral-900 border-b border-white 
        mb-12 placeholder:text-neutral-900 placeholder:uppercase uppercase
        focus:outline-none focus:ring-0"
      />
      <button
        type="submit"
        className="w-fit h-fit py-4 px-8 bg-white text-neutral-900 rounded-xs 
        text-[11px] hover:bg-rose-950 hover:text-white transition duration-500 uppercase font-bold tracking-widest
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