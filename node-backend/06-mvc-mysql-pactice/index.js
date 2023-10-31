const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함. - 요견 css
app.use(express.static('static'));
// 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함. - 요건 이미지
app.use('/static', express.static('static'));

//라우터를 미들웨어로 걸어준다.
const router = require('./routes');
//localhost:8000/user/~~~ 는 아래 코드에서 검사한다.
app.use('/', router);

app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
