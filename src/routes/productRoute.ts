import express, { Router, Request, Response } from "express";
import { logger } from "../utils/logger";

export const ProductRouter: Router = express.Router();

ProductRouter.get("/", (req: Request, res: Response) => {
  logger.info("Success get product data");
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: "Sport", price: 500000 }] });
});

ProductRouter.post("/", (req: Request, res: Response) => {
  logger.info("Success add new product");
  res.status(200).send({ status: true, statusCode: 200, data: req.body });
});
