"use client";

import { motion } from "framer-motion";

export default function MetricCard({
  title,
  value,
  status,
}: {
  title: string;
  value: string;
  status: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl hover:border-orange-400/30 transition"
    >
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-4xl font-bold mt-4">
        {value}
      </h3>

      <div className="mt-6 inline-flex px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
        {status}
      </div>
    </motion.div>
  );
}