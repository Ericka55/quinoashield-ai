"use client";

import { motion } from "framer-motion";

type Props = {
  pest: string;
  severity: string;
  sterileInsects: number;
  deploymentZone: string;
  deploymentTime: string;
  expectedReduction: string;
  recommendation: string;
};

export default function SITPanel({
  pest,
  severity,
  sterileInsects,
  deploymentZone,
  deploymentTime,
  expectedReduction,
  recommendation,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 border border-orange-500/20 rounded-[32px] p-8 backdrop-blur-2xl"
    >

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-3xl font-black">
            SIT Intelligence Engine
          </h2>

          <p className="text-zinc-400 mt-2">
            Sterile Insect Technique Optimization
          </p>
        </div>

        <div className="px-5 py-2 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold">
          {severity} Risk
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InfoCard
          label="Detected Pest"
          value={pest}
        />

        <InfoCard
          label="Sterile Insects"
          value={`${sterileInsects.toLocaleString()} Units`}
        />

        <InfoCard
          label="Deployment Zone"
          value={deploymentZone}
        />

        <InfoCard
          label="Optimal Release Time"
          value={deploymentTime}
        />

        <InfoCard
          label="Expected Pest Reduction"
          value={expectedReduction}
        />

        <InfoCard
          label="Environmental Impact"
          value="Low Chemical Dependency"
        />

      </div>

      <div className="mt-8 bg-black/20 rounded-3xl p-6 border border-white/5">

        <h3 className="text-xl font-bold mb-3">
          Scientific Recommendation
        </h3>

        <p className="text-zinc-300 leading-relaxed">
          {recommendation}
        </p>

      </div>

    </motion.div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-black/20 rounded-3xl p-5 border border-white/5">

      <p className="text-zinc-500 text-sm">
        {label}
      </p>

      <h3 className="text-xl font-semibold mt-3">
        {value}
      </h3>

    </div>
  );
}