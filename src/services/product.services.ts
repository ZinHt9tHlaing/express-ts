import ProductModel from "../models/product.model";
import { ProductType } from "../types/product.types";
import { logger } from "../utils/logger";

export const createProductToDB = async (payload: ProductType) => {
  try {
    const product = await ProductModel.create(payload);
    return product;
  } catch (error) {
    logger.info("Cannot create product to DB");
    logger.error(error);
  }
};

export const getProductFromDB = async () => {
  try {
    const product = await ProductModel.find();
    return product;
  } catch (error) {
    logger.info("Cannot get product from DB");
    logger.error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await ProductModel.findOne({ product_id: id }).lean();
    return product;
  } catch (error) {
    logger.info("Cannot get product from DB");
    logger.error(error);
  }
};

export const updateProductById = async (id: string, payload: ProductType) => {
  try {
    const product = await ProductModel.findOneAndUpdate(
      { product_id: id },
      {
        $set: payload
      },
      { new: true }
    ).lean();
    return product;
  } catch (error) {
    logger.info("Cannot update product from DB");
    logger.error(error);
  }
};
