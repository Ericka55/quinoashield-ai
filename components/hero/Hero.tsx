"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Activity,
  Radiation,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081018]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(to_right,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 container mx-auto px-6 py-20">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 border border-orange-400/30 bg-orange-400/10 px-5 py-2 rounded-full mb-10"
        >
          <Radiation className="text-orange-400 w-5 h-5" />

          <span className="text-orange-300 text-sm tracking-wide">
            Nuclear-Assisted Smart Agriculture
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl lg:text-8xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                QuinoaShield
              </span>

              <br />

              <span className="text-white">
                Nexus
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-zinc-400 text-2xl mt-8 leading-relaxed max-w-2xl"
            >
              Predictive environmental intelligence platform
              using peaceful nuclear technologies for sustainable
              quinoa production and climate resilience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-5 mt-10"
            >
              <button className="bg-orange-500 hover:bg-orange-400 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/30">
                Launch Dashboard
              </button>

              <button className="border border-zinc-700 hover:border-green-400 transition px-8 py-4 rounded-2xl font-semibold text-lg">
                Live Simulation
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">

              <StatCard
                icon={<Leaf />}
                title="31%"
                subtitle="Crop Resilience"
              />

              <StatCard
                icon={<Shield />}
                title="-42%"
                subtitle="Pesticide Usage"
              />

              <StatCard
                icon={<Activity />}
                title="94%"
                subtitle="Prediction Accuracy"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 overflow-hidden shadow-2xl">

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 blur-[100px]" />

              <div className="space-y-6">

                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">
                    Live Environmental Monitoring
                  </h3>

                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    ONLINE
                  </div>
                </div>

                {/* Fake Graph */}
                <div className="h-64 rounded-3xl bg-gradient-to-br from-orange-500/10 to-green-500/10 border border-white/10 flex items-center justify-center relative overflow-hidden">

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="text-center"
                  >
                    <Radiation className="w-20 h-20 text-orange-400 mx-auto mb-4" />

                    <p className="text-zinc-300 text-lg">
                      Predictive Nuclear Agronomy Engine
                    </p>
                  </motion.div>

                </div>

                {/* Data Rows */}
                <div className="space-y-4">

                  <DataRow
                    label="Pest Risk"
                    value="Moderate"
                    color="text-yellow-400"
                  />

                  <DataRow
                    label="Soil Health"
                    value="Optimal"
                    color="text-green-400"
                  />

                  <DataRow
                    label="Climate Stability"
                    value="Stable"
                    color="text-blue-400"
                  />

                  <DataRow
                    label="SIT Recommendation"
                    value="Suggested"
                    color="text-orange-400"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
      <div className="text-orange-400 mb-4">
        {icon}
      </div>

      <h4 className="text-3xl font-bold">
        {title}
      </h4>

      <p className="text-zinc-400 mt-2">
        {subtitle}
      </p>
    </div>
  );
}

function DataRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3">
      <span className="text-zinc-400">
        {label}
      </span>

      <span className={`font-semibold ${color}`}>
        {value}
      </span>
    </div>
  );
}