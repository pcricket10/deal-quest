//backend/api/products.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const productValidations = require('../../utils/validation')

const { Product, User, Currency, Review } = require('../../db/models');


router.put('/:id(\\d+)/edit', asyncHandler(async (req, res) => {

  const id = req.params.id;
  const product = await Product.update({ ...req.body }, {
    where: { id }
  }).then(() => Product.findByPk(id, { include: [User, Currency, Review] }));
  return res.json(product)
}))

router.delete('/:id/delete', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.destroy({
    where: { id }
  })
  // return res.json(product)

}))


router.post('/new', asyncHandler(async (req, res) => {
  // productValidation
  const product = await Product.create(req.body)
  const stuff = await Product.findByPk(product.id, { include: [User, Currency] })
  return res.json(stuff)
}))

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll({ include: [User, Currency] });
  res.json(products)
}))


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const products = await Product.findByPk(id, { include: [User, Currency, { model: Review, include: [User] }] });
  res.json(products)
}))






module.exports = router;
