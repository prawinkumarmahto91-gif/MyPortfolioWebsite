export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Programming", skills: ["C++", "Python", "C", "JavaScript", "HTML", "CSS"] },
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Classification", "Model Training", "Model Evaluation", "scikit-learn"],
  },
  {
    title: "Deep Learning and Computer Vision",
    skills: ["PyTorch", "Torchvision", "ResNet18", "Image Classification", "Computer Vision"],
  },
  { title: "Data and Libraries", skills: ["NumPy", "Pandas", "Matplotlib"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Streamlit"] },
  {
    title: "Computer Science",
    skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"],
  },
];