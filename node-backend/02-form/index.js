// -------- index.js 코드에 기본적으로 있어야하는 코드들 --------

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});

// -------- index.js 코드에 기본적으로 있어야하는 코드들 끝 --------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
