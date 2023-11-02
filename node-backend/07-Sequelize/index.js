const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes');

// 방명록 접속시 아래 코드 주석해제
// app.use('/', router);

// 회원가입 접속시 아래코드 주석 해제
app.use('/user', router);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index 페이지 렌더(방명록)
router.get('/', (req, res) => {
  res.render('index');
});

// index 페이지 렌더(회원가입 index)
router.get('/index', (req, res) => {
  res.render('index2');
});

// 회원가입 페이지 렌더
router.get('/signup', (req, res) => {
  res.render('signup');
});

// 회원가입 -> user table에 insert를 실행시키는 api (회원가입 버튼을 눌렀을 때 보낼 api필요)
router.post('/signup', (req, res) => {
  res.send('signup');
});

// 로그인 페이지 렌더
router.get('/signin', (req, res) => {
  res.render('signin');
});

// 로그인 -> user table에서 회원 존재 여부를 판단하는 api (로그인 버튼을 눌렀을 때 보낼 api 필요)

app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
