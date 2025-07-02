import express from "express";
import { createProducts, getProducts, deleteProducts } from "../controller/productController.js";

const productRouter=express.Router();

productRouter.post("/",createProducts);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProducts);

export default productRouter;