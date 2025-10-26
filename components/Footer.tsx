import React from 'react';
import Link from 'next/link';

import 
  { 
    FaFacebookF, FaTwitter, FaInstagram, 
    FaYoutube, FaSnapchat, FaTiktok, FaPinterest, 
    FaFacebook,
  } 
    from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";    

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 text-sm 
    font-light min-h-fit uppercase tracking-widest
    px-8 
    lg:px-9 
    xl:px-10
    2xl:px-11">

      <div className="inline-flex w-full justify-between
       text-2xl text-white">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
          <FaSnapchat />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook ">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
          <FaYoutube />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FaXTwitter />
        </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
          <FaTiktok />
        </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterest />
        </a>
      </div>  

      <div className="font-bold w-full text-center tracking-wider py-28">
        <h2 className="text-4xl mb-1 logo text-amber-300">BALMAIN</h2>
        <h3 className="text-xs">signé Richartistique</h3>
      </div>   

      <div className="border-y border-zinc-700 w-full px-auto">

        <div className="max-w-7xl mx-auto py-17
        grid grid-cols-2 md:grid-cols-4 gap-8
        text-xs font-bold tracking-widest">
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
            <h3 className="cursor-pointer">COOKIES CENTER</h3>
          </div>

          <div>
            <h3 className="cursor-pointer">FAQ</h3>
          </div>

          <div>
            <h3 className="cursor-pointer">CARE INSTRUCTIONS</h3>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Balmain by Richartistique
      </div>
    </footer>
  );
};

export default Footer;