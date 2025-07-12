import { Request, Response } from "express";
import { createProductValidation } from "../validations/product.validation";
import { logger } from "../utils/logger";
import { getProductFromDB } from "../services/product.servies";
import { ProductType } from "../types/product-types";

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
  const { name } = req.params;
  const products: any = await getProductFromDB();

  if (name) {
    const filterProduct = products.filter((product: ProductType) => product.name === name);

    if (filterProduct.length === 0) {
      logger.info("Data not found");
      return res.status(404).send({ status: false, statusCode: 404, data: {} });
    }

    logger.info("Success get product data");
    return res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] });
  }

  logger.info("Success get product data");
  return res.status(200).send({ status: true, statusCode: 200, data: products });
};
