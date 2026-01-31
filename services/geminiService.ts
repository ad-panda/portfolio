
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAssistant(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `Vous êtes l'assistant IA d'un développeur et assistant IT & Data. 
          Votre rôle est de répondre aux questions des recruteurs sur ses compétences.
          Il maîtrise : React, TypeScript, Python, SQL, PowerBI, et l'administration système de base.
          Il est passionné par l'automatisation et l'analyse de données. 
          Soyez professionnel, concis et enthousiaste. Répondez en français.`
        }
      });
      return response.text || "Désolé, je ne peux pas répondre pour le moment.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Une erreur est survenue lors de la communication avec l'assistant.";
    }
  }
}

export const geminiService = new GeminiService();
