export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "student-performance-predictor",
    title: "Student Performance Predictor",
    category: "Machine Learning | Regression",
    description:
      "An interactive machine learning application that predicts student exam performance from user-provided academic and lifestyle features.",
    highlights: [
      "Supervised regression",
      "Feature preprocessing",
      "Model training and evaluation",
      "Interactive input form",
      "Real-time prediction interface",
      "Streamlit deployment",
    ],
    tech: ["Python", "scikit-learn", "Streamlit"],
    github: "https://github.com/prawinkumarmahto91-gif/Student-Performance-Predictor",
    demo: "https://student-performance-predictor-sdrvbg8aocxhrqmnruh7w8.streamlit.app/",
  },
  {
    slug: "cat-vs-dog-classifier",
    title: "Cat vs. Dog Image Classifier",
    category: "Deep Learning | Computer Vision",
    description:
      "A computer vision application that classifies uploaded images as cats or dogs using a ResNet18-based deep learning model.",
    highlights: [
      "PyTorch-based image classification",
      "ResNet18 model architecture",
      "Image upload workflow",
      "Model inference",
      "Streamlit interface",
    ],
    tech: ["Python", "PyTorch", "Torchvision", "ResNet18", "Streamlit"],
    // add github / demo once the URLs exist
    github: "https://github.com/prawinkumarmahto91-gif/CatDogApp",
    demo: "https://catdogapp.streamlit.app/",
  },
  {
    slug: "diabetes-risk-prediction",
    title: "Diabetes Risk Prediction",
    category: "Machine Learning | Classification",
    description:
      "An educational machine learning application that estimates diabetes risk from user-provided health parameters.",
    highlights: [
      "Classification workflow",
      "Input preprocessing",
      "Model-based predictions",
      "Interactive Streamlit interface",
    ],
    tech: ["Python", "scikit-learn", "Streamlit"],
    note: "Educational project, not a medically validated diagnostic tool.",
    github: "https://github.com/prawinkumarmahto91-gif/DiabetesRiskPreiction",
    demo: "https://diabetesriskpreiction.streamlit.app/",
  },
];