import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config(
    
);

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
