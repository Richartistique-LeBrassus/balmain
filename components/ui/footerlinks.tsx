"use client";
import { useState } from "react";

export default function FooterLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-y border-zinc-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-4 font-bold tracking-widest 
        text-sm flex justify-between items-center hover:cursor-pointer"
      >
        <span>LINKS</span>
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-b border-zinc-700 w-full text-center mx-auto">
          <div
            className="max-w-7xl mx-auto py-8 px-4
              grid grid-cols-2 md:grid-cols-4 gap-8
              text-xs font-bold tracking-widest"
          >
            <div>
              <h3 className="cursor-pointer">CAREERS</h3>
            </div>
            <div>
              <h3 className="cursor-pointer">BOUTIQUES</h3>
            </div>
            <div>
              <h3 className="cursor-pointer">PRIVACY POLICY</h3>
            </div>
            <div>
              <h3 className="cursor-pointer">CARE INSTRUCTIONS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}