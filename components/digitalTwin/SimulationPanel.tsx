"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SimulationPanel() {

  const [day, setDay] = useState(7);

  const getRisk = () => {
    if (day < 5) return "Low";
    if (day < 10) return "Moderate";
    return "High";
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

      <h2 className="text-3xl font-bold mb-8">
        Predictive Simulation Timeline
      </h2>

      <div className="space-y-8">

        <div>
          <div className="flex justify-between mb-3">
            <span className="text-zinc-400">
              Simulation Day
            </span>

            <span className="text-orange-400 font-bold">
              Day {day}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={14}
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <motion.div
          key={day}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 rounded-3xl p-6 border border-white/5"
        >

          <h3 className="text-2xl font-semibold mb-4">
            Environmental Projection
          </h3>

          <div className="space-y-4">

            <Row
              label="Projected Pest Risk"
              value={getRisk()}
            />

            <Row
              label="Climate Stability"
              value={day > 10 ? "Unstable" : "Stable"}
            />

            <Row
              label="Crop Stress"
              value={day > 8 ? "Increasing" : "Low"}
            />

            <Row
              label="Recommended Action"
              value={
                day > 10
                  ? "Activate SIT Deployment"
                  : "Continue Monitoring"
              }
            />

          </div>

        </motion.div>

      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-3">

      <span className="text-zinc-400">
        {label}
      </span>

      <span className="text-green-400 font-medium">
        {value}
      </span>

    </div>
  );
}