import { Router } from "express";
import Product from "../models/product";

const router = Router();

router.get("/", async (req, res) => {
  const products = await Product.find().lean();
  
  res.render("index", { products: products });
});

router.get("/alta", (req, res) => {
  res.render("alta");
});

router.get("/contacto", (req, res) => {
  res.render("contact");
});

router.get("/nosotros", (req, res) => {
  res.render("about");
});

router.post("/product/add", async (req, res) => {
  try {
    const product = Product(req.body);
    const productSaved = await product.save();
    console.log(productSaved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
