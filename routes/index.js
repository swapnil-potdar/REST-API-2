var express = require("express");
var router = express.Router();
const UserModel = require("./users");
const mongoose = require("mongoose");
const Product = require(".././models/product.model");

//middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//routes

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", function (req, res, next) {
  (req.session.sessionname = "testsession"), res.render("index");
});

router.get("/check", function (req, res) {
  console.log(req.session);
  res.send("session is working");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// get all products
/* router.get("/api/products", async function (req, res) {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

// find product by id
/* router.get("/api/products/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

// create product
/* router.post("/api/products", async function (req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

// update product
/* router.put("/api/products/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

//delete product
/* router.delete("/api/products/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
}); */

mongoose
  .connect(
    "mongodb+srv://potdarswapnil11:ASpmZsyla3kiDX0p@swapnil.zjqy3sn.mongodb.net/REST-API?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database!"));
module.exports = router;
