import { motion } from "framer-motion";
import { Section } from "./Section";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Some of the key projects I've worked on recently.">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors shadow-lg"
          >
            {/* Image Overlay */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-none whitespace-pre-line text-justify">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
