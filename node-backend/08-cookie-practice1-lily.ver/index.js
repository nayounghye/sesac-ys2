// 플로우
// 1. index.ejs에 광고 팝업 띄우기(부트스트립 modal사용해도 됨)
// 1-1. '오늘은 그만보기'를 체크하고, 팝업을 닫으면 서버에 요청을 보내기
// 1-2. 어떤 요청? 서버에서 쿠키를 생성하는 요청!

// 2.  index.ejs를 수정
// 2-1. 쿠키가 있다면 광고 팝업을 띄우지 않도록 변경

const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser');

app.use(cookieParser()); // 쿠키를 해석/사용할 수 있게 해준다.
app.set('view engine', 'ejs');
// 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함. - 요견 css
app.use(express.static('static'));
// 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함. - 요건 이미지
app.use('/static', express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes');
app.use('/', router);

const cookieConfig = {
  //   maxAge: 24 * 60 * 60 * 1000,
  maxAge: 1000,
};

router.get('/', (req, res) => {
  const noPopup = req.cookies.popup;
  res.render('index', { noPopup: noPopup });
});

router.get('/set', (req, res) => {
  res.cookie('popup', 'value1', cookieConfig);
  res.send('set cookie');
});

router.get('/get', (req, res) => {
  res.send(req.cookies);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
