import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { generateGameIdea } from "./gemini";

const app = express();
app.use(express.json());

app.post("/idea", async (req: Request, res: Response) => {
  const { theme } = req.body;
  if (!theme) return res.status(400).json({ error: "Theme is required." });

  try {
    const idea = await generateGameIdea(theme);
    res.json({ idea });
  } catch (err) {
    console.error("Erro ao gerar ideia:", err);
    res.status(500).json({ error: "Falha ao gerar ideia de jogo." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));
