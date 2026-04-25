const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent"

export class GeminiService {
  static async generate(systemPrompt: string, userMessage: string) {
    const apiKey = process.env.GEMINI_API_KEY

    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: systemPrompt + "\nUser: " + userMessage }
            ]
          }
        ]
      })
    })

    const data = await res.json()

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response"
  }
}