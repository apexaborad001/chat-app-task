const router= require('express').Router()
const user = require("../controller/user.controller")
router.post('/createuser',user.create)
module.exports = router