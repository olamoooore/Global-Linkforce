import { GoogleGenAI, Chat } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getClient = () => {
  if (!genAI) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return genAI;
};

export const initializeChat = () => {
  const client = getClient();
  if (!client) return null;

  chatSession = client.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "I am currently offline. Please try again later or contact support directly.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I understood that, but I couldn't generate a response. How else can I help?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting to the service network right now. Please try calling our support line.";
  }
};
