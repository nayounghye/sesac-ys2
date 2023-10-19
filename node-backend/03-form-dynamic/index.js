// -------- index.js 코드에 기본적으로 있어야하는 코드들 --------
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// req.body를 해석하기 위한 코드
// extended : true -> qs 모듈(외부 모듈)을 사용한다. / extended : false -> 내장 모듈인 queryString을 사용한다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

// ajax 파일을 받을 땐 render로 하면 안된다. 왜냐, render는 html 코드로 전달하기 때문!
app.get('/ajax', function (req, res) {
  console.log(req.query);
  // 예상되는 쿼리의 객체 : { key: value, key: value}
  res.send(req.query);
});

app.post('/ajax', function (req, res) {
  console.log(req.body);
  // 예상되는 쿼리의 객체 : { key: value, key: value}
  res.send(req.body);
});

app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', function (req, res) {
  console.log(req.body);
  const data = {
    ...req.body,
    msg: '반가워요',
  };
  res.send(data);
});

app.get('/fetch', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});

// 실습 2번 참고
app.post('url', function (req, res) {
  const id = 'yhna_dev';
  const pw = '1234';
  //req.body 와 id, pw를 비교하는 코드 작성하면 됨!
  // 일치 하지 않으면, 일치하지 않는다는 결과 나오게!
  // 일치하면 로그인 성공 메시지 뜨게!
});
