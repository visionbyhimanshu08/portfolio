import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Smartphone, Monitor, Palette, LayoutGrid } from "lucide-react";
import type { Service } from "@shared/schema";

const services: Service[] = [
  {
    id: "1",
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that delight users and drive engagement through thoughtful design decisions.",
    icon: "palette",
  },
  {
    id: "2",
    title: "Mobile App Design",
    description: "Designing native iOS and Android applications with pixel-perfect interfaces optimized for touch interactions and mobile contexts.",
    icon: "smartphone",
  },
  {
    id: "3",
    title: "Web Design",
    description: "Building responsive websites and web applications that work seamlessly across all devices and screen sizes with modern aesthetics.",
    icon: "monitor",
  },
  {
    id: "4",
    title: "Design Systems",
    description: "Developing scalable design systems and component libraries that ensure consistency and accelerate product development.",
    icon: "layoutgrid",
  },
];

const iconMap = {
  palette: Palette,
  smartphone: Smartphone,
  monitor: Monitor,
  layoutgrid: LayoutGrid,
};

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 md:py-32 bg-background" data-testid="section-services" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-services-title">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive design services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${service.id}`}>
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${service.id}`}>
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
