"use client";

import { motion } from "framer-motion";

type Props = {
  strategy: string;
  priority: string;
  impact: string;
  reasoning: string;
};

export default function AutonomousDecisionPanel({
  strategy,
  priority,
  impact,
  reasoning,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-orange-500/10 to-green-500/10 border border-orange-500/20 rounded-[32px] p-8 backdrop-blur-2xl"
    >

      <div className="flex items-center justify-between mb-10">

        <div>

          <h2 className="text-4xl font-black">
            Autonomous Decision Engine
          </h2>

          <p className="text-zinc-400 mt-3">
            AI-driven nuclear agricultural optimization
          </p>

        </div>

        <div className="px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
          {priority}
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-black/20 border border-white/5 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Selected Strategy
          </p>

          <h3 className="text-3xl font-black mt-4">
            {strategy}
          </h3>

        </div>

        <div className="bg-black/20 border border-white/5 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Expected Impact
          </p>

          <h3 className="text-3xl font-black mt-4">
            {impact}
          </h3>

        </div>

      </div>

      <div className="mt-8 bg-black/20 border border-white/5 rounded-3xl p-6">

        <h3 className="text-2xl font-bold mb-4">
          Autonomous Scientific Reasoning
        </h3>

        <p className="text-zinc-300 text-lg leading-relaxed">
          {reasoning}
        </p>

      </div>

    </motion.div>
  );
}