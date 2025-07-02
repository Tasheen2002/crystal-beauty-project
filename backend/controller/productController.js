import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

// export function createProducts(req,res){

//     if(!isAdmin(req)){
//         res.json({
//             message:"Please login as an admin to add products"
//         })
//         return;
//     }

//     const product=new Product(req.body);

//     product.save().then(()=>{
//         res.josn({
//             messsage:"Product created"
//         })
//         .catch(()=>{
//             res.json({
//                 message:"Product not created"
//             })
//         })
//     })
// }

export async function createProducts(req, res) {
  if (!isAdmin(req)) {
    res.json({
      message: "Please login as an admin to add products",
    });
    return;
  }

  try {
    const product = new Product(req.body);
    await product.save();
    res.json({
      message: "Product created",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export function getProducts(req,res){
    Product.find({}).then((products)=>{
        res.json(products)
    })
}