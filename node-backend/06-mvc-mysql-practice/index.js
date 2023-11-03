const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함.  css
app.use(express.static('static'));
// // 아래코드 : static 디렉토리를 정적 디렉토리로 설정하여, 접근 가능하게 함. - 요건 이미지
app.use('/static', express.static('static'));
// 릴리리더님은 아래처럼 작성하심
// app.use('/static', express.static(_dirname + '/static'));

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

// 릴리 리더님 코드

// index(내꺼는 로그인 메인 화면) 페이지 렌더 (get으로 해야함!)
router.get('/', (req, res) => {
  res.render('index');
});
// 회원가입 페이지 렌더
router.get('/signup', (req, res) => {
  res.render('signup');
});
// 회원가입 -> user table에 insert를 실행시키는 api (회원가입 버튼을 눌렀을 때 보낼 api 필요)
router.post('/signup', (req, res) => {
  res.send();
});

// 로그인 페이지 렌더
router.get('/signin', (req, res) => {
  res.render('signin');
});
// 로그인 -> user table에서 회원 존재 여부를 판단하는 api (로그인 버튼을 눌렀을 때 보낼 api 필요)

// 회원정보 페이지 렌더
