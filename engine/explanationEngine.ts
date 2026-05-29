type ExplanationResult = {
  probability: number;
  climateStress: string;
  radiationEfficiency: string;
  explanation: string;
};

export function generateScientificExplanation(
  humidity: number,
  temperature: number,
  pestActivity: number,
  risk: string
): ExplanationResult {

  let probability =
    Math.min(
      95,
      Math.floor(
        pestActivity * 0.6 +
        humidity * 0.3 +
        temperature * 0.8
      )
    );

  let climateStress = "Low";

  if (humidity > 75 || temperature > 22) {
    climateStress = "Moderate";
  }

  if (humidity > 85 && temperature > 24) {
    climateStress = "High";
  }

  let radiationEfficiency = "87%";

  if (risk === "High") {
    radiationEfficiency = "94%";
  }

  const explanation =
    risk === "High"
      ? "Environmental conditions indicate accelerated pest propagation probability. SIT deployment combined with mutation-resistant quinoa variants is strongly recommended to reduce pesticide dependency and stabilize crop resilience."
      : risk === "Moderate"
      ? "Predictive environmental modeling suggests increasing biological activity. Preventive nuclear-assisted interventions may improve long-term agricultural stability."
      : "Environmental indicators remain stable. Continuous monitoring and predictive analysis are recommended.";

  return {
    probability,
    climateStress,
    radiationEfficiency,
    explanation,
  };
}