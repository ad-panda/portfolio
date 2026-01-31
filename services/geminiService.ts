
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async askAssistant(question: string) {
    if (!this.ai) {
      return "Bonjour ! Mon interface IA nécessite une clé API valide pour fonctionner en temps réel. En tant qu'Assistant IT, Marc-Antoine peut vous en dire plus lors d'un entretien !";
    }

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `Vous êtes l'assistant virtuel de Marc-Antoine, un professionnel en IT & Data.
          Votre mission est de convaincre les recruteurs de son expertise.
          Profil : Marc-Antoine est polyvalent, rigoureux et orienté solutions.
          Compétences clés : Développement React/TS, Python pour la Data, SQL, Administration système.
          Expérience : Projets d'automatisation et dashboards analytiques.
          Ton : Professionnel, cordial et concis. Répondez exclusivement en français.`
        }
      });
      return response.text || "Je n'ai pas pu générer de réponse précise. N'hésitez pas à contacter Marc-Antoine directement !";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Désolé, une erreur de connexion est survenue avec l'assistant IA.";
    }
  }
}

export const geminiService = new GeminiService();
