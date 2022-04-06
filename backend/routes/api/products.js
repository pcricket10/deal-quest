//backend/api/products.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const productValidations = require('../../utils/validation')


const { Product, User, Currency } = require('../../db/models');
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const products = await Product.findByPk(id, { include: [User, Currency] });
  res.json(products)
}))
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll({ include: [User, Currency] });
  res.json(products)
}))

router.post('/new', asyncHandler(async (req, res) => {
  // productValidations


  const product = await Product.create(req.body)

  return res.redirect(`${req.baseUrl}/${product.id}`)
}))

router.put('/:id', asyncHandler(async (req, res) => {

  const id = req.params.id;
  const product = await Product.update({ ...req.body }, {
    where: { id }
  })


  return res.json(product)

}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.destroy({
    where: { id }
  })
  return res.json(product)

}))





router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  res.json(product)
}))





module.exports = router;
