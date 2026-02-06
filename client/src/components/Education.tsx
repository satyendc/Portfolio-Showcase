import { motion } from "framer-motion";
import { Section } from "./Section";
import { EDUCATION, CERTIFICATIONS } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <Section 
      id="education" 
      title="Education & Certifications" 
      className="bg-secondary/20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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

        {/* Certifications List */}
        {CERTIFICATIONS && CERTIFICATIONS.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 p-8 rounded-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold font-display">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
