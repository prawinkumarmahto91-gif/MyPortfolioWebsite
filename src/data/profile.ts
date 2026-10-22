export const profile = {
  name: "Prawin Kumar",
  location: "Bhopal, Madhya Pradesh, India",
  email: "prawinkumarmahto91@gmail.com",
  phone: "+91-9905993262",
  eyebrow: "ASPIRING AI/ML ENGINEER",
  headline: "Building intelligent solutions with machine learning and code.",
  intro:
    "I'm an Information Technology student passionate about machine learning, deep learning, computer vision, and solving real-world problems through practical applications.",
  status: { show: true, text: "Open to Internship Opportunities" },
  photo: "/images/profile.jpg",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/prawinkumarmahto91-gif",
    linkedin: "https://linkedin.com/in/prawin-kumar91",
    leetcode: "https://leetcode.com/u/Prawinkkk",
  },
  education: {
    school: "University Institute of Technology, RGPV",
    degree: "B.Tech in Information Technology",
    years: "2025–2029",
    cgpa: "8.26/10",
  },
  // Self-reported figures, not platform-verified
  proof: [
    { value: "500+", label: "DSA problems solved" },
    { value: "8.26/10", label: "CGPA" },
    { value: "3", label: "Featured ML/DL projects" },
  ],
} as const;