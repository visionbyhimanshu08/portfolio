import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Lightbulb, Search, Pencil, Rocket } from "lucide-react";
import type { ProcessStep } from "@shared/schema";

const processSteps: ProcessStep[] = [
  {
    id: "1",
    number: 1,
    title: "Discovery",
    description: "Understanding your business goals, target audience, and project requirements through research and stakeholder interviews.",
  },
  {
    id: "2",
    number: 2,
    title: "Research",
    description: "Conducting user research, competitive analysis, and gathering insights to inform design decisions.",
  },
  {
    id: "3",
    number: 3,
    title: "Design",
    description: "Creating wireframes, prototypes, and high-fidelity designs with iterative feedback and refinement.",
  },
  {
    id: "4",
    number: 4,
    title: "Delivery",
    description: "Finalizing designs, creating design specifications, and ensuring smooth handoff to development teams.",
  },
];

const iconMap = {
  1: Lightbulb,
  2: Search,
  3: Pencil,
  4: Rocket,
};

export function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-24 md:py-32 bg-card" data-testid="section-process" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-process-title">
            My Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
            A proven methodology for delivering exceptional design solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" style={{ top: "80px" }} />

          {processSteps.map((step, index) => {
            const Icon = iconMap[step.number as keyof typeof iconMap];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <Card className="p-6 hover-elevate active-elevate-2 transition-all duration-300 h-full" data-testid={`card-process-${step.id}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2" data-testid={`text-process-number-${step.id}`}>
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3" data-testid={`text-process-title-${step.id}`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-process-description-${step.id}`}>
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
