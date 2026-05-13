"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-32 md:pt-40 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-cta text-base md:text-xl mb-4 font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
            <span className="hidden lg:block w-8 h-[2px] bg-cta" />
            Syed Murtaza Ali
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
            Certified <span className="glow-text italic pr-4">Agentic AI</span> <br className="hidden md:block" />
            Developer.
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
            Official contributor to OpenAI Agents SDK (Python). Building high-performance 
            AI products with <span className="text-white font-bold">$3,000+ market valuation</span>. 
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-xs font-mono text-cta/80">
            <span className="px-2 py-1 bg-cta/10 rounded border border-cta/20">CrewAI Expert</span>
            <span className="px-2 py-1 bg-cta/10 rounded border border-cta/20">Full Stack Pro</span>
            <span className="px-2 py-1 bg-cta/10 rounded border border-cta/20">Open Source</span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-6 md:px-8 py-3 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer text-sm md:text-base">
              Download CV <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative z-10 w-full max-w-[280px] md:max-w-md mx-auto">
            <div className="absolute inset-0 bg-cta/20 blur-[40px] md:blur-[60px] rounded-full -z-10" />
            <img 
              src="/profile.png" 
              alt="Syed Murtaza Ali" 
              className="w-full h-auto rounded-3xl border-2 border-white/10 shadow-2xl"
            />
          </div>
          
          <div className="mt-8 flex justify-center lg:justify-start">
            <Terminal />
          </div>

          {/* Badge overlays */}
          <div className="absolute -top-6 -right-6 glass-card px-4 py-2 flex items-center gap-2 border-cta/30">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-tighter">OpenAI Contributor</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-cta/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Hero;
