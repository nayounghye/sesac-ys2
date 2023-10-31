const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes');
app.use('/user', router);

app.get('*', (req, res) => {
  res.send('접근할 수 없는 주소입니다.');
});

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

app.listen(port, () => {
  console.log('Server Port : ', port);
});
