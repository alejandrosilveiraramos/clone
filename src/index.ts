import express from "express";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

app.get("/", (_req, res) => {
  res.send("API de Upload CLON3");
});

app.use(uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
