"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <nav className="flex items-center justify-between py-3 px-6 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-full shadow-sm relative">
        <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition">
          Al‑Amin Oseni
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-1 text-slate-600 hover:text-teal-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-sm font-semibold text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
