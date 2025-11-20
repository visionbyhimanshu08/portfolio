import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Figma, Palette, Smartphone, Code, Users, BarChart } from "lucide-react";
import type { Skill } from "@shared/schema";

const skillsData: Skill[] = [
  { id: "1", name: "Figma", category: "design", proficiency: 95 },
  { id: "2", name: "Adobe XD", category: "design", proficiency: 90 },
  { id: "3", name: "Sketch", category: "design", proficiency: 85 },
  { id: "4", name: "Prototyping", category: "design", proficiency: 92 },
  { id: "5", name: "User Research", category: "ux", proficiency: 90 },
  { id: "6", name: "Wireframing", category: "ux", proficiency: 95 },
  { id: "7", name: "Usability Testing", category: "ux", proficiency: 88 },
  { id: "8", name: "Information Architecture", category: "ux", proficiency: 85 },
  { id: "9", name: "HTML/CSS", category: "dev", proficiency: 80 },
  { id: "10", name: "JavaScript", category: "dev", proficiency: 75 },
  { id: "11", name: "React", category: "dev", proficiency: 70 },
  { id: "12", name: "Design Systems", category: "dev", proficiency: 90 },
];

const categoryIcons = {
  design: Palette,
  ux: Users,
  dev: Code,
};

const categoryNames = {
  design: "Design Tools",
  ux: "UX Methods",
  dev: "Development Knowledge",
};

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ["design", "ux", "dev"] as const;

  return (
    <section id="skills" className="py-24 md:py-32 bg-card" data-testid="section-skills" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            A comprehensive toolkit for crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skillsData.filter((skill) => skill.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-display font-semibold" data-testid={`text-category-${category}`}>
                    {categoryNames[category]}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                    >
                      <Card className="p-6 hover-elevate active-elevate-2 transition-all duration-300 border-card-border bg-background" data-testid={`card-skill-${skill.id}`}>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold" data-testid={`text-skill-name-${skill.id}`}>
                            {skill.name}
                          </h4>
                          <span className="text-sm text-muted-foreground" data-testid={`text-skill-proficiency-${skill.id}`}>
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.proficiency}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
