import ProductModel from "../models/product.model";
import { logger } from "../utils/logger";

export const getProductFromDB = async () => {
  try {
    const product = await ProductModel.find();
    return product;
  } catch (error) {
    logger.info("Cannot get product from DB");
    logger.error(error);
  }
};
