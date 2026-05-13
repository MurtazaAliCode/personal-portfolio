"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Vid Downloader Pro",
    description: "Premium HD/4K Video Downloader. $1000+ investment. Currently valued at $1,500+ for market acquisition.",
    tags: ["Next.js", "API", "Media"],
    image: "/projects/vid-downloader-v2.png",
    link: "https://vid-downloader-pro.com/",
  },
  {
    title: "StreamVault",
    description: "Top-tier distraction-free streaming platform. High-demand market product valued at $1,500+.",
    tags: ["React", "Streaming", "UI/UX"],
    image: "/projects/stream-vault-v2.png",
    link: "https://stream-vault-omega.vercel.app/",
  },
  {
    title: "Physical AI",
    description: "Bridging digital AI with humanoid robotics. A comprehensive platform for the future of robotics.",
    tags: ["AI", "Robotics", "Python"],
    image: "/projects/physical-ai-v2.png",
    link: "https://physical-ai-frontend.vercel.app/",
  },
  {
    title: "Pro Resume Builder",
    description: "Modern, AI-powered resume builder with 80-90% job success rate for users.",
    tags: ["TypeScript", "Next.js", "AI"],
    image: "/projects/resume-builder-v2.png",
    link: "https://resume-builder-umber-rho.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4">Featured Projects</h2>
        <p className="text-slate-400">A selection of my recent work and personal experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -10,
              rotateX: 2,
              rotateY: 2,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group cursor-pointer perspective-1000"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-8 h-8 hover:text-cta" />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-8 h-8 hover:text-cta" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-cta">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
