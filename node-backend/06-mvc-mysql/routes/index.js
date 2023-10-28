// routes 에 랜더할 목록들 적어보자
// 1. ~~:8000 -> index.ejs 를 랜더해야함!
// 2. ~~:8000/visitor -> visitor.index.ejs 를 랜더해야함!

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 1. ~~:8000 -> index.ejs 를 랜더
// 2. 여기서 함수부분 컨트롤러에 분해
// 3. 컨트롤러에 분해 후 다시 여기로 돌아와서 컨트롤러에 적은거 불러오기!
// -> controller.이름
// router.get('/', function (req, res) {
//   res.render('index');
// });

router.get('/', controller.home);

// 2. ~~:8000/visitor -> visitor.index.ejs 를 랜더
// 2. 여기서 함수부분 컨트롤러에 분해
// 3. 컨트롤러에 분해 후 다시 여기로 돌아와서 컨트롤러에 적은거 불러오기!
// -> controller.이름
// router.get('/visitor', function (req, res) {
//   res.render('visitor');
// });
router.get('/visitor', controller.visitor);

module.exports = router;
