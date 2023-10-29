// routes 에 랜더할 목록들 적어보자
// 1. ~~:8000 -> index.ejs 를 랜더해야함!
// 2. ~~:8000/visitor -> visitor.index.ejs 를 랜더해야함!

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 1-1. ~~:8000 -> index.ejs 를 랜더
// 1-2. 여기서 함수부분 컨트롤러에 분해
// 1-3. 컨트롤러에 분해 후 다시 여기로 돌아와서 컨트롤러에 적은거 불러오기!
// -> controller.이름
// router.get('/', function (req, res) {
//   res.render('index');
// });

router.get('/', controller.home);

// 2-1. ~~:8000/visitors -> visitor.index.ejs 를 랜더
// 2-2. 여기서 함수부분 컨트롤러에 분해
// 2-3. 컨트롤러에 분해 후 다시 여기로 돌아와서 컨트롤러에 적은거 불러오기!
// -> controller.이름
// router.get('/visitor', function (req, res) {
//   res.render('visitor');
// });
router.get('/visitors', controller.visitor);

// 방명록 등록
router.post('/visitor', controller.postVisitor);

// 방명록 수정
router.patch('/visitor/:id', function (req, res) {
  res.send('');
});

// 방명록 삭제
router.delete('/visitor/:id', controller.deleteVisitor);

module.exports = router;
