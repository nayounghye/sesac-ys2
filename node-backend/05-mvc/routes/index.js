const express = require('express');

// express에서 나오는 라우터들을 모아두는 객체이다.
const router = express.Router();

const controller = require('../controller/Cmain');

//아래 부분은 요청에 대한 정보를 모아둔다.

//localhost:8000/comment 이다. 왜냐 상위폴더에 있는 index.js에서 router에 대해 "/comment"로 설정했기 때문!
router.get('/', controller.main);

//localhost:8000/comment/guest
router.get('/guest', controller.guest);

//localhost:8000/comment/test
//router.get('/test', controller.main);

//상위 폴더에 있는 index.js 파일로 내보내서 이 파일에서만 존재하는게 아닌 모듈로서 바깥으로 내보내져야한다.
module.exports = router;
