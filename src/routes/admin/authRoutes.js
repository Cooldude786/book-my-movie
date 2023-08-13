const router = require('express').Router();
const { login } = require('../../controller/admin/authController');

router.post('/login', login)

module.exports = router