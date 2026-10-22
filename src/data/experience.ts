export interface Experience {
  role: string;
  organization: string;
  program?: string;
  inAssociationWith?: string;
  dates: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "AI Data Analytics Intern",
    organization: "InAmigos Foundation",
    dates: "28 August 2026 – 10 September 2026",
    description:
      "Completed an AI Data Analytics internship, gaining hands-on exposure to AI and data analytics workflows.",
  },
  {
    role: "Data Analytics with AI Intern",
    organization: "IBM SkillsBuild",
    program: "IBM SkillsBuild program",
    inAssociationWith: "AICTE and BharatCares",
    dates: "17 August 2026 – 30 September 2026",
    description:
      "Completed a six-week internship focused on data analytics with AI under the IBM SkillsBuild program.",
  },
  {
    role: "Machine Learning and Applied AI Intern",
    organization: "IBM SkillsBuild",
    program: "IBM SkillsBuild program",
    inAssociationWith: "AICTE and BharatCares",
    dates: "24 August 2026 – 30 September 2026",
    description:
      "Completed a six-week internship focused on machine learning and applied AI.",
  },
];