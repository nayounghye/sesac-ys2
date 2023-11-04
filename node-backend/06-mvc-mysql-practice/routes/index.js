const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// 로그인 페이지
router.get('/', controller.main);
// app.get('/', 위 코드로 설정함.
//  function (req, res) {
//   res.render('index');
// });

// 회원가입 페이지
router.get('/register', controller.register);
// app.get('/', 위 코드로 설정함.
//  function (req, res) {
//   res.render('index');
// });

// 로그인
// router.post('/login', controller.login);
// app.post('/login', 위 코드로 설정함.

// 회원가입
// router.post('/register', controller.userRegister);

// 모듈 내보내는거 자꾸 까먹는데 빼먹지말 것..!
// TypeError: Router.use() requires a middleware function but got a Object 이런 종류의 에러뜸
module.exports = router;

// 1. router 분리 (요청을 정의) -> routes파일에 정리 - 완료
// 2. controller 분리 (들어온 요청에 대해 데이터 처리, view를 render 등을 담당, client에 응답하는 역할을 함.)
// function 부분은 다 controller에 들어간다.
// function (req, res) {
//   const id = 'jordy';
//   const pw = '12345';
//   let data;
//   if (req.body.userid == id && req.body.password == pw) {
//     data = {
//       isSuccess: true,
//       msg: '로그인 성공!',
//     };
//   } else {
//     data = {
//       isSuccess: false,
//       msg: '로그인 실패!',
//     };
//   }
//   // console.log(req.body);
//   res.send(data);
// });
