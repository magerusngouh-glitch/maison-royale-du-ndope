
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHeritageAssistance = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Heritage Concierge for Maison Royale du Ndop, an ultra-luxury Cameroonian fashion brand. You have deep knowledge of Ndop fabric history, Bamileke symbols, and luxury styling. Provide elegant, concise, and helpful advice to customers inquiring about heritage, style, or the meaning of specific motifs. Use a sophisticated tone.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Assistance Error:", error);
    return "I apologize, but our digital concierge is currently unavailable. Please contact our physical atelier for heritage inquiries.";
  }
};
