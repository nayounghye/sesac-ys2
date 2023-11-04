const express = require('express');
const user = require('../controller/Cuser');
const router = express.Router();

router.get('/', user.index);
router.get('/set', user.index);
router.get('/get', user.index);

module.exports = router;
