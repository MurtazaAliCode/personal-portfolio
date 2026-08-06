"use client";

import { motion } from "framer-motion";
import { GitPullRequest, ExternalLink, ShieldCheck } from "lucide-react";

const Contributions = () => {
  return (
    <section id="contributions" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 flex items-center gap-4">
            <GitPullRequest className="text-cta w-8 h-8 md:w-10 md:h-10" />
            Open Source Impact
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Proudly contributing to the global AI ecosystem. Official contributor to the OpenAI Agents SDK and active member of the open-source community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-cta font-bold tracking-widest uppercase text-sm">
              <ShieldCheck className="w-5 h-5" />
              Official OpenAI Contributor
            </div>
            <h3 className="text-3xl font-bold">OpenAI Agents SDK (Python)</h3>
            <p className="text-slate-400 leading-relaxed">
              Implemented comprehensive error handling examples for function tools, making complex agentic behaviors more accessible to thousands of developers worldwide.
            </p>
            
            <div className="glass-card p-6 border-l-4 border-cta">
              <p className="italic text-slate-300">
                "This Pull Request adds a comprehensive and runnable code example to the 'Handling errors in function tools' documentation section..."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">PR #1354 Merged</span>
                <a 
                  href="https://github.com/openai/openai-agents-python/pull/1354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cta hover:underline text-sm font-medium"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/contributions/openai-pr-details.png" 
                alt="OpenAI PR Details"
                className="w-full opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute bottom-0 left-0 sm:-bottom-6 sm:-left-6 glass-card overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 w-2/3 border-cta/30">
              <img 
                src="/contributions/openai-pr-merged.png" 
                alt="OpenAI PR Merged Status"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
