import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@shared/schema";
import client1 from "@assets/generated_images/client_testimonial_photo_1.png";
import client2 from "@assets/generated_images/client_testimonial_photo_2.png";
import client3 from "@assets/generated_images/client_testimonial_photo_3.png";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Chen",
    role: "CEO",
    company: "TechStartup Inc.",
    content: "Alex transformed our product completely. The new design not only looks amazing but also increased our user engagement by 150%. Their attention to detail and user-centric approach is unmatched.",
    image: client1,
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "DigitalCorp",
    content: "Working with Alex was a game-changer for our team. They brought fresh perspectives and creative solutions that we hadn't considered. The final design exceeded all our expectations.",
    image: client2,
  },
  {
    id: "3",
    name: "David Rodriguez",
    role: "Creative Director",
    company: "BrandStudio",
    content: "Alex is one of the most talented designers I've worked with. Their ability to understand complex requirements and translate them into beautiful, functional designs is remarkable.",
    image: client3,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background" data-testid="section-testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4" style={{ letterSpacing: "-0.02em" }} data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12 relative" data-testid={`card-testimonial-${testimonials[currentIndex].id}`}>
                  <Quote className="h-12 w-12 text-primary/20 absolute top-8 left-8" />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground italic" data-testid={`text-testimonial-content-${testimonials[currentIndex].id}`}>
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover"
                        data-testid={`img-testimonial-${testimonials[currentIndex].id}`}
                      />
                      <div>
                        <h4 className="font-semibold text-lg" data-testid={`text-testimonial-name-${testimonials[currentIndex].id}`}>
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground" data-testid={`text-testimonial-role-${testimonials[currentIndex].id}`}>
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                data-testid="button-testimonial-prev"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                    }`}
                    data-testid={`button-testimonial-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                data-testid="button-testimonial-next"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
