"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    day: "Day 1",
    risk: 20,
  },
  {
    day: "Day 3",
    risk: 32,
  },
  {
    day: "Day 5",
    risk: 48,
  },
  {
    day: "Day 7",
    risk: 62,
  },
  {
    day: "Day 10",
    risk: 40,
  },
  {
    day: "Day 14",
    risk: 18,
  },
];

export default function ImpactChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h3 className="text-2xl font-bold">
            Pest Risk Prediction
          </h3>

          <p className="text-zinc-400 mt-2">
            Simulation after SIT deployment
          </p>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-2xl text-green-400">
          -42% Risk Reduction
        </div>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />

            <XAxis dataKey="day" stroke="#a1a1aa" />

            <YAxis stroke="#a1a1aa" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="risk"
              stroke="#f97316"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}