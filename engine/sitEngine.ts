type SITResult = {
  pest: string;
  severity: string;
  sterileInsects: number;
  deploymentZone: string;
  deploymentTime: string;
  expectedReduction: string;
  recommendation: string;
};

export function calculateSITStrategy(
  pestActivity: number,
  humidity: number,
  temperature: number
): SITResult {

  let severity = "Low";
  let sterileInsects = 500;

  if (pestActivity > 40) {
    severity = "Moderate";
    sterileInsects = 2000;
  }

  if (pestActivity > 70) {
    severity = "High";
    sterileInsects = 5000;
  }

  let deploymentTime = "Early Morning";

  if (temperature > 22) {
    deploymentTime = "Late Afternoon";
  }

  let deploymentZone = "North Agricultural Sector";

  if (humidity > 75) {
    deploymentZone = "Central Humid Zone";
  }

  return {
    pest: "Quinoa Armyworm",
    severity,
    sterileInsects,
    deploymentZone,
    deploymentTime,
    expectedReduction:
      severity === "High"
        ? "62%"
        : severity === "Moderate"
        ? "38%"
        : "15%",
    recommendation:
      severity === "High"
        ? "Immediate SIT deployment strongly recommended."
        : severity === "Moderate"
        ? "Preventive SIT deployment recommended."
        : "Continue environmental monitoring.",
  };
}