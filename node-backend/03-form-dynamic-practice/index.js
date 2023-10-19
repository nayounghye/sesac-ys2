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

app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', function (req, res) {
  const id = 'jordy';
  const pw = '1234';

  console.log(req.body);
  if (req.body.id == id && req.body.pw == pw) {
    res.send({ success: true, message: '로그인 성공!' });
  } else {
    res.send({
      success: false,
      message:
        '아이디 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요.',
    });
  }
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
