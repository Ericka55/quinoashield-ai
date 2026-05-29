
export function getNuclearRecommendation(
  risk: string,
  pestActivity: number
) {

  if (risk === "Low") {
    return {
      title: "Monitoring",
      description:
        "Environmental conditions remain stable. Continue predictive monitoring.",
    };
  }

  if (risk === "Moderate") {
    return {
      title: "Mutation Breeding",
      description:
        "Climate-resistant irradiated quinoa variants are recommended.",
    };
  }

  return {
    title: "SIT Deployment",
    description:
      "Sterile Insect Technique deployment recommended in high-risk agricultural zones.",
  };
}