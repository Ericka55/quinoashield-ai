"use client";

import { motion } from "framer-motion";

type Props = {
  probability: number;
};

export default function SatelliteOverlay({
  probability,
}: Props) {

  const intensity =
    probability > 70
      ? "from-red-500/40"
      : probability > 40
      ? "from-yellow-500/30"
      : "from-green-500/30";

  return (
    <motion.div
      animate={{
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className={`relative overflow-hidden rounded-[32px] border border-white/10 h-[350px] bg-gradient-to-br ${intensity} to-[#081018]`}
    >

      {/* Fake Satellite Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radar Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.6],
          opacity: [0.5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute w-40 h-40 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 p-8 h-full flex flex-col justify-between">

        <div>

          <h2 className="text-3xl font-black">
            Satellite Environmental Scan
          </h2>

          <p className="text-zinc-300 mt-3">
            Real-time agricultural stress visualization
          </p>

        </div>

        <div>

          <div className="text-7xl font-black bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            {probability}%
          </div>

          <p className="text-zinc-300 text-xl mt-2">
            Infestation Probability
          </p>

        </div>

      </div>

    </motion.div>
  );
}