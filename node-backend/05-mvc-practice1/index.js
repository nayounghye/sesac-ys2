const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router, controller, model, view
// 1. router 분리 (요청을 정의) -> routes파일에 정리
// 2. controller 분리 (들어온 요청에 대해 데이터 처리, view를 render 등을 담당, client에 응답하는 역할을 함.)
// 3. model 분리 (db에 접근하여 데이터를 select,insert,update,delete 등 을 한다.)

const router = require('./routes/user');
//라우터를 미들웨어로 걸어준다.
app.use('/user', router);
//localhost:8000/user/~~~ 는 위 코드에서 검사한다.

// user 테이블을 만들었다고 가정했을 때 -> 회원가입(insert), 로그인(select), 회원정보 수정(update), 탈퇴(delete) 등의 동작을 필요함.
// CRUD 에 따라 회원가입 : C / 로그인 : R / 수정 : U / 탈퇴 : D

// --------------------- 이 부분은 routes 에 들어가는 부분 ---------------
// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.get('/register', function (req, res) {
//   console.log(req.query);
//   res.send(req.query);
// });

// app.post('/login', function (req, res) {
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

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
