"use client";

import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-10">

      <div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black leading-tight"
        >
          Environmental
          <span className="block bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Intelligence Platform
          </span>
        </motion.h2>

        <p className="text-zinc-400 mt-4 text-lg">
          Real-time nuclear-assisted agricultural monitoring
        </p>

      </div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(34,197,94,0.2)",
            "0 0 40px rgba(34,197,94,0.4)",
            "0 0 20px rgba(34,197,94,0.2)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-2xl backdrop-blur-xl"
      >

        <div className="relative">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />

        </div>

        <span className="text-green-400 font-semibold">
          Live System Online
        </span>

      </motion.div>

    </div>
  );
}