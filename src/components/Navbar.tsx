"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Open Source", href: "#contributions" },
    { name: "Certificates", href: "#certificates" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 py-3.5 sm:py-5"
      >
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-cta tracking-tight">
          SYED<span className="text-white"> MURTAZA.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold hover:text-cta transition-colors tracking-[0.2em] uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile / Tablet Toggle */}
        <button 
          className="lg:hidden text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1, display: "flex" } : { height: 0, opacity: 0, display: "none" }}
        className="absolute top-[100%] left-3 right-3 sm:left-6 sm:right-6 glass-card p-6 flex flex-col gap-4 lg:hidden overflow-hidden mt-2 bg-background/95 backdrop-blur-2xl shadow-2xl border border-white/10"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base sm:text-lg font-medium text-slate-200 hover:text-cta transition-colors flex items-center justify-between py-1"
            >
              {link.name}
              <div className="w-2 h-2 rounded-full bg-cta opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
