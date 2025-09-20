import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.join(__dirname, "..", "..", "uploads");
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (
  _req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype === "application/json" ||
    file.originalname.toLowerCase().endsWith(".json")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Apenas arquivos JSON são permitidos"));
  }
};

export const upload = multer({ storage, fileFilter });
export const UPLOAD_DIR_PATH = UPLOAD_DIR;
