const express = require('express');
const app = express();
const PORT = 8000;
const session = require('express-session');

app.set('view engine', 'ejs');

// 세션에 대한 설정들
// resave: 모든 요청마다 세션을 다시 저장할건지 여부
// saveUninitialized: 클라이언트가 서버에 접속을 했을 때 세션을 초기화할건지 여부,
// cookie: 세션을 한시간 뒤 로그아웃 등으로 설정할 때 쿠키를 사용한다.
// secure: https 보안 서버에서만 쿠키를 동작 유무를 설정한다. (true: 동작o ,false: 동작x)
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
  res.send('Hello Jordy');
});

app.get('/set', (req, res) => {
  // 주의) 클라이언트 별로 세션을 갖고 있어서 req로 조회하나, 실제 저장공간은 서버이다.
  console.log('1 : ', req.session);
  req.session.user = 'jordy';
  //   req.session.user = {
  //     name: '죠르디',
  //     id: jordy
  //   } // 이런식으로 작성도 가능!
  console.log('2 : ', req.session);
  res.send('Set Session');
});

app.get('/get', (req, res) => {
  console.log('user: ', req.session.user);
  res.send({ user: req.session.user });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
