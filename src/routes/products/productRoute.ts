import express, { Router, Request, Response } from "express";
import { logger } from "../../utils/logger";
import { createProductValidation } from "../../validations/product.validation";

export const ProductRouter: Router = express.Router();

ProductRouter.get("/", (req: Request, res: Response) => {
  logger.info("Success get product data");
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: "Sport", price: 500000 }] });
});

ProductRouter.post("/", (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body);
  if (error) {
    logger.error("ERR: product - create = ", error.details[0].message);
    return res.status(400).send({ status: false, statusCode: 422, message: error.details[0].message });
  }
  logger.info("Success add new product");
  return res.status(200).send({ status: true, statusCode: 200, message: "Success add new product", data: value });
});
