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
// app.post("/login", function (req, res) {
//     const id = "lily";
//     const pw = "12345";
//     let data;
//     if (req.body.userid == id && req.body.password == pw) {
//       data = {
//         isSuccess: true,
//         msg: "로그인 성공!",
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: "로그인 실패!",
//       };
//     }
//     // console.log(req.body);
//     res.send(data);
//   });

// localhost:8000/user/login (post 요청)
router.post('/login', controller.login);

// app.post(
//   '/login',
//   function (req, res) {
//     res.send({
//       src: req.file.path,
//       id: req.body.userid,
//       pw: req.body.userpw,
//       name: req.body.username,
//       age: req.body.userage,
//     });
//   }
// );

//상위 폴더에 있는 index.js 파일로 내보내서 이 파일에서만 존재하는게 아닌 모듈로서 바깥으로 내보내져야한다.
module.exports = router;
