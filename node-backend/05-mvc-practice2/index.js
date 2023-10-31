const express = require('express');
// const userController = require('./controller/Cuser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/user');
app.use('/user', router);

// router, controller, model, view
// 1. router 분리 (요청을 정의) -> routes파일에 정리
// 2. controller 분리 (들어온 요청에 대해 데이터 처리, view를 render 등을 담당, client에 응답하는 역할을 함.)
// 3. model 분리 (db에 접근하여 데이터를 select,insert,update,delete 등 을 한다.)
// ----------------------------------------------- 여기부터 분해해야함

// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.get(
//   '/',

//   function (req, res) {
//     res.render('index');
//   }
// );

// app.post(
//   '/login',

//   function (req, res) {
//     const id = 'jordy';
//     const pw = '1234';
//     let data;
//     if (req.body.userid == id && req.body.password == pw) {
//       data = {
//         isSuccess: true,
//         msg: '로그인 성공!',
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: '로그인 실패!',
//       };
//     }
//     // console.log(req.body);
//     res.send(data);
//   }
// );
// ----------------------------------------------- 분해 끝

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
