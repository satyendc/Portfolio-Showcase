import { db } from "./db";
import { messages, type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) {
      throw new Error("Database is not configured");
    }

    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export class InMemoryStorage implements IStorage {
  private messages: Message[] = [];
  private currentId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.currentId++,
      ...insertMessage,
      createdAt: new Date(),
    };

    this.messages.push(message);
    return message;
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new InMemoryStorage();
