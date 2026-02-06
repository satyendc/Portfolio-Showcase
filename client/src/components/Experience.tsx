import { motion } from "framer-motion";
import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section 
      id="experience" 
      title="Work Experience" 
      subtitle="My professional journey and career milestones."
      className="bg-secondary/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-primary/20 ml-4 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1 bg-background border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
