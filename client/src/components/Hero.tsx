import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient">{PROFILE.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              {PROFILE.role}
            </p>

            <p className="text-lg text-muted-foreground/80 mb-10 max-w-lg leading-relaxed">
              {PROFILE.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/10 text-lg h-14 px-8 rounded-xl"
                asChild
              >
                <a href="/resume.pdf" download="Riya_Jagtap_Resume.pdf">
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex gap-6 text-muted-foreground">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl opacity-20 blur-2xl transform rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                 <img 
                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                   alt="Developer Workspace"
                   className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="font-mono text-sm text-primary">
                     &lt;AI Engineer /&gt;
                   </div>
                 </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 top-10 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <span className="font-bold">2+</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Years of</p>
                    <p className="font-bold">Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-20 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <span className="font-bold">GenAI</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Focus</p>
                    <p className="font-bold">Specialist</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
