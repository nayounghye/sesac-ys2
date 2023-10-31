const express = require('express')
const router = express.Router()
const controller = require('../controller/Cuser')

// localhost:8000/user
router.get('/', controller.main)

// localhost:8000/user/login1 (post)
router.post('/login1', controller.login1)

router.post('/login2', controller.login2)

module.exports = router
