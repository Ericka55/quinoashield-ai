import { SensorData } from "@/data/mockData";

export function calculateRisk(data: SensorData) {

  let score = 0;

  if (data.humidity > 75) score += 30;

  if (data.temperature > 20) score += 25;

  if (data.pestActivity > 60) score += 35;

  if (data.soilMoisture < 45) score += 10;

  if (score < 30) {
    return {
      level: "Low",
      color: "green",
      probability: score,
    };
  }

  if (score < 70) {
    return {
      level: "Moderate",
      color: "yellow",
      probability: score,
    };
  }

  return {
    level: "High",
    color: "red",
    probability: score,
  };
}