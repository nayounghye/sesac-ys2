// 플로우
// 1. session을 생성하는 임시 router 생성
// 2. /render ('index',{user})
// 3. index.ejs에서 user가 어떤지에 따라서 nav에 login or logout!
// 3-1. <div>에 '~~님 환영합니다' or '로그인을 해주세요'

const express = require('express');
const app = express();
const PORT = 8000;
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'secret key',
    resave: false, // 이건 대부분 false로 하므로 그냥 외울것
    saveUninitialized: true, // 이건 대부분 true로 하므로 그냥 외울것
    // cookie:{
    httpOnly: true,
    maxAge: 30 * 1000,
    // },
    // secure: true, // 기본값: false
  })
);

app.get('/', (req, res) => {
  res.render('index');
});

// 임시 로그인 경로
app.get('/set', (req, res) => {
  // 1. 로그인 성공한 시점에 req.session.user 안에 user를 식별할 수 있는 고유한 값을 넣는다.
  req.session.user = {
    id: 'jordy',
    pw: 1234,
    name: '죠르디',
  };
  res.redirect('/get');
  res.send('session 설정 완료다니니!');
});

app.get('/get', (req, res) => {
  // 2. 식별할 수 있는 값을 통해 조회하고 그 값을 넘긴다.
  if (req.session.user) {
    res.render('profile', {});
  } else {
    res.redirect('/login');
  }
  console.log('user: ', req.session.user);
  res.send({ user: req.session.user });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
