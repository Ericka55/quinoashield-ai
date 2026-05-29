"use client";

import { useEffect, useState } from "react";

import {
  generateSensorData,
  SensorData,
} from "@/data/mockData";

import { calculateRisk } from "@/engine/predictiveEngine";
import { getNuclearRecommendation } from "@/engine/nuclearEngine";
import { calculateSITStrategy } from "@/engine/sitEngine";
import { generateScientificExplanation } from "@/engine/explanationEngine";
import { autonomousDecisionEngine } from "@/engine/autonomousEngine";

import Sidebar from "../layout/Sidebar";
import Topbar from "./Topbar";
import BackgroundEffects from "../layout/BackgroundEffects";

import MetricCard from "./MetricCard";

import DigitalTwinMap from "../digitalTwin/DigitalTwinMap";
import SimulationPanel from "../digitalTwin/SimulationPanel";
import RecoveryTimeline from "../digitalTwin/RecoveryTimeline";
import SatelliteOverlay from "../digitalTwin/SatelliteOverlay";

import SustainabilityMetrics from "../charts/SustainabilityMetrics";
import ImpactChart from "../charts/ImpactChart";

import SITPanel from "../nuclear/SITPanel";
import ScientificInsights from "../nuclear/ScientificInsights";
import AutonomousDecisionPanel from "../nuclear/AutonomousDecisionPanel";

export default function Dashboard() {

  // =========================
  // REAL-TIME SENSOR DATA
  // =========================

  const [sensorData, setSensorData] =
    useState<SensorData>(generateSensorData());

  useEffect(() => {

    const interval = setInterval(() => {
      setSensorData(generateSensorData());
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // =========================
  // PREDICTIVE ANALYSIS
  // =========================

  const risk = calculateRisk(sensorData);

  const recommendation = getNuclearRecommendation(
    risk.level,
    sensorData.pestActivity
  );

  const sitStrategy = calculateSITStrategy(
    sensorData.pestActivity,
    sensorData.humidity,
    sensorData.temperature
  );

  const scientificInsights =
    generateScientificExplanation(
      sensorData.humidity,
      sensorData.temperature,
      sensorData.pestActivity,
      risk.level
    );

  const autonomousDecision =
    autonomousDecisionEngine(
      scientificInsights.probability,
      scientificInsights.climateStress,
      risk.level
    );

  return (
    <div className="flex bg-[#081018] text-white min-h-screen">

      <BackgroundEffects />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 relative z-10">

        {/* Header */}
        <Topbar />

        {/* ========================= */}
        {/* METRICS */}
        {/* ========================= */}

       <div
  id="dashboard"
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
>

          <MetricCard
            title="Temperature"
            value={`${sensorData.temperature.toFixed(1)}°C`}
            status="Optimal"
          />

          <MetricCard
            title="Humidity"
            value={`${sensorData.humidity.toFixed(0)}%`}
            status="Stable"
          />

          <MetricCard
            title="Pest Risk"
            value={risk.level}
            status="Monitoring"
          />

          <MetricCard
            title="Crop Health"
            value={`${100 - risk.probability}%`}
            status="Healthy"
          />

        </div>

        {/* ========================= */}
        {/* ANALYSIS + RECOMMENDATIONS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

          {/* Predictive Analysis */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <h3 className="text-2xl font-bold mb-8">
              Predictive Agronomic Analysis
            </h3>

            <div className="space-y-5">

              <AnalysisRow
                label="Infestation Probability"
                value={`${scientificInsights.probability}%`}
              />

              <AnalysisRow
                label="Climate Stress"
                value={scientificInsights.climateStress}
              />

              <AnalysisRow
                label="Radiation Efficiency"
                value={scientificInsights.radiationEfficiency}
              />

              <AnalysisRow
                label="Risk Level"
                value={risk.level}
              />

            </div>

          </div>

          {/* Nuclear Recommendations */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

            <h3 className="text-2xl font-bold mb-8">
              Nuclear Recommendations
            </h3>

            <div className="space-y-5">

              <RecommendationCard
                title={recommendation.title}
                desc={recommendation.description}
              />

              <RecommendationCard
                title="Mutation Breeding"
                desc="Climate-resistant irradiated quinoa variants suggested."
              />

              <RecommendationCard
                title="Food Irradiation"
                desc="Post-harvest preservation optimization available."
              />

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* DIGITAL TWIN */}
        {/* ========================= */}

        <div
  id="digital-twin"
  className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10"
>

          <DigitalTwinMap
            riskLevel={risk.level}
            sitActive={
              recommendation.title === "SIT Deployment"
            }
          />

          <SimulationPanel />

        </div>

        {/* ========================= */}
        {/* SUSTAINABILITY */}
        {/* ========================= */}

        <div className="mt-10">

          <SustainabilityMetrics />

        </div>

        {/* ========================= */}
        {/* IMPACT ANALYTICS */}
        {/* ========================= */}

        <div
  id="analytics"
  className="mt-10"
>

  <ImpactChart />

</div>

        {/* ========================= */}
        {/* SIT ENGINE */}
        {/* ========================= */}

<div
  id="nuclear-systems"
  className="mt-10"
>

          <SITPanel
            pest={sitStrategy.pest}
            severity={sitStrategy.severity}
            sterileInsects={sitStrategy.sterileInsects}
            deploymentZone={sitStrategy.deploymentZone}
            deploymentTime={sitStrategy.deploymentTime}
            expectedReduction={sitStrategy.expectedReduction}
            recommendation={sitStrategy.recommendation}
          />

        </div>

        {/* ========================= */}
        {/* SCIENTIFIC INSIGHTS */}
        {/* ========================= */}

        <div className="mt-10">

          <ScientificInsights
            probability={scientificInsights.probability}
            climateStress={scientificInsights.climateStress}
            radiationEfficiency={
              scientificInsights.radiationEfficiency
            }
            explanation={scientificInsights.explanation}
          />

        </div>

        {/* ========================= */}
        {/* SATELLITE + RECOVERY */}
        {/* ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

          <SatelliteOverlay
            probability={scientificInsights.probability}
          />

          <RecoveryTimeline />

        </div>

        {/* ========================= */}
        {/* AUTONOMOUS ENGINE */}
        {/* ========================= */}

        <div className="mt-10">

          <AutonomousDecisionPanel
            strategy={autonomousDecision.strategy}
            priority={autonomousDecision.priority}
            impact={autonomousDecision.impact}
            reasoning={autonomousDecision.reasoning}
          />

        </div>

      </main>

    </div>
  );
}

// =========================
// ANALYSIS ROW
// =========================

function AnalysisRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4">

      <span className="text-zinc-400">
        {label}
      </span>

      <span className="font-semibold text-orange-400">
        {value}
      </span>

    </div>
  );
}

// =========================
// RECOMMENDATION CARD
// =========================

function RecommendationCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

      <h4 className="font-semibold text-lg">
        {title}
      </h4>

      <p className="text-zinc-400 mt-2 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}