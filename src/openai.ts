import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export async function generateGameIdea(theme: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Crie uma ideia de jogo original com o tema "${theme}". Seja criativo e descreva brevemente a mecânica do jogo.`,
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}
