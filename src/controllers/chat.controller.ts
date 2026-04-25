import type { Context } from "hono";
import type { ChatRequest } from "../types/index.js";
import { PersonaFactory } from "../personas/persona.factory.js";
import { GeminiService } from "../services/gemini.service.js";

export const chatController = async (c: Context) => {
    try {
        const body: ChatRequest = await c.req.json();
        if (!body.message) {
            return c.json({ error: "Message is required" }, 400);
        }
        const systemPrompt = PersonaFactory.create(body.persona);
        const reply = await GeminiService.generate(
            systemPrompt,
            body.message
        );
        return c.json({ reply })
    } catch (err) {
        return c.json({ error: "Failed to process chat request" }, 500);
        }
    }