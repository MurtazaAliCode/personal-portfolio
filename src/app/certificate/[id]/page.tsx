"use client";

import { useParams, useRouter } from "next/navigation";
import { certificates } from "@/data/certificates";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Award, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params?.id === "string" ? params.id : "";
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-white mb-4">Certificate Not Found</h1>
        <Link href="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cert.image;
    link.download = `${cert.title}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cta/30">
      {/* Background elements to match the site */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cta/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 ai-grid opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Certificate Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-4 md:p-6 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-auto rounded-xl shadow-2xl border border-white/5"
              />
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-card p-8 border-l-4 border-cta">
              <div className="flex items-center gap-2 text-cta font-bold tracking-widest uppercase text-xs mb-4">
                <Award className="w-4 h-4" />
                Official Certification
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {cert.title}
              </h1>
              <div className="space-y-4 text-slate-400">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cta/70" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Issued By</p>
                    <p className="text-sm font-medium text-slate-200">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cta/70" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Date Issued</p>
                    <p className="text-sm font-medium text-slate-200">{cert.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleDownload}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Certificate
              </button>
              
              <div className="glass-card p-6 bg-white/[0.01]">
                <p className="text-xs text-slate-500 leading-relaxed text-center">
                  This certificate verifies the professional completion of the {cert.title} program.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
