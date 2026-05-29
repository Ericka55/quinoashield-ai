"use client";

import { useState } from "react";

import {
  LayoutDashboard,
  Map,
  Radiation,
  BarChart3,
  Activity,
  ChevronRight,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    section: "dashboard",
  },
  {
    icon: Map,
    label: "Digital Twin",
    section: "digital-twin",
  },
  {
    icon: Radiation,
    label: "Nuclear Systems",
    section: "nuclear-systems",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    section: "analytics",
  },
];

export default function Sidebar() {

  const [active, setActive] =
    useState("dashboard");

  const scrollToSection = (
    sectionId: string
  ) => {

    setActive(sectionId);

    const section =
      document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="w-[260px] min-h-screen sticky top-0 border-r border-white/10 bg-[#0b141d]/95 backdrop-blur-2xl p-6 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-14">

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-2xl shadow-lg">

          <Activity className="w-6 h-6 text-white" />

        </div>

        <div>

          <h1 className="font-black text-xl">
            QuinoaShield
          </h1>

          <p className="text-zinc-500 text-sm">
            Nexus Platform
          </p>

        </div>

      </div>

      {/* Navigation */}
      <nav className="space-y-3">

        {items.map((item) => {

          const Icon = item.icon;

          const isActive =
            active === item.section;

          return (
            <button
              key={item.label}
              onClick={() =>
                scrollToSection(item.section)
              }
              className={`
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                group

                ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500/20 to-green-500/10 border border-orange-500/20 text-white shadow-lg"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `}
            >

              <div className="flex items-center gap-4">

                <Icon
                  className={`
                    w-5
                    h-5
                    transition

                    ${
                      isActive
                        ? "text-orange-400"
                        : "group-hover:text-orange-300"
                    }
                  `}
                />

                <span className="font-medium">
                  {item.label}
                </span>

              </div>

              <ChevronRight
                className={`
                  w-4
                  h-4
                  transition-transform

                  ${
                    isActive
                      ? "translate-x-1 text-orange-400"
                      : "text-zinc-600"
                  }
                `}
              />

            </button>
          );
        })}

      </nav>

      {/* Bottom Status */}
      <div className="absolute bottom-8 left-6 right-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

          <div className="flex items-center gap-3 mb-4">

            <div className="relative">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />

            </div>

            <span className="text-green-400 font-semibold">
              System Operational
            </span>

          </div>

          <p className="text-zinc-500 text-sm leading-relaxed">
            Autonomous agricultural monitoring
            and nuclear-assisted predictive
            intelligence are currently active.
          </p>

        </div>

      </div>

    </aside>
  );
}