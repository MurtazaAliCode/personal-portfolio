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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between w-full max-w-7xl px-8 py-5"
      >
        <Link href="/" className="text-xl md:text-2xl font-bold text-cta">
          SYED<span className="text-white"> MURTAZA.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-14">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold hover:text-cta transition-colors tracking-[0.2em] uppercase"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
            {/* Social links placeholder */}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1, display: "flex" } : { height: 0, opacity: 0, display: "none" }}
        className="absolute top-[100%] left-6 right-6 glass-card p-6 flex flex-col gap-4 md:hidden overflow-hidden mt-4"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:text-cta transition-colors flex items-center justify-between"
            >
              {link.name}
              <div className="w-1.5 h-1.5 rounded-full bg-cta opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
