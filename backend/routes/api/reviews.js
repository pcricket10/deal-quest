//backend/api/reviews.js
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
// const productValidations = require('../../utils/validation')

const { Review, User, Currency } = require('../../db/models');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(id, "AFTER!#################################################################################################################################################")
  const reviews = await Review.findByPk(id, { include: [User] });
  res.json(reviews)
}))

router.put('/:id(\\d+)/edit', asyncHandler(async (req, res) => {

  const id = req.params.id;
  const review = await Review.update({ ...req.body }, {
    where: { id }
  }).then(() => Review.findByPk(id, { include: [User] }));

  console.log(review, "PRODUCT API!")
  return res.json(review)
}))


router.post('/new', asyncHandler(async (req, res) => {
  // productValidation
  const review = await Review.create(req.body)
  return res.json({ review })
}))

router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({ include: [User] });
  // console.log(reviews, '#$#$#$')
  res.json(reviews)
}))









module.exports = router;
