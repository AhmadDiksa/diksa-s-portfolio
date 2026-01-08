import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_CONTEXT } from '../constants';

// Initialize API client
// Note: process.env.API_KEY is expected to be available in the environment
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const createPortfolioChat = (): Chat => {
  if (!apiKey) {
    console.warn("API Key is missing. Chat functionality will not work.");
  }

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: PORTFOLIO_CONTEXT,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};