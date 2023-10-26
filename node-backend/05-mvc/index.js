const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MVC를 사용하기 전 입력하던 것!
// app.get("/", function(req, res){
//    res.render("index");
// })

// app.get("/", // 이 부분은 routes로 분리

// function(req, res){
//    res.render("index");
// }) // 이부분은 controller로 분리

// routes 폴더에 있는 index.js 파일을 불러와야한다.
const router = require('./routes/index');
// routes 폴더에 있는 index.js 파일을 불러오는 경우엔 폴더 경로만 써도 자동으로 index.js파일을 불러온다. index.js만 아래처럼 축약가능 다른 파일은 모든 경로를 적어줘야함.
// const router = require("./routes");
app.use('/comment', router);
//localhost:8000/comment~~~~~ 여깃 ~~~~~부분이 다 router에 들어간다.

// 존재하지 않는 get요청에 대해서 클라이언트(사용자)가 알 수 있는 멘트를 출력 원래는 'cannot get /~~' 이렇게 나옴.
// * : 어떤 router도 상관없다 라는 의미이다.
// 아래 404 error처리는 가장 마지막에 적는다. 왜냐, 위에서 다 처리되고 그럼에도 안되면 아래 에러메시지를 송출해야 하므로!
app.get('*', function (req, res) {
  res.send('페이지를 찾을 수 없습니다.');
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
