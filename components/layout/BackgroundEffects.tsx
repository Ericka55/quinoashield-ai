"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {

  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-orange-500/10 blur-[160px]" />

      {/* Green Glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-500/10 blur-[160px]" />

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
          }}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

    </div>
  );
}