import { motion } from "framer-motion";
import { Section } from "./Section";
import { EDUCATION } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section 
      id="education" 
      title="Education" 
      className="bg-secondary/20"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{edu.school}</h3>
              <p className="text-primary font-medium text-sm mb-2">{edu.degree}</p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{edu.year}</span>
                <span>{edu.details}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
