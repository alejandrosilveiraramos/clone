import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { UPLOAD_DIR_PATH } from "../config/multerConfig";

export const uploadJson = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo JSON enviado" });
  }

  try {
    const filePath = path.join(UPLOAD_DIR_PATH, req.file.filename);

    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    return res.json({
      message: "JSON recebido e processado!",
      fileName: req.file.originalname,
      content: data,
    });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao ler o JSON", details: err });
  }
};
