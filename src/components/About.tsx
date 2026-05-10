"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Server } from "lucide-react";

const skills = [
  { name: "Agentic AI", icon: <Server />, list: "OpenAI Agents SDK, CrewAI, Autogen" },
  { name: "Full Stack", icon: <Globe />, list: "Next.js, TypeScript, Python, Node.js" },
  { name: "Expertise", icon: <Code2 />, list: "Generative AI, LLMs, Scalable Systems" },
  { name: "Development", icon: <Palette />, list: "Certified AI Developer, Open Source Contributor" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/[0.02]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6">Syed Murtaza Ali</h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            I am a Certified Agentic AI Developer and Global Full Stack expert. My work focuses on bridging the gap 
            between complex AI architectures and intuitive user experiences.
          </p>
          <p className="text-slate-400 text-lg mb-4 leading-relaxed">
            As an official contributor to the OpenAI Agents SDK, I am at the forefront of the agentic AI revolution, 
            building tools that allow autonomous systems to interact seamlessly with the physical and digital world.
          </p>
          <div className="glass-card p-6 mb-8 border-l-4 border-cta bg-cta/5">
            <h4 className="text-cta font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
              Commercial Success
            </h4>
            <p className="text-slate-200 text-sm italic">
              "Currently finalizing the acquisition of two flagship AI products with a total valuation of $3,000. 
              Proven track record of building market-ready, high-value AI solutions."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex gap-4">
                <div className="text-cta w-8 h-8 shrink-0">{skill.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-1">{skill.name}</h4>
                  <p className="text-sm text-slate-500">{skill.list}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4">
            <img 
              src="/profile.png" 
              alt="Syed Murtaza Ali"
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cta rounded-full flex items-center justify-center text-background font-bold text-center p-4 transform rotate-12">
            5+ Years Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
