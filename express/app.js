const express = require("express");
const http = require("http");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  const { productID, reviewID } = req.params;
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
