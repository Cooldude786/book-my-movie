const router = require('express').Router();
const {getUser} = require('../../controller/admin/userController')

router.get('/:id',getUser)
router.get('/all',getUser)


module.exports = router
