const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Currency } = require('../../db/models');
router.get("/", asyncHandler(async (req, res) => {
  const currencies = await Currency.findAll();
  res.json(currencies)
}))

module.exports = router;
