const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:8000/user
// app.get('/', function (req, res) {
//   res.render('index');
// });

// localhost:8000/user
router.get('/', controller.main);

// localhost:8000/user/login (post 요청)
// router.post('/login', function (req, res) {
//   const id = 'lily';
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

// localhost:8000/user/login (post 요청)
router.post('/login', controller.login);

// localhost:8000/user/register (get 요청)
// app.get('/register', function (req, res) {
//   console.log(req.query);
//   res.send(req.query);
// });

// localhost:8000/user/register (get 요청)
router.get('/register', controller.register);

module.exports = router;
