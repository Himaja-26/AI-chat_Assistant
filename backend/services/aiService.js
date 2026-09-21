const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const toneInstructions = {
  professional:
    "Respond in a professional, clear, and well-structured tone.",

  casual:
    "Respond in a friendly, natural, and conversational tone.",

  concise:
    "Respond concisely and avoid unnecessary explanations.",
};

async function generateResponse(message, tone = "professional") {
  const instruction =
    toneInstructions[tone] || toneInstructions.professional;

  const response = await openai.chat.completions.create({
    model: "openrouter/free",

    messages: [
      {
        role: "system",
        content: instruction,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = {
  generateResponse,
};