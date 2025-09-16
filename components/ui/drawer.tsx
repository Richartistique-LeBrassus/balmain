"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Form from 'next/form';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-3xl
          transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-90 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
    
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-full 
        lg:w-[50vw] text-center
       bg-black z-[9999] shadow-xl py-36 overflow-y-auto "
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          title="Close"
          aria-label="Close drawer"
          className="absolute top-4 right-4 text-stone-50
          hover:text-stone-400 hover:cursor-pointer
          transition p-2 rounded-full focus:outline-none"
        >
          <X size={24} />
        </button>
    
        <Form
          action="/search"
          className="min-w-fit min-h-fit"
        >
          <input
            name="query"
            type="text"
            placeholder="SEARCH"
            className="w-3/4 pb-2 border-b border-stone-50 text-wide
            bg-black text-stone-50 placeholder:text-stone-50 
            hover:text-stone-300 placeholder:text-wide
            focus:outline-none transition"
            
          />
        </Form>
    
        {results.length > 0 && (
          <ul className="mt-6 space-y-3">
            {results.map((item) => (
              <li key={item.objectID} className="text-stone-50 border-b border-zinc-900 pb-2">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </motion.aside>
    </>
  );
};

export default Drawer;