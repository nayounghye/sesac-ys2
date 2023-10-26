const express = require('express');
const userController = require('./controller/Main');
const app = express();
const PORT = 8004;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//   res.render('index');
// });
const router = require('./routes');
app.use('/login', router);

// ----------------------------------------------- 여기부터 분해해야함
// app.post('/login', function (req, res) {
//   const id = 'jordy';
//   const pw = '1234';
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

app.get('*', function (req, res) {
  res.send('페이지를 찾을 수 없습니다.');
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
