import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";
import { SiDribbble, SiBehance, SiGithub } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: SiDribbble, label: "Dribbble", href: "#" },
    { icon: SiBehance, label: "Behance", href: "#" },
    { icon: SiGithub, label: "GitHub", href: "#" },
  ];

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
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4" data-testid="text-footer-brand">
              Alex Morgan
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating premium digital experiences that delight users and drive business results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Services", "Work", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-background rounded-md flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                    aria-label={link.label}
                    data-testid={`link-social-${link.label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
