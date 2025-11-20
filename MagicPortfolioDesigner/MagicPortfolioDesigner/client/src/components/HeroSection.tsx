import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/hero_portfolio_showcase_interface.png";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-display font-bold text-white mb-6"
            style={{ 
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              lineHeight: "1.1"
            }}
            data-testid="text-hero-title"
          >
            Crafting Premium
            <br />
            <span className="text-primary-foreground bg-primary/90 px-4 py-2 inline-block mt-2">
              Digital Experiences
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 mb-12 max-w-3xl mx-auto px-4"
          style={{ 
            letterSpacing: "0.01em",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            lineHeight: "1.6"
          }}
          data-testid="text-hero-subtitle"
        >
          UI/UX Designer specializing in creating beautiful, user-centered interfaces
          that drive results for modern brands
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("work")}
            className="min-w-[200px] backdrop-blur-lg bg-white/90 dark:bg-background/90 text-foreground border border-white/40 dark:border-border"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="min-w-[200px] backdrop-blur-lg bg-white/10 dark:bg-background/10 text-white border-white/40 hover:bg-white/20 dark:hover:bg-background/20"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/80 hover:text-white transition-colors"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
