// Storage interface for the application
// In this PWA app, all data is stored in localStorage via hooks
// This file is kept for potential future server-side storage needs

export interface IStorage {
  // Placeholder for future storage needs
}

export class MemStorage implements IStorage {
  constructor() {
    // Placeholder storage
  }
}

export const storage = new MemStorage();
