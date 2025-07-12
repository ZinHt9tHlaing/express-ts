import Joi from "joi";
import { ProductType } from "../types/product-types";

export const createProductValidation = (payload: ProductType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().allow("", null)
  });

  return schema.validate(payload);
};
