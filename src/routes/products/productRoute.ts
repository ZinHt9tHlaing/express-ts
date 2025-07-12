import express, { Router } from "express";
import { createProduct, getAllProduct, getProduct, updateProduct } from "../../controllers/productController";

export const ProductRouter: Router = express.Router();

ProductRouter.route("/").get(getAllProduct).post(createProduct);

ProductRouter.get("/:id", getProduct);

ProductRouter.put("/:id", updateProduct);
