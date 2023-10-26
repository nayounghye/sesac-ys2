const express = require('express');

const controller = require('../controller/Main');

// express에서 나오는 라우터들을 모아두는 객체이다.
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.index);

//상위 폴더에 있는 index.js 파일로 내보내서 이 파일에서만 존재하는게 아닌 모듈로서 바깥으로 내보내져야한다.
module.exports = router;
