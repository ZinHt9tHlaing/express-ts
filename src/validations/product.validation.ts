import Joi from "joi";
import { ProductInterface } from "../types/product-types";

export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().allow("", null)
  });

  return schema.validate(payload);
};
