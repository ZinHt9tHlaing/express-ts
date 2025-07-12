import express, { Router } from "express";
import { createProduct, getAllProduct, getProduct } from "../../controllers/productController";

export const ProductRouter: Router = express.Router();

ProductRouter.route("/").get(getAllProduct).post(createProduct);

ProductRouter.get("/:name", getProduct);
