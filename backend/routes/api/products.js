//backend/api/products.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Product } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.allProducts();
  console.log(products, "!@#@#@#")
  res.json(products)
}))

module.exports = router;
