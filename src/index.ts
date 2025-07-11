import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { routes } from "./routes/routeIndex";
import { logger } from "./utils/logger";
import cors from "cors";
dotenv.config();

const app: Application = express();

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors access handler
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// dynamic routes
routes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Server running on port: http://localhost:${PORT}`);
});
