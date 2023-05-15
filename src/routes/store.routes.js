import { Router } from "express";
import {
  insertProduct,
  getProducts,
  getProductsForCategory,
  getProductsForBrand,
  getOneProduct
} from "../controller/products.controller.js";

const router = Router();

router.get("/products/:company", getProducts);
router.get("/products/:company/category/:category", getProductsForCategory);
router.get("/products/:company/brand/:brand", getProductsForBrand);
router.get("/products/:company/:id", getOneProduct);
router.post("/products", insertProduct);

export default router;
