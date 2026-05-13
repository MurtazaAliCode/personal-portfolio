"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

import { certificates } from "@/data/certificates";
import Link from "next/link";

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 flex items-center gap-4">
            <Award className="text-cta w-8 h-8 md:w-12 md:h-12" />
            Certifications
          </h2>
        <p className="text-slate-400">Official recognition of my expertise in AI and modern development protocols.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card group relative overflow-hidden cursor-pointer"
          >
            <Link href={`/certificate/${cert.id}`} className="block">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-3">
                    <ExternalLink className="text-cta w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold mb-2">{cert.title}</h4>
                  <p className="text-xs text-cta mb-2">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-500">View Details & Download</p>
                </div>
              </div>
              <div className="p-4 border-t border-white/10">
                <h3 className="text-sm font-bold truncate">{cert.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
