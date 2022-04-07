//backend/api/products.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const productValidations = require('../../utils/validation')

const { Product, User, Currency } = require('../../db/models');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(id, "AFTER!#################################################################################################################################################")
  const products = await Product.findByPk(id, { include: [User, Currency] });
  res.json(products)
}))

router.put('/:id(\\d+)/edit', asyncHandler(async (req, res) => {

  const id = req.params.id;
  const product = await Product.update({ ...req.body }, {
    where: { id }
  }).then(() => Product.findByPk(id, { include: [User, Currency] }));

  console.log(product, "PRODUCT API!")
  return res.json(product)
}))


router.post('/new', asyncHandler(async (req, res) => {
  // productValidation
  const product = await Product.create(req.body)
  return res.json({ product })
}))

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll({ include: [User, Currency] });
  res.json(products)
}))









module.exports = router;
