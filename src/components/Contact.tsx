"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl mb-6">Let's Connect</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out. 
            I'm always open to new opportunities and collaborations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass-card flex items-center justify-center text-cta">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <p className="text-white font-medium">syed.murtaza@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass-card flex items-center justify-center text-cta">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call Me</p>
                <p className="text-white font-medium">Available on Request</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass-card flex items-center justify-center text-cta">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-white font-medium">Pakistan (Remote Worldwide)</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cta transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cta transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cta transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cta transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
