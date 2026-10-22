export interface Certification {
  title: string;
  issuer: string;
  url?: string; // add a verification link when you have one
}

export const certifications: Certification[] = [
  {
    title: "IBM SkillsBuild Data Analytics with AI Internship Certificate",
    issuer: "AICTE and BharatCares",
  },
  {
    title: "AI Data Analytics Internship Certificate",
    issuer: "InAmigos Foundation",
  },
];