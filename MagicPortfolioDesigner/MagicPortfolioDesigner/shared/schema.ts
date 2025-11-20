import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Project data type
export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "branding";
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

// Testimonial data type
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

// Skill data type
export interface Skill {
  id: string;
  name: string;
  category: "design" | "ux" | "dev";
  proficiency: number;
}

// Service data type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Process step type
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}
