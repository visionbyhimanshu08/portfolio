import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, Trophy } from "lucide-react";
import headshot from "@assets/generated_images/designer_professional_headshot.png";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "8+" },
  { icon: Users, label: "Happy Clients", value: "120+" },
  { icon: Trophy, label: "Projects Completed", value: "200+" },
  { icon: Award, label: "Design Awards", value: "15+" },
];

const timeline = [
  { year: "2023-Present", title: "Senior UI/UX Designer", company: "TechForward Inc." },
  { year: "2020-2023", title: "Lead Product Designer", company: "DigitalCraft Studio" },
  { year: "2018-2020", title: "UI/UX Designer", company: "Creative Solutions Co." },
  { year: "2016-2018", title: "Junior Designer", company: "StartUp Labs" },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" data-testid="section-about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Transforming ideas into beautiful, intuitive digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={headshot}
              alt="Alex Morgan - UI/UX Designer"
              className="rounded-md w-full max-w-md mx-auto"
              data-testid="img-headshot"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none" data-testid="text-bio">
              <p className="text-foreground">
                Hi, I'm Alex Morgan, a passionate UI/UX designer with over 8 years of experience
                creating digital products that users love. I specialize in designing interfaces
                that are not only visually stunning but also intuitive and accessible.
              </p>
              <p className="text-muted-foreground">
                My approach combines user research, data-driven insights, and creative problem-solving
                to deliver solutions that exceed expectations. I've had the privilege of working with
                both innovative startups and Fortune 500 companies, helping them transform their digital
                presence and achieve their business goals.
              </p>
              <p className="text-muted-foreground">
                When I'm not designing, you'll find me exploring new design trends, mentoring
                junior designers, or contributing to the design community through workshops and
                speaking engagements.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-display font-bold mb-1" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center" data-testid="text-timeline-title">
            Professional Journey
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex gap-6 items-start"
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex-shrink-0 w-32 text-sm font-medium text-muted-foreground pt-1" data-testid={`text-timeline-year-${index}`}>
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[5px]" />
                  <h4 className="font-semibold text-lg mb-1" data-testid={`text-timeline-title-${index}`}>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground" data-testid={`text-timeline-company-${index}`}>
                    {item.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
