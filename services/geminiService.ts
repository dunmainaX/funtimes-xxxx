import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getBotResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). I'd love to chat about dance otherwise!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: "You are 'FunBot', the energetic and helpful AI community manager for FunTimes.com. You are an expert in dance styles, event planning, and keeping the vibe positive. Keep your answers short, fun, and emoji-friendly. If someone asks about services, mention our MCs and Dance Classes.",
      }
    });

    return response.text || "Let's keep the party going! 💃";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Oops! I tripped over my own virtual feet. Try again in a moment! 😅";
  }
};