import { Code2, Brain, Rocket, Database, Layout, Smartphone } from "lucide-react";

export const PROFILE = {
  name: "Riya Jagtap",
  role: "AI-Focused Software Engineer",
  tagline: "Designing intelligent, scalable solutions that merge reasoning and automation.",
  bio: "AI-Focused Software Engineer with 2+ years of experience in backend and cloud-native system development. Skilled in Python, C/C++, and Java, with hands-on experience across OCI Functions, containerized deployments, and automation pipelines. Currently exploring Generative AI, LLM-based applications, and prompt engineering.",
  email: "jagtapriya20@gmail.com",
  github: "https://github.com", // Placeholder
  linkedin: "https://www.linkedin.com/in/riyajagtap/",
  location: "Pune, India"
};

export const SKILLS = [
  {
    category: "Programming & Frameworks",
    icon: Code2,
    items: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "FastAPI", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "REST APIs", level: 95 },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: [
      { name: "Generative AI", level: 90 },
      { name: "LLMs (OpenAI, Gemini)", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "NLP", level: 80 },
      { name: "TensorFlow", level: 75 },
    ]
  },
  {
    category: "Cloud & MLOps",
    icon: Rocket,
    items: [
      { name: "OCI Functions", level: 85 },
      { name: "Docker & Kubernetes", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "CI/CD Pipelines", level: 85 },
    ]
  },
  {
    category: "Data & Databases",
    icon: Database,
    items: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Data Processing", level: 90 },
    ]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Associate Consultant",
    company: "Oracle, Pune",
    period: "July 2023 - Present",
    description: "Developed Java-based data extraction utilities improving migration accuracy by 30%. Extended Oracle BRM functionalities using C-based custom opcodes, reducing manual effort by 20%. Automated event rerating pipelines reducing processing time by 40%."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "RAG-based GenAI Assistant",
    description: "Built a Retrieval-Augmented Generation (RAG) system for contextual document intelligence for BRM OCOMC component using LangChain and Vector Databases.",
    tech: ["Python", "LangChain", "Vector Database", "LLM", "Cline", "MCP"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Suspicious Activity Detection",
    description: "Designed a real-time video surveillance system for anomaly detection using deep learning (CNN + LRCN). Achieved 20% higher detection accuracy.",
    tech: ["Deep Learning", "Python", "CNN", "LRCN"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Engineering",
    school: "Vishwakarma Institute of Technology, Pune",
    year: "2023",
    details: "CGPA: 9.13"
  },
  {
    degree: "Diploma in Computer Technology",
    school: "K.K. Wagh Polytechnic, Nashik",
    year: "2020",
    details: "Percentage: 95.26%"
  }
];

export const CERTIFICATIONS = [
  "Oracle Cloud Infrastructure Generative AI Professional",
  "Oracle Cloud Infrastructure AI Foundation",
  "Oracle Cloud Infrastructure Data Science Professional",
  "Oracle AI Agent Studio Foundations Associate",
  "Oracle Certified Associate, Java SE 8 Programmer"
];
