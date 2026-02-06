import { Code2, Brain, Rocket, Database, Layout, Smartphone } from "lucide-react";

export const PROFILE = {
  name: "Alex Dev",
  role: "Software Engineer / AI & Data Science",
  tagline: "Building intelligent digital experiences that scale.",
  bio: "I am a passionate Full Stack Developer with a specialization in AI and Data Science. I bridge the gap between robust software engineering and cutting-edge machine learning to build applications that are not just functional, but intelligent.",
  email: "hello@alexdev.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "San Francisco, CA"
};

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ]
  },
  {
    category: "Backend",
    icon: Database,
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 80 },
    ]
  },
  {
    category: "AI & Data",
    icon: Brain,
    items: [
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "Data Analysis (Pandas)", level: 92 },
      { name: "NLP", level: 80 },
      { name: "OpenAI API", level: 90 },
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Rocket,
    items: [
      { name: "Docker / Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Git / CI/CD", level: 95 },
      { name: "Figma", level: 70 },
    ]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description: "Leading the development of scalable SaaS platforms. Architected a microservices-based backend handling 50k+ daily users. Mentoring junior developers and implementing code quality standards."
  },
  {
    id: 2,
    role: "AI Engineer",
    company: "DataMind Analytics",
    period: "2019 - 2021",
    description: "Developed predictive models for customer churn using Python and Scikit-learn. Integrated ML models into a React dashboard for real-time visualization."
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Creative Studio",
    period: "2018 - 2019",
    description: "Collaborated with designers to translate Figma designs into pixel-perfect frontend code. Optimized website performance, achieving a 98/100 Lighthouse score."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "An intelligent resume generator that uses GPT-4 to tailor content based on job descriptions. Features real-time PDF generation.",
    tech: ["Next.js", "OpenAI API", "Tailwind", "Stripe"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "EcoTrack Analytics",
    description: "Dashboard for monitoring corporate carbon footprints. Visualizes complex datasets with interactive charts and maps.",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Nebula Chat",
    description: "Real-time collaboration platform with voice and video support. Built with WebRTC and WebSockets for low latency.",
    tech: ["TypeScript", "Socket.io", "WebRTC", "Redis"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "CryptoSentinel",
    description: "Automated trading bot with sentiment analysis from Twitter and Reddit data sources.",
    tech: ["Python", "FastAPI", "React", "Docker"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2019",
    details: "Specialization in Artificial Intelligence"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of Washington",
    year: "2017",
    details: "Dean's List, 3.9 GPA"
  }
];
