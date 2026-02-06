import { motion } from "framer-motion";
import { Section } from "./Section";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="My proficiency across various tech domains.">
      <div className="grid md:grid-cols-2 gap-8">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{category.category}</h3>
            </div>
            
            <div className="space-y-6">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
