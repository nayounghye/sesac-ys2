const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ↓↓ ./routes'라는 경로에서 모듈을 가져와 router라는 상수에 할당하는 코드다.
const router = require('./routes'); // index는 생략가능!
app.use('/', router); // localhost:PORT/ 경로를 기본으로, ./routes/index.js 파일에 선언한대로 동작한다.
// app.use() : express.js에서 미들웨어를 등록하는 메서드
// 사용자의 요청이 들어오면 router에서 정의된 라우팅 규칙에 따라 적절한 컨트롤러로 연결된다.
// 코드는 모든 요청('/' 경로로 들어오는 요청 포함)이 router 모듈에 의해 처리되도록 설정한다.
// 즉, 서버 어플리케이션에서 사용자의 요청을 받아들이고,
// 그 요청을 './routes' 모듈에서 정의된 라우팅 로직을 사용하여 적절한 컨트롤러로 전달하는 역할을 한다.

// 404 에러 처리
app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
