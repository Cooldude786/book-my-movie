const router = require('express').Router();
const admin = require('./admin');
const api = require('./api');

router.use('/v1/admin',admin)
// router.use('/v1/api',api)

module.exports = router
