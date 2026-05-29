type StrategyResult = {
  strategy: string;
  priority: string;
  impact: string;
  reasoning: string;
};

export function autonomousDecisionEngine(
  probability: number,
  climateStress: string,
  risk: string
): StrategyResult {

  if (
    probability > 75 &&
    climateStress === "High"
  ) {
    return {
      strategy: "Integrated Nuclear Response",
      priority: "Critical",
      impact: "Maximum Environmental Stabilization",
      reasoning:
        "Combined SIT deployment, mutation-resistant quinoa variants, and irradiation-assisted preservation are recommended to rapidly contain infestation propagation and improve regional crop resilience.",
    };
  }

  if (risk === "Moderate") {
    return {
      strategy: "Preventive Mutation Breeding",
      priority: "Elevated",
      impact: "Long-Term Crop Adaptation",
      reasoning:
        "Climate-adaptive irradiated quinoa variants are recommended to reduce future infestation vulnerability and strengthen environmental sustainability.",
    };
  }

  return {
    strategy: "Predictive Monitoring",
    priority: "Normal",
    impact: "Continuous Environmental Surveillance",
    reasoning:
      "Environmental indicators remain stable. Autonomous monitoring and predictive analysis should continue to maintain agricultural equilibrium.",
  };
}