import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Alex<span className="text-primary">Dev</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                activeClass="text-primary font-semibold"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border absolute w-full px-4 py-4 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            className="w-full mt-4"
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
}
