"use client";

import Image from "next/image";
import { Menu, X, Search, ChevronLeft, ChevronRight, User, Heart, MapPin } from "lucide-react";
import Drawer from "@/components/ui/drawer";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Form from 'next/form';
import { ShoppingBag } from "phosphor-react";
import useBasketStore from '@/store/store';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const itemCount = useBasketStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <nav
      className={`w-full fixed z-50 p-4 lg:p-7 2xl:p-10 
      transition-colors duration-500 ease-in-out
      ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <AnimatePresence>
        {!isOpen && !isSearchOpen && (
          <motion.div
            key="nav-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-between items-center"
          >
            {/* Left side: BALMAIN or Icons */}
            <div className="relative h-10 w-48">
              <AnimatePresence mode="wait">
                {!isScrolled ? (
                  <motion.div
                    key="brand"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0"
                  >
                    <Link href="/" className="text-white cursor-pointer">
                      <div className="tracking-widest uppercase">
                        <h3 className="text-xs">signé Richartistry</h3>
                        <h2 className="text-2xl font-bold">BALMAIN</h2>
                      </div>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="icons"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 flex items-center gap-4 text-white
                    hover:opacity-90 transition-opacity duration-300"
                  >
                    {/* Hamburger Menu */}
                    <button 
                      aria-label="Open menu"
                      onClick={() => setIsOpen(true)}>
                      <Menu className="h-5 w-5 lg:h-6 lg:w-6 hover:cursor-pointer" />
                    </button>

                    {/* Search */}
                    <button
                      onClick={() => setSearchOpen(true)}
                      aria-label="Open search"
                    >
                      <Search className="w-5 h-5 lg:w-6 lg:h-6 hover:cursor-pointer" />
                    </button>

                    <Link
                      href="/basket"
                      className="w-fit h-fit"
                    >
                      {/*<ShoppingBag className="w-6 h-6" />*/}
                      <ShoppingBag size={24} weight="duotone" />
                      <span className="absolute -top-1 -right-1 bg-black text-white rounded-full
                      w-4 h-4 flex items-center justify-center text-xs 
                      border border-stone-100">
                        {itemCount}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/">
              <div className="h-17 w-17 z-10">
                <Image
                  src="/imgs/balmain-logo.svg"
                  alt="Balmain Logo"
                  width={100}
                  height={100}
                  className="w-full h-full mt-1 hover:cursor-pointer filter brightness-200"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>

          <div className="fixed inset-0 z-80 bg-black/90" />

          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-90 flex flex-col justify-between 
            items-center px-5 pt-20 pb-5 md:pt-28 2xl:pt-36 text-stone-50
            md:w-1/2 sm:px-10 lg:px-16 2xl:px-28
            bg-black"
          >

            <div className="absolute top-5 left-5">
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className=""
              >
                <X size={28} className="hover:cursor-pointer hover:text-zinc-300
              transition-colors duration-300" />
              </button>
            </div>

          <div className="flex flex-col h-full w-full gap-7">
            {/* Top Close Button */}
          
            {/* Nav Items
                                  <Link
                      href="/basket"
                      className="w-fit h-fit"
                    >
            */}
            <nav className="flex flex-col w-full text-sm uppercase tracking-wider font-bold">
              {["Highlights", "Men", "Bags", "Sneakers", "Eyewear", "Kids"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-between w-full py-4  
                  hover:opacity-70 transition-opacity duration-300"
                >
                  <span className="pl-1">
                    {item}
                  </span>
                  <ChevronRight size={20} className="text-white" />
                </a>
              ))}
            </nav>


            <div className="flex flex-col text-zinc-200 justify-between h-fit
            space-y-12 text-sm uppercase tracking-wider font-bold mt-auto">
              <a href="/login" className="flex items-center gap-3 hover:text-zinc-400
              transition-colors duration-300">
                <User size={24} />
                  Sign In
              </a>
              <a href="/login" className="flex items-center gap-3 hover:text-zinc-400
              transition-colors duration-300">
                <MapPin size={22}/>
                  Store Locator
              </a>
              <a href="/login" className="flex items-center gap-3 hover:text-zinc-400
              transition-colors duration-300">
                <Heart size={21}/>
                  Wishlist
              </a>                             
            </div>

           {/* Footer Link */}
           <div className="text-sm uppercase tracking-wide text-center 
           border-t border-zinc-700 pt-6 mt-auto">
             <a href="https://int.balmain.com/">
               <div className="tracking-widest uppercase">
                  <p className="text-xs">signé Ríchartistry</p>
                  <p className="text-lg font-bold">BALMAIN</p>
                </div>
             </a>
           </div>

          </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>


      <Drawer isOpen={isSearchOpen} onClose={() => setSearchOpen(false)}>
        <p className="tracking-widest">Search</p>
        <Form
          action="/search"
          className="w-full"
        >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-full p-2 border mt-4"
        />
        </Form>
      </Drawer>
    </nav>
  );
};
