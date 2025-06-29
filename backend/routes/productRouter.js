import express from "express";
import { createProducts, getProducts } from "../controller/productController.js";

const productRouter=express.Router();

productRouter.post("/",createProducts);
productRouter.get("/",getProducts);

export default productRouter;