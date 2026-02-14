import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-white/5 text-center">
      <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Riya Jagtap
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
