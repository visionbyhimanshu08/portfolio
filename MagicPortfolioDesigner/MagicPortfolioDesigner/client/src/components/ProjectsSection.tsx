import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";
import ecommerceImg from "@assets/generated_images/e-commerce_app_project.png";
import dashboardImg from "@assets/generated_images/dashboard_analytics_project.png";
import bankingImg from "@assets/generated_images/banking_app_project.png";
import fitnessImg from "@assets/generated_images/fitness_app_project.png";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Mobile App",
    category: "mobile",
    description: "A seamless shopping experience with intuitive navigation and elegant product displays",
    image: ecommerceImg,
    tags: ["Mobile", "E-Commerce", "iOS/Android"],
    featured: true,
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    category: "web",
    description: "Data visualization platform with real-time insights and interactive charts",
    image: dashboardImg,
    tags: ["Web", "SaaS", "Dashboard"],
    featured: true,
  },
  {
    id: "3",
    title: "Banking App Redesign",
    category: "mobile",
    description: "Modern fintech interface focusing on security and user-friendly financial management",
    image: bankingImg,
    tags: ["Mobile", "Fintech", "Banking"],
  },
  {
    id: "4",
    title: "Fitness Tracking App",
    category: "mobile",
    description: "Motivating workout companion with progress tracking and social features",
    image: fitnessImg,
    tags: ["Mobile", "Health", "Fitness"],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-card" data-testid="section-work" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-work-title">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-work-subtitle">
            A selection of projects that showcase my design approach and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover-elevate active-elevate-2"
              }`}
              data-testid={`button-filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`card-project-${project.id}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-testid={`img-project-${project.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-background">
                    <h3 className="text-xl font-display font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" data-testid={`badge-project-tag-${project.id}-${tagIndex}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
