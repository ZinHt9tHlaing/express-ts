import { Request, Response } from "express";
import { logger } from "../utils/logger";

export const getHealth = (req: Request, res: Response) => {
  logger.info("Health check");
  res.status(200).json({ message: "OK" });
};
