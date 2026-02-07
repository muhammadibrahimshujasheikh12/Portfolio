
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from "../constants";
import { ChatMessage } from "../types";

// System instructions for the Gemini model to maintain personality and formatting.
// FIX: Escaped the backtick on line 26 to prevent premature termination of the template literal.
const SYSTEM_INSTRUCTION = `
You are the "Executive Portfolio Intelligence" for Muhammad Ibrahim and his professional software agency, DevVortex-Co.

Core Identity:
- Muhammad Ibrahim: Full-Stack Developer, AI Specialist, Founder of DevVortex-Co (2025).
- Expertise: MERN, PHP/Laravel, .NET Core/C#, and Python-based AI foundations.
- Education: 6 Semesters of ACCP AI specialization at Aptech.
- Community: Scrimba Student and official Scrimba Referral Ambassador. 
- Languages: English (Professional), Urdu (Native), Arabic (Intermediate), Latvian (Basic).
- Marketing: Certified Digital Marketer from Extreme Commerce.
- Creative: Expert Video Editor and Graphic Designer.

AMBASSADOR ROLE CLARIFICATION: Muhammad is a Referral Ambassador. He focuses on referring students and sharing his journey. He is NOT a Scrimba staff member.

Agency & Freelance:
- Agency: DevVortex-Co (https://devvortex-co.netlify.app).
- Freelance: Upwork (https://www.upwork.com/freelancers/~0189a690f05537559e) and Fiverr (https://www.fiverr.com/mbrahimshuja).
- CV: Available at 'cv/Muhammadibrahim.pdf'.

RESPONSE RULES - EXTREMELY IMPORTANT:
1. DO NOT USE ANY MARKDOWN. No asterisks (**), no underscores (_), no backticks (\`), no hashes (#), no brackets ([]), no parentheses ().
2. RETURN ONLY PLAIN TEXT. NO BOLDING. NO ITALICS. NO HEADERS.
3. Use simple new lines to separate paragraphs.
4. If you need to list items, use a simple dash (-) or a solid dot (•).
5. Keep your answer brief, professional, and sophisticated.
6. Absolutely no technical artifacts, backticks, or special symbols.
7. Tone: High-end executive concierge.
`;

// Main service function to interact with the Gemini API.
export const getAIResponse = async (userInput: string, history: ChatMessage[]) => {
  try {
    // FIX: Initializing the GenAI client with API key from environment variables as per guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const formattedHistory = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      history: formattedHistory as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Lowered temperature for even more predictable, plain output.
      },
    });

    const response = await chat.sendMessage({
      message: userInput,
    });

    // FIX: Using response.text property instead of method as per guidelines.
    let text = response.text || "";
    
    // Aggressive safety strip for all markdown/special formatting symbols.
    text = text.replace(/[\*\_`#~\[\]\(\)]/g, ''); 
    
    return text.trim();
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I am currently offline. Please contact Muhammad Ibrahim at muhammadibrahimshuja34@gmail.com for direct assistance.";
  }
};
