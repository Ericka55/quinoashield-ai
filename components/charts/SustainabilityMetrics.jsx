"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    title: "Pesticide Reduction",
    value: "-42%",
  },
  {
    title: "Crop Resilience",
    value: "+31%",
  },
  {
    title: "Water Efficiency",
    value: "+18%",
  },
  {
    title: "Food Preservation",
    value: "+27%",
  },
];

export default function SustainabilityMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {metrics.map((metric) => (
        <motion.div
          key={metric.title}
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6"
        >

          <p className="text-zinc-400 text-sm">
            {metric.title}
          </p>

          <h3 className="text-5xl font-black mt-5 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            {metric.value}
          </h3>

        </motion.div>
      ))}

    </div>
  );
}