// -------- index.js 코드에 기본적으로 있어야하는 코드들 --------

// const express = require('express');
// const app = express();
// const PORT = 8000;

// app.set('view engine', 'ejs');

// // localhost:8000 url 접속에 대한 응답을 위해 만든 코드
// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.listen(PORT, function () {
//   console.log(`Sever Open: ${PORT}`);
// });

// -------- index.js 코드에 기본적으로 있어야하는 코드들 끝 --------

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// req.body를 해석하기 위한 코드
// extended : true -> qs 모듈(외부 모듈)을 사용한다. / extended : false -> 내장 모듈인 queryString을 사용한다.

app.use(express.urlencoded({ extended: true }));
// x-www-form-urlencoded 형태의 데이터를 해석
app.use(express.json());
// application/json 형태의 데이터를 해석

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get('/', function (req, res) {
  res.render('index');
});

// get 요청은 url로 접속이 가능하다.
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터 전송 시에 form 태그를 이용할 경우, method룰 get으로 해놓으면 get 요청이 된다.
// 클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다.
// get은 url에 데이터가 노출된다!! 즉, 개인정보를 위한 전송은 get을 사용하지 않는다.
// localhost:8000/get?id=nyh&pw=1234
app.get('/get', function (req, res) {
  console.log(req.query); // {id: nyh, pw: 1234}
  console.log(req.query.id); // 'nyh'
  // req.query : get 요청에 대해 client 가 보낸 데이터를 담고 있다.
  // url에서 기본 주소(localhost:8000/get) 뒤에 오는 ?id=nyh&pw=1234 이런 주소를 의미한다.
  // 즉, ?id=nyh&pw=1234 를 쿼리라 한다.
  res.send('get 요청 성공!');
});

app.get('/get', function (req, res) {
  console.log(req.query);
  res.send('회원가입 성공!');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
