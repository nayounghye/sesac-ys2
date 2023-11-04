//서버 실행시키는 코드들

const express = require('express');
const app = express();
const PORT = 8000;
// 미들웨어를 걸어주어 cookieParser 사용할 수 있도록 설정해줘야 한다.
const cookieParser = require('cookie-parser');

app.use(cookieParser()); // 쿠키를 해석/사용할 수 있게 해준다.
app.set('view engine', 'ejs');

// app.??? 들은 다 라우터를 만들어주는 명령어들이다. 라우터라 보면 된다.
app.get('/', (req, res) => {
  res.render('index');
});

// 쿠키를 사용하기 위해 아래와 같이 설정을 해줘야 한다.
// maxAge : 언제 만료가 될 건지 설정 (ms 단위로 보존하고자 하는 기간을 설정)
// httpOnly : 쿠키 접근 관련 설정 (true: 서버에서만 쿠키에 접근할 수 있다. 브라우저에서 접근 불가 ,false: 브라우저에서도 접근 가능)
// expires : 모든 유저가 일괄적으로 같은 만료기간을 가질 경우 날짜+시간을 정해서 사용한다.
// path : 설정한 라우터와 라우터 하위 라우터에만 쿠키가 적용된다.
// secure: https 보안 서버에서만 쿠키를 동작 유무를 설정한다. (true: 동작o ,false: 동작x)
// signed: 쿠키 암호화
const cookieConfig = {
  //   httpOnly: true, // document.cookie 로 접근 불가, 서버에서만 쿠키에 접근할 수 있다.(접근을 브라우저에서 못하게!)
  maxAge: 30000, // 24 * 60 * 60 * 1000 처럼 연산식으로 적어도 된다. (24시간을 밀리초로 바꾼 연산식)
  //   expires: '2023-11-04T18:00', // 모든 유저가 동일한 만료기간을 가질 때 사용.
  //   path: '/', // '/test' -> localhost:8000 는 쿠키 적용 x
  //   secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다.
  //   signed: true, // 쿠키를 암호화한다.
};

app.get('/set', (req, res) => {
  res.cookie('key1', 'value1', cookieConfig); // 서버가 cookie를 만들어서 cookie만 응답으로 보낸다. (key: ket1/ value: value1)
  res.cookie('popup', '1', cookieConfig);
  res.send('set cookie');
});

app.get('/get', (req, res) => {
  //req.cookies 를 통해 서버에서 쿠키에 접근할 수 있다.
  console.log('cookies : ', req.cookies);
  res.send(req.cookies);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
