import Joi from "joi";
import { ProductType } from "../types/product.types";

export const createProductValidation = (payload: ProductType) => {
  const schema = Joi.object({
    product_id: Joi.string(),
    name: Joi.string().required(),
    price: Joi.number().allow("", null),
    size: Joi.string().allow("", null)
  });

  return schema.validate(payload);
};
