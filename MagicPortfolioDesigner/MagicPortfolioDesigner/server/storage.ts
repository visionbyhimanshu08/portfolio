import type { ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactMessage(data: ContactFormData): Promise<void>;
}

export class MemStorage implements IStorage {
  private contactMessages: ContactFormData[];

  constructor() {
    this.contactMessages = [];
  }

  async saveContactMessage(data: ContactFormData): Promise<void> {
    this.contactMessages.push(data);
    console.log("Contact message received:", {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
    });
  }
}

export const storage = new MemStorage();
