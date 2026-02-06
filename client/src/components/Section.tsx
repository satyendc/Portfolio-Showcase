import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 px-4 md:px-8 relative overflow-hidden", className)}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
                <span className="text-gradient">{title}</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-full" />
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-4">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
