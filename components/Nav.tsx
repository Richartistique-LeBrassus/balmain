"use client";
import Image from "next/image";
import { Menu, X, Search, ChevronRight, User, Heart, MapPin } from "lucide-react";
import Drawer from "@/components/ui/drawer";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Form from "next/form";
import { ShoppingBag } from "phosphor-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // menu drawer
  const [isSearchOpen, setSearchOpen] = useState(false); // search drawer
  const [isScrolled, setIsScrolled] = useState(false); // scroll background
  const [showNav, setShowNav] = useState(true); // scroll hide/show
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for hiding nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      setShowNav(currentScroll < lastScrollY || currentScroll < 20);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle body class for menu open
  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  // Determine if nav should be hidden (scroll or drawer)
  const navHidden = !showNav || isOpen || isSearchOpen;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: navHidden ? "-100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-full fixed top-0 z-50 px-4 py-3
          md:px-8 md:py-4
          transition-colors duration-500 ease-in-out
          ${isScrolled ? "bg-rose-950/60 backdrop-blur-md" : "bg-transparent"}`}
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
              {/* LEFT SIDE */}
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
                      <Link href="/" className="text-amber-50 cursor-pointer">
                        <div className="tracking-widest uppercase">
                          <h3 className="text-xs font-bold">signé Richartistique</h3>
                          <h2 className="text-2xl font-bold logo">BALMAIN</h2>
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
                      className="absolute inset-y-0 my-auto left-0 flex items-center gap-4 text-amber-50
                      hover:opacity-90 transition-opacity duration-300"
                    >
                      <button aria-label="Open menu" onClick={() => setIsOpen(true)}>
                        <Menu className="h-5 w-5 lg:h-6 lg:w-6 hover:cursor-pointer" />
                      </button>
                      <button onClick={() => setSearchOpen(true)} aria-label="Open search">
                        <Search className="w-5 h-5 lg:w-6 lg:h-6 hover:cursor-pointer" />
                      </button>
                      <Link href="/basket" className="w-fit h-fit">
                        <ShoppingBag size={24} weight="duotone" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CENTER LOGO */}
              <Link href="/">
                <div className="h-12 w-12 z-10">
                  <Image
                    src="/imgs/balmain-logo.svg"
                    alt="Balmain Logo"
                    width={100}
                    height={100}
                    className="w-full h-full hover:cursor-pointer filter brightness-200"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  />
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-80 bg-black/90" />
            <motion.div
              key="menu-drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-90 flex flex-col justify-between 
                items-center px-5 pt-20 pb-5 md:pt-28 2xl:pt-36 text-stone-50
                md:w-1/2 sm:px-10 lg:px-16 2xl:px-28 bg-rose-950"
            >
              <div className="absolute top-5 left-5">
                <button aria-label="Close menu" onClick={() => setIsOpen(false)}>
                  <X size={28} className="hover:cursor-pointer hover:text-zinc-300 transition-colors duration-300" />
                </button>
              </div>

              <div className="flex flex-col h-full w-full gap-7">
                <nav className="flex flex-col w-full text-sm uppercase tracking-wider font-bold">
                  {["Highlights", "Men", "Bags", "Sneakers", "Eyewear", "Kids"].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-between w-full py-4 hover:opacity-70 transition-opacity duration-300"
                    >
                      <span className="pl-1">{item}</span>
                      <ChevronRight size={20} className="text-white" />
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col text-zinc-200 justify-between h-fit space-y-12 text-sm uppercase tracking-wider font-bold mt-auto">
                  <a href="/login" className="flex items-center gap-3 hover:text-zinc-400 transition-colors duration-300">
                    <User size={24} />
                    Sign In
                  </a>
                  <a href="/login" className="flex items-center gap-3 hover:text-zinc-400 transition-colors duration-300">
                    <MapPin size={22} />
                    Store Locator
                  </a>
                  <a href="/login" className="flex items-center gap-3 hover:text-zinc-400 transition-colors duration-300">
                    <Heart size={21} />
                    Wishlist
                  </a>
                </div>

                <div className="text-sm uppercase tracking-wide text-center border-t border-zinc-700 pt-6 mt-auto">
                  <a href="https://int.balmain.com/">
                    <div className="tracking-widest uppercase">
                      <p className="text-xs">signé Ríchartistry</p>
                      <p className="text-lg font-bold logo">BALMAIN</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
  {isSearchOpen && (
    <>
      <motion.div
        className="fixed inset-0 z-80 bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSearchOpen(false)}
      />
      <Drawer isOpen={isSearchOpen} onClose={() => setSearchOpen(false)}>
        <p className="tracking-widest">Search</p>
        <Form action="/search" className="w-full">
          <input type="text" name="query" placeholder="Search..." className="w-full p-2 border mt-4" />
        </Form>
      </Drawer>
    </>
  )}
</AnimatePresence>
    </>
  );
};