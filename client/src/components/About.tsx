import { motion } from "framer-motion";
import { Section } from "./Section";
import { PROFILE } from "@/lib/data";
import { Brain, Rocket, Code2, Globe } from "lucide-react";

const STATS = [
  { label: "Frontend", icon: Code2, desc: "Pixel-perfect UIs" },
  { label: "Backend", icon: Globe, desc: "Scalable APIs" },
  { label: "AI/ML", icon: Brain, desc: "Intelligent models" },
  { label: "DevOps", icon: Rocket, desc: "CI/CD & Cloud" },
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="A little bit about who I am and what I do.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              {PROFILE.bio}
            </p>
            <p>
              My journey in tech started with a curiosity for how things work, which led me to explore the depths of computer science. Over the years, I've honed my skills in both frontend elegance and backend robustness.
            </p>
            <p>
              Currently, I am focused on the intersection of <span className="text-primary font-medium">Web Development</span> and <span className="text-primary font-medium">Artificial Intelligence</span>, creating adaptive applications that learn and evolve.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary/30 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-secondary/50 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
