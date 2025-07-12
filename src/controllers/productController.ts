import { Request, Response } from "express";
import { createProductValidation } from "../validations/product.validation";
import { logger } from "../utils/logger";

export const createProduct = async (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body);
  if (error) {
    logger.error("ERR: product - create = ", error.details[0].message);
    return res.status(400).send({ status: false, statusCode: 422, message: error.details[0].message });
  }
  logger.info("Success add new product");
  return res.status(200).send({ status: true, statusCode: 200, message: "Success add new product", data: value });
};

export const getAllProduct = async (req: Request, res: Response) => {
  logger.info("Success get all product data");
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: "Sport", price: 500000 }] });
};

export const getProduct = async (req: Request, res: Response) => {
  const product = [
    {
      name: "hello",
      price: 15000
    },
    {
      name: "20000",
      price: 15000
    }
  ];

  const { name } = req.params;

  if (name) {
    const filterProduct = product.filter((item) => item.name === name);
    res.status(200).send({ status: true, statusCode: 200, data: filterProduct });
  }

  logger.info("Success get product data");
  res.status(200).send({ status: true, statusCode: 200, data: product });
};
