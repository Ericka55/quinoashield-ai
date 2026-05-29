"use client";

import { motion } from "framer-motion";

type Props = {
  probability: number;
  climateStress: string;
  radiationEfficiency: string;
  explanation: string;
};

export default function ScientificInsights({
  probability,
  climateStress,
  radiationEfficiency,
  explanation,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/5 border border-green-500/20 rounded-[32px] p-8 backdrop-blur-2xl"
    >

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-3xl font-black">
            Scientific Intelligence Engine
          </h2>

          <p className="text-zinc-400 mt-2">
            Predictive nuclear-assisted analysis
          </p>
        </div>

        <div className="px-5 py-2 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 font-semibold">
          AI ACTIVE
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <Metric
          label="Infestation Probability"
          value={`${probability}%`}
        />

        <Metric
          label="Climate Stress"
          value={climateStress}
        />

        <Metric
          label="Radiation Efficiency"
          value={radiationEfficiency}
        />

      </div>

      <div className="bg-black/20 border border-white/5 rounded-3xl p-6">

        <h3 className="text-2xl font-bold mb-4">
          Scientific Explanation
        </h3>

        <p className="text-zinc-300 leading-relaxed text-lg">
          {explanation}
        </p>

      </div>

    </motion.div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-black/20 rounded-3xl p-6 border border-white/5">

      <p className="text-zinc-500 text-sm">
        {label}
      </p>

      <h3 className="text-4xl font-black mt-4 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
        {value}
      </h3>

    </div>
  );
}