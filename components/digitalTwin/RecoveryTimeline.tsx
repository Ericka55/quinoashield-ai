"use client";

import { motion } from "framer-motion";

const stages = [
  {
    day: "Day 1",
    status: "High Pest Activity",
    color: "bg-red-500",
  },
  {
    day: "Day 4",
    status: "SIT Deployment Active",
    color: "bg-orange-500",
  },
  {
    day: "Day 7",
    status: "Infestation Stabilizing",
    color: "bg-yellow-500",
  },
  {
    day: "Day 10",
    status: "Environmental Recovery",
    color: "bg-green-500",
  },
  {
    day: "Day 14",
    status: "Crop Resilience Restored",
    color: "bg-emerald-400",
  },
];

export default function RecoveryTimeline() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

      <div className="mb-10">

        <h2 className="text-3xl font-black">
          Environmental Recovery Timeline
        </h2>

        <p className="text-zinc-400 mt-3">
          Predictive agricultural stabilization after SIT intervention
        </p>

      </div>

      <div className="space-y-8">

        {stages.map((stage, index) => (
          <motion.div
            key={stage.day}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
            }}
            className="flex items-center gap-6"
          >

            <div className={`w-5 h-5 rounded-full ${stage.color}`} />

            <div>

              <h3 className="text-xl font-bold">
                {stage.day}
              </h3>

              <p className="text-zinc-400">
                {stage.status}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}