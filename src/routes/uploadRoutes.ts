import { Router } from "express";
import { upload } from "../config/multerConfig";
import { uploadJson } from "../controllers/uploadController";

const router = Router();

router.post("/upload-json", upload.single("file"), uploadJson);

export default router;
