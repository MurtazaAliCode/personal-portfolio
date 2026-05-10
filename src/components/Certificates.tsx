"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Model Context Protocol Level 2 Developer",
    issuer: "Presidential Initiative for AI & Computing (PIAIC)",
    image: "/certificates/mcp-level-2.png",
    date: "Jan 2026",
  },
  {
    title: "Prompt and Context Engg: Level 1 Developer",
    issuer: "Presidential Initiative for AI & Computing (PIAIC)",
    image: "/certificates/prompt-level-1.png",
    date: "Jan 2026",
  },
  {
    title: "Agentic AI Level 1 Developer",
    issuer: "Presidential Initiative for AI & Computing (PIAIC)",
    image: "/certificates/agentic-ai-level-1.png",
    date: "Jan 2026",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    image: "/certificates/anthropic-mcp.png",
    date: "Aug 2025",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    image: "/certificates/mcp-advanced.png",
    date: "Aug 2025",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    image: "/certificates/claude-code.png",
    date: "Jan 2026",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl mb-4 flex items-center gap-4">
          <Award className="text-cta w-10 h-10 md:w-12 md:h-12" />
          Certifications
        </h2>
        <p className="text-slate-400">Official recognition of my expertise in AI and modern development protocols.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card group relative overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <h4 className="text-sm font-bold mb-2">{cert.title}</h4>
                <p className="text-xs text-cta mb-2">{cert.issuer}</p>
                <p className="text-[10px] text-slate-500">{cert.date}</p>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <h3 className="text-sm font-bold truncate">{cert.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
