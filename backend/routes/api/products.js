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
  })
    .then(() => Product.findByPk(id, { include: [User, Currency, Review] }));

  // console.log(product, "PUT PRODUCT!!!!!!")

  return res.json(product)
}))

router.delete('/:id/delete', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.destroy({
    where: { id }
  })
  // return res.json(product)

}))

// router.get('/:id/reviews', asyncHandler(async (req, res) => {
//   const id = req.params.id;

//   const reviews = Review.findAll({ where: { productId: id } })

//   // console.log(reviews, "REVIEWS")
//   res.json(reviews)

// }))


router.post('/new', asyncHandler(async (req, res) => {
  // productValidation
  const product = await Product.create(req.body)
  const stuff = await Product.findByPk(product.id, { include: [User, Currency] })


  // .then(() => console.log(product));
  // .then(() => Product.findAll({ include: [User, Currency] }))
  // const stuff = await Product.findByPk(product.id, { include: [User, Currency] })
  // console.log(stuff, "NEW PRODUCT")
  return res.json(stuff)
  // return res.redirect('/')
}))

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll({ include: [User, Currency] });
  res.json(products)
}))


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(id, "AFTER!#################################################################################################################################################")
  const products = await Product.findByPk(id, { include: [User, Currency, { model: Review, include: [User] }] });
  // console.log(products, "#################")
  res.json(products)
}))






module.exports = router;
