import type { Context } from "hono";
import { PersonaFactory } from "../personas/persona.factory.js";
import { GeminiService } from "../services/gemini.service.js";
import { chunkText } from "../utils/chunk-text.js";

export const chatControllerStream = async (c: Context) => {
  const { message, persona } = await c.req.json();

  const systemPrompt = PersonaFactory.create(persona);

  const fullText = await GeminiService.generate(
    systemPrompt,
    message
  );

  const chunks = chunkText(fullText);

  return new Response(
    new ReadableStream({
      async start(controller) {
        for (const chunk of chunks) {
          controller.enqueue(chunk);

          await new Promise((r) =>
            setTimeout(r, 200 + Math.random() * 300)
          );
        }

        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/plain",
        "Transfer-Encoding": "chunked",
      },
    }
  );
};