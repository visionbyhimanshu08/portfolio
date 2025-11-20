import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      await storage.saveContactMessage(validatedData);
      
      res.json({
        success: true,
        message: "Message received successfully",
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to process contact form",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
