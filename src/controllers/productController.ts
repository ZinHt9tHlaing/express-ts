import { Request, Response } from "express";
import { createProductValidation, updateProductValidation } from "../validations/product.validation";
import { logger } from "../utils/logger";
import { createProductToDB, getProductById, getProductFromDB, updateProductById } from "../services/product.services";
import { v4 as uuidV4 } from "uuid";

// create product
export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidV4();

  const { error, value } = createProductValidation(req.body);
  if (error) {
    logger.error("ERR: product - create = ", error.details[0].message);
    return res.status(400).send({ status: false, statusCode: 422, message: error.details[0].message });
  }

  try {
    await createProductToDB(value);
    logger.info("Success add new product");
    return res.status(201).send({ status: true, statusCode: 201, message: "Add new product successfully" });
  } catch (error) {
    logger.error("ERR: product - create = ", error);
    return res.status(500).send({ status: false, statusCode: 500, message: error });
  }
};

// get all product
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products: any = await getProductFromDB();

    if (!products) {
      logger.error("ERR: product - get = ", "Product not found");
      return res.status(404).send({ status: false, statusCode: 404, message: "Product not found" });
    }

    logger.info("Success get all product data");
    res.status(200).send({ status: true, statusCode: 200, data: products });
  } catch (error) {
    logger.info("Cannot get products from DB");
    logger.error(error);
  }
};

// get detail product
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);

    if (!product) {
      logger.error("ERR: product - get = ", "Product not found");
      return res.status(404).send({ status: false, statusCode: 404, message: "Product not found" });
    }

    logger.info("Success get product data");
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: product
    });
  } catch (error) {
    logger.info("Cannot get product from DB");
    logger.error(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { error, value } = updateProductValidation(req.body);
  if (error) {
    logger.error("ERR: product - create = ", error.details[0].message);
    return res.status(400).send({ status: false, statusCode: 422, message: error.details[0].message });
  }

  try {
    updateProductById(id, value);

    logger.info("Success update product data");
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: "Update product successfully"
    });
  } catch (error) {
    logger.info("Cannot get product from DB");
    logger.error(error);
  }
};
