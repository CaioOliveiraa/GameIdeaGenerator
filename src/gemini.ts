import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function generateGameIdea(theme: string): Promise<string> {
  const prompt = `Crie uma ideia original de jogo com o tema "${theme}". Descreva o conceito geral e as mecânicas principais.`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = result.text;

  if (!text) {
    throw new Error("Resposta da API vazia.");
  }

  return text;
}
