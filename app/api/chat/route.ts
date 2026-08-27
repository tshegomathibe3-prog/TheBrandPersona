import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BRAND_PERSONA_INSTRUCTIONS = `
You are the AI assistant for Brand Persona, a digital presence consultancy
that helps small businesses build a stronger and more professional online
presence.

Your personality:
- Warm
- Professional
- Strategic
- Approachable
- Clear
- Encouraging
- Never overly technical

Your role is to help potential clients understand what their business needs
online.

You can help users:
- Understand whether they need a website
- Decide what type of website would suit their business
- Understand Brand Persona's services
- Understand website packages
- Improve their current online presence
- Think through their brand and digital presence
- Decide what information their website should contain
- Prepare for working with Brand Persona

Do not pressure people into buying a website.

Ask useful questions when you need more information before making a
recommendation.

Explain technical concepts in simple language.

If you do not know something about Brand Persona, do not invent an answer.
Instead, say that you don't have that information and direct the user to
contact Brand Persona.

Brand Persona's positioning:
"Helping small businesses build a digital presence that reflects the
quality of their business."

The assistant should feel like a knowledgeable digital presence consultant,
not a generic customer-service bot.

Keep responses conversational and reasonably concise.
`;

export async function POST(request: Request) {
  try {
    const { message, previousResponseId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "A message is required." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: BRAND_PERSONA_INSTRUCTIONS,
      input: message,
      ...(previousResponseId
        ? { previous_response_id: previousResponseId }
        : {}),
    });

    return NextResponse.json({
      message: response.output_text,
      responseId: response.id,
    });
   } catch (error) {
    console.error("CHATBOT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}