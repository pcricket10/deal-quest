// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')
const productsRouter = require('./products.js')
const currenciesRouter = require('./currencies.js')
const reviewsRouter = require('./reviews')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/currencies', currenciesRouter);
router.use('/reviews', reviewsRouter)

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

/********************API TESTS******************************/
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models/');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user)
//   }
// )
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user })
// }));



module.exports = router;
