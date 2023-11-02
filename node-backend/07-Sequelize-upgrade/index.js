//서버 실행시키는 코드들

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// 정적파일 css 불러오는 코드
// app.use('/static', express.static(__dirname + '/static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes');
app.use('/', router);

app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
