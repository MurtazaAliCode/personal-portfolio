"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [`${sparkle.x}%`, `${sparkle.x + (Math.random() * 2 - 1)}%`],
            y: [`${sparkle.y}%`, `${sparkle.y + (Math.random() * 2 - 1)}%`],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cta/30 blur-[1px] shadow-[0_0_8px_rgba(34,197,94,0.2)]"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
